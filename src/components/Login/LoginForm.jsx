import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { LoginUser } from '../../api/User'
import { StorageSave } from '../../utils/Storage'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import { STORAGE_KEY_USER } from '../../const/StorageKeys'

const usernameConfig = {
    required: true,
    minLength: 3,
    maxLength: 30,
}

const LoginForm = () => {
    // Hooks
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { user, setUser } = useUser()
    const navigate = useNavigate()

    // Local State
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null)

    // Side Effects
    useEffect(() => {
        if (user !== null) {
            navigate('profile')
        }
    }, [user, navigate])

    const onSubmit = async ({ username }) => {
        setLoading(true)
        const [error, userResponse] = await LoginUser(username)
        if (error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            StorageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse)
        }
        setLoading(false)
    }


    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }

        if (errors.username.type === "required") {
            return <span>Username is required</span>
        }

        if (errors.username.type === "minLength") {
            return <span>Username is too short (min. 3)</span>
        }

        if (errors.username.type === "maxLength") {
            return <span>Username is too long (max. 30)</span>
        }
    })()

    return (
        <>
            <h2>Login Form</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        {...register("username", usernameConfig)} />
                    {errorMessage}

                </fieldset>

                <button type="submit" disabled={loading}>Continue</button>

                {loading && <p>Logging in...</p>}
                {apiError && <p>{apiError}</p>}
            </form>
        </>
    )
}

export default LoginForm;
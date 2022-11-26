import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { LoginUser } from '../../api/User'
import { StorageSave } from '../../utils/Storage'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import { STORAGE_KEY_USER } from '../../const/StorageKeys'
import { BsFillArrowRightCircleFill } from "react-icons/bs"

const usernameConfig = {
    required: true,
    minLength: 3,
    maxLength: 20,
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
            return <span>Username is too long (max. 20)</span>
        }
    })()


    return (
        <>
            <h3>Please enter a username to continue:</h3>

            <div >
                <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
                    <div className='loginFormSection'>
                        <input className='loginFormInput'
                            type="text"
                            placeholder="John Doe"
                            {...register("username", usernameConfig)} />

                        <button type="submit" disabled={loading}><BsFillArrowRightCircleFill /></button>
                    </div>

                    <br />
                    {errorMessage}

                    {loading && <p>Logging in...</p>}
                    {apiError && <p>{apiError}</p>}
                </form>
            </div>
            <div>
            </div>
        </>
    )
}

export default LoginForm;
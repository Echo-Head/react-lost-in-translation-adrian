import { CreateHeaders } from './Index'

const apiUrl = process.env.REACT_APP_API_URL

const CheckForUser = async (username) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`)
        if (!response.ok) {
            throw new Error('Could not complete request.')
        }
        const data = await response.json()
        return [null, data]
    }
    catch (error) {
        return [error.message, []]
    }
}

const CreateUser = async (username) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: CreateHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not create user with username ' + username)
        }
        const data = await response.json()
        return [null, data]
    }
    catch (error) {
        return [error.message, []]
    }
}

export const LoginUser = async (username) => {
    const [checkError, user] = await CheckForUser(username)

    if (checkError !== null) {
        return [checkError, null]
    }

    if (user.length > 0) {
        return [null, user.pop()]
    }

    return await CreateUser(username)
}
import { CreateHeaders } from "./Index"

const apiURL = process.env.REACT_APP_API_URL

export const TranslateSubmittedText = async (user, translation) => {
    try {
        const response = await fetch(`${apiURL}/${user.id}`, {
            method: 'PATCH',
            headers: CreateHeaders(),
            body: JSON.stringify({
                translations: [...user.translations, translation]
            })
        })

        if (!response.ok) {
            throw new Error('Could not update the translation')
        }

        const result = await response.json()
        return [null, result]

    } catch (error) {
        return [error.message, null]
    }
}


export const TranslationClearHistory = async (userId) => {
    try {
        const response = await fetch(`${apiURL}/${userId}`, {
            method: 'DELETE',
            headers: CreateHeaders(),
            body: JSON.stringify({
                translations: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not update translations')
        }
        const result = await response.json()
        return [null, result]

    } catch (error) {
        return [error.message, null]
    }
}
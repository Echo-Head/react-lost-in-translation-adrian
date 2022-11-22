import { CreateHeaders } from "./Index"

/* const apiUrl = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY
const userId = 1 // Update user with id 1

fetch(`${apiURL}/translations/${userId}`, {
    method: 'PATCH', // NB: Set method to PATCH
    headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        // Provide new translations to add to user with id 1
        translations: ['easy', 'i love javascript']
    })
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Could not update translations history')
        }
        return response.json()
    })
    .then(updatedUser => {
        // updatedUser is the user with the Patched data
    })
    .catch(error => {
    }) */

export const TranslationClearHistory = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/${userId}`, {
            method: 'PATCH',
            headers: CreateHeaders(),
            body: JSON.stringify({
                translations: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not update translations')
        }
        const result = await response.json
        return [null, result]
    } catch (error) {
        return [error.message, null]
    }
}
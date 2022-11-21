const apiKey = process.env.REACT_APP_API_KEY

export const CreateHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    }
}

export const HandleResponse = () => {

}
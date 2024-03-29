export const StorageSave = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const StorageRead = key => {
    const data = localStorage.getItem(key)
    if (data) {
        return JSON.parse(data)
    }

    return null
}

export const StorageDelete = key => {
    localStorage.removeItem(key)
}
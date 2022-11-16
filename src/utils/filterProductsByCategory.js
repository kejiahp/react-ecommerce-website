export const categoryFilter = (data,filters) => {
        /*
        using the filter func to check if there is a filter item(after Object.entries turns it into an array of key and value)
        is included or present in the fetched object
        */
        return data.data.filter(item => Object.entries(filters).every(([key,value])=> item[key].includes(value) ))
}
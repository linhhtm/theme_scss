export const featureDTO = data => {
    return {
        ID: {
            data: data.ID || '',
            hidden: true,
        },
    }
}
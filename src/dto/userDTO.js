export const userDTO = data => {
    return {
        ID: {
            data: data.ID,
            hidden: true,
        },
        deleted: {
            data: data.deleted,
            hidden: true,
        },
        email: {
            label: "email",
            data: data.email,
            email: data.email,
            rule: ['required', 'email'],
        },
        name: {
            label: "name",
            data: data.name,
            name: data.name,
            rule: ['required'],
        },
        phone: {
            label: "phone",
            data: data.phone || '',
            phone: data.phone || '',
        },
        scopes: {
            label: "scopes",
            data: data.scopes,
            scopes: data.scopes,
            rule: ['required'],
        },
        shops: {
            label: "shops",
            data: data.shops,
            shops: data.shops,
            rule: ['required'],
        },
    }
}
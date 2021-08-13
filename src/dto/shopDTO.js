export const shopDTO = data => {
    return {
        ID: {
            data: data.ID,
            hidden: true,
        },
        address1: {
            label: "address",
            sub: "1",
            data: data.address_1 || '',
            rule: ['required'],
            address1: data.address_1 || '',
        },
        address2: {
            label: "address",
            sub: "2",
            data: data.address_2 || '',
            address2: data.address_2 || '',
        },
        address3: {
            label: "address",
            sub: "3",
            data: data.address_3 || '',
            address3: data.address_3 || '',
        },
        cgvUrl: {
            label: "cgvUrl",
            data: data.cgv_url || '',
            cgvUrl: data.cgv_url || '',
        },
        city: {
            label: "city",
            data: data.city,
            city: data.city,
            rule: ['required'],
        },
        country: {
            label: "country",
            data: data.country,
            country: data.country,
            rule: ['required'],
        },
        currency: {
            label: "currency",
            data: data.currency,
            currency: data.currency,
            rule: ['required'],
        },
        deleted: {
            data: data.deleted,
            hidden: true,
        },
        description: {
            label: "description",
            data: data.description,
            description: data.description,
            rule: ['required'],
        },
        email: {
            label: "email",
            data: data.email,
            email: data.email,
            rule: ['required', 'email'],
        },
        latitude: {
            label: "latitude",
            data: data.latitude,
            latitude: data.latitude,
        },
        longitude: {
            label: "longitude",
            data: data.longitude,
            longitude: data.longitude,
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
        portalCode: {
            label: "portalCode",
            data: data.portal_code,
            portalCode: data.portal_code,
        },
        shortUrl: {
            label: "shortUrl",
            data: data.short_url,
            shortUrl: data.short_url,
        },
        timezone: {
            label: "timezone",
            data: data.timezone,
            timezone: data.timezone,
            rule: ['required'],
        },
        zipCode: {
            label: "zipCode",
            data: data.zip_code,
            zipCode: data.zip_code,
            rule: ['required'],
        },
    }
}
export const tenantDTO = data => {
    const { ID } = data;
    return {
        ID: ID,
        deleted: data.deleted,
        name: data.name,
        contact: data.contact,
        shortName: data.short_name,
        tenantId: ID,
        isAccount: true,
        children: [{
            ID: "setup_" + ID,
            name: "Setup",
            tenantId: ID,
            childrenTopic: ["features", "flows"],
            children: [{
                ID: "features_" + ID,
                tenantId: ID,
                name: "Features",
                endpoint: "features",
                children: []
            }, {
                ID: "flows_" + ID,
                tenantId: ID,
                name: "Flows",
                endpoint: "flows",
                children: [],
            }]
        }, {
            ID: "shops_" + ID,
            tenantId: ID,
            name: "Shops",
            endpoint: "shops",
            children: []
        }, {
            ID: "users_" + ID,
            tenantId: ID,
            name: "Users",
            endpoint: "users",
            children: [],
        }]
    }
}

export const tenantDTOList = (arr = []) => {
    return {
        items: Array.isArray(arr) ? arr.map(el => tenantDTO(el)) : [],
    }
}
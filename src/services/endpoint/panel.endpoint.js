const PANEL_ENDPOINT = {
    GET_TENANTS: "tenants",
    GET_TENANT_FEATURE: "tenants/:tenant_id/features",
    GET_TENANT_FEATURE_DETAIL: "tenants/:tenant_id/features/:feature_id",
    GET_TENANT_SHOP: ":tenant_id/shops",
    GET_TENANT_SHOP_DETAIL: ":tenant_id/shops/:shop_id",
    GET_TENANT_USER: ":tenant_id/users",
    GET_TENANT_USER_DETAIL: ":tenant_id/users/:user_id"
}

export default PANEL_ENDPOINT;
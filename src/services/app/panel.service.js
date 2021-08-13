import PANEL_ENDPOINT from '../endpoint/panel.endpoint';
import Utils from '../../utils/utils';
import { featureDTO } from '../../dto/featureDTO';
import { shopDTO } from '../../dto/shopDTO';
import { tenantDTOList } from '../../dto/tenantDTO';
import { types } from '../../store/loader';
import { userDTO } from '../../dto/userDTO';

export const getTenantList = async () => {
    const res = await Utils.wrapperRequestGet(types('tenant'), PANEL_ENDPOINT.GET_TENANTS);
    return tenantDTOList(res)?.items;
}

export const getTenantFeature = async (tenantId) => {
    const res = await Utils.wrapperRequestGet(types('tenantFeature'), PANEL_ENDPOINT.GET_TENANT_FEATURE, {
        tenant_id: tenantId
    });
    return res;
}

export const getTenantFeatureDetail = async (item) => {
    const res = await Utils.wrapperRequestGet(types('tenantFeatureDetail'), PANEL_ENDPOINT.GET_TENANT_FEATURE_DETAIL, {
        tenant_id: item.tenant.ID,
        feature_id: item.ID,
    });
    return featureDTO(res);
}

export const getTenantShop = async (tenantId) => {
    const res = await Utils.wrapperRequestGet(types('tenantShop'), PANEL_ENDPOINT.GET_TENANT_SHOP, {
        tenant_id: tenantId
    });
    return res;
}

export const getTenantShopDetail = async (item) => {
    const res = await Utils.wrapperRequestGet(types('tenantShopDetail'), PANEL_ENDPOINT.GET_TENANT_SHOP_DETAIL, {
        tenant_id: item.tenant.ID,
        shop_id: item.ID,
    });
    return shopDTO(res);
}

export const getTenantUser = async (tenantId) => {
    const res = await Utils.wrapperRequestGet(types('tenantUser'), PANEL_ENDPOINT.GET_TENANT_USER, {
        tenant_id: tenantId
    });
    return res;
}

export const getTenantUserDetail = async (item) => {
    const res = await Utils.wrapperRequestGet(types('tenantUserDetail'), PANEL_ENDPOINT.GET_TENANT_USER_DETAIL, {
        tenant_id: item.tenant.ID,
        user_id: item.ID,
    });
    return userDTO(res);
}
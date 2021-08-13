import {
    getTenantFeature,
    getTenantFeatureDetail,
    getTenantList,
    getTenantShop,
    getTenantShopDetail,
    getTenantUser,
    getTenantUserDetail
} from "../../services/app/panel.service";

const panelModule = {
    state: {
        list: [],
        item: {},
    },
    mutations: {
        setList: (state, list) => {
            state.list = list;
        },
        setDetail: (state, item) => {
            state.item = item;
        }
    },
    actions: {
        async getTenantList(context){
            let list = await getTenantList();
            context.commit("setList", list)
        },
        async getTenantDetail(context, item){
            let list = [];
            let selectedTenant = context.state.list.find(el => el.tenantId === item.tenantId);
            let children = selectedTenant?.children;

            let childrenData = children.find(el => {
                if(el.childrenTopic && el.childrenTopic.includes(item.endpoint)){
                    return el;
                }
                else return el.ID.indexOf(item.endpoint) > -1
                }
            );
            if(childrenData.childrenTopic){
                childrenData = childrenData.children.find(el => el.ID.indexOf(item.endpoint) > -1);
            }
            switch (item.endpoint){
                case 'shops': {
                    list = await getTenantShop(item.tenantId);
                    break;
                }
                case 'flows': {
                    // list = await getTenantFeature(item.tenantId);
                    break;
                }
                case 'users': {
                    list = await getTenantUser(item.tenantId);
                    break;
                }
                default: list = await getTenantFeature(item.tenantId)
            }
            
            list.forEach(el => {
                el.tenant = {
                    ID: selectedTenant.ID,
                    deleted: selectedTenant.deleted,
                    name: selectedTenant.name,
                    contact: selectedTenant.contact,
                    shortName: selectedTenant.shortName,
                };
                el.endpoint = item.endpoint + '_detail';
            });
            childrenData.children = list;
            
            context.commit("setList", context.state.list)
           
        },
        async getTopicDetail({ commit }, item){
            let endpointTopic = item.endpoint?.split('_')?.[0];
            switch (endpointTopic){
                case 'shops': {
                    item = await getTenantShopDetail(item);
                    break;
                }
                case 'flows': {
                    // item = await getTenantFeature(item);
                    break;
                }
                case 'users': {
                    item = await getTenantUserDetail(item);
                    break;
                }
                default: item = await getTenantFeatureDetail(item)
            }
            commit("setDetail", item)
        }
    }
}

export default panelModule;
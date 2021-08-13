<template>
    <v-row no-gutters class="panel__tree min-vh-full">

        <!-- PANEL LEFT -->
        <v-col cols="4" class="panel__left">
            <v-img class="white--text align-end bg-dark" height="70px">
                <v-card-title class="text-h6 justify-center">{{ $t('label.tenantList')}}</v-card-title>
            </v-img>
            <v-treeview
                item-key="ID"
                :active.sync="active"
                :items="list"
                :open.sync="open"
                activatable
                color="warning"
                open-on-click
                return-object
                transition
                :load-children="getList"
            >
                <div class="min-vh-full flex-center-full">
                    <v-progress-circular
                        :size="50"
                        color="primary"
                        class="my-3 w-100"
                        indeterminate
                        v-show="loadList"
                    ></v-progress-circular>
                </div>
                <template v-slot:label="{item}">
                    <div class="flex-center">
                        <v-icon v-if="item.isAccount" class="mr-1">
                            mdi-account
                        </v-icon>
                        <div>{{item.name}}</div>
                    </div>
                </template>
            </v-treeview>
        </v-col>
        
        <v-divider vertical/>

        <!-- PANEL RIGHT -->
        <v-col class="border-left panel__right">
            <v-scroll-y-transition mode="out-in">
                <div class="min-vh-full flex-center-full" v-if="loadDetail">
                    <v-progress-circular
                        :size="50"
                        color="primary"
                        class="my-3 w-100"
                        indeterminate
                    ></v-progress-circular>
                </div>
                <div
                    v-else-if="!selectedTopic"
                    class="min-vh-full flex-center-full 
                    text-h6 grey--text text--lighten-1 font-weight-light
                    "
                >
                    {{ $t("comments.selectItem")}}
                </div>
                <v-card
                    v-else
                    :key="selectedTopic.ID"
                    class="pt-6 mx-auto"
                    flat
                >
                    <v-card-text class="text-center">
                        <v-avatar size="88">
                            <v-img
                                :src="require('@/assets/image/tenant.jpg')"
                                class="mb-6"
                            ></v-img>
                        </v-avatar>
                        <h3 class="text-h5 mb-2">
                            {{ selectedTopic.tenant.name }}
                        </h3>
                        <div class="blue--text mb-2">
                            {{ selectedTopic.tenant.contact }}
                        </div>
                        <div class="blue--text subheading font-weight-bold">
                            {{ selectedTopic.tenant.shortName }}
                        </div>
                    </v-card-text>

                    <v-divider></v-divider>
                    <div>
                        <v-form 
                            ref="form"
                            v-model="valid"
                        >
                        <v-container>
                            <v-row v-for="(value, key) in selectedItemRender" :key="key" :class="{ 'flex-end' : !isEdit }">
                                <v-col
                                    class="text-right"
                                    tag="strong"
                                    cols="4"
                                >
                                    <v-subheader class="justify-end">
                                    {{ $t(`label.${value.label}`)}}
                                    {{ value.sub }}
                                    :
                                    </v-subheader>
                                </v-col>
                                <v-col class="flex-center" v-if="!isEdit">{{ value[key] }}</v-col>
                                <v-col v-else>
                                    <v-text-field class="pt-0" v-model="value[key]" :rules="rules[key]"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                        </v-form>
                    </div>

                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            v-if="isEdit"
                            color="success"
                            depressed
                            :disabled="!valid"
                            @click="onSubmit"
                        >
                            {{ $t("label.save") }}
                            <v-icon right>
                            mdi-content-save
                            </v-icon>
                        </v-btn>
                        <v-btn v-else color="primary" depressed @click="isEdit = true">
                            {{ $t("label.edit") }}
                            <v-icon right>
                            mdi-pencil
                            </v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
          </v-scroll-y-transition>
        </v-col>
    </v-row>
</template>

<script>
import {
    mapState
} from 'vuex';
import formMixin from '@/mixin/formMixin.js';

export default {
    name: 'PanelTree',
    data(){
        return {
            active: [],
            open: [],
            loadList: true,
            loadDetail: false,
            isEdit: false,
            rules: []
        }
    },
    mounted() {
        this.getList();
    },
    mixins: [formMixin],
    computed: mapState({
        list: (state) => state.panel.list,
        selectedTopic() {
            let selectedItem = this.active[0];
            if(selectedItem?.endpoint?.indexOf("detail") > -1){
                this.getDetail(selectedItem);
            }
            return selectedItem;
        },
        selectedItem: state => state.panel.item,
        selectedItemRender(state){
            let obj = {
                ...state.panel.item,
            };
            Object.keys(obj).forEach(key => {
                if(obj[key]?.hidden) delete obj[key];
            });
            this.isEdit = false; //reset edit state
            return obj
        },
    }),
    watch: {
        isEdit: function (value) {
            if(value && !this.rules.length){
                let rules = [];
                Object.keys(this.selectedItemRender).forEach(key => {
                    rules[key] = this.getRules(this.selectedItemRender[key].rule)
                })
                this.rules = rules;
            }
        },
    },
    methods: {
        async getList(item = {}) {
            const id = item.ID;
            if(id) {
                await this.$store.dispatch("getTenantDetail", item);
            } else {
                await this.$store.dispatch("getTenantList");
                this.loadList = false;
            }
        },
        async getDetail(item = {}){
            this.loadDetail = true;
            await this.$store.dispatch("getTopicDetail", item);
            this.loadDetail = false;
        },
        onSubmit(){
            this.validate();
            if(this.valid){
                this.isEdit = false;
            }
        }
    }
}
</script>
<style lang="scss">
@import '@/styles/theme/variable.scss';
.panel__tree{
    height: 100%;
}
.panel__left{
    position: fixed;
    top: #{$header-height};
    bottom: #{$footer-height};
    left: calc((100% - #{$screen-max-width}) / 2);
    overflow-y: auto;
    width: calc(#{$screen-max-width * 0.3333}) !important; //col4
    overflow-x: hidden;
    @media screen and (max-width: $screen-max-width) {
        left: 0;
    }
}
.panel__right{
    margin-left: 33.33%;
}
</style>
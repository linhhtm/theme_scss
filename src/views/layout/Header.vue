<template>
<v-app-bar app :class="$store.getters.skin" class="header">
    <v-btn color="primary">Dsa</v-btn>
    <div class="header__wrap flex-center">
        <div class="header__item">
            <strong>{{ username }}</strong>
        </div>
        <div class="header__item-center">
            <strong>{{ $t("label.admin") }}</strong>
        </div>
        <div class="flex-center header__item-select">
            <v-select v-model="locale" :items="languages" item-value="language" item-text="flag" return-object>
                <template slot="selection" slot-scope="{ item, index }">
                    <button :key="index">
                        <flag :iso="item.flag" v-bind:squared="false" />
                        {{ item.title }}
                    </button>
                </template>
                <template slot="item" slot-scope="{ item, index }">
                    <button :key="index">
                        <flag :iso="item.flag" v-bind:squared="false" />
                        {{ item.title }}
                    </button>
                </template>
            </v-select>
        </div>
        <div class="header__item flex-0">
            <v-menu
                bottom
                offset-y
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        v-bind="attrs"
                        v-on="on"
                        depressed
                        tile
                        min-width="unset"
                        height="64px"
                    >
                        <icon :pointer="true" v-on="on"  v-bind="attrs">mdi-cog</icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                        v-for="(item, i) in themeColors"
                        :key="i"
                        @click="() => {}"
                    >
                        <v-list-item-title class="flex-center">
                             <div :class="item.color || item.title" class="text-center">
                                <span class="hidden">ipsip</span>
                            </div>
                            &nbsp;
                            {{ $t('label.'+item.title) }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </div>
</v-app-bar>
</template>

<script>
import { mapState } from 'vuex';
import themeColors from '../../constants/themes';
import Icon from '../../components/common/Icon.vue';
export default {
    components: {
        Icon
    },
    name: "Header",
    data: () => ({
        iconDropdown: "mdi-menu-down",
        themeColors: themeColors,
        languages: [{
                flag: "us",
                language: "en",
                title: "English"
            },
            {
                flag: "es",
                language: "es",
                title: "Castilla"
            },
            {
                flag: "fr",
                language: "fr",
                title: "France"
            },
        ],
        locale: {}
    }),
    mounted(){
        this.locale = this.languages[0];
    },
    watch: {
        locale() {
            this.$i18n.locale = this.locale?.language;
        },
    },
    computed: mapState({
        username: (state) => state.auth?.user?.user
    })
};
</script>
<style lang="scss">
@import '@/styles/theme/variable.scss';

.header{
    height: $header-height;
    .v-toolbar__content{
        padding-right: 0;
    }
    .header__wrap{
        justify-content: space-between;
        width: 100%;
    }
    .header__item, .header__item-center{
        margin-top: 14px;
        margin-bottom: 14px;
    }
    .header__item:not(.header__item-center){
        flex: 1;
    }
    .header__item-center{
        flex: 2;
        text-align: center;
    }
    .header__item-select{
        margin-top: 14px;
        width: 220px;
        flex: 1;
        .header__item{
            margin-left: 10px;
            margin-top: 0;
        }
    }
}
</style>

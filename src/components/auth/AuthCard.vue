<template>
<v-form
    v-model="valid"
    ref="form"
>
    <v-card min-width="500">
        <v-card-title class="text-h6">
            <span>{{ currentTitle }}</span>
        </v-card-title>
        <v-card-text>
            <v-text-field @keyup.enter="onSubmit" :rules="formRules.required" v-model="tenantName" :label="$t('label.tenantName')"></v-text-field>
            <v-text-field @keyup.enter="onSubmit" :rules="formRules.required" v-model="username" :label="$t('label.username')"></v-text-field>
            <v-text-field
                @keyup.enter="onSubmit"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="formRules.required"
                :type="showPass ? 'text' : 'password'"
                :label="$t('label.password')"
                @click:append="showPass = !showPass"
                v-model="password"
            ></v-text-field>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="onSubmit" :loading="loading">
                {{ $t("label.login") }}
            </v-btn>
        </v-card-actions>
    </v-card>
</v-form>
</template>

<script>
import { mapState } from 'vuex';
import { typesPending } from '../../services/auth/auth.service';
import formMixin from '../../mixin/formMixin';
export default {
    name: "AuthCard",
    data() {
        return {
            currentTitle: this.$t("label.login"),
            tenantName: "",
            username: "",
            password: "",
            showPass: false,
        }
    },
    computed: mapState('loader', {
        loading: typesPending,
    }),
    mixins: [formMixin],
    methods: {
        async onSubmit(){
            this.validate();
            if(this.valid){
                await this.$store.dispatch("login", {
                    tenantName: this.tenantName,
                    username: this.username,
                    password: this.password,
                }).then((data) => {
                    if(data){
                        this.$router.push('/')
                    }
                })
            }
        }
    }
}
</script>

<template>
    <div>
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
               
                <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-8">
                    <div class="text-center ">
                    <h1 class="text-5xl font-bold">Login</h1>
                   
                </div>
                    <form class="card-body" @submit.prevent="">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Username</span>
                            </label>
                            <input type="email" placeholder="username" class="input input-bordered" v-model="userCreds.email" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" class="input input-bordered" v-model="userCreds.password" required />
                    
                        </div>
                        <div class="form-control mt-6" >
                            <button class="btn btn-primary" @click="onLoginClick()"  >Login</button>
                        </div>
                        <div class=" text-red-400 text-center " v-show="incorrectLogin">Login incorrect</div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoginService from "../services/LoginService"
import LoginRepository from "../repo/LoginRepository";
import router from "../router/router";


const userCreds = ref({
    email: "",
    password: ""
})
let incorrectLogin = ref(false)

async function onLoginClick() {
    //take creds 
    const service = new LoginService(new LoginRepository())

    try {
        const response = await service.login(userCreds.value.email, userCreds.value.password)
        console.log(response.user)
        if(response != undefined) {
            incorrectLogin.value = false
        }
        router.push("/Requests")
    }
    catch {
        incorrectLogin.value  = true 
    }
}
</script>

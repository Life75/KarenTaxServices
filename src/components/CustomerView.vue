<template>
    <div>
        <div class="flex flex-col h-screen justify-between ">
            <Main class="  gap-y-7 "></Main>
            <!--<Footer class=" mt-auto"/>-->
            <span id="contact-us" class="  ">
                <div class="hero h-full   bg-base-200">
                    <div class="hero-content flex-col-reverse md:flex-row md:mx-40   lg:flex-row-reverse">
                        <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form class="card-body " @submit.prevent="">
                                <div class="form-control">
                                    <label class="input input-bordered flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                            class="w-4 h-4 opacity-70">
                                            <path
                                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                            <path
                                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                        </svg>
                                        <input type="text" class="grow" placeholder="Email" v-model="request.Email" />
                                    </label>
                                </div>
                                <div class="form-control">
                                    <label class="input input-bordered flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-person w-4 h-4 opacity-70"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                        </svg>
                                        <input type="text" class="grow" v-model="request.Name" placeholder="Name" />
                                    </label>
                                </div>
                                <div class="form-control">
                                    <label class="input input-bordered flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                            <path
                                                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                        </svg>
                                        <input type="text" class="grow" v-model="request.PhoneNumber"
                                            placeholder="Phone Number" />
                                    </label>
                                </div>
                                <div class=" form-control  mt-6">
                                    <button id="onSubmit" class="btn bg-lime-400"
                                        @click="createRequest()">Send</button>
                                </div>
                            </form>
                        </div>
                        <div class="text-center lg:text-left ">
                            <h1 class="text-5xl font-bold ">Get in touch with us!</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                                excepturi
                                exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import Main from "../components/Main.vue"
import { ref, Ref } from 'vue';
import Request from "../classes/Request"
import RequestService from "../services/RequestService"
import RequestRepo from "../repo/RequestRepository"
//import Footer from './components/Footer.vue';
//solution for adding in footers https://stackoverflow.com/questions/59812003/tailwindcss-fixed-sticky-footer-on-the-bottom

const request: Ref<Request> = ref(new Request())

function createRequest() {
    const service = new RequestService(new RequestRepo())
    service.createRequest(request.value)
}

//createRequest()
//const analytics = getAnalytics(app);


</script>
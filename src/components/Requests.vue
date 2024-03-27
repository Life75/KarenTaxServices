<template>
    <div class="flex flex-col gap-10 justify-center ">
        <h1 class="text-center align-middle font-semibold text-3xl py-5 bg-lime-500 shadow-md text-white">Requests</h1>
        <div class="flex flex-col  justify-center" v-if="!loading" v-for="request in requests">
            <RequestItem class="bg-gradient-to-br from-neutral-50 via-lime-100 to-lime-400 shadow-xl" :request="request"/>
        </div>

    </div>
</template>


<script setup lang="ts">
//this will take in all the requests and show them here 
import RequestService from "../services/RequestService"
import RequestRepository from "../repo/RequestRepository"
import RequestItem from "../components/RequestItem.vue"
import { onMounted, ref } from "vue";
const requests = ref()
let loading = ref(false)
async function getRequests() {
    const service = new RequestService(new RequestRepository())
    const response = await service.getAllRequests()
    return response

}

onMounted(() => {
    loading.value = true
    getRequests().then((data) => {

        requests.value = data
        loading.value = false
    })

})

</script>
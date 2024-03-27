<template>
    <div class="flex flex-col justify-center">
        <h1 class="text-center font-bold text-3xl pb-10">Requests</h1>
        <div v-if="!loading" v-for="request in requests">
            <div class="text-center"> <p>{{ request.DateRecieved }}</p></div>
        </div>

    </div>
</template>


<script setup lang="ts">
//this will take in all the requests and show them here 
import RequestService from "../services/RequestService"
import RequestRepository from "../repo/RequestRepository"
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
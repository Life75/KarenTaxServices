<template>
    <div id="request-item" class="bg-gray-300 rounded-lg   mx-10">
        <div class="flex flex-col  align-middle gap-2 m-5 ">
            <div class="flex align-middle">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    class="bi bi-person-circle mr-auto" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg "
                    viewBox="0 0 16 16" @click="onDeleteClick()">
                    <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
            </div>
            <div class="flex flex-col gap-3">
                <span class="flex align-middle">
                    <p class=" font-semibold pr-1">Name: </p>
                    <div> {{ request.Name }}</div>
                </span>
                <span class="flex align-middle">
                    <p class=" font-semibold pr-1">Email: </p>
                    <div> {{ request.Email }}</div>
                </span>
                <span class="flex align-middle">
                    <p class=" font-semibold pr-1">Phone Number: </p>
                    <div> {{ request.PhoneNumber }}</div>
                </span>
                <span class="flex align-middle">
                    <p class=" font-semibold pr-1">Date Recieved: </p>
                    <p> {{ request.DateRecieved }}</p>
                </span>
            </div>

        </div>
    </div>
</template>


<script setup lang="ts">
/*
                <span>
                    <p>Email: </p>
                    <div> {{ request.Email }}</div>
                </span>
                <span>
                    <p>Phone Number: </p>
                    <div> {{ request.PhoneNumber }}</div>
                </span>
                <span>
                    <p>Date Recieved </p>
                    <p> {{ request.DateRecieved }}</p>
                </span>

*/

function onDeleteClick() {
    
}
defineProps<{
    request: any
}>()
</script>
<template>
    <div id="request-item" class="bg-gray-300 rounded-lg py-5 mx-5" >
        <div class="flex align-middle gap-2 m-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>
            <div class="flex flex-col">
                <span class="flex align-middle">
                    <p>Name: </p>
                    <div> {{ request.Name }}</div>
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


defineProps<{
    request: any
}>()
</script>
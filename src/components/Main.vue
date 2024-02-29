<template>
    <div id="main" class="">
        <Navbar class="bg-[#E0f0e3] bg-transparent   mb-4 md:px-48 px-1" />
        <span class="flex flex-col justify-center md:flex-row ">
            <div class="hero  bg-white w-1/2">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                        class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </span>
    </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue';

</script>

<style></style>
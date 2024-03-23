<template>
    <!-- component -->
    <div
        class="relative max-w-sm mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
        <div class="px-6">
            <div class="flex flex-wrap justify-center">
                <div class="w-full flex justify-center">
                    <div class="relative">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                            class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-15 lg:-ml-16 max-w-[150px]" />
                    </div>
                </div>
                <div class="w-full text-center mt-20 ml-5">
                    <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                        <div class="p-1  flex justify-center gap-1">
                            <div v-for="n in amountOfStars" class="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold"
                                    :class="`bi bi-star-fill ${n}`" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-2 ml-5">
                <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">{{ name }}</h3>
                <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                    <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Pensacola, Florida
                </div>
            </div>
            <div class="mt-6 py-6 border-t border-slate-200 text-center">
                <div class="flex flex-wrap justify-center">
                    <div class="w-full px-4">
                        <p class="font-light leading-relaxed text-slate-600 mb-4">{{
                                body }}</p>

                    </div>
                </div>
            </div>
        </div>
    </div>



</template>

<script setup lang="ts">

defineProps({
    name: String,
    body: String,
    amountOfStars: Number
})


</script>

<style></style>
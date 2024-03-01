<template>
    <div id="main" class=" flex flex-col justify-center ">
        <Navbar class=" bg-white    rounded-full shadow-2xl px-0 md:px-20   mb-4   mt-5" />
        <span class="">
            <div class="hero bg-base-200 p-2 py-10">
                <div class=" hero-content  flex-col md:flex-row    lg:flex-row-reverse">
                    <img src="https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg"
                        class="md:max-w-sm  max-w-xs rounded-lg shadow-2xl" />
                    <div class=" ml-auto">
                        <h1 class="text-5xl font-bold">Taxes made simple!</h1>
                        <p class="py-6">
                            Whether you're a seasoned investor, a small business owner, or simply an individual looking for
                            personalized tax solutions, we've got you covered. Our commitment to accuracy, efficiency, and
                            personalized service ensures that every client receives the attention and expertise they
                            deserve.</p>
                        <button class="btn btn-success rounded-full">Get Started</button>
                    </div>
                </div>
            </div>
        </span>

        <span id="testimonials"
            class="flex flex-col md:flex-row  pt-20 justify-center space-y-10 md:space-y-0 md:gap-x-10 gap-x-0  ">
            <div id="individual">
                <div class="card w-96 bg-base-100 shadow-xl rounded-2xl  ">
                    <div class="card-body">
                        <h2 class="text-center font-semibold text-2xl">Individual Taxes</h2>
                        <img src="https://images.pexels.com/photos/3954635/pexels-photo-3954635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            class="max-w-sm rounded-lg shadow-xl " />
                        <div class="card-actions justify-end mt-3">
                            <p>We work with individuals and families to minimize your tax liability and provide the peace of
                                mind that your taxes are done right and on time.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="small businesses">
                <div class="card w-96 bg-base-100 shadow-xl rounded-2xl">
                    <div class="card-body">
                        <h2 class="text-center font-semibold text-2xl">Small Business Taxes</h2>
                        <img src="https://images.pexels.com/photos/3345876/pexels-photo-3345876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            class="max-w-sm min rounded-lg shadow-xl" />
                        <div class="card-actions justify-end mt-3">
                            <p> Taxes can be a business's biggest expense. We can help you navigate the complex tax laws for
                                your business and minimize your liability.</p>
                        </div>
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
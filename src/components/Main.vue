<template>
    <div id="main" class=" flex flex-col justify-center mx-0 md:mx-10">
        <Navbar class=" bg-white    rounded-full shadow-2xl px-0 md:px-20     mt-5" />
        <span class="">
            <div class="hero bg-base-200 p-2 py-7">
                <div class=" hero-content  flex-col md:flex-row    lg:flex-row-reverse">
                    <img src="https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg"
                        class="md:max-w-sm   max-w-xs rounded-lg shadow-2xl" />
                    <div class=" ml-auto">
                        <h1 class="text-5xl font-bold">Taxes made simple!</h1>
                        <p class="py-6">
                            Whether you're a seasoned investor, a small business owner, or simply an individual looking
                            for
                            personalized tax solutions, we've got you covered. Our commitment to accuracy, efficiency,
                            and
                            personalized service ensures that every client receives the attention and expertise they
                            deserve.</p>
                        <button class="btn  bg-lime-400 border border-gray-200 rounded-full  ">Get Started</button>
                    </div>
                </div>
            </div>
        </span>

        <span id="what-we-do"
            class="flex flex-col md:flex-row py-7 mx-5 align-middle items-center justify-center space-y-10 md:space-y-0 lg:gap-x-44 gap-x-5    ">
            <div id="individual">
                <div
                    class="card w-96  bg-base-100 shadow-xl rounded-2xl bg-gradient-to-br from-neutral-50 via-lime-100 to-lime-400   ">
                    <div class="card-body">
                        <h2 class="text-center font-semibold text-2xl">Individual Taxes</h2>
                        <img src="https://images.pexels.com/photos/3954635/pexels-photo-3954635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            class="max-w-sm rounded-lg shadow-xl " />
                        <div class="card-actions justify-end mt-3">
                            <p>We work with individuals and families to minimize your tax liability and provide the
                                peace of
                                mind that your taxes are done right and on time.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="small businesses">
                <div
                    class="card w-96 bg-base-100 shadow-xl rounded-2xl bg-gradient-to-br from-neutral-50 via-lime-100 to-lime-400  ">
                    <div class="card-body">
                        <h2 class="text-center font-semibold text-2xl">Small Business Taxes</h2>
                        <img src="https://images.pexels.com/photos/3345876/pexels-photo-3345876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            class="max-w-sm min rounded-lg shadow-xl" />
                        <div class="card-actions justify-end mt-3">
                            <p> Taxes can be a business's biggest expense. We can help you navigate the complex tax laws
                                for
                                your business and minimize your liability.</p>
                        </div>
                    </div>
                </div>
            </div>
        </span>

        <!--Testimonials here, might recplace these  -->
        <div id="testimonials" class="flex justify-center align-middle items-center py-7">
            <span class="space-y-1">
                <h1 class="text-4xl font-semibold text-center">Don't believe us?</h1>
                <p class="text-center text-gray-500">Here's some testimonials of our recent clients!</p>
                <div class="flex flex-col md:flex-row gap-x-0 md:gap-x-7 pt-12   ">
                    <ReviewCard :name="`LaToyna`"
                        :body="`If you're looking for the best preparer tax service in town why don't you give Mrs. Karen Washington a try she is the best I promise you that you won't be disappointed. Please give her a try! I did!`"
                        :amount-of-stars="5" class="my-10 py-10"></ReviewCard>
                    <ReviewCard :name="`Austyn`"
                        :body="`I was able to get my taxes done super fast. I'm greatly satisfied trusting and leaving all my tax problems for her to solve without any hassle.`"
                        :amount-of-stars="5" class="my-10 py-10"></ReviewCard>
                    <ReviewCard :name="`Charlcey`"
                        :body="`As someone who values efficiency, professionalism, and accuracy in financial matters, I am delighted to say that your services exceeded my expectations on all fronts.`"
                        :amount-of-stars="5" class="my-10 py-10 "></ReviewCard>

                </div>
            </span>
        </div>


        <div class="stats stats-vertical lg:stats-horizontal shadow justify-center align-middle items-center mb-12 mx-auto">
            <div class="stat">
                <div class="stat-title">Satisfaction Guarentee</div>
                <div class="stat-value flex">
                    100%</div>
            </div>
            <div class="stat">
                <div class="stat-title">Refund turnaround as fast as</div>
                <div class="stat-value">4 Days</div>
            </div>

            <div class="stat">
                <div class="stat-title">Refund up to </div>
                <div class="stat-value text-green-500">$7,000</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue';
import ReviewCard from './ReviewCard.vue';
</script>

<style></style>
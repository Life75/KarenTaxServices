<script setup lang="ts">
import Main from './components/Main.vue';
//import Footer from './components/Footer.vue';
//solution for adding in footers https://stackoverflow.com/questions/59812003/tailwindcss-fixed-sticky-footer-on-the-bottom
</script>

<template>
  <div class="flex flex-col h-screen justify-between ">
    <Main class="  gap-y-7 "></Main>
    <!--<Footer class=" mt-auto"/>-->
    <span id="contact-us" class="  ">
      <div class="hero h-full   bg-base-200">
        <div class="hero-content flex-col-reverse md:flex-row md:mx-40   lg:flex-row-reverse">
          <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form class="card-body ">
              <div class="form-control">
                <label class="input input-bordered flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                    class="w-4 h-4 opacity-70">
                    <path
                      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path
                      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="text" class="grow" placeholder="Email" />
                </label>
              </div>
              <div class="form-control">
                <label class="input input-bordered flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-person w-4 h-4 opacity-70" viewBox="0 0 16 16">
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                  <input type="text" class="grow" placeholder="Name" />
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn bg-lime-400">Send</button>
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
</template>

<style></style>

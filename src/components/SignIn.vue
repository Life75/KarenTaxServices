<template>
    <div>
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
               
                <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-8">
                    <div class="text-center ">
                    <h1 class="text-5xl font-bold">Login</h1>
                   
                </div>
                    <form class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Username</span>
                            </label>
                            <input type="email" placeholder="username" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" class="input input-bordered" required />
                    
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<template>
  <div class="container flex justify-center md:container">
    <div
      class="flex flex-col w-full max-w-screen-md gap-6 p-4 border-slate-200"
    >
      <div class="text-xl font-bold text-center">New post</div>

      <div class="flex justify-end gap-4">
        <BaseButton submit>Create post</BaseButton>
      </div>
      <form class="flex flex-col gap-4" @submit.prevent="">
        <label class="block">
          <span class="block mb-2 text-sm font-medium text-slate-600"
            >Title</span
          >

          <input
            type="text"
            placeholder="Enter your title"
            class="block w-full px-3 py-2 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>

        <div>
          <TiptapEditor />
        </div>
      </form>
    </div>
  </div>
</template>

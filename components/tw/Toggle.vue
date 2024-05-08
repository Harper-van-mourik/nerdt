<template>
  <div class="flex justify-center items-center h-full w-full">
    <div>
      <label
        for="isActive"
        class="bg-white w-10 h-10 rounded-xl shadow-md hover:shadow-xl flex justify-center items-center select-none cursor-pointer has-[:checked]:bg-sky-500 has-[:checked]:shadow-xl border border-sky-500 hover:bg-sky-100 has-[:checked]:border-sky-500 text-sky-600 transition-all relative overflow-hidden"
      >
        <input
          type="checkbox"
          id="isActive"
          name="isActive"
          class="peer hidden"
        />
        <div
          class="absolute transition-all duration-700 peer-checked:-translate-y-full opacity-100 peer-checked:opacity-0 peer-checked:scale-0"
        >
          ☼
        </div>
        <div
          class="absolute transition-all duration-700 translate-y-full peer-checked:translate-y-0 block opacity-0 peer-checked:opacity-100 scale-0 peer-checked:scale-100"
        >
          ☾
        </div>
      </label>
    </div>
  </div>
</template>

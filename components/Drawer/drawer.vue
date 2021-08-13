<template>
  <div class="h-screen bg-white py-12">
    <div x-data="{ open: false }" class="max-w-xs mx-auto">
    <button @click="open = !open" class="flex items-center justify-between w-full px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none">
        <span class="flex items-center">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>

        <span class="mx-4 font-medium">Sub links</span>
        </span>

        <span>
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path x-show="! open" d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;"></path>
            <path x-show="open" d="M19 9L12 16L5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        </span>
    </button>

    <div x-show="open" x-transition:enter="transition ease-out duration-150 transform" x-transition:enter-start="opacity-0 -translate-y-5" x-transition:enter-end="opacity-100 translate-y-0" x-transition:leave="transition ease-in duration-150 transform" x-transition:leave-start="opacity-100 translate-y-0" x-transition:leave-end="opacity-0 -translate-y-5" class="bg-gray-100">
        <a class="block px-16 py-2 text-sm text-gray-600 hover:bg-green-500 hover:text-white" href="#">Manage Accounts</a>
        <a class="block px-16 py-2 text-sm text-gray-600 hover:bg-green-500 hover:text-white" href="#">Manage Tickets</a>
    </div>
    </div>
</div>
</template>

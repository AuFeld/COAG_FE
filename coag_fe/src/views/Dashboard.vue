<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    <SideNav />

    <div class="flex-1 overflow-auto focus:outline-none">
      <div
        class="
          relative
          z-10
          flex-shrink-0 flex
          h-16
          mt-12
          bg-white
          border-b border-gray-200
          lg:border-none
        "
      >
        <button
          class="
            px-4
            border-r border-gray-200
            text-gray-400
            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500
            lg:hidden
          "
        >
          <span class="sr-only">Open sidebar</span>
          <!-- Heroicon name: outline/menu-alt-1 -->
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <!-- Search bar -->
        <div
          class="
            flex-1
            px-4
            mx-8
            flex
            justify-between
            sm:px-6
            lg:max-w-6xl lg:mx-auto lg:px-8
          "
        >
          <Search />
          <div class="ml-4 flex items-center md:ml-6">
            <button
              class="
                bg-white
                p-1
                rounded-full
                text-gray-400
                hover:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-cyan-500
              "
            >
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: outline/bell -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <main class="flex-1 relative pb-8 z-0 overflow-y-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import SideNav from "../components/SideNav.vue";
export default {
  components: {
    Search,
    SideNav,
  },
};
</script>


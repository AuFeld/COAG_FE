<template>
  <div>
    <div
      class="
        fixed
        z-50
        w-full
        text-black
        bg-white
        dark:text-white dark:bg-black
      "
    >
      <div
        x-data="`{ window.open: false }`"
        class="
          flex flex-col
          max-w-screen-xl
          px-4
          mx-auto
          md:items-center md:justify-between md:flex-row md:px-6
          lg:px-20
        "
      >
        <div class="flex flex-row items-center justify-between p-4">
          COAG
          <button
            class="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            x-click="`window.open = !open`"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-12 h-12">
              <path
                x-show="!open"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                x-show="open"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          x-class="`{ flex: open, hidden: !open }`"
          class="
            flex-col flex-grow
            hidden
            pb-4
            md:pb-0 md:flex md:justify-end md:flex-row
          "
        >
          <a
            class="
              px-4
              py-2
              mt-2
              text-base text-black
              transition
              duration-500
              ease-in-out
              transform
              bg-transparent
              rounded-lg
              dark:text-blueGray-300
              md:mt-0 md:ml-4
              hover:text-blueGray-900
              focus:text-blueGray-900
              hover:bg-blueGray-50
              focus:bg-blueGray-200 focus:outline-none focus:shadow-outline
            "
            href="#features"
            >Features</a
          >
          <a
            class="
              px-4
              py-2
              mt-2
              text-base text-black
              transition
              duration-500
              ease-in-out
              transform
              bg-transparent
              rounded-lg
              dark:text-blueGray-300
              md:mt-0 md:ml-4
              hover:text-blueGray-900
              focus:text-blueGray-900
              hover:bg-blueGray-50
              focus:bg-blueGray-200 focus:outline-none focus:shadow-outline
            "
            href="#pricing"
            >Pricing</a
          >
          <a
            class="
              px-4
              py-2
              mt-2
              text-base text-black
              transition
              duration-500
              ease-in-out
              transform
              bg-transparent
              rounded-lg
              dark:text-blueGray-300
              md:mt-0 md:ml-4
              hover:text-blueGray-900
              focus:text-blueGray-900
              hover:bg-blueGray-50
              focus:bg-blueGray-200 focus:outline-none focus:shadow-outline
            "
            href="./blog.html"
            >Blog</a
          >
          <a
            class="
              px-4
              py-2
              mt-2
              text-base text-black
              transition
              duration-500
              ease-in-out
              transform
              bg-transparent
              rounded-lg
              dark:text-blueGray-300
              md:mt-0 md:ml-4
              hover:text-blueGray-900
              focus:text-blueGray-900
              hover:bg-blueGray-50
              focus:bg-blueGray-200 focus:outline-none focus:shadow-outline
            "
            href="./about.html"
            >About</a
          >
          <a
            class="
              px-4
              py-2
              mt-2
              text-base text-black
              transition
              duration-500
              ease-in-out
              transform
              bg-transparent
              rounded-lg
              dark:text-blueGray-300
              md:mt-0 md:ml-4
              hover:text-blueGray-900
              focus:text-blueGray-900
              hover:bg-blueGray-50
              focus:bg-blueGray-200 focus:outline-none focus:shadow-outline
            "
            href="./contact.html"
            >Contact</a
          >
          Dropdown
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

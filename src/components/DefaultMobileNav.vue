<template>
  <nav class="h-[64px] bg-black text-sm text-[#b3b3b3]">
    <div class="flex justify-around my-auto">
      <RouterLink
        to="/"
        exact-active-class="text-white"
        class="font-bold h-full flex items-center h-[40px]"
      >
        <svg
          role="img"
          height="24"
          width="24"
          aria-hidden="true"
          viewBox="0 0 24 24"
          exact-active-class="text-white"
        >
          <path
            fill="currentColor"
            d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"
          ></path>
        </svg>
      </RouterLink>

      <RouterLink
        to="/search"
        class="flex items-center h-[40px] font-bold"
        exact-active-class="text-white"
      >
        <svg
          role="img"
          height="24"
          width="24"
          aria-hidden="true"
          viewBox="0 0 24 24"
          exact-active-class="bg-white"
        >
          <path
            fill="currentColor"
            d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"
          ></path>
        </svg>
      </RouterLink>
    </div>
  </nav>
</template>

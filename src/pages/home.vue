<template>
  <div flex="~ items-center col" m-auto >
    <div flex="~ items-center col">
      <h1 text-3xl font-bold underline >
        Hello Let's Go!
      </h1>
      <div i-carbon-arrow-down w-full p-y-10></div>
      <button btn>
        <router-link to="/hi">
          <h1>Go to Router</h1>
        </router-link>
      </button>  
    </div>
  </div>
</template>
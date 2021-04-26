<template>
  <div>
    <router-link :to="{name:'home'}">Home</router-link> |
    <router-link :to="{name:'alert'}">Alert</router-link>
  </div>
  <router-view/>
</template>

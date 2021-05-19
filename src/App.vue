<template>
  <div>
    <router-link :to="{name:'home'}">Home</router-link> |
    <router-link :to="{name:'alert'}">Alert</router-link> |
    <router-link :to="{name:'modal'}">Modal</router-link> |
    <router-link :to="{name:'dropdown'}">Dropdown</router-link> |
  </div>
  <router-view/>
</template>

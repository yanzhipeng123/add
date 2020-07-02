<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style lang="scss">
#app{
  height: 100%;
}
/* //element-ui table的去除右侧滚动条的样式 */
::-webkit-scrollbar {
  width: 0px;
  height: 1px;
}
/* // 滚动条的滑块 */
::-webkit-scrollbar-thumb {
  background-color: #090c14;
  border-radius: 0px;
}
</style>

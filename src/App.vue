<template>
  <div class="main">
    <button @click="show = !show">切り替え</button>
    <transition name="fade">
      <p v-if="show">Hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show: true
    }
  }
}
</script>

<style scoped>
  /* toransitonのname-６つのトランジションクラス */

  /* opacity:0 → opacity:1
  ・fade-enterとfade-enter-activeを追加
  ・fade-enterを削除
  ・fade-enter-toを追加
  ・fade-enter-toとfade-enter-activeを削除
  */

  .fade-enter{
    /* 現れる時の最初の状態 */
    opacity: 0;
  }
  .fade-enter-active{
    /* 現れる時のトランジションの状態 */
    transition: opacity 0.5s;
  }
  .fade-enter-to{
    /* 現れる時の最後の状態 */
    opacity: 1;
  }

  /* opacity:1 → opacity:0
  ・fade-leaveとfade-leave-activeを追加
  ・fade-leaveを削除
  ・fade-leave-toを追加
  ・fade-leave-toとfade-leave-activeを削除
  */

  .fade-leave{
    /* 消える時の最初の状態 */
    opacity: 1;
  }
  .fade-leave-active{
    /* 消える時のトランジションの状態 */
    transition: opacity 0.5s;
  }
  .fade-leave-to{
    /* 消える時の最後の状態 */
    opacity: 0;
  }

  .main{
    width: 70%;
    margin: auto;
    padding-top: 5rem;
    text-align: center;
  }
</style>
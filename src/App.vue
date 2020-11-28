<template>
  <div class="main">
    <button @click="show = !show">切り替え</button>
    <transition name="fade">
      <p v-if="show">Hello</p>
    </transition>
    <transition name="slide">
      <!-- 
        追加で<p>タグなどを追加すると下記のエラーとなるため、その場合は<div>タグで囲む
        <transition> can only be used on a single element. Use <transition-group> for lists. 
      -->
        <p v-if="show">bye</p>
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

/* fade */
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

  /* slide */
  /* @keyframesが-active以外よしなにやってくれる */
  .slide-enter{
    /* 現れる時の最初の状態 */
  }

  .slide-enter-active{
    /* 現れる時のトランジションの状態 */
    animation: slide-in 0.5s;
  }

  .slide-enter-to{
    /* 現れる時の最後の状態 */
  }

  .slide-leave{
    /* 消える時の最初の状態 */
  }

  .slide-leave-active{
    /* 消える時のトランジションの状態 */
    animation: slide-in 0.5s reverse;
  }

  .slideleave-to{
    /* 消える時の最後の状態 */
  }

  @keyframes slide-in {
    from {
      transform: translateX(100px);
    }
    to {
      transform: translateX(0) ;
    }
  }

  .main{
    width: 70%;
    margin: auto;
    padding-top: 5rem;
    text-align: center;
  }
</style>
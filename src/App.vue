<script setup>
import Footer from "./components/Footer.vue"
import { gameStore } from "./store/game";

const game = gameStore();

const userClicked = (item) => {

  if (item === true) {
    return "X";
  } else if (item === false) {
    return "O";
  }
  return ""

}


const toggleRound = (i, userRound) => {

  if (game.lines[i] != undefined || game.end === true) return;
  game.setLines(i, userRound);
  game.changeRound();
}




</script>

<template>
  <div class="flex w-[100%] flex-col justify-between items-center">
    <h1 class="text-title font-bold text-green-600 mb-2 text-[40px]">TIK TAK GAME</h1>
    <div class="w-[240px] md:w-[600px]">
      <div
        class="grid self-center grid-cols-3 col-start-1 row-span-3 w-[240px] gap-0 space-x-0 border-spacing-0 md:w-[600px]">
        <div
          class="m-0 text-center text-5xl leading-[1.5] w-[80px] h-[80px] border-2 border-black hover:bg-slate-200 md:text-[80px] md:w-[200px] md:h-[200px] md:leading-[2]"
          v-for="(item, i) in game.lines" @click="toggleRound(i, game.userRound)"> {{
            userClicked(item)
          }}</div>
      </div>

      <div class="flex flex-col-reverse justify-between items-center mt-5 md:flex-row">
        <h2 class="text-cyan-500 text-[30px] my-3 md:my-0">{{ game.setWinner }}</h2>
        <button class="py-4 px-8 rounded-xl bg-stone-300 text-[30px] hover:bg-teal-200"
          @click="() => game.reset()">Reset</button>
      </div>
    </div>
    <Footer />
  </div>
</template>


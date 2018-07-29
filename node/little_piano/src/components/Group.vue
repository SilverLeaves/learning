<template>
  <div class="group" :style="{ 'flex-grow':flexGrow }">
    <button :class="{'white': whites.indexOf(n) > -1, 'black': blacks.indexOf(n) > -1}" v-for="n in nS" :style="calc(n)"
      @mousedown="play(start+n+2)">
      <div v-if='start+n>-3&&start+n<86'>
        <div>{{start/12+1}}</div>
        <div>{{notes[n-1]}}</div>
        <div>{{notesNumber[n-1]}}</div>
        <!-- <div>{{n}}</div> -->
      </div>
    </button>
  </div>
</template>

<script>
  import {
    notes
  } from '../notes.js';
  const prefix = 'data:audio/mpeg;base64,';
  const base = 2;
  const keys = 12;
  export default {
    props: {
      group: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        blacks: [2, 4, 7, 9, 11],
        whites: [1, 3, 5, 6, 8, 10, 12],
        notes: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
        notesNumber: ['1', '', '2', '', '3', '4', '', '5', '', '6', '', '7'],
      }
    },
    computed: {
      start() {
        return this.group * keys;
      },
      nS(){
        if (this.group===-1) {
          return [10,11,12]
        }else if(this.group===7){
          return [1]
        }else{
          return [1,2,3,4,5,6,7,8,9,10,11,12]
        }
      },
      flexGrow(){
        if (this.group===-1) {
          return 2
        }else if(this.group===7){
          return 1
        }else{
          return 7
        }
      }
    },
    methods: {
      play(index) {
        var audio = new Audio(prefix + notes[index]);
        audio.play();
      },
      calcLeft(index) {
        if (this.group==-1&&index==11) {
          return 37.4875+ '%'
        }
        var unit = 14.29;
        var i = this.blacks.indexOf(index);
        if (i < 2) {
          return unit * (0.75 + i)+ '%';
        }
        return unit * (1.75 + i)+ '%';
       
      },
      calc(index) {
        if (this.group==-1&&index==11) {
          return {
            left:37.4875+ '%',
            width:25.025+ '%',
          }
        }
        var unit = 14.29;
        var i = this.blacks.indexOf(index);
        if (i < 2) {
          return {
            left:unit * (0.75 + i)+ '%'
          }
        }
        return {
          left:unit * (1.75 + i)+ '%'
        }
       
      },
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .group {
    font-size: 0;
    position: relative;
    display: flex;
    flex-grow: 1;
  }

  button {
    width: 14.29%;
    flex: 1;
    height: 175px;
    display: inline-block;
    border: 1px solid #ccc;
    outline: 0;
    padding: 0;
    box-sizing: border-box;
    /* border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px; */
  }

  button>span {
    position: absolute;
    bottom: 10px;
  }

  .white:active,
  .white.active {
    background: #ececec;
  }

  .white {
    background: #fff;
  }

  .black {
    background: #000;
    border-color: #000;
    height: 100px;
    width: 7.15%;
    position: absolute;
    color: #fff;
  }

</style>

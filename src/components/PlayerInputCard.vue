<template>
    <div class="player-input-card">
        Num players:
        <input type="number" placeholder="" min="0" max="99"
                v-model="player.count" 
                @keyup="$emit('update:player.count', player.count)"/>
        Level
        <select v-model="player.level"                
                @change="$emit('update:player.level', player.count)">
            <option v-for="i in 20" :key="i" :value="i">{{i}}</option>            
        </select>
    </div>
</template>

<script>
export default {
    name: 'PlayerInputCard',
    props: ['player'],
}
</script>

<style lang="scss" scoped>
.player-input-card {
    input{
        max-width: 2em;
    }
}
</style>
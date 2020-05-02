<template>
    <div class="player-input-card">
        Name:
        <input type="text" placeholder="name"
                v-model="player.name" 
                @keyup="$emit('update:player.name', player.name)"/>
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
    display: inline-block;
    padding: 5px;

    input{
        max-width: 10em;
    }

    +.player-input-card {
        margin-top: 10px;
    }
}
</style>
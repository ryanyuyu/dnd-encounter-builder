<template>
    <div id="app">
        <h1>DnD 5E Encounter Builder</h1>
        <div class="enemy-section">
            <h2>Enemies</h2>

            <enemy-input-card v-for="(enemy, index) in enemyParty" :key="index"></enemy-input-card>
            <button @click="addEnemy">Add Enemy Type</button>
        </div>
        <div class="player-section">
            <h2>Players</h2>
        </div>
        <div class="result-section">
            <h2>Encounter Estimates</h2>
            <label>Difficulty</label>
            {{ result.difficulty }}
        </div>
    </div>
</template>

<script>
import EnemyInputCard from "./components/EnemyInputCard.vue";

export default {
    name: "App",
    data: function () {
        return {
            enemyParty: [{name: "Goblin", cr: ".25"}],
            playerParty: [],
            result: {
                difficulty: 'Default Difficulty'
            }
        };
    },
    methods: {
        addEnemy(enemy) {
            this.enemyParty.push(enemy || {});
        }
    },
    components: {
        EnemyInputCard
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

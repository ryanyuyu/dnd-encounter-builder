<template>
    <div id="app">
        <h1>DnD 5E Encounter Builder</h1>
        <div id="app-area">
            <div class="column enemy-section">
                <h2>Enemies</h2>

                <div v-for="(enemy, index) in enemyParty" :key="index">
                    <enemy-input-card :enemy.sync="enemy"> </enemy-input-card>
                    {{enemy.getExperience}}
                </div>
                <button @click="addEnemy">Add Enemy Type</button>

                <pre style="max-width: 200px; overflow: none; word-break: break-word; white-space:break-spaces">{{JSON.stringify(enemyParty)}} </pre>
            </div>
            <div class="column player-section">
                <h2>Players</h2>
            </div>
            <div class="column result-section">
                <h2>Encounter Estimates</h2>
                <label>Difficulty</label>
                {{ result.difficulty }}
            </div>
        </div>
    </div>
</template>

<script>
import EnemyInputCard from "./components/EnemyInputCard.vue";
import EnemyGroup from './models/EnemyGroup';

export default {
    name: "App",
    data: function () {
        return {
            enemyParty: [
                new EnemyGroup("Goblin", 3, "1/4"),
                new EnemyGroup("Bugbear", 1, "1")
            ],
            playerParty: [],
            result: {
                difficulty: 'Default Difficulty'
            }
        };
    },
    methods: {
        addEnemy() {
            this.enemyParty.push(new EnemyGroup("", 0, ""));
        }
    },
    computed: {

    },
    components: {
        EnemyInputCard
    }
};
</script>

<style lang="scss">
$columnMaxWidth: 500px;
$columnPadding: 10px;

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

#app-area {
    display: flex;

    h2 {
        display: block;
    }

    .column {
        padding: $columnPadding;
    }

    .enemy-section {
        max-width: $columnMaxWidth;
        border: 1px solid red;
    }
    .player-section {
        max-width: $columnMaxWidth;
        border: 1px solid blue;
    }
}

</style>

<template>
    <div id="app">
        <h1>DnD 5E Encounter Builder</h1>
        <div id="app-area">
            <div class="column enemy-section">
                <h2>Enemies</h2>

                <div v-for="(enemy, index) in enemyParty" :key="index">
                    <enemy-input-card :enemy.sync="enemy"></enemy-input-card>
                    <span class="calculated-xp">{{enemy.getExperience}} XP</span>
                </div>
                <button @click="addEnemy">Add Enemy Type</button>

                <pre style="max-width: 200px; overflow: none; word-break: break-word; white-space:break-spaces">{{JSON.stringify(enemyParty)}} </pre>
            </div>
            <div class="column player-section">
                <h2>Players</h2>
                <div v-for="(player, index) in playerParty" :key="index">
                    <player-input-card :player.sync="player"></player-input-card>
                </div>
                <button @click="addPlayer">Add more players</button>
                <pre>{{JSON.stringify(playerParty)}}</pre>
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
import EnemyGroup from './models/EnemyGroup';
import PlayerGroup from './models/PlayerGroup';
import EnemyInputCard from "./components/EnemyInputCard.vue";
import PlayerInputCard from "./components/PlayerInputCard.vue";


export default {
    name: "App",
    data: function () {
        return {
            enemyParty: [
                new EnemyGroup("Goblin", 2, "1/4"),
                new EnemyGroup("Wolf", 2, "1/4"),
                new EnemyGroup("Bugbear", 1, "1")
            ],
            playerParty: [new PlayerGroup(4, 2)],
            result: {
                difficulty: 'Default Difficulty'
            }
        };
    },
    methods: {
        addEnemy() {
            this.enemyParty.push(new EnemyGroup("", 0, ""));
        }, 
        addPlayer() {
            this.playerParty.push(new PlayerGroup(0));
        }
    },
    computed: {

    },
    components: {
        EnemyInputCard,
        PlayerInputCard
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

        .calculated-xp {
            display: inline-block; 
            padding: 5px; 
            min-width: 5em;
        }
    }
    .player-section {
        max-width: $columnMaxWidth;
        border: 1px solid blue;
    }
}

</style>

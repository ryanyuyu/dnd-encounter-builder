<template>
    <div id="app">
        <h1>DnD 5E Encounter Builder</h1>
        <div id="app-area">
            <div class="column enemy-section">
                <h2>Enemies</h2>

                <div v-for="(enemy, index) in enemyParty" :key="index">
                    <span class="remove-icon" @click="removeEnemy(index)">X</span>
                    <enemy-input-card :enemy.sync="enemy"></enemy-input-card>
                    <span class="calculated-xp">{{enemy.experience}} XP</span>
                </div>
                <button @click="addEnemy">Add Enemy Type</button>
            </div>
            <div class="column player-section">
                <h2>Players</h2>
                <div v-for="(player, index) in playerParty" :key="index">
                    <span class="remove-icon" @click="removePlayer(index)">X</span>
                    <player-input-card :player.sync="player"></player-input-card>
                </div>
                <button @click="addPlayer">Add more players</button>
            </div>
            <div class="column result-section">
                <h2>Encounter Estimates</h2>
                <div class="xp-calculations">
                    <div>
                        <label>Number of Enemies:</label>
                        {{ totalEnemies }}
                    </div>
                    <div>
                        <label>Number of Players:</label>
                        {{ totalPlayers }}
                    </div>
                    <div style="font-weight: bold;">
                        <label>Xp Awarded:</label>
                        {{ totalEnemyXp }}
                    </div>
                    <div>
                        <label>XP Multiplier:</label>
                        {{ xpDifficultyMultiplier }}
                    </div>
                    <div>
                        <label>Adjusted Difficulty XP:</label>
                        {{ adjustedXp }}
                    </div>
                </div>
                <div class="player-results">
                    <div style="font-weight: bold;">
                        <label>Difficulty Estimate:</label>
                        {{ difficultyEstimate }}
                    </div>
                    <div>
                        <label>Easy Threshold:</label>
                        {{ partyThreshold.easy }}
                    </div>
                    <div>
                        <label>Medium Threshold:</label>
                        {{ partyThreshold.medium }}
                    </div>
                    <div>
                        <label>Hard Threshold:</label>
                        {{ partyThreshold.hard }}
                    </div>
                    <div>
                        <label>Deadly Threshold:</label>
                        {{ partyThreshold.deadly }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EnemyGroup from './models/EnemyGroup';
import PlayerGroup from './models/PlayerGroup';
import EnemyInputCard from "./components/EnemyInputCard.vue";
import PlayerInputCard from "./components/PlayerInputCard.vue";
import calculateXpMultiplier from "./dndConstants/xpAdjustments.js";
import { getDifficultyThresholds } from "./dndConstants/xpConversion.js";
import DifficultyThreshold from './models/DiffucultyThreshold';


export default {
    name: "App",
    data() {
        return {
            enemyParty: [
                new EnemyGroup("Goblin", 2, "1/4"),
                new EnemyGroup("Wolf", 1, "1/4"),
                new EnemyGroup("Bugbear", 1, "1")
            ],
            playerParty: [
                new PlayerGroup("Bob", 2),
                new PlayerGroup("Sue", 2),
                new PlayerGroup("Jim", 2),
                new PlayerGroup("Moe", 2)
            ]
        };
    },
    methods: {
        addEnemy() {
            this.enemyParty.push(new EnemyGroup("", 0, ""));
        },
        removeEnemy(index) {
            this.enemyParty.splice(index, 1);
        },
        addPlayer() {
            this.playerParty.push(new PlayerGroup(0));
        },
        removePlayer(index) {
            this.playerParty.splice(index, 1);
        }
    },
    computed: {
        totalEnemies() {
            return this.enemyParty.filter(e => e.isRelevant)
                .map(e => +e.count)
                .reduce((runningSum, num) => runningSum + num, 0);
        },
        totalEnemyXp() {
            return +this.enemyParty.filter(e => e.isRelevant)
                .map(e => e.experience)
                .reduce((runningSum, num) => runningSum + num, 0);
        },
        totalPlayers() {
            return this.playerParty.length;
        },
        xpDifficultyMultiplier() {
            return calculateXpMultiplier(this.totalEnemies, this.totalPlayers);
        },
        adjustedXp() {
            return this.totalEnemyXp * this.xpDifficultyMultiplier;
        },
        partyThreshold() {
            return this.playerParty
                    .map(player => getDifficultyThresholds(player.level))
                    .reduce((running, current) => {
                        return new DifficultyThreshold(running.easy + current.easy,
                            running.medium + current.medium,
                            running.hard + current.hard,
                            running.deadly + current.deadly,
                            running.dailyMax + current.dailyMax
                        );
                    });
        },
        difficultyEstimate() {
            return this.partyThreshold.getDifficulty(this.adjustedXp);
        }
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
$resultColumnMinWidth: 200px;

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
        text-align: center;
    }

    .remove-icon {
        padding: 5px;
        color:red;
        font-weight: bold;
    }

    .column {
        padding: $columnPadding;
    }

    .enemy-section {
        max-width: $columnMaxWidth;

        .calculated-xp {
            display: inline-block; 
            padding: 5px; 
            min-width: 5em;
        }
    }
    .player-section {
        max-width: $columnMaxWidth;
    }

    .result-section {
        text-align: right;

        > div {
            display: inline-block;
            min-width: $resultColumnMinWidth;
            padding: $columnPadding
        }

        label {
            float: left;
        }
    }
}

</style>

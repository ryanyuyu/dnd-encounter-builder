<template>
    <div id="app">
        <h1>DnD 5E Encounter Builder</h1>
        <div id="app-area">
            <div class="column enemy-section">
                <h2>Enemies</h2>

                <div v-for="(enemy, index) in enemyParty" :key="index">
                    <enemy-input-card :enemy.sync="enemy"></enemy-input-card>
                    <span class="calculated-xp">{{enemy.experience}} XP</span>
                </div>
                <button @click="addEnemy">Add Enemy Type</button>
            </div>
            <div class="column player-section">
                <h2>Players</h2>
                <div v-for="(player, index) in playerParty" :key="index">
                    <player-input-card :player.sync="player"></player-input-card>
                </div>
                <button @click="addPlayer">Add more players</button>
            </div>
            <div class="column result-section">
                <h2>Encounter Estimates</h2>
                <div class="xp-calculations">
                    <div>
                        <label>Total Relevant Enemies:</label>
                        {{ totalEnemies }}
                    </div>
                    <div>
                        <label>Total Players:</label>
                        {{ totalPlayers }}
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
                    <div>
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
        addPlayer() {
            this.playerParty.push(new PlayerGroup(0));
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

    .result-section {
        > div {
            display: inline-block;
        }
    }
}

</style>

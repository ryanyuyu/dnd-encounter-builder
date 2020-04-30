<template>
    <div class="enemy-input-card">
        <div class="title-bar">
            <input  type="number" placeholder="" min="0" max="99"
                v-model="enemy.count" 
                @keyup="$emit('update:enemy.count', enemy.count)"/>
            <span class="separator-inline">|</span>
            <input type="text" placeholder="Enemy Name" 
                v-model="enemy.name"
                @keyup="$emit('update:enemy.name', enemy.name)"/>
            <!-- Is the CR best done as text, number, or select box? -->
            <span class="separator-inline">|</span>
            <div class="cr-badge">
                <label>CR</label>
                <input type="text" placeholder="CR"
                    v-model="enemy.cr"
                    @keyup="$emit('update:enemy.cr', enemy.cr)"/>
            </div>
        </div>
        <!-- TODO perhaps add another div for things like stats/attacks. 
            Not necessary for current plans of the encounter estimate. -->
    </div>
</template>
<script>
export default {
    name: 'EnemyInputCard',
    props: ['enemy'],
}
</script>

<style lang="scss" scoped>
// Color constants
$cardBackgroundColor: #f1bea0;
$labelColor: #111111;
$inputBackgroundColor: #f1e6d4;
$cardBorderColor: #ff0000;

$separatorColor: #dd0000;
$crBackgroundColor: #eee593;

// Padding constants
$cardSectionPadding: 3px;
$inputPadding: 5px;
$cardSeparation: 5px;

.enemy-input-card {
    display: flex;
    background-color: $cardBackgroundColor;
    padding: 0;
    border-radius: $inputPadding;
    border: 2px solid $cardBorderColor;

    .title-bar {
        padding: $cardSectionPadding;

        .separator {
            padding: 2px 5px;
        }

        input {
            border: none;
            background-color: $inputBackgroundColor;
            padding: $inputPadding;
            width: 10em;

            &[type="number"] {
                width: 2.5em;
            }
        }
        .cr-badge {
            display: inline-block;
            background-color: $crBackgroundColor;
            padding: $cardSectionPadding;
            text-align: center;
            vertical-align: middle;

            input {
                display: block;
                width: 1.5em;
            }
        }
    }

    .separator-inline {
        color: $separatorColor;
        padding: $cardSeparation;
    }

    +.enemy-input-card {
        margin-top: $cardSeparation;
    }
}

</style>
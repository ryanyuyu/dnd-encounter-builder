<template>
    <div class="enemy-input-card">
        <div class="input-group">
            <label>Name</label>
            <input v-model="name" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'EnemyInputCard',
    data: function () {
        return {
            name: '',
            cr: '',
            count: 0,
            // TODO some logic and/or prop for isRelevant
        };
    }
}
</script>

<style lang="scss" scoped>
// Color constants
$card-bg-color: #eeeeee;
$label-color: #111111;

// Padding constants
$padding: 2px;

.enemy-input-card {
    display: flex;
}

label {
    color: $label-color;
}

input {
    padding: $padding;
    border-radius: $padding;
}

</style>
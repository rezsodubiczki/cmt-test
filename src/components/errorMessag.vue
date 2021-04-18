<template>
    <div>
        <div v-for="msg in this.$store.state.errorMsg" :key="msg" class="errorMsg">
            {{msg}}
        </div>
    </div>
</template>
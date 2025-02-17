<template>
    <div id="dashboard">
        <div class="ui-menu">
            <div class="fixed-side">
                <div class="top-menu">
                    <div></div>
                    <Tools/>
                    <div></div>
                </div>
            </div>
        </div>
        <Whiteboard/>
    </div>
</template>

<script>
import Whiteboard from "../components/Whiteboard.vue";
import Tools from "../components/Tools.vue";

export default {
    components: {
        Whiteboard: Whiteboard,
        Tools: Tools
    },
    data() {
        return {
            selectedTool: 'line'
        }
    },
}
</script>

<style scoped>

#dashboard {
    position: relative;
    z-index: 0;
}

.ui-menu {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 4;
}

.fixed-side {
    position: absolute;
    pointer-events: none;
    left: 1rem;
    top: 1rem;
    right: 1rem;
    bottom: 1rem;
}

.top-menu {
    display: grid;
    color: grey;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 2rem;
    align-items: flex-start;
    cursor: default;
    pointer-events: none !important;
}

</style>

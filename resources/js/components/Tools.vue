<template>
    <section id="tools-section">
        <div class="relative pointer-events-auto">
            <div class="tools-container-y">
                <div class="tools-container-x">
                    <div class="toolbar">
                        <div class="stack">
                            <div
                                v-for="tool in tools"
                                :key="tool.slug"
                                :class="{ 'selected': selectedTool === tool.slug }"
                                class="tool"
                                @click="selectTool(tool.slug)"
                            >
                                <i :class="'fas ' + tool.icon" :title="tool.name"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            tools: [
                { name: 'Pen', slug: 'pen', icon: 'fa-pen' },
                { name: 'Line', slug: 'line', icon: 'fa-minus' },
                { name: 'Rectangle', slug: 'rectangle', icon: 'fa-square' },
                { name: 'Circle', slug: 'circle', icon: 'fa-circle' },
                { name: 'Polygon', slug: 'polygon', icon: 'fa-polygon' },
            ],
            selectedTool: 'line',
        }
    },
    methods: {
        selectTool(tool) {
            this.selectedTool = tool;
        }
    }
}
</script>

<style scoped>

#tools-section {
    display: flex;
    justify-content: center;
    pointer-events: none !important;
}

.tools-container-y {
    --gap: 4;
    display: grid;
    grid-template-columns: auto;
    grid-auto-flow: row;
    grid-auto-rows: min-content;
    justify-items: start;
    gap: calc(.25rem * var(--gap));
    pointer-events: all;
}

.tools-container-x, .stack {
    --gap: 1;
    display: grid;
    grid-template-rows: auto;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    gap: var(--gap);
    pointer-events: all;
}

.toolbar {
    --padding: 1;
    width: 100%;
    box-sizing: border-box;
    background-color: #232329;
    box-shadow: 0px 0px .9px 0px rgba(0, 0, 0, .17), 0px 0px 3px 0px rgba(0, 0, 0, .08), 0px 7px 14px 0px rgba(0, 0, 0, .05);
    border-radius: .5rem;
    padding: calc(var(--padding) * .25rem);
    position: relative;
    transition: box-shadow .5s ease-in-out;
    pointer-events: all;
}

.tool {
    padding: 1rem;
    border-radius: .5rem;
    display: inline-flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    user-select: none;
    pointer-events: all;
}

.selected {
    background-color: #2c2c32;
    color: #fff;
    pointer-events: all;
}

</style>

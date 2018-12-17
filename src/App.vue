<template>
    <div id="app">
        <keep-alive>
            <div class="header">
                <router-view name="header"/>
            </div>
        </keep-alive>
        <div class="main">
            <div class="left">
                <router-view name="left"/>
            </div>
            <div class="right">
                <router-view name="right"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import './css/common';

    #app {
        @include fullSize;

        display: flex;
        flex-direction: column;

        .header {
            height: 2.5rem;
        }

        .main {
            flex: 1;
            display: flex;
            height: 100%;

            .left {
                flex: 1;
                height: 100%;
            }

            .right {
                flex: 1;
                height: 100%;
            }

        }
    }
</style>

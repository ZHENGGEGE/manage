<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import vHead from 'components/common/header/header';
    import vSidebar from 'components/common/sidebar/sidebar';
    export default {
        components: {
            vHead,
            vSidebar
        }
    }
</script>
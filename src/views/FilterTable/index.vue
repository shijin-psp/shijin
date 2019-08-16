<style scoped>
    
</style>
<template>
    <div>
        <Content :style="{padding: '16px'}">
            <sh-filter @filterChange='filterChange'></sh-filter>
        </Content>
        <Content :style="{padding: '0 16px'}">
            <sh-table :filter="filter"></sh-table>
        </Content>
    </div>
</template>
<script>
    import shFilter from './filter.vue';
    import shTable from './table.vue';
    export default {
        data () {
            return {
                filter: {
                    cuisine: '',
                    grade: '',
                    category: '',
                },
            };
        },
        components: {
            shFilter,
            shTable
        },
        methods:{
            filterChange(data){
                this.filter = data;
            }
        }
    }
</script>

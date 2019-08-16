<template>
    <Table border :columns="columns" :data="tableData"></Table>
</template>
<script>
    import initialData from '@/data/shData.js'

    export default {
        props: ['filter'],
        data () {
            return {
                initialData,
                columns: [
                    {
                        title: '',
                        key: 'avatar',
                        render: (h, params) => {
                            if (!params.row.avatar) return;
                            return h('img', {
                                attrs: {
                                    src: params.row.avatar, style: 'width: 40px;height: 40px'
                                },
                            })
                        }
                    },
                    {
                        title: '名称',
                        key: 'name',
                        sortable: true,
                    },
                    {
                        title: '菜系',
                        key: 'cuisine',
                        sortable: true,
                    },
                    {
                        title: '品级',
                        key: 'grade',
                        sortable: true,
                    },
                    {
                        title: '类别',
                        key: 'category',
                        sortable: true,
                    },
                    {
                        title: 'CV',
                        key: 'cv',
                        sortable: true,
                    },
                    {
                        title: '生命',
                        key: 'health',
                        sortable: true,
                    },
                    {
                        title: '攻击',
                        key: 'damage',
                        sortable: true,
                    },
                    {
                        title: '防御',
                        key: 'defence',
                        sortable: true,
                    },
                    {
                        title: '闪避',
                        key: 'miss',
                        sortable: true,
                    },
                    {
                        title: '暴伤',
                        key: 'critical_damage',
                        sortable: true,
                    },
                    {
                        title: '暴击',
                        key: 'critical',
                        sortable: true,
                    },
                    {
                        title: '获取方式',
                        key: 'origin',
                        sortable: true,
                    },
                    {
                        title: '喜欢的礼物',
                        key: 'gift',
                        sortable: true,
                    },
                ],
            }
        },
        computed: {
            tableData() {
                const cuisine = this.filter.cuisine.trim();
                const grade = this.filter.grade.trim();
                const category = this.filter.category.trim();

                if ((cuisine + grade + category).length <= 0) {
                    return this.initialData;
                }

                return this.initialData.reduce((pre, cur) => {
                    const v1  = cuisine.length > 0 ?  cur['cuisine'] === cuisine : true;
                    const v2 = grade.length > 0 ?  cur['grade'] === grade : true;
                    const v3 = category.length > 0 ?  cur['category'] === category : true;

                    if (v1 && v2 && v3) {
                        pre.push(cur);
                    }

                    return pre;
                }, [])
            }
        },
    }
</script>

<template>
    <Form class="c-filter-form"  :model="formItem" ref='filter' :label-width="80">
        <FormItem label="查看全部">
            <Button @click='resetFilter'>查看全部</Button>
        </FormItem>
        <FormItem label="菜系">
            <RadioGroup v-model="formItem.cuisinesRadio" type='button'>
                <Radio v-for="cuisine in cuisineData"
                    :label="cuisine.name"
                    :key="cuisine.id"
                >
                    {{ cuisine.name }}
                </Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="品级">
            <RadioGroup v-model="formItem.gradesRadio" type='button'>
                <Radio v-for="grade in gradeData"
                    :label="grade.name"
                    :key="grade.id"
                >
                    {{ grade.name }}
                </Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="类别">
            <RadioGroup v-model="formItem.categoryRadio" type='button'>
                <Radio v-for="category in categoryData"
                    :label="category.name"
                    :key="category.id"
                >
                    {{ category.name }}
                </Radio>
            </RadioGroup>
        </FormItem>
        <input type="hidden" style="display: none" :value="computedData" />
    </Form>
</template>
<script>
    import cuisineData from '@/data/cuisine.js';
    import gradeData from '@/data/grade.js';
    import categoryData from '@/data/category.js';
    
    export default {
        data () {
            return {
                cuisineData,
                gradeData,
                categoryData,
                formItem: {
                    cuisinesRadio: '',
                    gradesRadio: '',
                    categoryRadio: '',
                },
                initialData: {
                    cuisinesRadio: '',
                    gradesRadio: '',
                    categoryRadio: '',
                }
            }
        },
        computed: {
            computedData () {
                this.$emit('filterChange', {
                    cuisine: this.formItem.cuisinesRadio,
                    grade: this.formItem.gradesRadio,
                    category: this.formItem.categoryRadio,
                })
                return Object.values(this.formItem).join('');
            }
        },
        methods: {
            resetFilter() {
                this.formItem = JSON.parse(JSON.stringify(this.initialData));
                this.$refs['filter'].resetFields();
            },
        }
    }
</script>
<style>
    .c-filter-form {
        border: 1px solid lightgrey;
        border-radius: 5px;
        padding-top: 24px;
    }
</style>

<style scoped>
    .layout-con{
        height: 100%;
        width: 100%;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu theme="dark" :active-name="menu" ref="menu" width="auto" :class="menuitemClasses">
                    <MenuGroup title="首页">
                      <router-link :to="{ name: 'home' }">
                          <MenuItem name="home">
                            <Icon type="ios-home"></Icon>
                            <span>首页</span>
                          </MenuItem>
                      </router-link>
                    </MenuGroup>
                    <MenuGroup title="食魂">
                      <router-link :to="{ name: 'filterTable' }">
                          <MenuItem name="filterTable">
                            <Icon type="ios-funnel" />
                            <span>食魂筛选表</span>
                          </MenuItem>
                      </router-link>
                      <!-- <MenuItem name="shihunProperty">
                        <Icon type="ios-paper-plane-outline" />
                        <span>食魂属性</span>  
                      </MenuItem> -->
                    </MenuGroup>
                </Menu>
            </Sider>
            <Layout>
              <router-view></router-view>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isCollapsed: false,
                menu: '',
            };
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        mounted(){
          this.$nextTick(()=>{
            let menu = window.location.hash.split('#/')[1];
            this.menu = menu.trim() === '' ? 'home' : menu;
            this.$refs['menu'].updateActiveName()
          })
        }
    }
</script>

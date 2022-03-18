<template>
    <div class="home">
        <div class="header">
            <div class="container">
                <div class="header_ui">
                    <span class="title">fhv-ui</span>
                </div>
                <!--右侧对应路由页面-->
                <div class="moRouter">
                    <ul class="moRouter_ul">
                        <li v-for="(item, index) in rightRouter" :key="index">
                            <a :class="{'active':nowIndex == item.id}"
                               :href="'#' + item.path"
                               @click="nowIndex = item.id"
                            >
                                {{item.title}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="sidebar">
                <ul>
                    <li :key="item_1.title" class="nav-item" v-for="item_1 in ul_data[nowIndex]">
                        <a>{{item_1.title}}</a>
                        <ul class="pure-menu-list" v-if="item_1.li_data.length != 0">
                            <li :key="item_2.path" class="nav-item" v-for="item_2 in item_1.li_data">
                                <div class="nav-group__title" v-if="item_2.group">{{item_2.group}}</div>
                                <a
                                        :class="{'active':active == item_2.id}"
                                        :href="'#' + item_2.path"
                                        @click="active = item_2.id"
                                >{{item_2.title}}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="content" id="router_view_box">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    // 基础组件
    import baseComponent from "../routers/baseComponent";
    // echarts组件
    import echartsComponent from '../routers/echartsComponent'
    // 通过js模块
    import publicJavascript from '../routers/publicJavascript'

    export default {
        name: 'home',
        data() {
            return {
                active: 1,
                sidebarHover: false,
                ul_data: [],
                allRouter: [],      // 所有路由的数组
                nowIndex: 0,
                rightRouter: [
                    {
                        title: 'fhv-ui组件',
                        path: '/component/installation',
                        id: 0
                    },
                    {
                        title: '通用js模块',
                        path: '/component/publicjs',
                        id: 1
                    }
                ]
            }
        },
        watch: {
            $route: function (to, from) {
                if (from.path != to.path) {
                    document.documentElement.scrollTop = 0
                    this.setRouterActice()
                }
            }
        },
        created() {
            // 执行的生命周期处于vue.js的最开始阶段
            this.allRouter = [
                {id: 1, title: '安装/快速上手', path: '/component/installation'},
                ...baseComponent,
                ...echartsComponent,
                ...publicJavascript
            ]
            let componentsArray = [
                {
                    title: '开发指南',
                    li_data: [
                        {id: 1, title: '安装/快速上手', path: '/component/installation'}
                    ]
                },
                {
                    title: '基础组件',
                    li_data: baseComponent
                },
                {
                    title: 'echarts组件',
                    li_data: echartsComponent
                }
            ]
            let publicJs = [
                {
                    title: '通用javascript模块',
                    li_data: publicJavascript
                }
            ]
            // 通用组件模块
            this.ul_data = [
                componentsArray,
                publicJs
            ]
        },
        mounted() {
            this.setRouterActice()
        },
        methods: {
            // 设置路由
            setRouterActice() {
                this.allRouter.forEach(item => {
                    if (this.$router.options.history.location === item.path) {
                        this.active = item.id
                    }
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .home {
        width: 100%;
        height: 100%;

        .header {
            z-index: 100;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 80px;
            line-height: 80px;
            background: #fff;

            .container {
                height: 100%;
                width: 1140px;
                margin: 0 auto;
                padding: 0 10px;
                border-bottom: 1px solid #dcdfe6;

                .header_ui {
                    float: left;
                    .title {
                        // color: $--color-primary;
                        color: #409eff;
                        font-size: 26px;
                        font-weight: 500;
                        font-family: '微软雅黑';
                    }
                }

                .moRouter {
                    float: right;

                    .moRouter_ul {
                        li {
                            cursor: pointer;
                            display: inline-block;
                            vertical-align: middle;
                            margin-right: 20px;
                            &:hover {
                                color: #409eff;
                                text-decoration: underline #409eff;
                            }
                            &:last-child {
                                margin-right: 0;
                            }

                            a {
                                color: #666666;
                            }

                            .active {
                                color: #409eff;
                                text-decoration: underline #409eff;
                            }
                        }
                    }
                }
            }
        }

        .main {
            position: relative;
            width: 1140px;
            height: -webkit-calc(100% - 80px);
            height: -moz-calc(100% - 80px);
            height: calc(100% - 80px);
            margin: 0 auto;
            padding: 10px 0;
            top: 80px;
            display: flex;

            .sidebar {
                position: fixed;
                margin-right: 40px;
                width: 200px;
                height: 80%;
                top: 135px;
                visibility: hidden;
                overflow: auto;
                padding-bottom: 30px;

                &:hover {
                    visibility: visible;
                }

                > ul {
                    visibility: visible;
                }

                .nav-item {
                    list-style: none;

                    a {
                        font-size: 15px;
                        color: #333;
                        line-height: 40px;
                        height: 40px;
                        margin: 0;
                        padding: 0;
                        text-decoration: none;
                        display: block;
                        position: relative;
                        transition: 0.15s ease-out;
                        font-weight: 700;
                    }

                    .nav-group__title {
                        font-size: 12px;
                        color: #999;
                        line-height: 26px;
                        margin-top: 15px;
                    }

                    .pure-menu-list {
                        a {
                            display: block;
                            height: 40px;
                            color: #444;
                            line-height: 40px;
                            font-size: 14px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            font-weight: 400;

                            &:hover {
                                color: #409eff;
                            }
                        }

                        .active {
                            color: #409eff;
                        }
                    }
                }
            }

            .content {
                flex: 1;
                width: 100%;
                padding: 0 50px 0 10px;
                margin-left: 240px;
            }
        }
    }
</style>


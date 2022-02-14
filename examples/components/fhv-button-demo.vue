<template>
    <div class="content-box">
        <h2 class="demo-title">Button 按钮</h2>
        <p class="demo-introduction">按钮用于开始一个即时操作。</p>
        <!--页面信息导航牟点-->
        <!--        <fhv-anchor>
                    <fhv-anchor-link href="button-simple" title="基础用法" />
                    <fhv-anchor-link href="button-disabled" title="禁用" />
                    <fhv-anchor-link href="button-circle" title="圆形按钮" />
                    <fhv-anchor-link href="button-customize" title="自定义颜色" />
                    <fhv-anchor-link href="button-block" title="block按钮" />
                    <fhv-anchor-link href="api" title="API" />
                </fhv-anchor>-->

        <!--基础用法DEMO-->
        <fhv-el-demo-block :height="315" :title="'基础用法'" id="button-simple">
            <template v-slot:demo>
                <div>
                    <fhv-button>Default</fhv-button>
                    <fhv-button type="success">Success</fhv-button>
                    <fhv-button type="primary">Primary</fhv-button>
                    <fhv-button type="danger">Danger</fhv-button>
                    <fhv-button type="warning">Warning</fhv-button>
                    <fhv-button icon="fhv-search" type="primary">Search</fhv-button>
                </div>
                <div>
                    <fhv-button type="dashed">Dashed</fhv-button>
                    <fhv-button type="dotted">Dotted</fhv-button>
                </div>
            </template>
            <template v-slot:code>
                <code class="html">{{fCode(simple.code.html)}}</code>
            </template>
        </fhv-el-demo-block>
    </div>
</template>


<script>
    export default {
        name: "fhv-button-demo",
        data() {
            return {
                a: document.getElementById('router_view_box'),
                simple: {
                    code: {
                        html: `
          <div>
            <fhv-button>Default</fhv-button>
            <fhv-button type="success">Success</fhv-button>
            <fhv-button type="primary">Primary</fhv-button>
            <fhv-button type="danger">Danger</fhv-button>
            <fhv-button type="warning">Warning</fhv-button>
            <fhv-button icon="shn-search" type="primary">Search</fhv-button>
          </div>
          <div>
            <fhv-button type="dashed">Dashed</fhv-button>
            <fhv-button type="dotted">Dotted</fhv-button>
          </div>
          `
                    }
                },
                disabled: {
                    code: {
                        html: `
          <fhv-button disabled>Default</fhv-button>
          <fhv-button type="primary" disabled>Primary</fhv-button>
          <fhv-button type="dashed" disabled>Dashed</fhv-button>
          <fhv-button type="danger" disabled>Danger</fhv-button>
          <fhv-button type="warning" disabled>Warning</fhv-button>
          `
                    }
                },
                circle: {
                    code: {
                        html: `
          <fhv-button circle shn="shn-user"></fhv-button>
          <fhv-button circle shn="shn-heart-fill" type="primary"></fhv-button>
          <fhv-button circle type="dashed"></fhv-button>
          <fhv-button circle shn="shn-delete-fill" type="danger"></fhv-button>
          <fhv-button circle shn="shn-plus" type="warning"></fhv-button>
          `
                    }
                },
                customize: {
                    code: {
                        html: `
          <fhv-button color="#2cbfbe" type="customize">customize</fhv-button>
          <fhv-button color="#2cbfbe" circle shn="shn-heart-fill" type="customize"></fhv-button>
          `
                    }
                },
                block: {
                    code: {
                        html: `
          <fhv-button block>Default</fhv-button>
          <fhv-button type="primary" block>Primary</fhv-button>
          <fhv-button type="dashed" block>Dashed</fhv-button>
          <fhv-button color="#2cbfbe" type="customize" block>customize</fhv-button>
          `
                    }
                },
                api: [
                    {
                        parameter: 'type',
                        description: '设置按钮类型',
                        dataTypes: 'String',
                        optional:
                            'default / primary / success / dashed / dotted / danger / warning / customize',
                        default: 'default'
                    },
                    {
                        parameter: 'animation',
                        description: '是否开启点击动画效果',
                        dataTypes: 'Boolean',
                        optional: 'true/false',
                        default: 'true'
                    },
                    {
                        parameter: 'disabled',
                        description: '是否禁用按钮',
                        dataTypes: 'Boolean',
                        optional: 'true/false',
                        default: 'false'
                    },
                    {
                        parameter: 'circle',
                        description: '是否圆形按钮',
                        dataTypes: 'Boolean',
                        optional: 'true/false',
                        default: 'false'
                    },
                    {
                        parameter: 'shn',
                        description: '图标类名',
                        dataTypes: 'String',
                        optional: '',
                        default: ''
                    },
                    {
                        parameter: 'color',
                        description: '自定义按钮颜色，必须将按钮类型设置为customize',
                        dataTypes: 'String',
                        optional: '',
                        default: ''
                    },
                    {
                        parameter: 'block',
                        description: '将按钮宽度调整为其父宽度的选项',
                        dataTypes: 'Boolean',
                        optional: 'true/false',
                        default: 'false'
                    }
                ]
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>

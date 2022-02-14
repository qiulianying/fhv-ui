<template>
  <div
          :class="[{'shn-anchor':!customize,'shn-anchor-left':position == 'left'},[anchorClass]]"
  >
    <div class="shn-anchor-ink">
      <span
              :class="{'visible':linkBallShow}"
              :style="{top:linkBallTop + 'px'}"
              class="shn-anchor-ink-ball"
      ></span>
    </div>
    <div class="shn-anchor-box">
      <slot></slot>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'FhvAnchor',
        props: {
            target: {
                type: String,
                default: 'window'
            },
            anchorClass: {
                type: String,
                default: ''
            },
            customize: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'right'
            }
        },
        data() {
            return {
                distance: 0,
                scollHeight: 0,
                clientHeight: 0,
                linkTotal: [],
                linkBallShow: false,
                linkBallTop: -18,
                index: 0
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>
<style lang="scss" scoped>
    .shn-anchor {
        z-index: 99;
        position: fixed;
        right: 10px;
        top: 135px;
        width: 150px;

        .shn-anchor-ink {
            position: absolute;
            height: 100%;
            left: 0;
            top: 0;

            &::before {
                content: ' ';
                position: relative;
                width: 2px;
                height: 100%;
                display: block;
                background-color: #e8e8e8;
                margin: 0 auto;
            }

            .shn-anchor-ink-ball {
                opacity: 0;
                position: absolute;
                width: 8px;
                height: 8px;
                border-radius: 8px;
                // border: 2px solid $--color-primary;
                border: 2px solid mix(#000, $--color-primary, 1);
                background-color: #fff;
                left: 50%;
                transition: all 0.3s ease-in-out;
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            }
        }

        .shn-anchor-box {
            font-family: 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue',
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
            font-size: 14px;
            font-variant: tabular-nums;
            line-height: 1.5;
            color: rgba(0, 0, 0, 0.65);
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            list-style: none;
            position: relative;
            padding-left: 2px;
        }
    }

    .shn-anchor-left {
        right: auto;
        left: 10px;

        .shn-anchor-ink {
            right: 0;
            left: auto;
        }

        .shn-anchor-box {
            text-align: right;
        }
    }
</style>

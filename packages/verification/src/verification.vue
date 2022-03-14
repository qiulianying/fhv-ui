<template>
    <div ref="dragContent" id="dragContent" class="dragContent">
        <div class="dragdiv" :style="{'height':verHeight+'px', 'line-height':verHeight+'px' }">
            <div class="drag_bg"></div>
            <div class="drag_text" :style="{'color': dragTextColor}">{{showText}}</div>
            <div ref="moveDiv" @mousedown="mousedownFn($event)" :class="{'handler_ok_bg':confirmSuccess}"
                 class="handler handler_bg"
                 :style="{'height': verHeight+'px'}"></div>
        </div>
    </div>
</template>

<script>
    /**
     * @author: 冯耀华
     * @Date: 2022/03/09 16:32
     */
    export default {
        name: 'fhv-verification',
        data() {
            return {
                beginClientX: 0,                /*距离屏幕左端距离*/
                mouseMoveStata: false,          /*触发拖动状态  判断*/
                maxwidth: '',                   /*拖动最大宽度，依据滑块宽度算出来的*/
                confirmSuccess: false,           /*验证成功判断*/
                dragTextColor: '#333',
                onRegion: false,                /*是否存在可执行区域*/
            }
        },
        computed: {
            showText() {
                return this.confirmSuccess ? this.confirmSuccessWords : this.confirmWords
            },
            NowHtml() {
                return document.getElementsByTagName('html')[0]
            },
            dragContent() {
                return document.getElementById('dragContent')
            }
        },
        props: {
            verHeight: {
                type: Number,
                default: 34
            },
            confirmWords: {
                type: String,
                default: ''
            },
            confirmSuccessWords: {
                type: String,
                default: '验证通过'
            }
        },
        methods: {
            // 重置
            verificationReload() {
                // 对全局页面写入鼠标移动以及鼠标重开事件的监听
                this.NowHtml.addEventListener('mousemove', this.mouseMoveFn);
                this.NowHtml.addEventListener('mouseup', this.moseUpFn)
                this.dragTextColor = '#333'
                document.getElementsByClassName('handler')[0].style.left = 0 + 'px';
                document.getElementsByClassName('drag_bg')[0].style.width = 0 + 'px';
                this.confirmSuccess = false
                this.$emit('returnVerification', false)
            },
            //mousedoen 事件
            mousedownFn(e) {
                if (!this.confirmSuccess) {
                    e.preventDefault && e.preventDefault();   //阻止文字选中等 浏览器默认事件
                    this.mouseMoveStata = true;
                    this.beginClientX = e.clientX;
                }
            },
            //验证成功函数
            successFunction() {
                this.confirmSuccess = true
                this.mouseMoveStata = false
                if (window.addEventListener) {
                    this.NowHtml.removeEventListener('mousemove', this.mouseMoveFn);
                } else {
                    this.NowHtml.removeEventListener('mousemove', () => {});
                }
                this.dragTextColor = '#fff'
                document.getElementsByClassName('handler')[0].style.left = this.maxwidth + 'px';
                document.getElementsByClassName('drag_bg')[0].style.width = this.maxwidth + 'px';
                // 以及验证成功
                this.$emit('returnVerification', true)
            },
            //鼠标移动事件mousemove事件
            mouseMoveFn(e) {
                if (this.mouseMoveStata && this.onRegion) {
                    let width = e.clientX - this.beginClientX;
                    if (width > 0 && width <= this.maxwidth) {
                        document.getElementsByClassName('handler')[0].style.left = width + 'px';
                        document.getElementsByClassName('drag_bg')[0].style.width = width + 'px';
                    } else if (width > this.maxwidth) {
                        this.successFunction();
                    }
                }
            },
            //鼠标松开mouseup事件
            moseUpFn() {
                if (!this.onRegion) {
                    return
                }
                this.mouseMoveStata = false;
                this.resultFunction()
            },
            resultFunction() {
                // 监听的同事确定是否属于成功情况
                if (this.confirmSuccess) {
                    if (window.addEventListener) {
                        this.NowHtml.removeEventListener('mouseup', this.moseUpFn);
                    } else {
                        this.NowHtml.removeEventListener('mouseup', () => {});
                    }
                } else {
                    document.getElementsByClassName('handler')[0].style.left = 0 + 'px';
                    document.getElementsByClassName('drag_bg')[0].style.width = 0 + 'px';
                    this.$emit('returnVerification', false)
                }
            },
            // 鼠标移入事件mouseenter：不把子元素算入，替代onmouseover
            onmouseoverFn() {
                this.onRegion = true
            },
            // 鼠标移出mouseleave：不把子元素算入，替代onmouseout
            onmouseoutFn() {
                this.onRegion = false
                this.mouseMoveStata = false
                this.resultFunction()
            }
        },
        mounted() {
            this.maxwidth = this.$refs.dragContent.clientWidth - this.$refs.moveDiv.clientWidth;
            // 对全局页面写入鼠标移动以及鼠标重开事件的监听
            this.NowHtml.addEventListener('mousemove', this.mouseMoveFn);
            this.NowHtml.addEventListener('mouseup', this.moseUpFn)
            this.dragContent.addEventListener('mouseenter', this.onmouseoverFn)
            this.dragContent.addEventListener('mouseleave', this.onmouseoutFn)
        }
    }
</script>

<style scoped lang="scss">
    .dragContent {
        padding: 15px 0;
        width: 100%;

        .dragdiv {
            position: relative;
            background-color: #e8e8e8;
            width: 100%;
            text-align: center;
        }
    }


    .handler {
        width: 40px;
        border: 1px solid #ccc;
        position: absolute;
        left: 0;
        top: 0;

        &:hover {
            cursor: grab;
        }
    }

    .handler_bg {
        background: #fff url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTEyNTVEMURGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTEyNTVEMUNGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MTc5NzNmZS02OTQxLTQyOTYtYTIwNi02NDI2YTNkOWU5YmUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YiRG4AAAALFJREFUeNpi/P//PwMlgImBQkA9A+bOnfsIiBOxKcInh+yCaCDuByoswaIOpxwjciACFegBqZ1AvBSIS5OTk/8TkmNEjwWgQiUgtQuIjwAxUF3yX3xyGIEIFLwHpKyAWB+I1xGSwxULIGf9A7mQkBwTlhBXAFLHgPgqEAcTkmNCU6AL9d8WII4HOvk3ITkWJAXWUMlOoGQHmsE45ViQ2KuBuASoYC4Wf+OUYxz6mQkgwAAN9mIrUReCXgAAAABJRU5ErkJggg==") no-repeat center;
    }

    .handler_ok_bg {
        background: #fff url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDlBRDI3NjVGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlBRDI3NjRGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNWEzMWNhMC1hYmViLTQxNWEtYTEwZS04Y2U5NzRlN2Q4YTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+k+sHwwAAASZJREFUeNpi/P//PwMyKD8uZw+kUoDYEYgloMIvgHg/EM/ptHx0EFk9I8wAoEZ+IDUPiIMY8IN1QJwENOgj3ACo5gNAbMBAHLgAxA4gQ5igAnNJ0MwAVTsX7IKyY7L2UNuJAf+AmAmJ78AEDTBiwGYg5gbifCSxFCZoaBMCy4A4GOjnH0D6DpK4IxNSVIHAfSDOAeLraJrjgJp/AwPbHMhejiQnwYRmUzNQ4VQgDQqXK0ia/0I17wJiPmQNTNBEAgMlQIWiQA2vgWw7QppBekGxsAjIiEUSBNnsBDWEAY9mEFgMMgBk00E0iZtA7AHEctDQ58MRuA6wlLgGFMoMpIG1QFeGwAIxGZo8GUhIysmwQGSAZgwHaEZhICIzOaBkJkqyM0CAAQDGx279Jf50AAAAAABJRU5ErkJggg==") no-repeat center;
    }

    .drag_bg {
        background-color: #7ac23c;
        height: 34px;
        width: 0;
    }

    .drag_text {
        position: absolute;
        top: 0;
        width: 100%;
        text-align: center;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
    }
</style>

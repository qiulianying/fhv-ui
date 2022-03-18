export default {
	//返回年月日时分秒 其实可以通过day.js更急便捷
	getTime(value) {
		let date = new Date(value);
		let y = date.getFullYear();
		let MM = date.getMonth() + 1;
		MM = MM < 10 ? ('0' + MM) : MM;
		let d = date.getDate();
		d = d < 10 ? ('0' + d) : d;
		let h = date.getHours();
		h = h < 10 ? ('0' + h) : h;
		let m = date.getMinutes();
		m = m < 10 ? ('0' + m) : m;
		let s = date.getSeconds();
		s = s < 10 ? ('0' + s) : s;
		return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
	},
	// 转金额并四舍五入 只能用于显示，不能用于数据比较
	toMoney(num) {
		if (num == null || num === '') return ''
		num = parseFloat(num).toFixed(2).toString().split('.')
		num[0] = num[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), '$1,')
		return num.join('.')
	},
	// 身份号脱敏潮流
	getUuid() {
		return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, c => {
			let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
			return v.toString(16)
		})
	},
	// 手机号脱敏处理
	phoneDesensitization(data) {
		return data.replace(/(\d{3})\d*(\d{4})/, '$1****$2')
	},
	// ajax请求取消
	promiseWithAbort(fetchPromise) {
		let abort = null
		const abortPromise = new Promise((resolve, reject) => {
			abort = () => reject('abort')
		})
		let promiseWithAbort = Promise.race([fetchPromise, abortPromise])
		promiseWithAbort.abort = abort
		return promiseWithAbort
	},
	promiseAbort(promiseWithAbort) {
		if (promiseWithAbort != null && promiseWithAbort.abort) {
			promiseWithAbort.abort()
		}
	},
	// 对于公共背景样式进行写入透明度处理
	colorRgb(color, opacityNum){
		var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
		var sColor = color.toLowerCase();
		if(sColor && reg.test(sColor)){
			if(sColor.length === 4){
				var sColorNew = "#";
				for(var i=1; i<4; i+=1){
					sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));
				}
				sColor = sColorNew;
			}
			//处理六位的颜色值
			var sColorChange = [];
			for(var i=1; i<7; i+=2){
				sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));
			}
			let newColor = ''
			if (opacityNum != undefined) {
				newColor = "rgba(" + sColorChange.join(",") + "," + opacityNum + ")";
			} else {
				newColor = "rgba(" + sColorChange.join(",") + ")";
			}
			return newColor
		}else{
			return sColor;
		}
	}
}

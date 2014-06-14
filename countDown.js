/*  http://penxx.pw/countdown.html
    written by penouc(pen25453@icloud.com)
    penouc.github.com */

(function() {

	var pattDat = /^([1][9][0-9][0-9]|[2][0][0-9][0-9])-([0]?[0-9]|[1][0-2])-([0-2]?[0-9]|[3][0-1])$/;   //判断日期的正则
	var pattTim = /^([0-1]?[0-9]|[2][0-3]):[0-5]?[0-9]:[0-5]?[0-9]$/;										 //判断时间的正则
	var leftSecond = 0;
    
	function countDown (year, month, day, hour, minute, second, element) {

		var length = arguments.length;
		var eleName = Array.prototype.pop.call(arguments);
		var tarEle = document.getElementById(eleName);

		if (length == 0 || !tarEle || length > 2 && length < 7) {
			alert('请输入正确的参数并且给定要添加倒计时的元素id')
			return;
		}
		if (length == 1) {
			leftSecond = 24*60*60;
			element = arguments[0];
		}
		if (length == 2) {
            leftSecond = arguments[0];
            element = arguments[1];
		}
		if (length == 7) {
			var dat = year + '-' + month + '-' + day;
			var tim = hour + ':' + minute + ':' + second;

			console.log(dat,pattDat.test(dat));
			console.log(tim,pattTim.test(tim));

			if (pattDat.test(dat) && pattTim.test(tim)) {
				var endTim  = new Date(year,month - 1,day,hour,minute,second);         //定义结束时间
				var currTim	= new Date();											   //获取当前时间
				var leftSecond = (endTim.getTime() - currTim.getTime())/1000;

			}
		}

		var o_day = Math.floor(leftSecond/(24*60*60));
		var o_hour = Math.floor((leftSecond - o_day*24*60*60)/(60*60));
		var o_minute = Math.floor((leftSecond - o_day*24*60*60 - o_hour*60*60)/60);
		var o_second = Math.floor(leftSecond - o_day*24*60*60 - o_hour*60*60 - o_minute*60);

		if (o_day < 0) {
			o_day = 0;
			o_hour = 0;
			o_minute = 0;
			o_second = 0;

			alert("不要回到过去");
			return ;
		}

		tarEle.innerHTML = o_day+":"+o_hour+":"+o_minute+":"+o_second;

	}

	setInterval(function(){countDown(2014,06,13,22,05,58,'ntp-contents')},1000);       //此处修改时间注入

})()
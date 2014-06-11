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
		console.log(length == 0 || document.getElementById(eleName));

		if (length == 0 && document.getElementById(eleName)) {
			alert('请输入参数并且给定要添加倒计时的元素id')
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
		if (length > 2 && length < 7) {
			alert('请输入正确的参数个数');
		}
		if (length == 7) {
			var dat = year + '-' + month + '-' + day;
			var tim = hour + ':' + minute + ':' + second;

			console.log(dat,pattDat.test(dat));
			console.log(tim,pattTim.test(tim));

			if (pattDat.test(dat) && pattTim.test(tim)) {
				var endTim  = new Date(year,month - 1,day,hour,minute,second);         //定义结束时间
				var currTim	= new Date();											   //获取当前时间						
			};
		};
	}

	countDown(2014,11,07,11,01,08,'popop');

})() 
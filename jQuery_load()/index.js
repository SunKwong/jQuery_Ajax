$(function(){
	// 异步加载一段HTML内容
	/*$('button').click(function(){
		$('#box').load('test.html')
	})*/
	// url后跟选择器，选择指定的html
	/*$('button').click(function(){
		$('#box').load('test.html .test2')
	})*/
	//获取php文件，get方式提交数据
	/*$('button').click(function(){
		$('#box').load('test.php?url=moocsk');
	})*/
	// 获取php文件，POST方式提交数据
	/*$('button').click(function(){
		$('#box').load('test.php',{
			url:'moocsk'
		})
	})*/
	// 回调函数
	$('button').click(function(){
		$('#box').load('test.php',{
			url:'moocsk'
		},function(response,stutas,xhr){
			// if(stutas=='success')alert('a')
			// alert(xhr.stutas)
			// alert(xhr.stutasText)
		})
	})
	
})
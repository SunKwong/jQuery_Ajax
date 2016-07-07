$(function(){
	// 通过直接在url后问号紧跟传参
	/*$('button').click(function(){
		$.get('test.php?url=moocsk',
		function(response,status,xhr){
			$('#box').html(response);
		})
	})*/
	// 通过第二个参数data，字符串形式的键值对传参，然后自动转换为问号紧跟传参
	/*$('button').click(function(){
		$.get('test.php',
			'url=moocsk',
			function(response,status,xhr){
				$('#box').html(response);
		})
	})*/
	// 通过第二个参数data，对象形式的键值对传参，然后自动转换为问号紧跟传参
	/*$('button').click(function(){
		$.get('test.php',{
				url:'moocsk'
			},function(response,status,xhr){
				$('#box').html(response);
		})
	})*/

	// post不可以使用url后跟问号的形式传参
	// post提交可以使用字符串形式的键值对传参，自动转换为http消息实体传参
	/*$('button').click(function(){
		$.post('test.php','url=moocsk',
		function(response,status,xhr){
			$('#box').html(response);
		})
	})*/
	// post传参可以使用对象键值对
	/*$('button').click(function(){
		$.post('test.php',{
			url:'moocsk'
		},function(response,status,xhr){
			$('#box').html(response);
		})
	})*/
	//本身是纯文本，如果强行按照XML或者json数据格式返回的话，那么就无法获取数据
	/*$('button').click(function(){
		$.post('test.php',{
			url:'moocsk'
		},function(response,status,xhr){
			$('#box').html(response);
		},'html')
	})*/
	// XML数据获取
	/*$('button').click(function(){
		$.post('test.xml',function(response,status,xhr){
			alert(response)		//[object XMLDocument]
			$('#box').html($(response).find('root').find('url').text());
		})
	})*/
	//获取Json数据
	/*$('button').click(function(){
		$.post('test.json',function(response,status,xhr){
			alert(response)		//[object Object]
			$('#box').html(response[0].url);
		})
	})*/
	/*
	1.GET 请求是通过 URL 提交的，而 POST 请求则是 HTTP 消息实体提交的；
	2.GET 提交有大小限制（2KB），而 POST 方式不受限制；
	3.GET 方式会被缓存下来，可能有安全性问题，而 POST 没有这个问题；
	4.GET 方式通过$_GET[]获取，POST 方式通过$_POST[]获取。(php方式)
	*/
})
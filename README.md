# InputListener
监听输入框是否正在输入还是输入完毕。onchange监听需要失去焦点，而InputListener是判断2s内无输入则认为输入完毕。毕竟有些需求是不能等输入框失去焦点的。

###  参数

```
1）ele 设置监听的输入框元素对象

2）TextInputing 正在输入回调方法，参数是当前文本框内容

3）TextInputEnd 输入完毕回调方法，参数是当前文本框内容
 
 ```


###  使用示例

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>监听输入事件</title>
	<!-- 引入监听类  src写 inputListener.js项目中实际位置-->
	<script type="text/javascript" src="./inputListener.js"></script>
</head>
<body>
	<input type="text" id="one">
	<script type="text/javascript">
		var one=document.getElementById("one");
		
		// 使用  one为要监听的输入框
		inputListener(one,
			function(value){
				console.log("正在输入回调···"+"内容为："+value);

			},
			function(value){
				console.log("输入完毕回调···"+"内容为："+value);
			});	
	</script>
</body>
</html>
```

###  结果展示

![images](https://github.com/zhaomoyang/InputListener/blob/master/%E7%BB%93%E6%9E%9C%E6%BC%94%E7%A4%BA.png?raw=true)

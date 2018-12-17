/**
 * author 赵默阳
 * Description 监听输入框是否正在输入还是输入完毕
 * date 2018.12.18
 * 
 * 参数：
 *  1）ele 设置监听的输入框元素对象
 *  2）TextInputing 正在输入回调方法，参数是当前文本框内容
 *  3）TextInputEnd 输入完毕回调方法，参数是当前文本框内容
 */

function inputListener(ele,TextInputing,TextInputEnd) {

    /**
     * 标记是否输入结束
     * true ---> 输入结束
     * false ---> 输入中
     */
    var end = false;

    // 记录当前输入框中的内容
    var nowValue = null;

    //  判断是否是IE浏览器
    var ie = !!window.ActiveXObject;
    if (ie) {

        // IE浏览器
        ele.onpropertychange = function() {
            var event = window.event;
            // console.log("IE--->输入中···");

            // 输入中···
            end = false;
            nowValue = ele.value;

            /**
             * 正在输入回调···
             * nowValue 当前文本框内容
             */
            TextInputing(nowValue,ele);  


            // 1s后是否输入完毕
            isInputEnd(nowValue);
            
            
        }
    } else {
        // 标准浏览器
        ele.oninput = function(event) {
            // console.log("标准浏览器--->输入中···");

            // 输入中···
            end = false;
            nowValue = ele.value;

            /**
             * 正在输入回调···
             * nowValue 当前文本框内容
             */
            TextInputing(nowValue);  

            // 1s后是否输入完毕
            isInputEnd(nowValue);
        }

    }

    function isInputEnd(nowValue) {
        // 判断1s后内容是否改变
        setTimeout(function() {
            // 获取到1s后输入框的内容
            var after1s = ele.value;
            // console.log("1s后的值为：" + after1s);

            // 如果获取到的值和1s前一样，视为输入完毕
            if (after1s === nowValue) {
                
                // console.log("输入完毕···");

                /**
             	 * 如果 标识end为false，说明这是第一次判断输入完毕，可以执行输入完毕回调。
                 * 防止引入输入太快，已经输入完毕，却有好几个计时器判断输入完毕了
                 * 只要一个计时器算出输入完毕了，剩下的就不必再执行。
                 */
            	if (!end) {
                	/**
                 	 * 输入完毕回调···  
                     * after1s 当前文本框内容
                     */
                	TextInputEnd(after1s);

                	end = true;
            	}
            }    
        }, 1000);
    }

}
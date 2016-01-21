/**
 * Created by tab on 1/15/16.
 */

//$(function() {
//    var src = this.css('background-image');
//    console.log(src);
//});

//点击按钮获取css属性：背景图片,并传递给呈现结果的容器
//电脑随机选择,随机获取choices数组中的元素

$('#console button').on(
    'click',
    function () {
        var result = $('#myChoice');
        var src = $(this).css('background-image');
        console.log(src);
        result.css('background-image', src);

            var number = Math.random()*10;
            number = Math.round(number) - 5;
            number = Math.abs(number);
            $('#computerChoice').css('background-image', choices[number]);

    }
);
//获取所有button的背景图地址，存为一个数组
//换一种不是方法的方法：直接存入所有可能的地址

var choices = ['url(img/paper.png)', 'url(img/rock.png', 'url(img/Spark.png', 'url(img/Sorssicer.png)', 'url(img/lizard.png)'];

//表象的功能实现了，如何实现比大小的过程呢？






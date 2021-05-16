//创建元素移动的效果
    function createMove(startLeftPosition, startTopPosition) {
        //元素移动的终止位置以及样式
        var tar = {
            left: startLeftPosition,
            top: startTopPosition,
            width: "20px",
            height: "20px",
            fontSize: "11px",
            opacity: 1
        };
        //创建移动的元素
        $(document.body).append(document.getElementById("c1"));
        //为创建的元素添加样式
        $("#c1").css({
            width: "60px",
            height: "60px",
            fontSize: "40px",
            /*backgroundColor: "red",*/
            position: "absolute",
            opacity: 0
        })
        //为创建的元素添加动画
        $("#c1").animate(tar, 1000,"linear",function() {
            $(this).removeAttr("class").css({
                width: "20px",
                height: "20px",
                /*backgroundColor: "blue",*/
                position: "absolute"
            });
            startShake(this,startLeftPosition);
 
        });
    }
 
    //设置抖动的效果
    function startShake(element,startLeftPosition) {
        var a = true;
        var count=0;
        var countShake = setInterval(function() {
            element.style.left = (a ? startLeftPosition-5: startLeftPosition+5) + 'px';
            a = !a;
            count++;
            if (count == 15){
                clearInterval(countShake);
            }
        }, 40);
    }
 
    createMove(200,200);
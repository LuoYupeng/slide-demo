var allButtons =$('#buttons').children()
var li =$('#images >li')
for(let i =0; i<allButtons.length; i++){

    $(allButtons[i]).on('click',function (e){
        var index =$(e.currentTarget).index()
        var p =index * -440
        $(li).css({transform:'translateX('+ p + 'px)'})
    })
}

var n = 0
var size = allButtons.length


var tmierId = setInterval(function () {
    n += 1
    allButtons.eq(n % size).trigger('click')
},2000)



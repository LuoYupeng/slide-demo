var allButtons =$('#buttons').children()
$(allButtons).eq(0).addClass('svg')

var titles =$('.title').children()
$(titles).eq(0).siblings().hide()

for(let i =0; i<allButtons.length; i++){

    $(allButtons[i]).on('click',function (e){
        var index =$(e.currentTarget).index()
        var p =index * -440
        $('#images').css({transform:'translateX('+ p + 'px)'})
        $(titles).eq(index).show()
            .siblings().hide()
        $(e.currentTarget)
        $(e.currentTarget).addClass('svg').siblings('.svg').removeClass('svg')
    })
}

var n = 0
var size = allButtons.length


var timerId = setInterval(function () {
    n += 1
    allButtons.eq(n % size).trigger('click')
},3000)

$('.wrapper').on('mouseenter',function () {
    clearInterval(timerId)
    console.log('暂停轮播')
})

$('.wrapper').on('mouseleave',function () {
    timerId = setInterval(function () {
        n += 1

        allButtons.eq(n % size).trigger('click')
    },3000)
    console.log('继续轮播')
})
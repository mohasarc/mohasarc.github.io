var imgSrc = [
    "./Public/Media/SwapSwop/1.jpg",
    "./Public/Media/SwapSwop/2.jpg",
    "./Public/Media/SwapSwop/3.jpg",
    "./Public/Media/SwapSwop/4-a.jpg",
    "./Public/Media/SwapSwop/4-b.jpg",
    "./Public/Media/SwapSwop/4-c.jpg",
    "./Public/Media/SwapSwop/4-d.jpg",
    "./Public/Media/SwapSwop/5.jpg",
    "./Public/Media/SwapSwop/6.jpg",
    "./Public/Media/SwapSwop/6-b.jpg",
    "./Public/Media/SwapSwop/6-c.jpg",
    "./Public/Media/SwapSwop/6-d.jpg",
    "./Public/Media/SwapSwop/7.jpg",
    "./Public/Media/SwapSwop/8.jpg",
]
var currImg = 0;
var image = $("#device");

var btnR = $('#btnR');
btnR.on("click", ()=>{
    currImg = (currImg + 1) % 14;
    console.log("R", currImg);
    image.attr('src', imgSrc[currImg]);
});

var btnL = $('#btnL');
btnL.on("click", ()=>{
    currImg = ((currImg - 1) % 14 + 14) % 14;
    console.log("L", currImg);
    image.attr('src', imgSrc[currImg]);
});
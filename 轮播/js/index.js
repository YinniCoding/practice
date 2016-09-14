var Carousel = {
	//传入容器
	init: function($carousel){
		this.$carousel = $carousel;
		console.log(this.$carousel);
		this.$pre = $carousel.siblings(".pre");
		this.$next = $carousel.siblings(".next");
		this.$nav = $carousel.siblings("#nav");
		this.$span = this.$nav.find("span");
		this.$img = $carousel.find("img");
		this.imgWidth = $carousel.find("img").width();
		this.imgSize = $carousel.find("img").length;
		//设置容器宽度
		this.$carousel.css("width",this.imgWidth * this.imgSize);
		//设置滚动点居中
		this.$nav.css("left",this.imgWidth / 2);
		this.$nav.css("marginLeft",0 - this.$nav.width() / 2);

		this.bind();
		this.autoSlider();
	},
	bind: function(){
		//hover停止滚动
		var that = this;
		this.$img.hover(function(){
			clearInterval(that.timer);
		},function(){
			that.autoSlider();
		});
		this.$pre.on("click",function(){
			that.showPre(that.$pre);
		});
		this.$next.on("click",function(){
			that.showNext(that.$next);
		});
		this.$span.on("click", function (e) {
			that.showAnyOne($(e.target));
		});
	},
	showPre: function($ele){
		var that = this;
		//防止多次点击
		var curLeft = this.$carousel.offset().left;
		var left = curLeft + this.imgWidth;

		if($ele === this.$pre){
			//到达头部置0
			if(curLeft === 0){
				left = 0 - (this.imgWidth * (this.imgSize - 1));
			}
		}else {
			left = ($ele.attr("index") - 1) * this.imgWidth;
		}
		this.doSlide(left);
	},
	showNext: function($ele){
		var that = this;
		//防止多次点击
		var curLeft = this.$carousel.offset().left;
		var left = curLeft - this.imgWidth;

		if($ele === this.$next){
			//到达尾部置0
			if(curLeft === (0 - this.imgWidth * (this.imgSize - 1))){
				left = 0;
			}
		}else {
			left = ($ele.attr("index") - 1) * this.imgWidth;
		}
		this.doSlide(left);
	},
	showAnyOne: function ($ele) {
		var curLeft = this.$carousel.offset().left;
		var left = 0 - ($ele.attr("index") - 1) * this.imgWidth;
		this.doSlide(left);
	},
	autoSlider: function(){
		var that = this;
		this.timer = setInterval(function(){
			that.$next.click();
		},3000)
	},
	setActive: function(left){
		var index = Math.abs(left) / this.imgWidth + 1;
		this.$nav.find(".on").removeAttr("class");
		this.$nav.find("span:nth-child(" + index + ")").attr("class","on");
	},
	doSlide: function (left) {
		var that = this;
		if(!window.processing){
			window.processing = true;
			this.setActive(left);
			this.$carousel.animate({
				left: left
			},1000,function(){
				window.processing = false;
			});
		}
	}
};

var exports = function ($container) {
	 return Carousel.init($container);
}

window.exports = exports;

//Usage:
//Carousel.init($("#c1"));
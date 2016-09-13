var Carousel = {
	//传入容器
	init: function($carousel){
		this.$carousel = $carousel;
		console.log(this.$carousel);
		this.$pre = $carousel.siblings(".pre");
		this.$next = $carousel.siblings(".next");
		this.$nav = $carousel.find("#nav");
		this.$img = $carousel.find("img");
		this.imgWidth = $carousel.find("img").width();
		this.imgSize = $carousel.find("img").length;
		//设置容器宽度
		this.$carousel.css("width",this.imgWidth * this.imgSize);
		//设置滚动点居中
		this.$nav.css("left",this.imgWidth / 2);
		this.$nav.css("margin-left",0 - this.imgWidth / 2);

		console.log(this.$next);
		this.bind();
		this.autoSlider();
	},
	bind: function(){
		//hover停止滚动
		var that = this;
		this.$img.on("click",function(){
			clearInterval(that.timer);
		},function(){
			that.autoSlider();
		});
		this.$pre.on("click",function(){
			that.showPre(this);
		});
		this.$next.on("click",function(){
			that.showNext(that.$next);
		});
	},
	showPre: function(){
		//防止多次点击
		this.$pre.attr("disabled",true);
		this.$next.attr("disabled",true);
		var curLeft = this.$carousel.offset().left;
		var left = curLeft + this.$imgWidth;

		if($ele === $(this.$next)){
			if(!$ele.attr("disabled")){
				//到达尾部置0
				if(curLeft === 0){
					left = 0 - (this.$imgWidth * (this.$imgSize - 1));
				}
			}
		}else {
			left = ($ele.attr("index") - 1) * this.$imgWidth;
		}
		this.setActive(left);
		this.$carousel.animate({
			left: left
		},1000,function(){
			this.$pre.attr("disabled",false);
			this.$next.attr("disabled",false);
		});
	},
	showNext: function($ele){
		console.log($ele);
		console.log(this.$next);
		//防止多次点击
		this.$pre.attr("disabled",true);
		this.$next.attr("disabled",true);
		var curLeft = this.$carousel.offset().left;
		var left = curLeft - this.$imgWidth;

		if($ele === this.$next[0]){
			if(!$ele.attr("disabled")){
				//到达尾部置0
				if(curLeft === (0 - this.$imgWidth * (this.$imgSize - 1))){
					left = 0;
				}
			}
		}else {
			left = ($ele.attr("index") - 1) * this.$imgWidth;
		}
		this.setActive(left);
		this.$carousel.animate({
			left: left
		},1000,function(){
			this.$pre.attr("disabled",false);
			this.$next.attr("disabled",false);
		});
	},
	autoSlider: function(){
		var that = this;
		this.timer = setInterval(function(){
			that.$next.click();
		},3000);
	},
	setActive: function(left){
		var index = Math.abs(left) / this.imgWidth + 1;
		this.$nav.find(".on").removeAttr("class");
		this.$nav.find("span:nth-child(" + index + ")").attr("class","on");
	}
};

Carousel.init($("#c1"));
  
Function.prototype.extends = function(parent,extend){//parent构造器 extend对象
	for(var prop in parent.prototype){//迭代构造器中的功能
		this.prototype[prop] = parent.prototype[prop];
	}
	for(var prop in extend){//迭代对象中的功能
		this.prototype[prop] = extend[prop];
	}
}

//扑克牌对象

function PukeCard(count){//传进来几副牌count
	this.count = count || 1;//默认是1副牌
	this.cards = [];//牌面  装整个牌的容器
	this.init();
}

PukeCard.prototype = {
	//初始化牌 让cards里面添加扑克
	init:function(){
		for(var k=0;k<this.count;k++){//有多副牌
			//一副牌52张
			for(var i=1;i<=4;i++){//4个牌色  循环黑桃 红桃 梅花 ..
				for(var j=1;j<=13;j++){//一个花面13张牌
					this.cards.push({//把牌封装成对象
						point:(j>10?10:j),//点数
						color:i,//花色
						src:"images/"+i+"/"+j+".jpg"//图片
					});//往this.cards添加对象
				}
			}
		}
		this.shuffle();
		console.log(this.cards);
		console.log(this.cards.length);
	},
	//洗牌的功能
	shuffle:function(){
		this.cards.sort(function(c1,c2){
			//随机数 乱序排序
			return (Math.random()*100<<2)%3-1;//-1 0 1
		});
	},
	//发牌的方法
   sendCard:function(){
		return this.cards.pop();
   }
	
};

var puke = new PukeCard(1);

//测试扑克牌的功能
/*
window.onload = function(){

	for(var i=0;i<puke.cards.length;i++){
		var img = document.createElement("img");
		img.src = puke.cards[i].src;
		document.body.appendChild(img);
	}
	document.body.appendChild(document.createElement("hr"));
	var card = puke .sendCard();
	var img = document.createElement("img");
	img.src = card.src;
	document.body.appendChild(img);

	document.body.appendChild(document.createElement("hr"));

	for(var i=0;i<puke.cards.length;i++){
		var img = document.createElement("img");
		img.src = puke.cards[i].src;
		document.body.appendChild(img);
	}
	
}
*/


//玩家对象

function Player(name){
	this.name = name;
	this.point = 0;//点数
	this.cards = [];//牌面
}

Player.prototype = {
	//收到一张牌
	putCard : function(){
		this.cards.push(card);//往数组中加牌
	},
	//获得当前的总点数 返回去
	getPoint : function(flag){
		//true 代表的是给出明牌的点数（给comp用）
		if(flag){
			
		}else{//flase 代表的是给出所有牌的点数（这个给game用）
			
		}
		return 0;
	},
	//是否要牌方法 抽象方法 人脑和电脑判断逻辑不同 返回true 要
	isNeedCard :function(){
		 
	}

};

//普通玩家
function User(name){
	Player.call(this,name);
}

User.extends(Player,{
	isNeedCard :function(need){
		 return need;
	}
});


//电脑玩家

function Comp(name){
	Player.call(this,name);
}

Comp.extends(Player,{
	isNeedCard :function(userPoint){
		//AI智能判断
		 return need;
	}
});



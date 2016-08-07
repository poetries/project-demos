  
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
		this.shuffle();//洗牌
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
		if(this.cards.length ==0){
			this.init();
		}
		return this.cards.pop();

	}
	
};



//玩家对象

function Player(name){
	this.name = name;
	this.point = 0;//点数
	this.cards = [];//牌面
}

Player.prototype = {
	//收到一张牌
	putCard : function(card){
		this.cards.push(card);//往数组中加牌
	},
	//获得当前的总点数 返回去
	getPoint : function(flag){
		//true 代表的是给出明牌的点数（给comp用）
		/*
		if(flag){
			var sum = 0;//总共的点数
			for(var i=1;this.cards.length;i++){
				sum += this.cards[i].point;
			}
		}else{//flase 代表的是给出所有牌的点数（这个给game用）
			for(var i=0;this.cards.length;i++){
				sum += this.cards[i].point;
			}			
		}
		*/
	
		if(flag){
			var sum = 0;//总共的点数
			for(var i=(flag?1:0);i<this.cards.length;i++){
				sum += this.cards[i].point;
			}
		}	
		return sum;
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


function Game21Point(user,compCount,pukeCount){
	this.user = user;
	this.compCount = compCount;
	this.players = [];//所有的玩家都在这里
	this.puke = new PukeCard(pukeCount);
	this.init();
}

Game21Point.prototype = {
	init:function(){
		this.players.push(this.user);
		for(var i=0;i<compCount;i++){
			this.players.push(new Comp("电脑"+(i+1)));
		}
	},
	play:function(){
		for(var i=0;i<this.players.length;i++){//循环下来每个人发了两张牌
			this.players[i].putCard(this.puke.sendCard());//this.puke.sendCard()把发牌的结果放在this.players[i]中 暗牌
			this.players[i].putCard(this.puke.sendCard());//第2张牌 明牌
		}
	},
	round:function(isNeed){
		isNeed = this.players[0].isNeedCard(isNeed);//this.players[0]  用户
		if(isNeed){//用户是否还要牌
			this.players[0].putCard(this.puke.sendCard());
		}
		for(var i=1;i<this.players.length;i++){//电脑是否需要发牌
			if(this.players[i].isNeedCard(this.players[0].getPoint(true))){//传入用户明牌点数 true 代表的是给出明牌的点数（给comp用）
				this.players[i].putCard(this.puke.sendCard());
			}
		}		
	}

	
};

//测试扑克牌的功能
/*
window.onload = function(){
var puke = new PukeCard(1);
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


//特殊返回的点数
/*
window.onload = function(){

	var puke = new PukeCard(1);
	var card =puke.sendCard();
	var xiaoming = new User("小明");
	xiaoming.putCard(card);
	card =puke.sendCard();
	console.log(card);
	xiaoming.putCard(card);
	card =puke.sendCard();
	console.log(card);
	xiaoming.putCard(card);
	console.log(xiaoming.getPoint(true));
}
*/
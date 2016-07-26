### 需求分析

---


- 我1：(K)暗牌 2 9
- 玩家2：(J)暗牌 Q

- 原则：

	- 如果人脑的牌面上的点数比我（电脑）目前的大，必须要
    - 如果我们的牌面已经比他大，那么这个时候，我们要不要牌就通过几率来判断
	- 如果离21点还少1-2个点，要牌的概率就是10%
	- 如果离21点还少3-5个点，要牌的概率就是25%
	- 如果离21点还少6-9个点，要牌的概率就是50%
	- 如果离21点还少10个点以上，要牌的概率就是100%

- 牌面：
	- A-10，J=10 Q=10 K=10 
	- Q=10 A=11 21

- AI智能
- 最简单AI智能

- 21点游戏

	- 1.由一个玩家和N个电脑玩家组成
	- 2.玩家是庄家，电脑的个数由参数决定

---

```JavaScript	
function Player(name){}
	function User(name){}
	function Comp(name){}
//玩家对象应该保存当前所持有的牌面（数组）
//玩家对象应该有一个方法用来获得当前牌面的点数
//玩家对象应该还有一个功能，要不要牌
var zs = new User('zs');
new Comp('dushen');
new Comp('dusheng');
new Comp('duxia');
new Comp('duba');

//第一个参数代表玩家对象
//第二个参数代表的是电脑的个数
//第三个参数代表的是几副牌（默认为1）
function Game21Point(wj,count){
	this.puke = new Puke(count);
}
//派牌的功能（前提是某个玩家要牌）
//裁决的功能，点数>21点，这个玩家就出局（状态位）
	            如果庄家（玩家）是21点，那么游戏提前结束
new Game21Point(zs,4,2);

//洗牌的功能  shuffle = sort随机排序
//抽一张牌的功能 cards.pop()（抽完一张牌，cards里面就要少一个牌）
function Puke(count){
	this.cards = [];
	this.init();//初始化扑克
}

```

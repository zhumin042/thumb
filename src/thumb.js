//父类
class PraseButton{
	//构造方法
	constructor(dom, num){
		this.dom = dom;
		this.num = num;
	}

	addAction(){
		this.dom.click = function(){
			this.num++;
		}
	}


}

//子类
class Thumb extends PraseButton{
	constructor(dom, num){
		super()
	}
}

export default{
	Thumb
}
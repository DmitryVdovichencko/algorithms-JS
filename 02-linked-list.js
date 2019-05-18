/* 
	linked list is a data structure where one element is a link to another
*/
class LinkedList {
	constructor(a,b){
			super(a,b);
	}
	createList(this){
		const List = {
			"first":this.a,
			"second":this.b
			 };
		return List;
	}
}

const targetList = new LinkedList(3,2);
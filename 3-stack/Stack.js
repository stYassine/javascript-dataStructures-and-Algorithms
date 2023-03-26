class StackNode{
   constructor(value){
      this.value = value;
      this.next = null;
   }
}

class Stack{
   constructor(){
      this.top = null;
      this.length = 0;
   }

   /// Add Item to the Stack
   push(value){
      let newNode = new StackNode(value);

      if(this.length === 0){
         this.top = newNode;
      }else{
         newNode.next = this.top;
         this.top = newNode;
      }
      this.length++;

      return newNode;
   }

   // remove item from the Stack
   pop(){
      if(this.length === 0) return undefined;

      let temp = this.top;
      this.top = this.top.next; /// reference top
      temp.next = null; /// break connection

      this.length--;

      return temp;
   }

}
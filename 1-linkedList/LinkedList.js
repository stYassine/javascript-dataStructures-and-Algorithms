class LinkedListNode{
   constructor(value){
      this.value = value;
      this.next = null;
   }
}

class LinkedList{
   constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   // push item at the end of the LinkedList
   push(value){
      const newNode = new LinkedListNode(value);

      if(!this.head){
         this.head = newNode;
         this.tail = newNode;
      }else{
         this.tail.next = newNode;
         this.tail = newNode; /// point to the last item
      }
      this.length++;

      /// Return this : means return the entire LinkedList
      // return this;
      return newNode;
   }

   /// Remove Last Item
   pop(){
      if(!this.head){
         return undefined;
      }

      let currentNode = this.head;
      let pre = this.head;

      while(currentNode.next){
         pre = currentNode;

         currentNode = currentNode.next;
      }
      this.tail = pre;
      this.tail.next = null;

      this.length--;

      if(this.length === 0){
         this.head = null;
         this.tail = null;
      }

      return currentNode;
   }

   /// Add Item at the Beginning of the list
   unshift(value){
      const newNode = new LinkedListNode(value);

      if(!this.head){
         this.head = newNode;
         this.tail = newNode;
      }else{
         newNode.next = this.head;
         this.head = newNode;
      }
      this.length++;

      return newNode;
   }
   /// remove first item
   shift(){
      /// if List is Empty
      if(!this.head){
         return undefined;
      }

      /// If We Have 2 or more Items
      let removedHead = this.head;
      this.head = this.head.next;

      this.length--;

      if(this.length === 0){
         this.tail = null;
      }
      removedHead.next = null;

      return removedHead;
   }

   /// Get Item at Index
   get(index){
      if(index < 0 || index >= this.length){
         return undefined;
      }

      let currentNode = this.head;
      for(let i = 0; i < index; i++){
         currentNode = currentNode.next;
      }
      
      return currentNode;
   }

   /// Change Value of Node at Specific Index
   set(index, value){
      if(index < 0 || index >= this.length){
         return undefined;
      }

      let currentNode = this.get(index);
      if(currentNode){
         currentNode.value = value;
         return true;
      }

      return false;
   }
   /// Add New Node at a Particular Index
   insert(index, value){
      if(index < 0 || index >= this.length) return false;
      if(index === 0) return this.unshift(value);
      if(index === this.length) return this.push(value);

      let newNode = new LinkedListNode(value);
      let temp = this.get(index - 1);

      newNode.next = temp.next;
      temp.next = newNode;
      this.length++;

      return true;
   }
   /// remove an Item from a Particular Index
   remove(index){
      if(index < 0 || index >= this.length) return undefined;
      if(index == this.length - 1) return this.pop();
      if(index == 0) return this.shift();
      
      const preTemp = this.get(index - 1);
      const temp = preTemp.next;

      preTemp.next = temp.next;
      temp.next = null;
      this.length--;

      return temp;
   }
   /// Reverse the LinkedList
   reverse(){
      /// take head & tail & switch them
      let temp = this.head;
      this.head = this.tail;
      this.tail = temp;

      let prev = null;
      let next = temp.next;

      for(let i = 0; i < this.length; i++){
         next = temp.next;
         temp.next = prev;
         prev = temp;
         temp = next;
      }

      return this;
   } 

   /// return the LinkedList values in an array
   toArray(){

   }

   toString(){

   }

}

const linkedList = new LinkedList();
linkedList.push(11);
linkedList.push(3);
linkedList.push(23);



console.log(JSON.stringify(linkedList));
console.log("===================================");

linkedList.reverse();

console.log(JSON.stringify(linkedList));

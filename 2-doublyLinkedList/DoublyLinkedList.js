class DoublyLinkedListNode{
   constructor(value, prev=null, next=null){
      this.value = value;
      this.prev = prev;
      this.next = next;
   }
}

class DoublyLinkedList{
   constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
   }


   // push item at the end of the DoublyLinkedList
   push(value){
      const newNode = new DoublyLinkedListNode(value);

      if(!this.head){
         this.head = newNode;
         this.tail = newNode;
      }else{
         this.tail.next = newNode;
         newNode.prev = this.tail;
         this.tail = newNode;
      }
      this.length++;

      return newNode;
   }

   /// Remove Last Item
   pop(){
      if(!this.head) return undefined;

      let temp = this.tail;

      if(this.length === 1){
         this.head = null;
         this.tail = null;
      }else{
         this.tail = this.tail.prev;
         this.tail.next = null;
         temp.prev = null;
      }
      this.length--;

      return temp;
   }

   /// Add Item at the Beginning of the list
   unshift(value){
      let newNode = new DoublyLinkedListNode(value);

      if(!this.head){
         this.head = newNode;
         this.tail = newNode;
      }else{
         newNode.next = this.head;
         this.head.prev = newNode;
         this.head = newNode;
      }
      this.length++;

      return newNode;
   }

   /// remove first item
   shift(){
      if(!this.head) return undefined;

      let temp = this.head;
      
      if(this.length === 1){
         this.head = null;
         this.tail = null;
      }else{
         this.head = this.head.next;
         this.head.prev = null;
         temp.next = null;
      }
      this.length--;
      
      return temp;
   }
   
   /// Get Item at Index
   get(index){
      if(index < 0 || index >= this.length) return undefined;
      if(!this.head) return undefined;

      let temp;

      if(index < this.length/2){
         /// Start from Head
         temp =  this.head;
         for(let i = 0; i < index; i++){
            temp = temp.next;
         }
      }else{
         /// Start from Tail
         temp =  this.tail;
         for(let i = this.length-1; i > index; i--){
            temp = temp.prev;
         }
      }

      return temp;
   }

   /// Change Value of Node at Specific Index
   set(index, value){
      if(!this.head) return undefined;
      if(index < 0 || index >= this.length) return undefined;
      let temp = this.get(index);

      if(temp){
         temp.value = value;
         return true;
      }

      return false;
   }

   /// Add New Node at a Particular Index
   insert(index, value){
      if(index < 0 || index >= this.length) return false;
      if(index === 0) this.unshift(value); /// Insert at the Beginning
      if(index === this.length) this.push(value); /// Insert at the End

      const newNode = new DoublyLinkedListNode(value);

      const before = this.get(index - 1);
      const after = before.next;
      
      before.next = newNode;
      newNode.prev = before;
      newNode.next = after;
      after.prev = newNode;

      this.length++;

      return true;
   }

   /// remove an Item from a Particular Index
   remove(index){
      if(index < 0 || index >= this.length) return undefined;
      if(index === 0) this.shift(); /// Insert at the Beginning
      if(index === this.length-1) this.pop(); /// Insert at the End

      let temp = this.get(index);

      temp.prev.next = temp.next;
      temp.next.prev = temp.prev;
      temp.next = null;
      temp.prev = null;

      this.length--;

      return temp;
   }

}
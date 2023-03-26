class QueueNode{
   constructor(value){
      this.value = value;
      this.next = null;
   }
}

class Queue{
   constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
   }

   /// Insert Item at the End
   enqueue(value){
      const newNode = new QueueNode(value);
      
      if(this.length === 0){
         this.first = newNode;
         this.last = newNode;
      }else{
         this.last.next = newNode; /// Add to the list
         this.last = newNode; /// Reference
      }
      this.length++;

      return newNode;
   }

   /// remove is going to remove the first
   dequeue(){
      if(!this.first) return undefined;

      let currentNode = this.first; /// the removed Node

      if(this.length === 1){
         this.last = null;
      }else{
         this.first = this.first.next; /// reference
         currentNode.next = null; /// remove connection
      }
      this.length--;

      return currentNode;
   }

}


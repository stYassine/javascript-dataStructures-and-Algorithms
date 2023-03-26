class BSTNode{
   constructor(value){
      this.value = value;
      this.right = null;
      this.left = null;
   }
}

class BST{
   constructor(){
      this.root = null;
   }
   /// Add new Node
   insert(value){
      const newNode = new BSTNode(value);

      if(!this.root){
         this.root = newNode;
         return newNode;
      }
      let temp = this.root;
      /// Keep Running Until it hits a Return Statement
      while(true){
         /// Check if the newNode value is Equal to the Current Node
         if(newNode.value === temp.value) return undefined;

         /// Add to the Left 
         if(newNode.value < temp.value){
            /// if left position is open
            if(!temp.left){
               temp.left = newNode;
               return this;
            }
            /// do the whole process again starting from the current Node
            temp = temp.left;
         /// Add to the Right
         }else{
            if(!temp.right){
               temp.right = newNode;
               return this;
            }
            /// do the whole process again starting from the current Node
            temp = temp.right;
         }
      }
   }

   /// Check is Tree Contains a node
   contains(value){
      if(!this.root) return false;

      let temp = this.root;

      /// while temp is not null
      while(temp){
         if(value < temp.value){
            temp = temp.left;
         }else if(value > temp.value){
            temp = temp.right;
         /// if it's Equal return true
         }else{
            return true;
         }
      }

      return false;
   }


   /// Breadth First Search
   BFS(){
      let currentNode = this.root;
      let queue = [];
      let results = [];

      // Push the Entire Node with Left, Right ...
      queue.push(currentNode);

      while(queue.length){
         currentNode = queue.shift(); // remove first item from Queue
         results.push(currentNode.value); // add current Node value 
         if(currentNode.left) queue.push(currentNode.left);
         if(currentNode.right) queue.push(currentNode.right);
      }
      return results;
   }

   // Depth First Search (Pre order)
   DFSPreOrder(){
      let results = [];

      function traverse(currentNode){
         results.push(currentNode.value);
         if(currentNode.left) traverse(currentNode.left);
         if(currentNode.right) traverse(currentNode.right);
      }
      traverse(this.root);
      
      return results;
   }

   // Depth First Search (Post order)
   DFSPostOrder(){
      let results = [];

      function traverse(currentNode){
         if(currentNode.left) traverse(currentNode.left);
         if(currentNode.right) traverse(currentNode.right);
         results.push(currentNode.value);
      }
      traverse(this.root);

      return results;
   }

   // Depth First Search (In order)
   DFSInOrder(){
      let results = [];

      function traverse(currentNode){
         if(currentNode.left) traverse(currentNode.left);
         results.push(currentNode.value);
         if(currentNode.right) traverse(currentNode.right);
      }
      traverse(this.root);

      return results;
   }

}

let myBST = new BST();
myBST.insert(5);
myBST.insert(3);
myBST.insert(10);
myBST.insert(12);
myBST.insert(15);
myBST.insert(20);
myBST.insert(55);

console.log(myBST.contains(1));

console.log(myBST.BFS());

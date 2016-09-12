"use strict";


/**
 * The class that will be used to create the Binary Search tree node objects
 * each Node holds some type of value, and has references to it's left and
 * right children:
 */

class Node {

    constructor (val,left,right) {
        this.value = val;
        this.leftChild = left;
        this.rightChild = right;
    }

    /**
     * recursive add method that will be called on the root node
     * adds a value to the subtree under this node:
     * @param value: value to add to this node
     */
    add (value) {

        if (this.leftChild == undefined && value < this.value)  {
            this.leftChild = new Node(value,undefined,undefined);
            return;
        }

        if (this.rightChild == undefined && value >= this.value) {
            this.rightChild = new Node(value,undefined,undefined);
            return;
        }


      if (value >= this.value)
          this.rightChild.add(value);

      if  (value < this.value)
          this.leftChild.add(value);
     }

    /**
     *
     * @param value: the value to check for in the subtree under this node
     * @returns true if the subtree under this node contains the value
     */
    contains (value) {
         if (this.value == value)
             return true;

         if (this.leftChild!=undefined && value < this.value)
              return this.leftChild.contains(value);

         if (this.rightChild!=undefined && value >= this.value)
             return this.rightChild.contains(value);

          return false;
    }

    /**
     *
     * @param count: the value to start the recursion (since this will be called on the root node of the BST)
     * count will have an initial value of 0.
     * @returns the height of the subtree under this node
     */
    height (count) {

        if (this.leftChild == undefined && this.rightChild == undefined)
            return count;

        var leftHeight = 0;
        var rightHeight = 0;

        if (this.leftChild != undefined)
            leftHeight = this.leftChild.height(count+1);

        if (this.rightChild != undefined)
            rightHeight = this.rightChild.height(count+1);

        if (leftHeight >= rightHeight)
            return leftHeight;
        else
            return rightHeight;
    }


    /**
     * find the count of the number of nodes in the smallest branch of the binary search tree
     * this, together with the height method, should give a good indication as to how balanced the tree
     * is.
     *
     * @param count: the value to start the recursion
     * @returns the smallest number of nodes in one branch, for the subtree under this node
     */

    minDepth (count) {
        if (this.leftChild == undefined && this.rightChild == undefined)
            return count;

        var leftHeight = 0;
        var rightHeight = 0;

        if (this.leftChild != undefined)
            leftHeight = this.leftChild.height(count+1);

        if (this.rightChild != undefined)
            rightHeight = this.rightChild.height(count+1);

        if (leftHeight <= rightHeight)
            return leftHeight;
        else
            return rightHeight;
    }


    /**
     * simple preorder traversal performed under the subtree of this node:
     */
    preOrderTraversal () {
         console.log(this.value);

         if (this.leftChild != undefined)
             this.leftChild.preOrderTraversal();
         if (this.rightChild != undefined)
            this.rightChild.preOrderTraversal();
     }

}




/**
 * The Class for creating a new Binary Search Tree Object. It will have one node reference
 * pointing to the root node of the BinarySearchTree:
 */

class BinarySearchTree {

    constructor (root) {
        this.rootNode = root;
    }

    /**
     *  add a new tree node with the specified value to the binary search tree:
     */
    add (value) {

     if (this.rootNode == undefined) {
         var newNode = new Node(value,null,null);
         this.rootNode = newNode;
     }

     else
         this.rootNode.add(value);

     }

    /**
     * check if this Binary Search Tree contains the specified value
     *
     * @param value
     * @returns true, if this BST does contain 'value'
     */
     contains (value) {
         if (this.rootNode == undefined)
             return false;

         return this.rootNode.contains(value);

     }

    /**
     * the height of the binary search tree is 0 based, so a tree with one node
     * will have heigth 0
     *
     * @returns the height of this binary search tree
     */

    height () {
         if (this.rootNode == undefined)
             return 0;
         return this.rootNode.height(0);
    }


    minDepth () {
        if (this.rootNode == undefined)
            return 0;
        return this.rootNode.minDepth(0);
    }

    /**
     * For debugging and testing, prints a pre-order traversal of all the values in this BST:
     */
    printBST () {
        if (this.rootNode == undefined)
            return;
        this.rootNode.preOrderTraversal();
    }


}

var BST = new BinarySearchTree(undefined);
var testCollection = [7,5,6,4,15,10,11,40,8,9];//[10,8,2,3,6,5,1,7,16,18,11];
for (var i = 0; i < testCollection.length;i++)
    BST.add(testCollection[i]);


BST.printBST();
console.log(" ----------------------------------- ");
console.log("Height of BST: " + BST.height());
console.log("Min Depth of BST: " + BST.minDepth());








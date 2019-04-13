const BinarySearchTree = require("./tree.js");

const createTestTree = () => {
  // create an object for the BinarySearchTree
  return new BinarySearchTree();
};

const createTestTreeStructure = BST => {
  // Inserting nodes to the BinarySearchTree
  BST.insert(15);
  BST.insert(25);
  BST.insert(10);
  BST.insert(7);
  BST.insert(22);
  BST.insert(17);
  BST.insert(13);
  BST.insert(5);
  BST.insert(9);
  BST.insert(27);

  return BST;
};

module.exports = { createTestTree, createTestTreeStructure };

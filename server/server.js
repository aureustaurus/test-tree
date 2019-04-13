const config = require("../config/config.js");
const express = require("express");
const app = express();

const {
  createTestTree,
  createTestTreeStructure
} = require("../helpers/createTestTree.js");

const env = process.NODE_ENV || "dev";
const port = config[env].port || 6000;

app.get("/", (req, res) => {
  console.log("ROOT");
  const tree = createTestTree();
  createTestTreeStructure(tree);
  console.log("TREE IS:", JSON.stringify(tree));

  //          15
  //         /  \
  //        10   25
  //       / \   / \
  //      7  13 22  27
  //     / \    /
  //    5   9  17

  let root = tree.getRootNode();
  console.log("root IS:", root);
  tree.inorder(root);
  console.log("new tree 1", JSON.stringify(tree));
  tree.remove(5);
  console.log("without 5", JSON.stringify(tree));

  //          15
  //         /  \
  //        10   25
  //       / \   / \
  //      7  13 22  27
  //       \    /
  //        9  17

  root = tree.getRootNode();

  tree.remove(7);
  console.log("new tree 2", JSON.stringify(tree));

  var root = tree.getRootNode();

  // prints 9 10 13 15 17 22 25 27
  tree.inorder(root);

  // Removing node with two children
  tree.remove(15);

  //          17
  //         /  \
  //        10   25
  //       / \   / \
  //      9  13 22  27

  var root = tree.getRootNode();
  console.log("inorder traversal");

  // prints 9 10 13 17 22 25 27
  tree.inorder(root);

  console.log("postorder traversal");
  tree.postorder(root);
  console.log("preorder traversal");
  tree.preorder(root);

  res.send("Have done!");
});

app.listen(port || 6000, () => {
  console.log(`Listening port ${port}!`);
});

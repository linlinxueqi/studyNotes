function TreeNode(val) {
    this.value = val;
  }
  
  var sortedArrayToBST = function (arr) {
    if (arr.length === 0) {
      return null;
    }
    if (arr.length === 1) {
      return new TreeNode(arr[0]);
    }
    var mid = parseInt(arr.length / 2);
    var root = new TreeNode(arr[mid]);
    root.left = sortedArrayToBST(arr.slice(0, mid));
    root.right = sortedArrayToBST(arr.slice(mid + 1));
    return root;
}
  
var bst = sortedArrayToBST([-10, -7, - 5, 3, 5, 9]);
console.log(bst);
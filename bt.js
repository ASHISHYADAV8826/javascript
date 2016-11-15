function BinaryTree(){
 this.btSMF=function(level,node){
  return node+(1<<level)-1;
 }
}
this.Nodes =new Array();
this.setNode=function(value,level,node){
 this.Nodes[this.btSMF(level,node)]=value;
}
this.getNode=function(level,node){
 return this.Nodes[this.btSMF(level,node)];
}
console.log(new BinaryTree);
tree.setNode(1,0,0);
tree.setNode(2,1,0);
tree.setNode(3,1,1);
tree.setNode(4,2,0);
tree.setNode(5,2,1);
tree.setNode(6,2,2);
tree.setNode(7,2,3);

const useNode = () => {
  const insertNode = (tree, id, comment) => {
    if (tree.id === id) {
      let newComment = {
        id: new Date().getTime(),
        msg: comment,
        items: [],
      };
      tree.items.push(newComment);
      return tree;
    }

    let latestNode = [];

    latestNode = tree.items.map((node) => {
      return insertNode(node, id, comment);
    });

    return { ...tree, items: latestNode };
  };

  const editNode = (tree, id, comment) => {};

  const deleteNode = (tree, id) => {};

  return { insertNode, editNode, deleteNode };
};

export default useNode;

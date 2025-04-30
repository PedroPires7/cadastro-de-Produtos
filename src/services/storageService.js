const STORAGE_KEY = "produtos";

export const getProdutos = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const saveProdutos = (produtos) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(produtos));
};

export const addProduto = (produto) => {
  const produtos = getProdutos();
  produto.id = Date.now();
  produtos.push(produto);
  saveProdutos(produtos);
};

export const updateProduto = (produtoAtualizado) => {
  let produtos = getProdutos();
  produtos = produtos.map(p => p.id === produtoAtualizado.id ? produtoAtualizado : p);
  saveProdutos(produtos);
};

export const deleteProduto = (id) => {
  const produtos = getProdutos().filter(p => p.id !== id);
  saveProdutos(produtos);
};

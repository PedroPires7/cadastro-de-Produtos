import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";
import { getProdutos, addProduto, updateProduto, deleteProduto } from "../services/storageService";

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [produtoEditando, setProdutoEditando] = useState(null);

  useEffect(() => {
    setProdutos(getProdutos());
  }, []);

  const handleSave = (produto) => {
    if (produto.id) {
      updateProduto(produto);
    } else {
      addProduto(produto);
    }
    setProdutos(getProdutos());
    setProdutoEditando(null);
  };

  return (
    <div className="container mt-5">
      <h2>Cadastro de Produtos</h2>
      <ProductForm onSave={handleSave} produtoEditando={produtoEditando} cancelarEdicao={() => setProdutoEditando(null)} />
      <ProductTable produtos={produtos} onEdit={setProdutoEditando} onDelete={(id) => {
        deleteProduto(id);
        setProdutos(getProdutos());
      }} />
    </div>
  );
}

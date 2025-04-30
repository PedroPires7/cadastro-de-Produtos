import React, { useState, useEffect } from "react";

const initialState = { nome: "", categoria: "", preco: "", quantidade: "" };

export default function ProductForm({
  onSave,
  produtoEditando,
  cancelarEdicao,
}) {
  const [produto, setProduto] = useState(initialState);

  useEffect(() => {
    if (produtoEditando) setProduto(produtoEditando);
  }, [produtoEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(produto);
    setProduto(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-3">
        <div className="col-md-3">
          <input
            name="nome"
            className="form-control"
            placeholder="Nome"
            value={produto.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            name="categoria"
            className="form-control"
            placeholder="Categoria"
            value={produto.categoria}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <input
            name="preco"
            type="number"
            className="form-control"
            placeholder="Preço"
            value={produto.preco}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <input
            name="quantidade"
            type="number"
            className="form-control"
            placeholder="Qtd"
            value={produto.quantidade}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2 d-flex gap-2">
          <button className="btn btn-primary" type="submit">
            {produtoEditando ? "Atualizar" : "Cadastrar"}
          </button>
          {produtoEditando && (
            <button
              className="btn btn-secondary"
              type="button"
              onClick={cancelarEdicao}
            >
              Cancelar
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

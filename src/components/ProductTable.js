import React from "react";

export default function ProductTable({ produtos, onEdit, onDelete }) {
  return (
    <table className="table table-bordered table-hover">
      <thead className="table-dark">
        <tr>
          <th>Nome</th>
          <th>Categoria</th>
          <th>Preço (R$)</th>
          <th>Quantidade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((p) => (
          <tr key={p.id}>
            <td>{p.nome}</td>
            <td>{p.categoria}</td>
            <td>{Number(p.preco).toFixed(2)}</td>
            <td>{p.quantidade}</td>
            <td>
              <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(p)}>Editar</button>
              <button className="btn btn-sm btn-danger" onClick={() => {
                if (window.confirm("Deseja excluir este produto?")) {
                  onDelete(p.id);
                }
              }}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

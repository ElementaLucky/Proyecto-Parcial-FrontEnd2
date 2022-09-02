import React from "react";
import data from "./data.json";
// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
import Item from "./Item";
export default function Listado() {
  return (
    <div className="container">
      <Item
        name={data[0].producto.nombre}
        desc={data[0].producto.descripcion}
        stock1={data[0].stock}
      />
      <Item
        name={data[1].producto.nombre}
        desc={data[1].producto.descripcion}
        stock1={data[1].stock}
      />
      <Item
        name={data[2].producto.nombre}
        desc={data[2].producto.descripcion}
        stock1={data[2].stock}
      />
    </div>
  );
}

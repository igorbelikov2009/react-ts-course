import React from "react";

interface ListProps<T> {
  // на входе мы ожидаем массив каких-то элементов любого типа, именно для этого дженерик мы создали
  items: T[];
  // компонент, который нам необходимо отрисовать
  renderItem: (item: T) => React.ReactNode;
}

// Дженерики объявляем через function объявление
export default function List<T>(props: ListProps<T>) {
  // с помощью map пробегаемся по items, которые достаём из пропсов
  // и как колбек в функцию map мы передаём renderItem
  return <div style={{ margin: 24 }}>{props.items.map(props.renderItem)}</div>;
}

// Универсальный компонент, который будет являться списком, листом для разных типов,
// где мы можем одновременно отрисовывать и список пользователей и список постов и т.д.
//

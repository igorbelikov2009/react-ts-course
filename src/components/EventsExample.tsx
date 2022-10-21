import React, { FC, useState, useRef } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
    // из неуправляемого инпута
  };

  const dragHandler: React.DragEventHandler<HTMLDivElement> = (e) => {
    console.log("DRAG");
  };

  // на этот элемент закинули первый квадрат
  const dropHandler: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("DROP");
  };

  // мы перенесли первый квадрат на второй
  const dragWithPreventHandler: React.DragEventHandler<HTMLDivElement> = (
    e
  ) => {
    e.preventDefault();
    setIsDrag(true);
    // console.log(isDrag);
  };

  // мы вынесли первый квадрат за пределы второго квадрата
  const leaveHandler: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setIsDrag(false);
    // console.log(isDrag);
  };

  return (
    <div style={{ margin: 24 }}>
      <input
        value={value}
        onChange={changeHandler}
        type="text"
        placeholder="Управляемый"
      />
      <input ref={inputRef} type="text" placeholder="Неуправляемый" />

      <button onClick={clickHandler}>Кнопочка</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: isDrag ? "blue" : "red" }}
      ></div>

      <div
        onDrop={dropHandler}
        // мы вынесли первый квадрат со второго квадрата
        onDragLeave={leaveHandler}
        // мы перенесли первый квадрат на второй
        onDragOver={dragWithPreventHandler}
        style={{ width: 200, height: 200, background: "red", marginTop: 24 }}
      ></div>
    </div>
  );
};

export default EventsExample;

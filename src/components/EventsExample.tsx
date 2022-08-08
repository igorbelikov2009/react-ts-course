import React, { FC, useRef, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };
  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("DRAG");
  };
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("Drop");
  };
  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };
  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  return (
    <div>
      <p>{value}</p>
      <input
        type="text"
        value={value}
        onChange={changeHandler}
        placeholder="управляемый"
      />
      <input type="text" ref={inputRef} placeholder="неуправляемый" />
      <button onClick={clickHandler}>click me</button>
      <div
        draggable
        onDrag={dragHandler}
        style={{ width: 200, height: 200, background: "red" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? "blue" : "red",
          marginTop: 16,
        }}
      ></div>
    </div>
  );
};

export default EventsExample;

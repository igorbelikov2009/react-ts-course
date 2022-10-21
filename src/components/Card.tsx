import React, { FC, useState } from "react";

export enum CardVariant {
  // видишь: export? Значит в другом компоненте, для использования CardVariant, его надо импортировать
  outlined = "outlined",
  primary = "primary",
}

// ниже для children для React 18.0 - extends React.PropsWithChildren - обя
interface CardProps extends React.PropsWithChildren {
  width?: string;
  height?: string;
  variant: CardVariant;
  // children?: JSX.Element | React.ReactNode; <=> для children для React 18.0, работает, но не совсем правильно
  //==========================
  // onClick: () => void; // параметром ничего не принимает и ничего не возвращает
  // если фунция что-то возвращает, то указываем необходимое нам
  // onClick: () => number или  onClick: () => string
  // в нашем случае фунция нажатия на карточку ничего возвращать не будет
  onClick: (num: number) => void; // параметром принимает число, ничего не возвращает
}

const Card: FC<CardProps> = ({ width, height, variant, children, onClick }) => {
  // eslint-disable-next-line
  const [state, setState] = useState(0);
  return (
    <div
      style={{
        margin: 24,
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid gray" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "",
      }}
      onClick={() => onClick(state)}
    >
      {children}
    </div>
  );
};

export default Card;

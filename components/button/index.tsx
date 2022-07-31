import Link from "next/link";
import * as S from "./styles";

interface IButton {
  text: string;
  link?: string;
}

export const Button: React.FC<IButton> = ({ text, link }) => {
  return (
    <Link href={link}>
      <S.Button> {text} </S.Button>
    </Link>
  );
};

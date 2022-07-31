import * as S from "./styles";

interface ILayout {
  children: any;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return <S.Layout>{children}</S.Layout>;
};

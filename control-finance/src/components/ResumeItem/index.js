import React from "react";
import * as S from "./styles";
const ResumeItem = ({ title, Icon, value }) => {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>{title}</S.HeaderTitle>
        <Icon />
      </S.Header>
      <S.Total>{value}</S.Total>
    </S.Container>
  );
};
export default ResumeItem;

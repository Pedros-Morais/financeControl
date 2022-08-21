import React from "react";
import ResumeItem from "../ResumeItem";
import * as S from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";
const Resume = ({ income, expense, total }) => {
  return (
    <S.Container>
      <ResumeItem
        Icon={FaRegArrowAltCircleUp}
        title="Entradas"
        value={income}
      />
      <ResumeItem
        Icon={FaRegArrowAltCircleDown}
        title="Saidas"
        value={expense}
      />
      <ResumeItem Icon={FaDollarSign} title="Total" value={total} />
    </S.Container>
  );
};
export default Resume;

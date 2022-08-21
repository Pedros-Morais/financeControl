import React from "react";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";
import * as S from "./styles";
const GridItem = ({ item, onDelete }) => {
  return (
    <S.Tr>
      <S.Td>{item.desc} </S.Td>
      <S.Td>{item.amount} </S.Td>
      <S.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </S.Td>
      <S.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </S.Td>
    </S.Tr>
  );
};
export default GridItem;

import React, { useState } from "react";
import GridComponent from "../GridComponent";
import * as S from "./styles";
const Form = ({ handleAdd, setTransactionsList, transactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const generateID = () => {
    Math.round(Math.random() * 1000);
  };
  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 0) {
      alert("O valor não pode ser negativo!");
      return;
    }
    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };
    handleAdd(transaction);
    setDesc("");
    setAmount("");
  };

  return (
    <>
      <S.Container>
        <S.InputContent>
          <S.Label>Descrição</S.Label>
          <S.Input2 value={desc} onChange={(e) => setDesc(e.target.value)} />
        </S.InputContent>
        <S.InputContent>
          <S.Label>Valor</S.Label>
          <S.BorderInput>
            R$
            <S.Input
              value={amount}
              type="number"
              onChange={(e) => setAmount(e.target.value)}
            />
          </S.BorderInput>
        </S.InputContent>
        <S.RadioGroup>
          <S.Input2
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setIsExpense(!isExpense)}
          />
          <S.Label htmlFor="rIncome">Entrada</S.Label>
          <S.Input2
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setIsExpense(!isExpense)}
          />
          <S.Label htmlFor="rExpenses">Saida</S.Label>
        </S.RadioGroup>
        <S.Button onClick={handleSave}>ADICIONAR</S.Button>
      </S.Container>
      <GridComponent itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};
export default Form;

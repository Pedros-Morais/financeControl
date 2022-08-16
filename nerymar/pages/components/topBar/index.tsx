import React from "react";
import * as Styles from "../../../styles/components/topbar";
import Image from "next/image";
import PSG from "../../../assets/logoPsg.svg";
import { ST } from "next/dist/shared/lib/utils";
const TopBar = () => {
  return (
    <Styles.Container>
      <Image src={PSG} width={50} />
      <Styles.CenterContent>
        <Styles.Text>Início</Styles.Text>
        <Styles.Text>Resultados</Styles.Text>
        <Styles.Text>Notícias</Styles.Text>
        <Styles.Text>Clubes</Styles.Text>
        <Styles.Text>Lojas</Styles.Text>
      </Styles.CenterContent>
      <Styles.EndContent>
        <Styles.Text>Entrar</Styles.Text>
        <Styles.Button>REGISTRE-SE</Styles.Button>
      </Styles.EndContent>
    </Styles.Container>
  );
};
export default TopBar;

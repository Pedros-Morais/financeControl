import React from "react";
import * as Styles from "../../../styles/components/results";
import Image from "next/image";
import Team1 from "../../../assets/teamLogo.svg";
import Team2 from "../../../assets/teamLogo2.svg";
const Results = () => {
  return (
    <Styles.Container>
      <Styles.Text>Montpellier</Styles.Text>
      <Image src={Team1} width={100} />
      <Styles.Text>0</Styles.Text>
      <Styles.Text>X</Styles.Text>
      <Styles.Text>4</Styles.Text>
      <Image src={Team2} width={100} />
      <Styles.Text>PSG</Styles.Text>
    </Styles.Container>
  );
};
export default Results;

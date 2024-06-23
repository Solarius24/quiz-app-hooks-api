import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Link } from "react-router-dom";
import classes from "./ScoreBoard.module.css";
import Button from "components/UI/Button";
import { useCollection } from "hooks/useCollection";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";


export const ScoreBoard = () => {
  const { documents } = useCollection("score");

  return (
    <>
      <Link to="/">
        <Button className={classes.scoreBoardBtm}>HOMEPAGE</Button>
      </Link>
      <DataTable value={documents} className={classes.scoreTable}>
        <Column className={classes.scoreBoardColumn} field="date" header="DATE" sortable />
        <Column className={classes.scoreBoardColumn} field="playerName" header="PLAYER NAME" sortable />
        <Column className={classes.scoreBoardColumn} field="score" header="SCORE" sortable />
        <Column className={classes.scoreBoardColumn} field="category" header="CATEGORY" sortable />
        <Column className={classes.scoreBoardColumn} field="difficultyLevel" header="DIFFICULTY LEVEL" sortable />
      </DataTable>
    </>
  );
};
// };

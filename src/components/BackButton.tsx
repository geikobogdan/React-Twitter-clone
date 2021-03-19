import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React from "react";
import { useHistory } from "react-router-dom";

export const BackButton: React.FC = (): React.ReactElement => {
  const history = useHistory();
  const handleClickButton = () => {
    history.goBack();
  };

  return (
    <IconButton onClick={handleClickButton} style={{ marginRight: 20 }} color="primary">
      <ArrowBackIcon />
    </IconButton>
  );
};

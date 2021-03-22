import React from "react";

import classNames from "classnames";

import { IconButton } from "@material-ui/core";

import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import EmojIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Button from "@material-ui/core/Button/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Alert } from "@material-ui/lab";

import { useHomeStyles } from "../pages/Home/theme";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddTweet } from "../store/ducks/tweets/actionCreators";
import { selectAddFormState } from "../store/ducks/tweets/selectors";
import { AddFormState } from "../store/ducks/tweets/contracts/state";

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
  maxRows?: number;
}
const MAX_LENGTH = 280;
export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
  maxRows,
}: AddTweetFormProps): React.ReactElement => {
  const dispatch = useDispatch();
  const addFormState = useSelector(selectAddFormState);
  const [text, setText] = React.useState<string>("");

  const textLimitPercent = Math.round((text.length / MAX_LENGTH) * 100);
  const textCount = MAX_LENGTH - text.length;

  const handleChangeTextarea = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = (): void => {
    setText("");
    dispatch(fetchAddTweet(text));
  };

  return (
    <div>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя UserAvatar`}
          src="https://pbs.twimg.com/profile_images/796061890451542016/J-O1AguD_bigger.jpg"
        />
        <TextareaAutosize
          onChange={handleChangeTextarea}
          className={classes.addFormTextarea}
          placeholder="Что происходит?"
          value={text}
          rowsMax={maxRows}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div
          className={classNames(
            classes.tweetFooter,
            classes.addFormBottomActions
          )}
        >
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <EmojIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>

        <div className={classes.addFormBottomRight}>
          {text && (
            <>
              <span>{textCount}</span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={text.length > MAX_LENGTH ? 100 : textLimitPercent}
                  style={
                    text.length >= MAX_LENGTH ? { color: "red" } : undefined
                  }
                />
                <CircularProgress
                  style={{ color: "rgba(0, 0, 0, 0.1)" }}
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={100}
                />
              </div>
            </>
          )}

          <Button
            disabled={addFormState === AddFormState.LOADING || !text || text.length >= MAX_LENGTH}
            color="primary"
            variant="contained"
            onClick={handleClickAddTweet}
          >
            {addFormState === AddFormState.LOADING ? (
              <CircularProgress color="inherit" size={16} />
            ) : (
              "Твитнуть"
            )}
          </Button>
        </div>
      </div>
      {addFormState === AddFormState.ERROR && (
        <Alert severity="error">
          Ошибка при добавлении твита{" "}
          <span aria-label="emoji-plak" role="img">
            😞
          </span>
        </Alert>
      )}
    </div>
  );
};

import { CircularProgress, Paper, Typography, Avatar } from "@material-ui/core";
import React from "react";
import format from "date-fns/format"
import ruLang from "date-fns/locale/ru";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchTweetData,
  setTweetData,
} from "../../../store/ducks/tweet/actionCreators";
import {
  selectIsTweetLoading,
  selectTweetData,
} from "../../../store/ducks/tweet/selectors";

import classNames from "classnames";

import { useHomeStyles } from "../theme";

export const FullTweet: React.FC = (): React.ReactElement | null => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweetData = useSelector(selectTweetData);
  const isLoading = useSelector(selectIsTweetLoading);
  const params: { id: string } = useParams();
  const id = params.id;

  React.useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }
    return () => {
      dispatch(setTweetData(undefined));
    };
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className={classes.tweetsCentred}>
        <CircularProgress />
      </div>
    );
  }

  if (tweetData) {
    return (
      <Paper className={classes.fullTweet} >
        <div className={classNames(classes.tweetsHeaderUser)} >
          <Avatar
            className={classes.tweetAvatar}
            alt={`Аватарка пользователя ${tweetData.user.fullname}`}
            src={tweetData.user.avatarUrl}
          />
          <Typography>
            <b>{tweetData.user.fullname}</b>&nbsp;
            <div>
              <span className={classes.tweetUserName}>
                @{tweetData.user.username}
              </span>
              &nbsp;
              <span className={classes.tweetUserName}>·</span>&nbsp;
              <span className={classes.tweetUserName}>{format(new Date(tweetData.createdAt),"H:mm ")}</span>
              <span className={classes.tweetUserName}>{format(new Date(tweetData.createdAt),"dd MMM yyyy г.", {locale: ruLang})}</span>
            </div>
          </Typography>
        </div>
        <Typography className={classes.fullTweetText} gutterBottom>
          {tweetData.text}
        </Typography>
      </Paper>
    );
  }

  return null;
};

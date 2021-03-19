import React from "react";

import {
  Container,
  Grid,
  InputAdornment,
  Paper,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import CircularProgress from "@material-ui/core/CircularProgress";

import { Tweet } from "../../components/Tweet";
import { SideMenu } from "../../components/SideMenu";

import ListItem from "@material-ui/core/ListItem/ListItem";
import Divider from "@material-ui/core/Divider/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import List from "@material-ui/core/List/List";
import Button from "@material-ui/core/Button/Button";
import { AddTweetForm } from "../../components/AddTweetForm";
import { useHomeStyles } from "./theme";
import { SearchTextField } from "../../components/SearchTextField";

import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../../store/ducks/tweets/actionCreators";
import {
  selectTweetsItems,
  selectIsTweetsLoading,
} from "../../store/ducks/tweets/selectors";
import { fetchTags } from "../../store/ducks/tags/actionCreators";
import { Tags } from "../../components/Tags";
import { Route } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { FullTweet } from "./components/FullTweet";
//import { fetchTweetData } from "../../store/ducks/tweet/actionCreators";

export const Home = (): React.ReactElement => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);

  React.useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
    
  }, [dispatch]);
  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item sm={1} md={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item sm={8} md={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Route path="/home/:any">
                <BackButton />
              </Route>
              <Route path="/home/tweet">
                <Typography variant="h6">Твитнуть</Typography>
              </Route>
              <Route exact path={["/home", "/home/search"]}>
                <Typography variant="h6">Твиты</Typography>
              </Route>
            </Paper>

            <Route exact path={["/home", "/home/search"]}>
              <Paper>
                <div className={classes.addForm}>
                  <AddTweetForm classes={classes} />
                </div>
                <div className={classes.addFormBottomLine} />
              </Paper>
            </Route>
            <Route path={["/home", "/home/search?q=:"]} exact>
              {isLoading ? (
                <div className={classes.tweetsCentred}>
                  <CircularProgress />
                </div>
              ) : (
                tweets.map((tweet) => (
                  <Tweet key={tweet._id} {...tweet} classes={classes} />
                ))
              )}
            </Route>

            <Route path="/home/tweet/:id" component={FullTweet} exact/>
    
          </Paper>
        </Grid>

        <Grid sm={3} md={3} item>
          <div className={classes.rightSide}>
            <SearchTextField
              variant="outlined"
              placeholder="Поиск по Твиттеру"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Tags classes={classes} />
            <Paper className={classes.rightSideBlock}>
              <Paper
                className={classes.rightSideBlockHeader}
                variant="outlined"
              >
                <b>Кого читать</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dock Of Shame"
                    secondary={
                      <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                      >
                        @FavDockOfShame
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

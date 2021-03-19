import { ListItem } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { List } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHomeStyles } from "../pages/Home/theme";
import { selectIsTagsLoaded, selectTagsItems } from "../store/ducks/tags/selectors";

interface TagsProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const Tags: React.FC<TagsProps> = ({
  classes,
}: TagsProps): React.ReactElement | null => {
  const items = useSelector(selectTagsItems);
  const isLoaded = useSelector(selectIsTagsLoaded);

  if (!isLoaded) {
    return null;
  }
  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant="outlined">
        <b>Актуальные темы</b>
      </Paper>
      <List>
        {items.map((item) => (
          <React.Fragment key={item._id}>
            <ListItem className={classes.rightSideBlockItem}>
              <Link to={`/home/search?q=${item.name}`}>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      color="textSecondary"
                    >
                      Твитов: {item.count}
                    </Typography>
                  }
                />
              </Link>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

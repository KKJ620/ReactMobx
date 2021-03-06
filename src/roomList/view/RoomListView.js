import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import tileData from "../tileData";

const UseStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "100%",
        padding: "0 5rem 0 5rem",
        // height: 450,
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)",
    },
}));

export default function ListView(props) {
    const { roomList } = props;
    const classes = UseStyles();
    return (
        <div className={classes.root}>
            <GridList cols={5} cellHeight={180} className={classes.gridList}>
                {/* <GridListTile key="Subheader"style={{ height: 'auto' }}>
          <ListSubheader component="div">방리스트</ListSubheader>
        </GridListTile> */}
                {roomList.length > 0 &&
                    roomList.map((tile) => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>by: {tile.author}</span>}
                                actionIcon={
                                    <IconButton
                                        aria-label={`info about ${tile.title}`}
                                        className={classes.icon}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
            </GridList>
        </div>
    );
}

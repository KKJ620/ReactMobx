import React, { Component } from "react";
import { inject, Observer } from "mobx-react";
import RoomListView from "../view/RoomListView";

@inject("Store")
@Observer
class RoomListViewContainer extends Component {
    render() {
        const roomList = this.props.Store.getRoomList;
        return <RoomListView roomList={roomList} />;
    }
}

export default RoomListViewContainer;

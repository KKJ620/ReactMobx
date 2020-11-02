import { inject, Observer } from "mobx-react";
import React, { Component } from "react";
import SearchBar from "../view/SearchBar";

@inject("Store")
@Observer
class SearchBarContainer extends Component {
    setRoomName = (e) => {
        this.props.Store.setRoomName(e.target.value);
    };
    render() {
        const roomName = this.props.getRoomName;
        return <SearchBar roomName={roomName} setRoomName={this.setRoomName} />;
    }
}

export default SearchBarContainer;

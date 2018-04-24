import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: []
        }


        YTSearch({
            key: API_KEY,
            term: "Surfboards"
        }, videos => {
            this.setState({
                videos
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Youtube Search</h1>
                <SearchBar />
                <VideoList videos={ this.state.videos } />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("app-root"))
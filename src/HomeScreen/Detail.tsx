import React from 'react';
import axios  from 'axios';
import Infor from '../component/DetaiInfor';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import "./Home.css"

  interface MainState {
    someString: string,
    paramId: String,
  }
  interface MainProps {
  }

export default class Detail extends React.Component <MainProps ,MainState>{
    private params: any;
    constructor(props:MainProps) {
      super(props);
      this.state = {
        someString:"",
        paramId:""
      };
    }

    componentDidMount = () => {
        this.getParams();
      }
    getParams = () => {
        this.params = this.props;
        this.setState({
            paramId: this.params.match.params.comicid
        });
        };
    render()
    {
        return(
            <div className="home">
                {this.state.paramId.length>1 ? <div><Infor id={this.state.paramId}></Infor></div>:""}
            </div>
        )
    }
}
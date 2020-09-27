import React from 'react';
import axios  from 'axios';
import {Link} from 'react-router-dom';
import initComic, {comic} from '../initstate';
import "./Home.css"

  interface MainState {
    comic: Array<comic>,
  }
  interface MainProps {
  }

export default class Home extends React.Component <MainProps,MainState>{
    constructor(props:MainProps) {
      super(props);
      this.state={
        comic: initComic
      }
    }

    componentDidMount =()=> {
        axios.get(`https://betruyen2.herokuapp.com/api/comic`, {
     })
      .then(res => {
        this.setState({
            comic:res.data.data,
          })
      })
      .catch(error => console.log(error));
    }
    render()
    {
      const infor = this.state.comic.map((comic)=>(
         <div className="infor-comic">
            {this.state.comic.length>1 ? <img src={comic.avatar} className="avatar"></img> :"" }
            {this.state.comic.length>1 ?
              <Link to={`detail/${this.state.comic[1]._id}`}>
                  <h3>{comic.name}</h3>
              </Link>
            :""}
          </div>
      ))
        return(
            <div className="home">
              {infor }
            </div>
        )
    }
}
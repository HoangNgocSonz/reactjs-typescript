import React from 'react';
import axios  from 'axios';
import {Link} from 'react-router-dom';
import initComic, {comic,fff,chapter,chapterN} from '../initstate';
import "./Infor.css"

  interface MainState {
    Chapter:chapter
  }
  interface MainProps {
      id:String,
  }

export default class ReadInfor extends React.Component <MainProps,MainState>{
    constructor(props:MainProps) {
      super(props);
      this.state={
        Chapter:chapterN
      }
    }

    componentDidMount =()=> {
        axios.get(`https://betruyen2.herokuapp.com/api/chapter/${this.props.id}`, {
     })
      .then(res => {
        this.setState({
          Chapter:res.data.data
        })
       console.log(this.state.Chapter)
      })
      .catch(error => console.log(error));
    }
    render(){
        var image;
        if(this.state.Chapter){
            image=this.state.Chapter.imageLink.map((link)=>(
                <img className="img" src={link}></img>
         ))
    }
        return(
            <div>
              {image}
            </div>
        )
    }
}
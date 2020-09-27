import React from 'react';
import axios  from 'axios';
import {Link} from 'react-router-dom';
import initComic, {comic,fff} from '../initstate';
import "./DetaiInfor.css"

  interface MainState {
    comic:comic,
  }
  interface MainProps {
      id:String,
  }

export default class Test extends React.Component <MainProps,MainState>{
    constructor(props:MainProps) {
      super(props);
      this.state={
        comic:fff
      }
    }

    componentDidMount =()=> {
        axios.get(`https://betruyen2.herokuapp.com/api/comic/${this.props.id}`, {
     })
      .then(res => {
        this.setState({
          comic:res.data.data
        })
      })
      .catch(error => console.log(error));
    }
    render(){
      var allChapter;
      if(this.state.comic){
          allChapter=this.state.comic.chapters.map((chapter)=>(
            <div >
                <Link to={`/${chapter.idForDetail}`}>
                <p className="chapIndex">chapter {chapter.chapIndex}</p>
                </Link>
                <p></p>
            </div>
          ))
      }
        return(
            <div >
              {this.state.comic ?
                <div>
                  <div className="left">

                      <div>
                        <img className="avatar" src={this.state.comic.avatar}></img>
                      </div>

                  </div>
                  <div className="right">
                    <p>Tên: {this.state.comic.name}</p>
                    <p className="description">Mô tả: {this.state.comic.description}</p>
                  </div>
                </div>
                
              :""
              }
              <br></br>
              <div className="chapter">
                {allChapter}
              </div>
              
            </div>
        )
    }
}
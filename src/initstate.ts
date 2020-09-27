const initChapter = [{
    idForDetail:"",
    chapIndex:"",
    name:""
}]
export interface comic{
  _id:String,
  name: String,
  avatar:string,
  description:String,
  chapters:Array<chapterDetails>,
}
export const fff = {
  _id:"",
  name: "",
  avatar:"",
  description:"",
  chapters:initChapter,
}
export interface chapter{
  name: String,
  chapIndex:String,
  imageLink:Array<string>,
}
export const chapterN={
  name: "",
  chapIndex:"",
  imageLink:[],
}

const initComic = [{
  _id:"",
  name: "",
  avatar:"",
  description:"",
  chapters:initChapter,
  }]
export default initComic;

export interface chapterDetails{
    idForDetail:String,
    chapIndex:String,
    name:String
}


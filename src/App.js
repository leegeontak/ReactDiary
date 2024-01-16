import './App.css';
import Diary from './Diary';
import DiaryList from './DiaryList';
import { useRef,useState } from 'react';
import React from 'react';


function App() {
  const [data,setData] = useState([])
  const [originData,setOriginData] = useState([])
  const dataId = useRef(0)
  const addList = (title,content,emotion)=>{
    const newData = {
      title,
      content,
      emotion,
      id:dataId.current
    }
    setData([...data,newData])
    setOriginData([...originData,newData])
    dataId.current += 1;
  }
  const deleteList = (deleteListId)=>{
    setData(data.filter(item=>item.id !==deleteListId))
    setOriginData(originData.filter(item=>item.id !==deleteListId))
  }
  const editList = (newData,editId)=>{
    setData(data.filter(item=>{
      if(item.id == editId){
        return item.content = newData
      }
    }))
    setOriginData(originData.filter(item=>{
      if(item.id == editId){
        return item.content = newData
      }
    }))
  }
  const allViewDiary = () =>{
    setData(originData)
  }
  const happyDiary = () =>{
    console.log(originData)
    setData(originData.filter(item=>item.emotion >= 3))
  }
  const unhappyDiary = () =>{
    setData(originData.filter(item=>item.emotion < 3))
  }
  const searchData = (searchWord)=>{
    setData(originData.filter(item=>item.title.includes(searchWord)))
  }
  return (
    <div className="App">
      <Diary addList = {addList} allViewDiary={allViewDiary} happayDiary={happyDiary} unhappyDiary={unhappyDiary} searchData = {searchData}></Diary>
      <DiaryList data = {data} deleteList = {deleteList} editList ={editList}></DiaryList>
      
    </div>
  );
}

export default App;
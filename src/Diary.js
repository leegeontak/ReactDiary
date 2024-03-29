import { useState } from "react"

function Diary({addList,allViewDiary,happayDiary,unhappyDiary,searchData}){
    const [state,setState] = useState({
        title:"",
        content:"",
        emotion:1,
    })
    const [searchWord,setSearchWord] = useState("")
    const handelState = (e)=>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    const save = ()=>{
        addList(state.title,state.content,state.emotion);
        setState({
            title:"",
            content:"",
            emotion:1,
        })
    }
    const searchButton = ()=>{
        searchData(searchWord)
    }
    return(
        <div className="DiaryEditor"> 
            <div>
                <button onClick={allViewDiary}>모든 일기 보기</button>
                <button onClick={happayDiary}>좋았던 일기 보기</button>
                <button onClick={unhappyDiary}>나빴던 일기 보기</button>
            </div>
            <input type="text" value={searchWord} onChange={(e)=>setSearchWord(e.target.value)}></input>
            <button onClick={searchButton}>검색하기</button>
            <h2>일기장</h2>
            <div>
                <input name="title" value={state.title} onChange={handelState}></input>
            </div>
            <div>
                <textarea name="content" value={state.content} onChange={handelState}>
                </textarea>
            </div>
            <div>
                <select name="emotion" value={state.emotion} onChange={handelState}>
                    <option value={1} onChange={handelState}>1</option>
                    <option value={2} onChange={handelState}>2</option>
                    <option value={3} onChange={handelState}>3</option>
                    <option value={4} onChange={handelState}>4</option>
                    <option value={5} onChange={handelState}>5</option>
                </select>
            </div>
            <button className="saveButton" onClick={save}>저장하기</button>
        </div>
    )
}
export default Diary;
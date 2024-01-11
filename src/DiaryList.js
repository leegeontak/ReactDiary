import DiaryItem from "./DiaryItem";
function DiaryList({data,deleteList,editList}){
    

    return(
        <div className="DiaryList">
            <h2>일기가 {data.length}개 있습니다</h2>
            {data.map((item,index)=>(
                <DiaryItem key = {index} {...item} deleteList ={deleteList} editList = {editList}></DiaryItem>
            ))}
        </div>
    )
}
export default DiaryList;
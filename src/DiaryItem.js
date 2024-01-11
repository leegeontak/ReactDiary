import { useState } from "react";

function DiaryItem({ id, title, content, emotion, deleteList, editList }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editItem,setEditItem] = useState("")
  const removeList = () => {
    deleteList(id);
  };

  return (
    editIndex !== null ? (
    <div>
        <div>
            제목: {title} | 감정지수: {emotion}
        </div>
        <div>
            <textarea value={editItem} onChange={(e)=>{
                setEditItem(e.target.value)
            }}>
            </textarea>
        </div>
        <button onClick={() => {
            if(editItem.length < 2){
            return
            }
            setEditIndex(null);
            editList(editItem,editIndex)
            setEditItem("")
        }}>확인</button>
        <button onClick={()=>{
            setEditIndex(null);
        }}>취소</button>
    </div>
    ) : (
    <div>
        <div>
            제목: {title} | 감정지수: {emotion}
        </div>
        <div>
            <div>{content}</div>
        </div>
        <button onClick={() => {
          setEditIndex(id);
        }}>수정</button>
        <button onClick={removeList}>삭제</button>
      </div>
    )
  );
}

export default DiaryItem;

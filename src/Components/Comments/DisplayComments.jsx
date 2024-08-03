import React,{useState} from 'react'
import './Comments.css'
function DisplayComments({commentBody, userCommented}) {
    const [Edit, setEdit] = useState(false)
    const [commentText, setCommentText] = useState("")

    const handleEdit=(ctId,ctBdy)=>{

    } 
    return (
    <>
    {
        Edit ? (<>
          <form className='comments_sub_form_comments'
    //onSubmit={handleOnSubmit}
    >
    <input
    type=' text'
    onChange={e=>setCommentText(e.target.value)}
    placeholder='Edit comment...'
    value={commentBody}
    className='comment_ibox'/>
<input type='submit' value="add" className='comment_add_btn_comments'/>
    </form>
    
        </>):(
    <p className="comment_body">{commentBody}</p>

        )
    }
    <p className="comment_body">{commentBody}</p>
    <p className="usercommented"> - {userCommented} commented</p>
      <p className="EditDel_DisplayComment">

        <i>Edit</i>
        <i>Delete</i>
     </p>
    </>
  )
}

export default DisplayComments
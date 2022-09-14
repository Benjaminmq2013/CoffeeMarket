import React from 'react'

const Comments = () => {
  return (
    <div className="comment_item">
        <p className="comment-pharagraph">
            El mejor café que he probado. Realmente
            recomiendo que lo prueben el sabor es 
            magnífico.
        </p>
        <div className="comment_user">
            <img className="comment_user-image" src="assets/Images/users/user001_image.png" alt="" />
            <div>
                <h6 className="comment_user-name">Roger Alvarado</h6>
                <img src="assets/Icons/landing/stars.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Comments
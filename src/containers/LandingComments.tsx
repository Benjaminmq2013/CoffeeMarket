import React from 'react'
import Comments from "../components/LandingPage/Comments";


const LandingComments = () => {
  return (
    <div className="LandingComments">
        <h2 className="comments_title">Lo que opinan las personas <br /> de nuestro café</h2>
        <div className="comments_wrapper">
            <Comments />
            <Comments />
            <Comments />
            <Comments />
        </div>
    </div>
  )
}

export default LandingComments;
import {useEffect, useState, useRef} from "react";
import {BsSendFill} from "react-icons/bs";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import {apiURL} from "../Utils/apiURL.js";
import axios from "axios";

const Comments = ({ itineraryId }) => {
  const [comments, setComments] = useState([]);
  const user = useSelector((store) => store.userSignUpReducer.user);
  const commentTextArea = useRef();

  useEffect(() => {
    axios
      .get(apiURL + "comments/" + itineraryId)
      .then((response) => setComments(response.data.response));
  }, []);

  const sendComment = async () => {
    if (!user || Object.keys(user).length === 0) {
      toast.error("Must be logged in to comment");
      return;
    }

    if (commentTextArea.current.value.trim() === "") {
      toast.error("Ey stupid: The comment field cannot be empty -.-");
      return;
    }

    axios
      .post(apiURL + "comments", {
        userId: user._id,
        itineraryId: itineraryId,
        text: commentTextArea.current.value,
      })
      .then((response) => {
        const newComment = {
          ...response.data.response,
          userId: {
            name: user.name,
            photo: user.photo,
          },
        };
        setComments([newComment, ...comments]);
        toast.success("Comment added successfully!");
      })
      .catch((error) => {
        console.log(error);
        if (error.message === "Network Error") {
          toast.error("Temporary Network Connectivity Issues, SO SORRY...");
        }
        toast.error(error.response.data.error);
      });
  };

  return (
    <div>
      <div>
        {comments &&
          comments.map((comment, indexMap) => {
            return (
              <div key={indexMap}>
                <img src={comment.userId.photo} alt={comment.userId.name} />
                <div>
                  <h5>{comment.userId.name}</h5>
                  <p>{comment.text}</p>
                </div>
              </div>
            );
          })}
      </div>
      <div>
        <h4>Leave your Comment</h4>
        <textarea
          ref={commentTextArea}
          name="commentTextArea"
          minLength="0"
          maxLength="140"
          placeholder=""
          rows="5"
          cols="45"
        ></textarea>
        <BsSendFill onClick={sendComment} />
      </div>
    </div>
  );
};

export default Comments;
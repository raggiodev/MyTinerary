import axios from "axios";
import {toast} from "react-toastify";
import {BsSendFill} from "react-icons/bs";
import {useSelector} from "react-redux";
import {useEffect, useState, useRef } from "react";
import {apiURL} from "../utils/apiURL.js";

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
        {comments.length === 0 ? (
          <div className="text-gray-500">No comments yet. Be the first!</div>
        ) : (
          comments.map((comment, indexMap) => {
            return (
              <div key={indexMap} className="flex items-start mb-4">
                <img
                  src={comment.userId?.photo || "default_photo_url"}
                  alt={comment.userId?.name || "Unknown User"}
                  className="w-10 h-10 rounded-full object-cover mr-2"
                />
                <div>
                  <h5 className="text-sm font-semibold mb-1 text-left">
                    {comment.userId?.name || "Unknown User"}
                  </h5>
                  <p className="text-sm text-gray-800">{comment.text}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="mt-4">
        <textarea
          ref={commentTextArea}
          name="commentTextArea"
          minLength="0"
          maxLength="140"
          placeholder="Add your comment..."
          rows="4"
          className="w-full p-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-300"
        ></textarea>
        <button
          onClick={sendComment}
          className="mt-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <BsSendFill className="inline-block mr-2" /> Post Comment
        </button>
      </div>
    </div>
  );
};

export default Comments;
import axios from "axios";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import {formatDistanceToNow} from "date-fns";
import {useEffect, useState, useRef} from "react";
import {BsSendFill, BsPersonCircle, BsPencil, BsTrash, BsXLg} from "react-icons/bs";
import {apiURL} from "../utils/apiURL.js";

const Comments = ({ itineraryId }) => {
  const [comments, setComments] = useState([]);
  const user = useSelector((store) => store.userSignUpReducer.user);
  const commentTextArea = useRef();
  const [editingComment, setEditingComment] = useState(null);
  const [editingIndex, setEditingIndex] = useState(-1);

  useEffect(() => {
    axios
      .get(apiURL + "comments/" + itineraryId)
      .then((response) => setComments(response.data.response));
  }, [itineraryId]);

  const sendComment = async () => {
    if (!user || Object.keys(user).length === 0) {
      toast.error("Must be logged in to comment 🙄");
      return;
    }

    if (commentTextArea.current.value.trim() === "") {
      toast.error("Ey genius... The comment field cannot be empty 😐");
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
            _id: user._id,
            name: user.name,
            photo: user.photo,
          },
        };
        setComments([newComment, ...comments]);
        toast.success("Comment Added Successfully! 😁");
        commentTextArea.current.value = "";
      })
      .catch((error) => {
        console.log(error);
        if (error.message === "Network Error") {
          toast.error("Temporary Network Connectivity Issues. F5! 🔁");
        }
        toast.error(error.response.data.error);
      });
  };

  const editComment = async (commentId, newText) => {
    try {
      const response = await axios.put(apiURL + `comments/${commentId}`, {
        text: newText,
      });
      const updatedComment = {
        ...response.data.response,
        userId: {
          _id: user._id,
          name: user.name,
          photo: user.photo,
        },
      };
      const updatedComments = comments.map((comment) => {
        if (comment._id === commentId) {
          return updatedComment;
        }
        else {
          return comment;
        }
      });
      setComments(updatedComments);
      setEditingComment(null);
      setEditingIndex(-1);
      toast.success("Comment Updated Successfully! 😉");
    }
    catch (error) {
      console.error(error);
      toast.error("Error Updating Comment... 😕");
    }
  };

  const cancelEditComment = () => {
    setEditingComment(null);
    setEditingIndex(-1);
  };

  const deleteComment = async (commentId) => {
    try {
      await axios.delete(apiURL + `comments/${commentId}`);
      const updatedComments = comments.filter(
        (comment) => comment._id !== commentId
      );
      setComments(updatedComments);
      toast.success("Comment Deleted Successfully! 🤨");
    }
    catch (error) {
      console.error(error);
      toast.error("Error Deleting Comment... 😟");
    }
  };

  return (
    <div>
      <div>
        {comments.length === 0 ? (
          <div className="text-gray-500">No comments yet. Be the first! 🙌</div>
        ) : (
          comments.map((comment, index) => (
            <div key={comment._id} className="flex items-start mb-4">
              <img
                src={comment.userId?.photo || <BsPersonCircle />}
                alt={comment.userId?.name || "Unknown User"}
                className="w-10 h-10 rounded-full object-cover mr-2"
              />
              <div>
                <div className="flex items-center">
                  <h5 className="text-sm font-semibold mb-1 text-left">
                    {comment.userId?.name || "Unknown User"}
                  </h5>
                  <p className="text-xs text-gray-600 mb-1 ml-4">
                    {formatDistanceToNow(new Date(comment.createdAt), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
                {editingIndex === index ? (
                  <div className="flex">
                    <textarea
                      value={editingComment}
                      onChange={(e) => setEditingComment(e.target.value)}
                      className="w-full p-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-300"
                    ></textarea>
                    <button
                      onClick={() => editComment(comment._id, editingComment)}
                      className="flex justify-center items-center px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 ml-2"
                    >
                      <BsSendFill className="inline-block mr-2" /> Save
                    </button>
                    <button
                      onClick={() => cancelEditComment()}
                      className="flex justify-center items-center px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 ml-2"
                    >
                      <BsXLg className="inline-block mr-2" /> Cancel
                    </button>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm text-gray-800 text-start">
                      {comment.text}
                    </p>
                    {user?._id === comment.userId?._id && (
                      <div className="mt-2 text-end">
                        <button
                          onClick={() => {
                            setEditingComment(comment.text);
                            setEditingIndex(index);
                          }}
                          className="text-blue-500 hover:underline focus:outline-none mr-2"
                        >
                          <BsPencil className="inline-block" /> Edit
                        </button>
                        <button
                          onClick={() => deleteComment(comment._id)}
                          className="text-red-500 hover:underline focus:outline-none"
                        >
                          <BsTrash className="inline-block" /> Delete
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
      <div className="mt-4">
        <textarea
          ref={commentTextArea}
          name="commentTextArea"
          minLength="0"
          maxLength="140"
          placeholder="Add your comment here... ✍"
          rows="4"
          className="w-full p-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-300"
        ></textarea>
        <button
          onClick={sendComment}
          className="mt-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <BsSendFill className="inline-block mr-2" /> Post Comment!
        </button>
      </div>
    </div>
  );
};

export default Comments;
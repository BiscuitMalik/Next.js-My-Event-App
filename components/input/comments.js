import { useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
    const { eventId } = props;
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (showComments) {
            setIsLoading(true);
            setError(null);

            fetch('/api/comments/' + eventId)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch comments');
                    }
                    return response.json();
                })
                .then((data) => {
                    setComments(data.comments);
                    setIsLoading(false);
                })
                .catch((error) => {
                    setError(error.message);
                    setIsLoading(false);
                });
        }
    }, [showComments, eventId]);

    function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus);
    }

    function addCommentHandler(commentData) {
        fetch('/api/comments/' + eventId, {
            method: 'POST',
            body: JSON.stringify(commentData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to add comment');
                }
                return response.json();
            })
            .then((data) => {
                // Handle success, if needed
                console.log(data);
            })
            .catch((error) => {
                // Handle error, show an error message to the user if needed
                console.error(error);
            });
    }

    return (
        <section className={classes.comments}>
            <button onClick={toggleCommentsHandler}>
                {showComments ? 'Hide' : 'Show'} Comments
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler} />}
            {isLoading && <p>Loading comments...</p>}
            {error && <p>{error}</p>}
            {showComments && <CommentList items={comments} />}
        </section>
    );
}

export default Comments;

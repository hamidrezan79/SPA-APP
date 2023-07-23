import { useParams } from "react-router-dom";

const PostPage = () => {
  const id = useParams().id || 1 ;
  return (
    <div>
      <h2>Post Detaile - {id}</h2>
      <div>{JSON.stringify(useParams())}</div>
    </div>
  );
};

export default PostPage;

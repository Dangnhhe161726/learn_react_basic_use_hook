import { useFetch } from "../../../customize/fetch";
import { Loading, IsError } from "../../Animation/Animation";
import "../Pokemon/ListPokemon.scss";
import "./Blog.scss";
import { Link, useParams, useHistory } from 'react-router-dom';

export const Blogs = () => {
    const { data: dataBlog, loading, isError } = useFetch('https://jsonplaceholder.typicode.com/posts', false, 3000);

    let newDataBlog = [];
    if (dataBlog && dataBlog.length > 0) {
        newDataBlog = dataBlog.slice(0, 12);
        // console.log('>>newDataBlog:', newDataBlog);
    }

    return (
        <>
            <h2>Blogs Page</h2>
            <div className="blog-container">
                {loading === false && newDataBlog.length > 0 &&
                    newDataBlog.map(item => {
                        return (
                            <div className="single-blog" key={item.id}>
                                <div className="title">
                                    <span>title : </span> {item.title}
                                </div>
                                <div className="content">
                                    {item.body}
                                    <button>
                                        <Link to={`/blogs/${item.id}`}>View Detail</Link>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>


            <Loading
                loading={loading}
            />


            <IsError
                isError={isError}
            />
        </>
    )
}

export const BlogDetail = () => {
    let { id } = useParams();
    let history = useHistory();
    const { data: dataBlogDetail, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false, 0);

    const handleBackData = () => {
        history.push('/blogs')
    }

    return (
        <div className="blog-detail">
            <div className="top-body">
                <button onClick={handleBackData}>
                    &lt;
                </button>
            </div>
            <div className="bottom-body">
                {
                    loading === false && dataBlogDetail &&
                    <>
                        <div className="title">
                            <span>title:</span> {dataBlogDetail.title}
                        </div>
                        <div className="content">
                            {dataBlogDetail.body}
                        </div>
                    </>
                }
            </div>
        </div>
    )
}
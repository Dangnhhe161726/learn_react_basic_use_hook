import { useState } from "react";
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
            {
                loading === false &&
                <>
                    <div className="add-blog">
                        <button className="btn-add-blog"><Link to="/blogs/add-blog">+ Add new blog</Link></button>
                    </div>
                    <div className="blog-container">
                        {newDataBlog.length > 0 &&
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
                </>
            }
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

export const AddNewBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log('>>submit form:', title, content);
    }

    return (
        <div className="add-blog-page">
            <div className="add-blog-title">
                Add new Blog
            </div>
            <div className="add-blog-form">
                <form onSubmit={(e) => onSubmitForm(e)}>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" placeholder="Enter title..."
                        value={title}
                        onChange={(event) => setTitle(event.target.value)} /><br />
                    <label htmlFor="content">Content</label>
                    <textarea id="content" placeholder="Enter content..."
                        value={content}
                        onChange={(event) => setContent(event.target.value)}></textarea><br />
                    <button className="btn-submit-form" type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}
import { useEffect, useState } from "react";
import { useFetch } from "../../../customize/fetch";
import { Loading, IsError } from "../../Animation/Animation";
import "../Pokemon/ListPokemon.scss";
import "./Blog.scss";
import { Link, useParams, useHistory } from 'react-router-dom';
import { toast } from "react-toastify";
import { Button, Modal } from 'react-bootstrap';
import axios from "axios";


export const Blogs = () => {
    const [dataView, setDataView] = useState([]);
    const [show, setShow] = useState(false);


    const { data: dataBlog, loading, isError } = useFetch('https://jsonplaceholder.typicode.com/posts', false, 1000);

    useEffect(() => {
        if (dataBlog && dataBlog.length > 0) {
            let newDataBlog = dataBlog.slice(0, 12);
            setDataView(newDataBlog);
        }
    }, [dataBlog])


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddNew = (blog) => {
        let newDataBlog = dataView;
        newDataBlog.unshift(blog)
        setShow(false);
        setDataView(newDataBlog);
    }
    const handleDeleteBlog = (id) => {
        let updateData = dataView;
        updateData = updateData.filter(item => item.id !== id)
        setDataView(updateData);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new blog</Modal.Title>
                </Modal.Header>
                <Modal.Body><AddNewBlog
                    handleAddNew={handleAddNew}
                /></Modal.Body>
            </Modal>
            <h2>Blogs Page</h2>
            {
                loading === false &&
                <>
                    <div className="add-blog">
                        <Button variant="primary" onClick={handleShow}>
                            + Add new blog
                        </Button>
                    </div>
                    <div className="blog-container">
                        {dataView.length > 0 &&
                            dataView.map(item => {
                                return (
                                    <div className="single-blog" key={item.id}>
                                        <div className="header-single-blog">
                                            <div className="title">
                                                <span>title : </span> {item.title}
                                            </div>
                                            <div className="delete-single-blog">
                                                <span onClick={() => handleDeleteBlog(item.id)}>X</span>
                                            </div>
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

export const AddNewBlog = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onSubmitForm = async (e) => {
        e.preventDefault();
        if (!title) {
            toast.error('Title not empty', {
                theme: "light"
            });
            return;
        }
        if (!content) {
            toast.error('Content not empty', {
                theme: "light"
            });
            return;
        }
        let blog = {
            userId: 1,
            title: title,
            body: content,

        }
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', blog);
        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddNew(newBlog);
        }

    }

    return (
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
    )
}
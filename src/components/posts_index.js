import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions/index';


class PostsIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        if ( this.props.posts.length > 0) {
            return this.props.posts[0].data.map(post => {
                return (
                    <div className="card my-3" key = {post.id}>
                        <div className="card-body">
                            <Link to={`/post/${post.id}`} className="card-title"><h4>{ post.title }</h4></Link>
                        </div>
                    </div>
                );
            });
        }
    }

    render() {
        return (
            <div>
                <div className="text-right mt-5">
                    <Link to="/newpost" className="btn btn-success">
                        Add Post
                    </Link>
                </div>
                <h1 className="text-center my-3">Posts List</h1>
                { this.renderPosts() }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default  connect(mapStateToProps, { fetchPosts })(PostsIndex);
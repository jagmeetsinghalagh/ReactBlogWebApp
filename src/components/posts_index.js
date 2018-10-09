import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        if ( this.props.posts.length > 0) {
            let posts = this.props.posts[0].data;
            return posts.map(post => {
                return (
                    <div className="card my-3" key = {post.id}>
                        <div className="card-body">
                            <h5 className="card-title">{ post.title }</h5>
                            <p className="card-text">{ post.body }</p>
                        </div>
                    </div>
                );
            });
        }
}

    render() {
        return (
            <div>
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
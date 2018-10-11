import React,{ Component } from 'react';
import { connect } from 'react-redux';

import { fetchPost, deletePost } from '../actions/index';

class PostDetails extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteHandler() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render () {
        const { post } = this.props;
        this.onDeleteHandler = this.onDeleteHandler.bind(this);

        return (
            <div>
               <h1 className="text-center text-primary my-4">Post Details</h1>
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title float-left">
                            { post.title }
                        </h2>
                        <button type="button" onClick = { this.onDeleteHandler } className="btn btn-danger float-right">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostDetails);
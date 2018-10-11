import React,{ Component } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../actions/index';

class PostDetails extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchPost(id);
    }

    render () {
        const post = this.props.post;
        return (
            <div>
               <h1 className="text-center text-primary my-4">Post Details</h1>
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title text-center">
                            { post.title }
                        </h2>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.post };
}

export default connect(mapStateToProps, { fetchPost })(PostDetails);
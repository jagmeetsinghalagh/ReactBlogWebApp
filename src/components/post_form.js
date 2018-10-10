import React, { Component } from 'react';
import  { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { addPost } from '../actions/index';

class PostForm extends Component {

    renderTextField(field){
        const  className  = field.meta.touched && field.meta.error ? " form-control is-invalid " : " form-control";
        return (
            <div className="form-group">
                <label>{ field.label }</label>
                <input 
                    type="text"
                    className = { className }
                    {...field.input}
                />
                <div className="invalid-feedback">
                    { field.meta.touched ? field.meta.error : '' }
                </div>
            </div>
        );
    }

    renderTextArea(field){
        const className  = field.meta.touched && field.meta.error ? " form-control is-invalid " : " form-control";
        return (
            <div className="form-group">
                <label>{ field.label }</label>
                <textarea 
                    className = { className }
                    {...field.input}
                />
                <div className="invalid-feedback">
                    { field.meta.touched ? field.meta.error : '' }
                </div>   
            </div>
                        
        );
    }

    onSubmitHandler(values) {
        this.props.addPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <h1 className="text-center mt-4 mb-2">Add Post</h1>
                <form className="needs-validation " onSubmit = {handleSubmit(this.onSubmitHandler.bind(this))}>
                    <Field
                        label="Title"
                        name="title"
                        component={ this.renderTextField }
                    />
                    <Field
                        label="Description"
                        name="description"
                        component={ this.renderTextArea }
                    />
                    <button type="submit" className="btn btn-block btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Title is Required!!";
    }

    if (!values.description) {
        errors.description = "Description is Required!!";
    }
    return errors;
}

export default reduxForm({
    validate: validate,
    form: "postform"
})(
    connect(null, { addPost })(PostForm)
);
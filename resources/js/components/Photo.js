import React, { Component } from "react";

import { postPhoto } from "./AdminsFunction";

class Photo extends Component {
    state = {
        image: "",

        success: "",

        imageRequired: "",
        imageType: ""
    };

    onChange = e => {
        this.setState({
            image: e.target.files[0]
        });
    };

    validateImage = () => {
        let imageRequired = "";

        if (!this.state.image) {
            imageRequired = "u should select image";
        }
        if (imageRequired) {
            this.setState({
                imageRequired
            });
            return false;
        } else {
            this.setState({
                imageRequired: ""
            });
        }

        if (this.state.image.size > 8048) {
            imageRequired = "maximum size should be < 8 mb";
        }
        if (imageRequired) {
            this.setState({
                imageRequired
            });
            return false;
        } else {
            this.setState({
                imageRequired: ""
            });
            return true;
        }
    };

    validateType = () => {
        let imageType = "";
        let type = this.state.image.type;
        if (
            type != "image/png"  &&
            type != "image/jpg"  &&
            type != "image/jpeg" &&
            type != "image/gif"
        ) {
            imageType = "invalid image";
        }

        if (imageType) {
            this.setState({
                imageType
            });
            return false;
        } else {
            this.setState({
                imageType: ""
            });
            return true;
        }
    };

    onFormSubmit = e => {
        e.preventDefault();
        this.validateImage();
        this.validateType();

        const formData = new FormData();
        formData.append("image", this.state.image);

        const id = this.props.id;
        postPhoto(id, formData).then(res => {
            if (res) {
                this.setState({
                    success: "photo is updated successfully"
                });
            } else {
                this.setState({
                    success: ""
                });
            }
        });
    };

    render() {
        const success = (
            <div className="alert alert-success">{this.state.success}</div>
        );

        return (
            <div>
                {this.state.success ? success : null}
                <div
                    class="card text-white bg-info mb-3"
                    style={{ maxWidth: "350px" }}
                >
                    <div class="card-header">upload image</div>
                    <div class="card-body">
                        <form
                            onSubmit={this.onFormSubmit}
                            encType="multipart/form-data"
                        >
                            <div className="form-group">
                                <label>photo</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="image"
                                    onChange={this.onChange}
                                />
                                <small style={{ color: "red" }}>
                                    {this.state.imageRequired}
                                </small>
                                <br />
                                <small style={{ color: "red" }}>
                                    {this.state.imageType}
                                </small>
                            </div>
                            <button type="submit" className="btn btn-success">
                                Edit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Photo;

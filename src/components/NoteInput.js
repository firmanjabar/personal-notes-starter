import React, { Component } from 'react'

export default class NoteInput extends Component {
    state = {
        title: "",
        body: "",
    }

    handleTitleOnChange = (e) => {
        if (this.state.title.length >= 50) {
            e.target.value = e.target.value.slice(0, e.target.maxLength)
        }
        this.setState((prevState) => {
            return {
                ...prevState,
                title: e.target.value,
            };
        });
    }

    handleBodyOnChange = (e) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                body: e.target.value,
            };
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd(this.state);
        this.setState({
            title: "",
            body: "",
        });
    }

    render() {
        return (
            <div className='note-input'>
                <h2>Buat Catatan</h2>
                <form onSubmit={this.handleSubmit}>
                    <p className="note-input__title__char-limit">Karakter: {this.state.title.length}/50</p>
                    <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." required value={this.state.title} onChange={this.handleTitleOnChange} />
                    <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." required value={this.state.body} onChange={this.handleBodyOnChange}></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

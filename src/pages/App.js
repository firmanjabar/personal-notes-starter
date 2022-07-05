import React, { Component } from 'react'
import Header from '../components/Header'
import NoteInput from '../components/NoteInput'
import Notes from '../components/Notes'
import { getInitialData } from '../utils/index'

export default class App extends Component {
    state = {
        data: JSON.parse(localStorage.getItem('notes')) || getInitialData(),
        search: '',
    }

    componentDidMount = () => {
        localStorage.setItem('notes', JSON.stringify(this.state.data))
    }

    componentDidUpdate = () => {
        localStorage.setItem('notes', JSON.stringify(this.state.data))
    }

    handleDelete = (id) => {
        const data = this.state.data.filter((data) => data.id !== id);
        this.setState({ data });
    }

    handleArchive = (id) => {
        const data = this.state.data.map((data) =>
            data.id === id ? { ...data, archived: !data.archived } : data
        );
        this.setState({ data });
    }

    handleAdd = ({ title, body }) => {
        this.setState((prevState) => {
            return {
                data: [
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString(),
                    },
                    ...prevState.data,
                ],
            };
        });
    }

    handleSearch = (search) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                search: search,
            };
        });
    }

    render() {
        return (
            <>
                <Header handleSearch={this.handleSearch} />
                <div className='note-app__body'>
                    <NoteInput handleAdd={this.handleAdd} />
                    <h2>Catatan Aktif</h2>
                    <Notes
                        data={
                            this.state.search
                                ? this.state.data.filter((data) =>
                                    data.title
                                        .toLowerCase()
                                        .includes(this.state.search.toLowerCase())
                                )
                                : this.state.data
                        }
                        handleDelete={this.handleDelete}
                        handleArchive={this.handleArchive} />
                    <h2>Arsip</h2>
                    <Notes
                        type="archive"
                        data={
                            this.state.search
                                ? this.state.data.filter((data) =>
                                    data.title
                                        .toLowerCase()
                                        .includes(this.state.search.toLowerCase())
                                )
                                : this.state.data
                        }
                        handleDelete={this.handleDelete}
                        handleArchive={this.handleArchive} />
                </div>
            </>
        )
    }
}

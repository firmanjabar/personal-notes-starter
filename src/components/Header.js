import React, { Component } from 'react'

export default class Header extends Component {
    state = {
        search: '',
    }

    handleSearchOnChange = (e) => {
        this.setState({ search: e.target.value });
    }

    handleSearchOnSubmit = (search) => {
        this.props.handleSearch(search);
    }

    render() {
        return (
            <div className='note-app__header'>
                <h1>Catatan</h1>
                <div className='note-search'>
                    <input type="text" placeholder="Cari catatan ..."
                        value={this.state.search}
                        onChange={this.handleSearchOnChange}
                        onKeyUp={() => this.handleSearchOnSubmit(this.state.search)}
                    />
                </div>
            </div>
        )
    }
}

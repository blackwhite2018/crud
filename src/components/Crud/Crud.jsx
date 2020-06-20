import React, { Component } from 'react';
import Card from './Card/Card';
import './Crud.css';

export default class Crud extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    getData = async () => {
        const response = await fetch('http://localhost:7777/notes');

        if (response.ok) {
            this.setState({
                data: await response.json()
            });
        }
    };

    handleRemoveCard = async id => {
        await fetch(`http://localhost:7777/notes/${ id }`, {
            method: 'DELETE'
        });

        this.getData();
    };

    componentDidMount() {
        this.getData();
    }

    handleSubmit = async evt => {
        evt.preventDefault();
        await fetch('http://localhost:7777/notes', {
            method: 'POST',
            body: JSON.stringify({content: evt.target.querySelector('textarea').value}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        this.getData();
    };

    render() {
        return (
            <>
            <div className="container">
                {
                    this.state.data.map(card => {
                        return (
                            <Card
                                key={ card._id }
                                data={ card }
                                handleRemoveCard={ this.handleRemoveCard }
                            />
                        );
                    })
                }
            </div>
            <button type="button" onClick={ this.getData }>update</button>
            <form method="POST" onSubmit={ this.handleSubmit }>
                <textarea name="content" cols="30" rows="10"></textarea>
                <input type="submit" value="add" />
            </form>
            </>
        );
    }
}


import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'
import ReactTags from 'react-tag-autocomplete'
import './SearchComponent.css'

class Search extends Component{
    constructor (props) {
        super(props)
        
        this.state = {
            tags: [],
            suggestions: [],
        }
        
        this.reactTags = React.createRef()
        }
        
        onDelete (i) {
        const tags = this.state.tags.slice(0)
        tags.splice(i, 1)
        this.setState({ tags })
        }
        
        onAddition (tag) {
        const tags = [].concat(this.state.tags, tag)
        this.setState({ tags })
    }
    componentDidMount(){
        axios.get('https://glacial-caverns-39108.herokuapp.com/medicine/tags')
        .then((res)=>{
            this.setState({
                suggestions : res.data
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    onSearch(event){
        event.preventDefault();
        console.log("I was clicked");
        const params = JSON.stringify({
            latitude : "23.672884",
            longitude : "86.156107",
            tags:this.state.tags,
            travelMode : "walking",
        })
        axios.post('https://glacial-caverns-39108.herokuapp.com/search',params,{
            "headers": {
                "content-type": "application/json",
            },
        }).then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    render() {
        return (
            <Form inline>
                <ReactTags
                ref={this.reactTags}
                tags={this.state.tags}
                suggestions={this.state.suggestions}
                onDelete={this.onDelete.bind(this)}
                onAddition={this.onAddition.bind(this)} />
                <Button variant="outline-dark" onClick={this.onSearch} >Search</Button>
            </Form>
        );
    }
}

export default Search
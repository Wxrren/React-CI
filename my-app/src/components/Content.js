import React, { Component } from "react";
import css from "./css/Content.module.css";
import postsData from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
    constructor(props) {
        super(props)
        this.state = { isLoaded: false,
                        posts: []
         };

    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded: true,
                posts: postsData.savedPosts
            })
        }, 2000)
    }
    
    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor="search">Search</label>
                        <input
                            type="search"
                            id="searchInput"
                            name="search"
                            placeholder="By Author"
                            onChange={(event) => {
                                const searchAuthor = event.target.value
                                const filteredPosts = postsData.savedPosts.filter(post => {
                                return post.name.toLowerCase().includes(searchAuthor.toLowerCase())
                                })
                                this.setState({
                                posts: filteredPosts,
                                })
                            }}
                        />
                        <h4>Posts Found: {this.state.posts.length}</h4>
                    </form>
                </div>
                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ?
                        <PostItem savedPosts={this.state.posts} />
                        : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default Content

       

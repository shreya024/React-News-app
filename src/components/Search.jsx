import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopNews from './TopNews';

const Search = () => {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState();
    const [query, setQuery] = useState('top news');

    useEffect(() => {
        const getNews = () => {
            axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=b14f966c9d1f40f69cdee3dce6bafbee`)
                .then(
                    res => {
                        console.log(res.data.articles)
                        setNews(res.data.articles);
                    }
                )
                .catch(err => {
                    console.log(err);
                })
        }
        getNews();
    }, [query]);

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    };

    

    return (

        <div >
          <form className="search-form" onSubmit={getSearch}>
            <input className="search-bar" type="text" onChange={updateSearch} placeholder="Enter topic to search news" />
            <button className="search-button" type='submit'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
              </svg>
            </button>
          </form>
          <br/>
          <h1>Enjoy some news on {query}</h1>
          <>{
            news.map((d)=>{
                return(
                    <div key={d.url}>
                        <TopNews
                           
                            title={d.title}
                            description={d.description}
                            content={d.content}
                            image={d.urlToImage}
                            read={d.url}
                        />
                        
                    </div>
                )
                
            })
            
        }
            
        </>
        </div>
      );

}

export default Search;
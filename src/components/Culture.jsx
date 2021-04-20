import React,{useEffect,useState} from 'react';
import axios from 'axios';
import TopNews from './TopNews';

const Culture=()=>{

    const [articlesData,setArticlesData]=useState([])
    
    useEffect(()=>{
        axios.get('https://newsapi.org/v2/everything?q=culture&apiKey=b14f966c9d1f40f69cdee3dce6bafbee')
        .then(
            res=>{
                console.log(res.data.articles)
                setArticlesData(res.data.articles);
            }
        )
        .catch(err=>{
            console.log(err);
        })
    },[])
    return(
        <>{
            articlesData.map((d)=>{
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
    );
    
    
}

export default Culture;
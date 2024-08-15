
import { useEffect, useState } from 'react'
import './App.css'
import Article from './Article';
export const Articles=()=>{
    const [articles,setArticles]=useState([]);
  
  useEffect( ()=>{
    async function dataFetch(){
      fetch(import.meta.env.VITE_REACT_APP_APIURL+"/articles")
      .then(response=>response.json())
      .then(data=>setArticles(data))
      .catch(error=>console.error("Error fetching articles: ",error))
      
    }
    dataFetch();
  },[]);
  console.log(articles)

  return(
    <div className='container-fluid'>
        <div className='card' >
          <div className='card-body'>            
              {articles.map((article) => (               
                
                  <Article urlToImage={article.urlToImage} key={article._id} url={article.url} title={article.title} 
                  author={article.author} description={article.description} publishedAt={article.publishedAt}/>
                
                
              ))}
            
          </div>
        </div>
        
      </div>
  )
}
export default Articles;
import React from 'react';
import Form from './Form'
import ItemsList from './ItemsList'

class App extends React.Component {
  state ={
    articles: []
  }

  addArticle = (article=>{
    const articles = this.state.articles
    article.id = Date.now()
    const newArticles = [...articles, article];
    this.setState({articles: newArticles})
  })
  
  render(){
    return(
      <div>
        <h3>Liste de course</h3>
        < Form formTitle = "Ajouter un article"
                addArticle = { this.addArticle }/>
        < ItemsList />
      </div>
    )
  }
}

export default App;

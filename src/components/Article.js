import React, {Component} from 'react'

class Article extends Component{
   state = {
       isOpen: false
   }
    render(){
        const {article} = this.props;
        const body = this.state.isOpen && <section>{article.text}</section>

        return (
            <div >
                <h2>{article.title}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'Hide' : 'show'}
                    </button>
                </h2>
                {body}
                <h3>
                    creattion data: {(new Date(article.date)).toDateString()}
                </h3>
            </div>
        )
    }
    handleClick =() =>{
        console.log('clicked');
        this.setState({
            isOpen: !this.state.isOpen
        });

    }
}


export default Article
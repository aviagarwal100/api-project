import React,{Component} from "react";
import axios from "axios"


class Api extends Component {
  componentWillMount(){
    this.getReddit();
  }
  getReddit(){
    axios.get(`http://www.reddit.com/r/${this.state.subr}.json`)
    .then(res=>{
      const post=res.data.data.children.map(obj=>obj.data);
      this.setState({post})
    })
  }
  constructor(props){
    super(props);

    this.state = {
      post:[],
      subr:"space"
    };
    this.getReddit=this.getReddit.bind(this);
  }
  render(){
    return(
      <div>
          <h1>{`/r/${this.state.subr}`}</h1>
          <ul>
          {this.state.post.map(post=>
              <li key={post.id}>{post.title}</li>
          )}
          </ul>
      </div>
    );
  }
}
export default Api;

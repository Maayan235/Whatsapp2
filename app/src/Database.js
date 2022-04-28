import React from 'react';

class Database extends React.Component {
    toStrin(u){
        let txt=""
        for(let i = 0; i<u.length; i++){
            txt += JSON.stringify(u[i])
            txt += "\n"
        }
        return txt
    }
    render(){
        return (
          <div> {this.toStrin(this.props.users)} </div>
          )
        }
    }
 export default Database;   
    
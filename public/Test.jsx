import React, { Component } from 'react';

class Test extends Component {
    constructor(){
        super()
        this.state = {
            vall:'',
            son: 0,
            images: [
                {
                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png'
                },
                {
                    img: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80'
                },
                {
                    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                }


            ]
        }
        this.run = this.run.bind(this)
        this.next = this.next.bind(this)
    }

    next(){
        if(this.state.son <2){
            this.setState({son: this.state.son + 1})
        }
        else{
            this.setState({son: 0})
        }
    }

    run(val){
        let box 
        for(let i = 0; i<val.length ; i++){
            if(val[i] === val[i+1]){
                alert('xato')
            }else{
                this.setState({vall: val})  
            }
        }




        // console.log(this.state.vall);
        // if(val.length>6){
        //     alert('xato')
                
        // }else{
        //     this.setState({vall: val})
        // }
    }
   

    render() {
        return (
            <div>
                <input  value={this.state.vall} type="text" onInput={(val)=> this.run(val.target.value)} />
                <hr />
                <div>
                    <button>orqga</button>
                    <img width={300} height={300} src={this.state.images[this.state.son].img} alt='rasm' />
                    <button onClick={this.next}>oldinga</button>
                </div>
            </div>
        );
    }
}

export default Test;

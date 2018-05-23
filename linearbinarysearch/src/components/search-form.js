
import React, { Component } from 'react';


class SearchForm extends Component {
    constructor(props){
    super(props)
    this.state= {
        linearCount: 0,
        binaryCount: 0,
        input:0,
        arr: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 
            13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 
            68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 
            85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 
            46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 
            64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 
            54, 84, 34, 53, 78, 40, 14, 5
        ]

    }
    this.binarySearch=this.binarySearch.bind(this);
}
    linearSearch=(event) => {
        event.preventDefault();
       console.log('clicked');
        let count=0;
        for (let i=0; i < this.state.arr.length; i++) {
            if (this.state.arr[i] == this.state.input){
            return this.setState({linearCount : count});
        }
        count ++;
        console.log('count');
    }
    return this.setState({linearCount:'Does not exist'});
}


    binarySearch(arr, input, start=0, end=this.state.arr.length, count=0){
        console.log(input);
       
        let data = this.state.arr.sort((a,b) => a-b);
        input= this.state.input;
        //console.log(start, end);
        if (start > end) {
            return 'not found';
        }
       const index = Math.floor((start + end) / 2);
       const item = data[index];
        console.log(start, end);
    
        if (item == input) {
            console.log(count);
            return count;
        }
        else if (item < input) {
            count++;
            return this.binarySearch(data, input, index + 1, end, count);
        }
        else if (item > input) {
            count++;
            return this.binarySearch(data, input, start, index - 1, count);
        }
    
       
    }


    onChange=(event) => {
        this.setState({
           input: event.target.value
        })
    }
    onClick=(event) =>{
        event.preventDefault();
        this.setState({
            binaryCount: this.binarySearch()
        })
    } 

    render(){
    
        return(
            <div>
                <form>
                <h2> Search It</h2>
                <input type="text" name="search"
                onChange={(event)=>this.onChange(event)}
                 />
             <br/>
            <button onClick={this.linearSearch}> Linear Search </button>
            <br/>
            <button onClick={(event)=> this.onClick(event)}> Binary Search </button>
                </form>
                <p>Linear count:{this.state.linearCount}</p>
                <p>Binary count:{this.state.binaryCount}</p>
            </div>
        )

    }
}

export default SearchForm;
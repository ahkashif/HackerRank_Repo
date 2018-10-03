'use strict'
class Heap {

  constructor() {
    this._data = []
  }

  push( v ) {
    this._data.push( v );
    let i = this._data.length;
    let p = Math.floor( this._data.length / 2 );
    while( v < this.peek( p ) ) {
      this.swap( p, i );
      i = p;
      p = Math.floor( i / 2 );
    }
  }

  pop() {

    this.swap(1,this._data.length);
    const value = this._data.pop();

    let i = 1;
    let sorting = true;
    while( sorting ) {
      let c1 = this.peek( i * 2 );
      let c2 = this.peek( i * 2 + 1 );
      let p = this.peek( i );
      if( ( c1 < c2 || c1 === undefined || c2 === undefined ) && c1 < p ) {
        this.swap( i * 2, i );
        i = i * 2;
      } else if( c2 < p ) {
        this.swap( i * 2 + 1, i );
        i = i * 2 + 1;
      } else {
        sorting = false;
      }
    }
    return value;
  }

  peek(i) {
    return this._data[ i -  1 ];
  }

  swap(a,b) {
    --a;
    --b;
    let t = this._data[ a  ];
    this._data[ a ] = this._data[ b ];
    this._data[ b ] = t;
  }

  size() { return this._data.length; }

  toArray() {
    return this._data;
  }
}


function processData(input) {
    'use strict'
    const data = input.split('\n');
    const header = data.shift().split(' ');
    const totalCookies = parseInt( header.shift() );
    const k = parseInt( header.shift() );
    
    const cookies = data.shift().split(' ').reduce((h,c) => {
        h.push( parseInt( c ) );
        return h;
    },new Heap());
    
    while( cookies.peek( 1 ) < k && cookies.size() > 1 ) {
        let c1 = cookies.pop();
        let c2 = cookies.pop();
        cookies.push( c1 + c2 * 2 )
    }
    
    if( cookies.size() === 1 && cookies.peek(1) < k ) {
        console.log( -1 );
        return;
    }
    console.log( totalCookies - cookies.size() );
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
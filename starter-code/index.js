class SortedList {
    constructor() {
      this.items = []    
      
    }

    get length(){
      return this.items.length
    }



    add(item) {
      this.items=[...this.items,item].sort((a,b)=>(a-b))

    }
    get(pos) {
      if(this.items[pos]){
        return this.items[pos]
      }else throw new Error("OutOfBounds")
      
    }
    max() {
      if(this.isLength()){
        return Math.max(...this.items)
      } else throw new Error("EmptySortedList")
    }
    min() {
      if(this.isLength()){
        return Math.min(...this.items)
      } else throw new Error("EmptySortedList") 
    }
    average() {
      if(this.isLength()){
        return this.items.reduce((acc, el) => acc + el) / this.items.length;
      }
      throw new Error("EmptySortedList")
    }
    sum() {
      if(this.isLength()){
        return this.items.reduce((acc,el)=>acc+el)
      }else{
        return 0
      }
    }
    isLength() {
      return this.length > 0
    }
  };
  
  module.exports = SortedList;
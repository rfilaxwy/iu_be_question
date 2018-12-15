//Part 1

const val={};
class RyanCache{
    get(key){          
        if(!val.hasOwnProperty(key)){
            //check db table size, using below fake BE Postgres function (getSize()), against val size to see if val needs to be updated.
            //This is assuming that the db is maintaining all of the values.
            if(dataSource.getSize() === Object.keys(val).length){
                return false;
            } else {
                Object.assign(val,dataSource.fetch());
            }
        }
    }  
}

//Part 2

class RyanCache{
    vals = [];
    
    get(arrayOfKeys){
        
        let toFetch = [];
        let toReturn = [];
        //iterate over the passed in array of keys checking if they are contained in val. if they are then add the key and value to toReturn
        //otherwise add them to toFetch which will then be used to populate vals. 
        for(let i in arrayOfKeys){
            if(!vals.hasOwnProperty(i)){
                toFetch.push(i)
            } else {
                toReturn.push({i:arrayOfKeys[i]})
            }
        }
        if(toFetch.length>0){
            let addToVals = dataSource.fetch(...toFetch);//this assumes fetch takes an arry and returns a value for each found.
            addToVals.forEach(val=>{
                vals.push(val);
                toReturn.push(val);
            })
        }
            if(!(dataSource.getSize() === Object.keys(val).length){
                Object.assign(val,dataSource.fetch());
            }
        return toReturn;     //toReturn was populated by the first for loop and then the second fetch and should have the values if 
    }                         //if they were in vals otherwise it would fetch using a new list of those missing and return the value or null.      
}

//Part 3

//For LRU maybe have each time a value is called splice it from list and add it to the end, then the bottom ~50-100 can be dropped 
//when purging
const cache=[];
class RyanCache{
    maxSize = 1000; //Arbitrary value.
    
    get(key){  
        //if block to check for values and add them using fetch if missing w/o having to do LRU purge becasuse maxsize not reached.
        if(Object.keys(cache).length<maxSize-1){ 
            if(!val.hasOwnProperty(key)){
                let retVal= dataSource.fetch(key)
                if(retVal){//if returns a truthy
                    cache.push(retVal)
                } 
            } else {
                let indx =  cache.indexOf(key); //get index of value,splice the value and pop it onto the end. 
                cache.push(cache.splice(indx,1));
            }
        } else {
            cache.splice(0,50);
            if(!val.hasOwnProperty(key)){
                let retVal= dataSource.fetch(key)
                if(retVal){//if returns a truthy
                    cache.push(retVal)
                } 
            } else {
                let indx =  cache.indexOf(key); //get index of value,splice the value and pop it onto the end. 
                cache.push(cache.splice(indx,1));
            }
        }

    }  
}

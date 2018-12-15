//Part 1
// const val={};

// class RyanCache{
//     get(key){          
//         if(!val.hasOwnProperty(key)){
//             //check db table size, using below fake BE Postgres function (getSize()), against val size to see if val needs to be updated.
//             //This is assuming that the db is maintaining all of the values.
//             if(dataSource.getSize() === Object.keys(val).length){
//                 return false;
//             } else {
//                 Object.assign(val,dataSource.fetch());
//             }
//         }
//     }  
// }

//Part 2
// * Now, CandidateCache.get() takes multiple keys instead of a single key. Additionally, DataSource.fetch() takes a set
// * of keys and only returns the values in the database associated with those keys. This way, the entire contents of the
// * database are not returned each time DataSource.fetch() is called. Using Kotlin or your language of choice, implement
// * the following CandidateCache to return the values associated with the given keys. Values should be cached in-memory
// * within the CandidateCache class. Do not call DataSource.fetch() more than necessary. That is, only call
// * DataSource.fetch() when CandidateCache.get() is called with a key for which you do not know the associated value.
// * Every time DataSource.fetch() is called, the CandidateCache should update its cached values, adding new ones and
// * removing ones that are no longer present.



class RyanCache{
    get(arrayOfKeys){
        let vals = [];
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
            let addToVals = dataSource.fetch(...toFetch);
            addTovals.forEach(val=>{
                vals.push(val);
                toReturn.push(val);
            })
        }
        return toReturn;         
    }  
}



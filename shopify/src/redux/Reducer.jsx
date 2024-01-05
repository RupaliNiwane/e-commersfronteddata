const initState = {
   card:[]
}
 
 export const reducer = (store = initState, action)=>{
        switch(action.type){
        case "ADD_TO_CARD":{
        return{
            ...store,
            card:[...store.card,action.value]
        }
       }
       default:
       return store;
      }
 } 
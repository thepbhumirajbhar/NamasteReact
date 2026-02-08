two types of import/export
1. default export/import
2. named export/import: uses { <component_name> }

# React hooks
- normal JS utility functions given to us by React.
- need to be imported from "react" like a named import.  
- Two MOST IMP hooks: 1. useState(): used to generate super powerful State variables in react.
                      2. useEffect()


# (1.) useState HOOK  
- const [xyz, setxyz] = useState(<whatever data to be passed>)   
- const [listOfRestaurants, setListOfRestaurants] = useState(resObj)
  the second paramenter (eg: setListOFRestaurants) is used to update the list. The list can not be updated directly.
- this is same as:
               /*
               ! this too shall work: array destructuring 
               * const arr = useState(resObj);
               * const [listOfRestaurants, setListOfRestaurants] = arr;
               */

# (2.) useEffect HOOK
- uses 2 arguments: callback function(arrow function),  dependancy array.
- suppose useEffect is inside Body component: the component renders --> as sooon as it finishes --> the useEffect callBack function is called afterwards immediately. 
- for eg:   useEffect(() =>{
               console.log("useEffect called")
            },[]);


# two ways apps fetch the data from backEnd
1. as soon as page LOADS --> API call --> RENDER it on ui.
2. as soon as page LOADS --> RENDER the ui --> API call --> RE-RENDER the data (PREFFERED cz it gives a better UX)


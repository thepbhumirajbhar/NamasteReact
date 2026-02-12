two types of import/export
1. default export/import
2. named export/import: uses { <component_name> }

# React hooks
- normal JS utility functions given to us by React.
- need to be imported from "react" like a named import.  
- Two MOST IMP hooks: 1. useState(): used to generate super powerful State variables in react.
                      2. useEffect()


# (1.) useState HOOK  
- used to create LOCAL STATE VARIABLE inside the "functional component".
- never create it inside if..else or for loop or inside function=> causes inconsistency in the code.
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
- suppose useEffect is inside Body component: the component renders --> as sooon as it finishes --> the useEffect callBack function is called afterwards immediately, therefore used to make api call once the page loads to fetch data from backend.
- for eg:   useEffect(() =>{
               console.log("useEffect called")
            },[]);
- (1.) if no dependency array => useEffect is called on every render.     
- (2.) when empty dependency array = [] => useEffect is called on initial render(JUST ONCE)   
- (3.) when there is something in the dependency array, callback function is called everytime it changes.
      for ex: useEffect(() =>{
               console.log("useEffect called")
            },[btnNameReact]); then it will render everytime btnNameReact updates(btn changes from login to logout or vice versa--> useEffect is called).
 


# two ways apps fetch the data from backEnd
1. as soon as page LOADS --> API call --> RENDER it on ui.
2. as soon as page LOADS --> RENDER the ui --> API call --> RE-RENDER the data (PREFFERED cz it gives a better UX)


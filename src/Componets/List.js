// import React from 'react';
// function ListElement(props){
//     const list =props.list;
//     const hyrateFun = list.map((item)=>
//     {return <li>{item*2}</li>}
//    )
//    return <ul>{hyrateFun}</ul>
// }
// function ComponetForList (props){
//     const list = props.list
//     const listItem = list.map((item)=>item)
//     return <ListElement key={listItem*2} list={list} />
// }
function ComponetForList (props){
    const list = props.list
    return <ul>
        {list.map((item)=><li key={item*2}>{item}</li>)} 
    </ul>
}
export default ComponetForList;
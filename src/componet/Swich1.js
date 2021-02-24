function Swich(props){
    let state = "false";
    if(props.on){
        state = 'on'
    }
    return <div>Swich is {state}</div>
}
export default Swich;
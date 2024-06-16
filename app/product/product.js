'use client'
export default function ProductButton(props){
    return (
        <div>
        <button onClick={() => console.log(props.price)}>Click Me</button>
        </div>
    )
}
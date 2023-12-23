 
export const Input  = ({text , ...props }  ) => {  
    console.log({...props});
    return(
        <>
            <h1><label className="label"  htmlFor={text}>{text}</label></h1>
            <input className="imput"  {...props} />
        </>
    )
    
}
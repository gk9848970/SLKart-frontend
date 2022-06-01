const ButtonCustom=({text,background,color,border,margint,marginl,width,addtoCard,pid})=>{
    return(
        <div>
           <button style={{backgroundColor:`${background}`,color:`${color}`,width:`${width}`, border:`1px solid ${border}`,margin:`${margint} ${marginl}`}}  className='buttonCustom'>{text}</button>
        </div>
    )
}

export default ButtonCustom;
const ProfileButton=({icon,title})=>{
    return(
        <div className="profileButton">
           {icon}
           <h5>{title}</h5>
        </div>
    )
}
export default ProfileButton;
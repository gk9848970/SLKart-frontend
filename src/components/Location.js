const Location=({path})=>{
    return(
      <div className="location mb-4  d-flex justify-content-center col-md-12" style={{width:'100%'}}>
         <p className='mt-1'>Home {'>'} {path}</p>
      </div>
    )
}
export default Location;
const Loader = ({color}) => {
  return <span className={color==='black' ? 'loader loader-black' : 'loader'} id="spinner" ></span>
}

export default Loader
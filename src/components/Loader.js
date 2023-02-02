const Loader = ({color}) => {
  return <span className={color==='black' ? 'loader loader-black' : 'loader'} id="spinner" data-testid="spinner"></span>
}

export default Loader
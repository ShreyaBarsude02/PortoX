import React,{useEffect,useRef} from 'react'
import './HeaderBar.css'
import Typed from 'typed.js';

const HeaderBar = (props) => {
  const el = useRef(null);
  useEffect(() => {
    var string1 = props.string1
    var string2 = props.string2
    var string3 = props.string3
    const typed = new Typed(el.current, {
      strings: [string1,string2,string3],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  },);
  return (
    <>
        <div className="header">
          <div className="left">
            <span className='header-heading'>
              <h2>{props.heading}</h2>
              <span className="subheading" ref={el}/>
            </span>
          </div>
          <div className="right">
            <img src={props.img} alt="" />
          </div>
        </div>
    </>
  )
}

export default HeaderBar

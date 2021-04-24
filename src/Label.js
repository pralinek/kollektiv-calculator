import React from "react";
import PropTypes from "prop-types";
import './Label.css'
import { createUseStyles } from 'react-jss';



  


function Label(props) {
  const { text,
            value, 
            sign,
            color,
        } = props;



        const useStyles = createUseStyles({
            labelColor: {
                border: props=>`5px solid ${props.color}`
            }
        });
        const classes = useStyles(props);
  return (
    <div className="price">
      <div className="text">
        <p>{text}</p>
      </div>
      <div className={`number ${classes.labelColor}`} >
        <span>{value}{sign}</span>
      </div>
    </div>
  );
}

Label.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  sign: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Label;

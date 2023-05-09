import * as React from 'react';
import Button from '@mui/material/Button';

export default function DisableElevation(props) {
  return (
        <button data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className={`${props.className} flex items-center gap-[8.5px]`}>
            <img src={props.img} alt="" />
                  {props.text}
      {/* Disable elevation */}
        </button>
  );
}
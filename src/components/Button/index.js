import React from 'react';

import './styles.css';

function Button({title, ...rest}) {
  return (
    <div>
        <button className='btn' {...rest}>
            {title}
        </button>
    </div>
  )
}

export default Button;
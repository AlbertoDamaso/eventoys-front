import React from 'react';

// import { Container } from './styles';

function Title({title}) {
  return(
    <div>
        <h1 className='title'>
            {title}
        </h1>
    </div>
  )
}

export default Title;
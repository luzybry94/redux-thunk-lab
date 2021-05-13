import React from 'react';

const CatList = props => {
  return (
      <div>
        {props.catPics.map(catPic => <img  key={catPic.id} alt='pic of cat' src={catPic.url}/>)}
      </div>

  )
}

export default CatList
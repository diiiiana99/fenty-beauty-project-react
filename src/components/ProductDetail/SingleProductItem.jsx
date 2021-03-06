import React, {useRef, useEffect} from 'react'
import useOnScreen from '../../hooks/useOnScreen'
import './ProductDetail.scss'
import Fade from 'react-reveal'

export default function SingleProductItem ({ product, index, updateImage }) {

    const ref=useRef(null);
    const onScreen = useOnScreen(ref);

    useEffect (() => {
        if(onScreen) {
            updateImage(index);
        }

    }, [onScreen, index])
 
  return (
    <Fade bottom>
    <div ref={ref} className='product-slide'>
      <h3 className='makeup-title2'>
        {product.title}
      </h3>
      <p className='make-up-desc2'>
        {product.description}
      </p>
      <button>Add To Cart</button>
    </div>
    </Fade>
  )
}
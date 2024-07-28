import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Home.css'


</div>
        <div>
            <h2 className='text-center'></h2>
            </div>
            <section className='product-card-content'>
                {
                    products?.map((product, index)=>{
                        const {_id, name, description, image, price} = product;
                        return(
                            <ProductCard
                             key={index}
                             name={name}
                             description={description}
                             image={image}
                             price={price}
                             _id={ _id }
                             />
                        )
                    })
                }
            </section>
    </div>
  )
}

export default Home


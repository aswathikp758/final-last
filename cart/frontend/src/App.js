import { Outlet } from 'react-router-dom';

import Header from './component/Header';
import {Toaster} from 'react-hot-toast';
import { useEffect } from 'react';
import { setDataProduct } from './redux/productSlide';
import { useDispatch } from 'react-redux';

function App() {
   const dispatch = useDispatch()
  //const productData = useSelector((state)=>state.product)
 
  useEffect(()=>{
    (async()=>{
      const res = await fetch(`https://srv-backend.onrender.com/product`)
      const resData = await res.json()
      dispatch(setDataProduct(resData))
    })()
  })

  // console.log(productData)
  return (
    <>
   <Toaster/> 
 <div>
 <Header/>
 {/* <main className=' pt-16 bg-slate-100 min-w-[calc(100vh)]'> */}
 <main className='pt-16'>
     <Outlet/>
 </main>
 </div>
 </>
  );
}

export default App;

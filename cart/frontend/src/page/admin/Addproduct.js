import React,{useState} from 'react'
import { BsCloudUpload } from 'react-icons/bs'
import { ImagetoBase64 } from '../../utility/ImagetoBase64'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Addproduct = () => {
     const navigate = useNavigate();
     const admindashboard=()=>{
    navigate('/admin');
  };
   const addproducts=()=>{
    navigate('/addproduct');
  };
   const manageproducts=()=>{
    navigate('/manageproduct');
  };
  const [data,setData]=useState({
    name:"",
    category:"",
    image:"",
    price:"",
    description:""
  })

  const handleOnChange=(e)=>{
    const {name,value}=e.target

    setData((preve)=>{
      return{
        ...preve,
        [name]:value
      }

    })

  }

const uploadImage=async(e)=>{

   const data = await ImagetoBase64(e.target.files[0])
      // console.log(data)

      setData((preve)=>{
        return{
          ...preve,
          image:data

          
        }
      })

}

const handleSubmit=async(e)=>{
  e.preventDefault()
  console.log(data)

  const {name,image,category,price}=data
  if(name&& image && category && price )
  {

    const fetchData=await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/uploadProduct`,{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(data)
  })
  const fetchRes=await fetchData.json()
  console.log(fetchRes)
  toast(fetchRes.message)

  setData(()=>{
    return{
      name:"",
      category:"",
      image:"",
      price:"",
      description:""
    }
  })

}
else{
  toast("Enter required Fields")
}

  }
  





  return (
     
      <div id="page-top">

       <div id="wrapper">

       
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

           
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
              <div>logo</div>
                <div className="sidebar-brand-text mx-3">Site name</div>
            </a>

            <li className="nav-item active">
                <a className="nav-link" href="index.html" >
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

         

          
            <div className="sidebar-heading">
                Interface
            </div>

            
            <li className="nav-item">
                <a className="nav-link collapsed" href="index.html" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo"onClick={admindashboard}>
                   
                    <span>Home</span>
                </a>
               
            </li>

             <li className="nav-item">
                <a className="nav-link collapsed" href="index.html" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities" onClick={addproducts}>
                   
                    <span>Add Products</span>
                </a>
                
            </li>


            <li className="nav-item">
                <a className="nav-link collapsed" href="index.html" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities" onClick={manageproducts} >
                   
                    <span>Manage Products</span>
                </a>
                
            </li>

          
          
           

           
           
            <li className="nav-item">
                <a className="nav-link collapsed" href="index.html" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    
                    <span>User Details</span>
                </a>
               
            </li>

           
            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                   
                    <span>Order Details</span></a>
            </li>

            
          
            <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."/>
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>

        </ul>
       

       
        <div id="content-wrapper" className="d-flex flex-column">

          
            <div id="content">

             
               
             
                <div className="container-fluid">

                 {/* add products */}

                 <div className="flex">
           
            <div className="container mx-auto mt-12">
               
      <div className='p-4'>
      <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white' onSubmit={handleSubmit}>
        <label htmlFor='name'></label>
        <input type={"text"} name="name" value={data.name} className='bg-slate-200 p-1'onChange={handleOnChange}/>
        <label htmlFor='category'>Category</label>
        <select className='bg-slate-200 p-1 my-1' name= "category" value={data.category} id='category' onChange={handleOnChange}>
          <option value={"other"}>Select category</option>
          <option value={"Fruits"}>Fruits</option>
          <option value={"Vegetable"}>Vegetable</option>
          <option value={"Icecream"}>Icecream</option>
          <option value={"Dosa"}>Dosa</option>
          <option value={"Pizza"}>Pizza</option>
        </select>
        <label htmlFor='image'>Image

        <div  className='h-40 w-full bg-slate-200 my-3 rounded flex items-center justify-center'>
          {/* <span className='text-5xl'><BsCloudUpload/></span>
          <img  alt ='' src={data.image} className="h-full"/>    */}
          
          {
              data.image ? <img src={data.image} className="h-full" alt='' /> :<span className='text-5xl'><BsCloudUpload/></span> 
            }
          
          
          <input type={"file" } accept="image/*" id="image" onChange={uploadImage} className="hidden"/>
        </div>
        </label>
        <label htmlFor='price' className='my-1'>Price</label>
        <input type={"text"} className='bg-slate-200 p-1' name="price" value={data.price} onChange={handleOnChange}/>
 
      <label htmlFor='description'>Description</label>
      <textarea rows={3} className='bg-slate-200 p-1 my-1 resize-none' name="description" value={data.description} onChange={handleOnChange}></textarea>

      <button className='bg-red-500 hover:bg-red-600 text-white text-lg  my-2 font-medium drop-shadow' >Save</button>
      </form>
    </div>


            </div>
        </div>
                   
                        
                    </div>

                   
                   
                   
            </div>
           

        </div>
        

    </div>
  
</div>

    
  )
}

export default Addproduct
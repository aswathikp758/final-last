import './style.css';
import { useEffect, useState} from 'react';
import axios from "axios";
import Formtable from './Formtable';
import { useNavigate } from 'react-router-dom';
import { BsFillRocketTakeoffFill} from "react-icons/bs";

axios.defaults.baseURL="http://localhost:8080/"

function Userdetails() {
 
  const [dataList,setDataList]=useState([])

 
     const getFetchData=async(e)=>{
     const data=await axios.get("/userdata")
     console.log(data);
       if(data.data.success){
       setDataList(data.data.data)
    
    }
   }
   useEffect(()=>{
       getFetchData();
   },[])
   
 
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
  



  return (
    <>
     <div id="page-top">

       <div id="wrapper">

       
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

           
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
              <div>logo</div>
                <div className="sidebar-brand-text mx-3">Site name</div>
            </a>

            <li className="nav-item active">
                <a className="nav-link" href="index.html" onClick={admindashboard}>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

         

          
            <div className="sidebar-heading">
                Interface
            </div>

            
            <li className="nav-item">
                <a className="nav-link collapsed" href="index.html" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                   
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
                <BsFillRocketTakeoffFill/>
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>

        </ul>
       

       
        <div  className="d-flex flex-column">

       

          <div className='tableContainer pt-5' >
            <h4 className='bg-dark text-white text-center'>Customer Details</h4>
            <table>
              <thead>
                <tr>
                  
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                { dataList[0]?(
                  dataList.map((el)=>{
                    console.log(el);
                    return(
                      <tr>
                        <td>{el.firstName}</td>
                        <td>{el.lastName}</td>
                        <td>{el.email}</td>
                       
                      </tr>
                    )
                  })):(
                    <p style={{textAlign:"center"}}>No Data</p>
                  )
                }
              </tbody>
            </table>

          </div>                
                   
                   
            </div>
           

        </div>
        

    </div>
   
    </>
  );
}

export default Userdetails;

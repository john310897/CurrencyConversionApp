import React, { useState,useEffect } from 'react';
import Axios from 'axios';
function Home(){

    const [items,setItems]=useState([]);
    const [country,setcountry]=useState([]);
    const [country2,setcountry2]=useState([]);
        

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const result=await Axios.get('http://data.fixer.io/api/latest?access_key=ac4c0c5f5d73de1722884c060216bd47');
        console.log(result);
        setItems(result);
        setcountry(result.data.rates);
        setcountry2(result.data.rates);


    }
    const convert=()=>{
        var amt1,amt2,c1,c2="";
        amt1=document.getElementById('amount1').value;
        c1=document.getElementById('cur1').value;
        c2=document.getElementById('cur2').value;
        var x=document.getElementById('cur2').options;
        var y=document.getElementById('cur2').selectedIndex;
        const num=(c2/c1)*amt1;
        document.getElementById("result").innerHTML=num+" "+x[y].text;
        
    }
    return(
       
        <div className='container' id='converter_box'>
             <h2 align='center'>Currency converter</h2>
            <div id='result'>
            
            </div>
            <br/>
            <form>
            <div className='row'>
                <div className='col'>
                    <input type='number' className='form-control' placeholder='Enter amount' id='amount1' required/>

                </div>
                <div className='col'>
                    <select id='cur1' className='form-control'>
                        {
                            Object.keys(country).map((value,index)=>
                            <option key={index} value={country[value]}>{value}</option>
                            )
                        }
                    </select>
                </div>
                 to
                 <div className='col'>
                    <select id='cur2' className='form-control'>
                    {
                            Object.keys(country2).map((value,index)=>
                            <option key={index} value={country2[value]}>{value}</option>
                            )
                        }
                    </select>
                </div>

            </div>
            
            <br/>
            
            <button className='form-control btn btn-warning' onClick={convert.bind(this)}>Convert</button>
            </form>            
        </div>
        
    );
}
export default Home;
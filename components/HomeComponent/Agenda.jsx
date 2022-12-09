import { useState } from 'react';
const Agenda = () => {
    const [day1,setDay1]=useState([
        {
            id : 1 ,
            starttTime:"8:30 AM",
            endTime:"9:00 AM",
            task:"Check in",
            color:"border-[#FF8F2B]"
        },
        {
            id : 2,
            starttTime:"9:00 AM",
            endTime:"9:30 AM",
            task:"Opening ceremony",
            color:"border-[#966CEF]"
            
        },
        {
            id : 3 ,
            starttTime:"9:30 AM",
            endTime:"10:30 AM",
            task:"First talk",
            color:"border-[#FA3A4B]"

        },
        {
            id : 4 ,
            starttTime:"10:30 AM",
            endTime:"11:30 AM",
            task:"Second talk",
            color:"border-[#1652F5]"

        },
        {
            id : 5,
            starttTime:"11:30 AM",
            endTime:"12:00 AM",
            task:"Ice break",
            color:"border-[#2EC740]"

        },
        {
            id : 6 ,
            starttTime:"12:00 AM",
            endTime:"1:30 PM",
            task:"Restauration", 
            color:"border-[#FFBF3A]"

        },
        {
            id : 7 ,
            starttTime:"1:30 PM",
            endTime:"4:30 PM",
            task:"Workshop",
            color:"border-[#FF8F2B]"
        },
        {
            id : 8,
            starttTime:"4:30 PM",
            endTime:"5:00 PM",
            task:"Break",
            color:"border-[#966CEF]"
            
        }
    ])
    const [day2,setDay2]=useState([
        {
            id : 2,
            starttTime:"9:00 AM",
            endTime:"9:30 AM",
            task:"Check in",
            color:"border-[#966CEF]"
            
        },
        {
            id : 3 ,
            starttTime:"9:30 AM",
            endTime:"10:30 AM",
            task:"First talk",
            color:"border-[#FA3A4B]"

        },
        {
            id : 4 ,
            starttTime:"10:30 AM",
            endTime:"11:30 AM",
            task:"Second talk",
            color:"border-[#1652F5]"

        },
        {
            id : 5,
            starttTime:"11:30 AM",
            endTime:"12:00 AM",
            task:"Ice break",
            color:"border-[#2EC740]"

        },
        {
            id : 6 ,
            starttTime:"12:00 AM",
            endTime:"1:30 PM",
            task:"Restauration", 
            color:"border-[#FFBF3A]"

        },
        {
            id : 7 ,
            starttTime:"1:30 PM",
            endTime:"4:30 PM",
            task:"Workshop",
            color:"border-[#FF8F2B]"
        },
        {
            id : 8,
            starttTime:"4:30 PM",
            endTime:"5:00 PM",
            task:"Break",
            color:"border-[#966CEF]"
            
        }
    ])
    const [day3,setDay3]=useState([
        {
            id : 2,
            starttTime:"9:00 AM",
            endTime:"9:30 AM",
            task:"Check in",
            color:"border-[#966CEF]"
            
        },
        {
            id : 3 ,
            starttTime:"9:30 AM",
            endTime:"10:30 AM",
            task:"First talk",
            color:"border-[#FA3A4B]"

        },
        {
            id : 4 ,
            starttTime:"10:30 AM",
            endTime:"11:30 AM",
            task:"Second talk",
            color:"border-[#1652F5]"

        },
        {
            id : 5,
            starttTime:"11:30 AM",
            endTime:"12:00 AM",
            task:"Ice break",
            color:"border-[#2EC740]"

        },
        {
            id : 6 ,
            starttTime:"12:00 AM",
            endTime:"1:30 PM",
            task:"Restauration", 
            color:"border-[#FFBF3A]"

        },
        {
            id : 7 ,
            starttTime:"1:30 PM",
            endTime:"4:30 PM",
            task:"Workshop",
            color:"border-[#FF8F2B]"
        },
        {
            id : 8,
            starttTime:"4:30 PM",
            endTime:"5:00 PM",
            task:"Closing ceremony",
            color:"border-[#966CEF]"
            
        }
    ])
    const [agenda,setAgenda]=useState(day1)
    const [value,setvalue]=useState(1)
    const handlClick1 =()=>{
        setAgenda(day1)

    }
    const handlClick2 =()=>{
        setAgenda(day2)
    }
    const handlClick3 =()=>{
            setAgenda(day3)
        }
    

    
    return ( 
        <div id='agendas' className='flex justify-center py-32'>
        <div className=" bg-[#020207] flex justify-center w-[60%] ">
        <div className="w-[25%] bg-[#00000059] bg-opacity-90 rounded-sm border-1">
          <div className='flex w-full justify-center py-2 '>
      <div   className=' mr-2 w-5 h-5 bg-[#C13A2F] text-[#C13A2F] rounded-full  py-1 shadow-md shadow-gray-150'>
        
      </div>
      <div className=' mr-2 w-5 h-5 bg-[#CC8B0B] text-[#CC8B0B] rounded-full  py-1 shadow-md shadow-gray-150'>
        
      </div>
      <div className='mr-2 w-5 h-5 bg-[#45A738] text-[#45A738] rounded-full  py-1 shadow-md shadow-gray-150 '>
        
      </div>
         </div>
         <div className='p-5 '>
                <button onClick={handlClick1}  className='flex p-2 mb-2 items-center hover:cursor-pointer hover:bg-[#FFF] rounded-xl w-full hover:bg-opacity-25'> 
                    <div><img src="/time.svg" alt='fff' className='w-[75%]'/> </div>
                    <div className='ml-1 text-[#FFF]'>DAY 1</div>
                </button>
               <button onClick={handlClick2}  className='flex p-2 mb-2 items-center hover:cursor-pointer hover:bg-[#FFF] rounded-xl w-full hover:bg-opacity-25'   >
                    <div><img src="/time.svg" className='w-[75%]' alt='ccc'/></div>
                    <div className='ml-1 text-[#FFF]'>DAY 2</div>
                </button>
                <button  onClick={handlClick3}  className='flex p-2 mb-2 items-center hover:cursor-pointer hover:bg-[#FFF] rounded-xl w-full hover:bg-opacity-25'>
                    <div> <img src="/time.svg" alt='ddd' className='w-[75%]'/></div>
                    <div className='ml-1 text-[#FFF]'>DAY 3</div>
                </button>
         </div>
         

          </div>
          <div className="w-[75%] border-r-2">
            <div className="p-2 py-4 text-center bg-[#00000059] font-semibold text-[#338CE1] text-[26px]  border-1 shadow-md">Agenda</div>
            <div className="   ">
               {agenda.map((elem)=>{
        return(
        <div className="flex justify  p-2 border-b-2 " key={elem.id}>
             <div className=" flex-items:center mr-2 px-2 ">
                 <div className='font-semibold text-[18px] text-center'>{elem.starttTime}</div>
                 <div className='text-[background: #B4B4B4;] text-[14px] opacity-75 text-center'>{elem.endTime}</div>
             </div>
             <div className={`items-center  border-l-4 ${elem.color} mb-2 px-2 ml-2`}>
                <div className='text-[14px] opacity-75'>General</div>
             <div className='font-semibold text-[18px]'>{elem.task}</div>
 
             </div>
         </div>)
       })}
               
               
            </div>
           
          
          </div>
        </div>
        </div> ) ;
}
 
export default Agenda;
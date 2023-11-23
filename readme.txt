// import React from 'react'
// import { useSelector } from 'react-redux/es/hooks/useSelector'
// import { useDispatch } from 'react-redux'
// import { staffattendance } from '../Redux/StaffReducer'
// function Attendance() {

// const staffData = useSelector((state)=>state.staff)
// const dispatch = useDispatch()

// console.log("DDDDDDDDDDD",staffData)

// const handleEvent = (attendance,id)=>{
//     dispatch(staffattendance({attendance,id}))
// }
//   return (
//     <div>
//         <div>
//             {staffData && staffData.map((data,ind)=>{
//                 return (
//                     <div>
//                         <p>{data.name}</p>
//                         <p>{data.number}</p>
//                         <div>
//             <div><button onClick={()=>handleEvent("present",data.id)}>Present</button></div>
//             <div><button onClick={()=>handleEvent("halfday",data.id)}>Half day</button></div>
//             <div><button onClick={()=>handleEvent("absent",data.id)}>Absent</button></div>
//         </div>

//                     </div>
//                 )
//             })}
//         </div>
        
//     </div>
//   )
// }

// export default Attendance;

import React from 'react';
import'./Attendance.css';
import cardData from '../Card/Carddata';
import Card from '../Card/Card';

function Attendance() {
  return (
    <div className='outerbox'>
        <div className='innerbox'>
            {/* Header  */}
            <div className='header'>
                <img width="32" height="32" src="https://img.icons8.com/ios-filled/50/228BE6/circled-left-2.png" alt="circled-left-2"/>
                <p className='text1'>Date</p>
                <img width="32" height="32" src="https://img.icons8.com/ios-filled/50/228BE6/circled-right-2.png" alt="circled-right-2"/>
            </div>
            <hr />
            {/* End of Header  */}

            {/* upper text */}
            <div className='data'>
                <div className='Details'>
                    <h6>Present(P)</h6>
                    <p className='present'>18</p>
                </div>
                <div className='Details'>
                    <h6>Absent(A)</h6>
                    <p className='Absent'>0</p>
                </div>
                <div className='Details'>
                    <h6>Half-day</h6>
                    <p className='Half-day'>0</p>
                </div>
                <div className='Detail'>
                    <h6>Paid-holiday</h6>
                    <p className='paid-holiday'>0</p>
                </div>
            </div>
            <hr />
            {/* End of upper text */}

            {/* Cards */}
            <div className='cardsbox'>
                <h4>Monthly Staff (18)</h4>
                <div>
                {cardData.map((data, index) => (
                    <Card key={index} {...data} />
                ))}
                </div>
            </div>
            {/* End of Cards */}
        </div>
    </div>
  )
}

export default Attendance
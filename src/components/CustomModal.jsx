import React from 'react'
import './CustomModal.css'
import { useSelector } from 'react-redux'

const CustomModal = ({id, showPopup, setShowPopup}) => {

    const allUsers = useSelector((state) => state.app.users);

    const singleUser = allUsers.filter((ele) => ele.id === id);

  return (
    <div>
        <div className="modalBackground">
            <div className="modalContainer">
               <button onClick={ () => setShowPopup(false)}>Close</button>
               <h2>{singleUser[0].name}</h2>
               <h3 className=''>{singleUser[0].email}</h3>
               <h4 className=''>{singleUser[0].age}</h4>
               <p className=''>{singleUser[0].gender}</p>
            </div>
        </div>
    </div>
  )
}

export default CustomModal
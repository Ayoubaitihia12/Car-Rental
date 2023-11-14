import React from 'react'
import {FaPencilAlt} from "react-icons/fa"
import {BsTrash} from "react-icons/bs"

const ActionBtn = ({edit,link}) => {
  return (
    <a href={link} className={`flex rounded-xl text-white ${edit ? 'bg-blue-500 hover:bg-blue-600' : 'bg-red-500 hover:bg-red-600'} duration-300 w-[35px] h-[35px] items-center justify-center`}>
        { edit ? <FaPencilAlt size={13}/> : <BsTrash/>}
    </a>
  )
}

export default ActionBtn
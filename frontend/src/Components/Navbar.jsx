import React,{useEffect}from 'react'
import { insertData } from "../Reducers/productReducer";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";


export default function Navbar() {
  const dispatch = useDispatch()
  useEffect(() => {
    const GetData = async () => {
      const res = await axios.get("http://localhost:3000/user")
      const data = res.data.data
      await dispatch(insertData(data))
    };
    GetData() 
    
  }, []);
  return (
    <div>Navbar</div>
  )
}

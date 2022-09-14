import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {BsCart4} from 'react-icons/bs'


const Left = styled.div`
padding:10px;
width:33.3%;
`
const Center = styled.div`
padding:10px;
width:33.3%;
display:flex;
justify-content:center;
`
const Right = styled.div`
padding:10px;
width:33.3%;
display:flex;
justify-content:center;
margin-right: 13px

`

const Navbar = ({cartNumber}) => {

  return (
    <div className="flex justify-center items-center w-full shadow-md h-14">
        <Left className="flex justify-start">
            <h6 className='ml-10'>EN</h6>
            <input className="border-none w-19 rounded-md ml-10" placeholder='search' />
        </Left>
        <Center> 
            <h1 className="text-4xl text-bold"> AMAZEBALLS</h1>
        </Center>
        <Right className='items-center'>
          <h5 className="mr-4">REGISTER </h5>
          <h5 className="mr-4"> SIGN IN</h5>
          <Badge color="secondary" badgeContent={cartNumber}>
          <BsCart4 />
        </Badge>
        </Right>
    </div>

  )
}

export default Navbar

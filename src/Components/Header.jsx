import { HStack, VStack, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import AddTask from './AddTask';
import TaskList from './TaskList';

const Header = () => {

    const [show, setShow] = useState(false);

    return (
        <VStack>
            <HStack
                w={"100%"}
                h={"auto"}
                justifyContent={"space-evenly"}
                p={4}
                bgColor={"rgb(106,61,197,0.2)"}
            >
                <Button variant={"unstyled"} h={"auto"} fontSize={{base:"2xl",md:"3xl",xl:"5xl"}} cursor={"pointer"} borderRadius={10} p={3} onClick={() => setShow(true)} color={`${!show?"rgb(106, 61, 197)":"rgb(255,255,255)"}`} bgColor={`${show?"rgb(106, 61, 197,0.8)":"rgb(255,255,255,0.8)"}`} >Add Task</Button>
                <Button variant={"unstyled"} h={"auto"} fontSize={{base:"2xl",md:"3xl",xl:"5xl"}} cursor={"pointer"} borderRadius={10} p={3} onClick={() => setShow(false)} color={`${show?"rgb(106, 61, 197)":"rgb(255,255,255)"}`} bgColor={`${!show?"rgb(106, 61, 197,0.8)":"rgb(255,255,255,0.8)"}`}>View Tasks</Button>
            </HStack>
            {show?<AddTask setShow={setShow} />:<TaskList/>}
        </VStack>
    )
}

export default Header

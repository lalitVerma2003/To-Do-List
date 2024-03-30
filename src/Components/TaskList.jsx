import { Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task';

const TaskList = () => {

    const {tasks}=useSelector(state=> state.task);

  return (
    <VStack 
        w={{base:"100%",sm:"90%",md:"80%",lg:"60%",xl:"50%"}}
        maxH={"80vh"}
        py={5}
        overflowY={"scroll"}
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}
    >
      {tasks.length===0&&<Text fontSize={"3xl"} >No tasks are there!</Text>}
        {tasks.map((task,id)=>(
            <Task task={task} key={id} />
        ))}
    </VStack>
  )
}

export default TaskList

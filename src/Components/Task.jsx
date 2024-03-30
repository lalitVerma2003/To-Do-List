import { Button, HStack, IconButton, Text, VStack, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { changeStatus, deleteTask } from '../store/taskSlice/taskSlice';

const Task = ({ task }) => {
    const [openDelete, setOpenDelete] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const dispatch = useDispatch();
    const toast = useToast();

    const handleDeleteTask = () => {
        dispatch(deleteTask(task));
        setOpenDelete(false);
        toast({
            title: 'Task deleted.',
            status: 'success',
            duration: 4000,
            isClosable: true,
        })
    }

    const handleEditTask=()=>{
        dispatch(changeStatus(task));
        setOpenEdit(false);
    }

    return (
        <VStack
            w={"90%"}
            p={2}
            m={4}
            alignItems={"flex-start"}
            border={"2px solid rgba(160, 174,192, 0.5)"}
            boxShadow={"xl"}
            borderRadius={10}
            cursor={"pointer"}
        >
            <HStack w={"100%"} justifyContent={"space-between"} >
                <Text textAlign={"center"} as={`${task.status==="completed"?"s":"samp"}`} fontSize={{base:"1.5xl",md:"2xl",xl:"3xl"}} px={5} borderRadius={30} bgColor={"rgba(74, 194,215, 0.3)"}>{task.title}</Text>
                <HStack
                    w={{base:"50%",md:"40%",xl:"30%"}}
                    justifyContent={"space-evenly"}
                >
                    <Text bgColor={`${task.status === "pending" ? "rgba(0, 128,0, 0.3)" : "rgba(255, 128, 0, 0.3)"}`} color={`${task.status === "pending" ? "green" : "red"}`} borderRadius={10} px={2} >{task.status}</Text>
                    {task.status==="pending"&&<IconButton icon={<EditIcon />} size={"sm"} colorScheme='blue' onClick={()=> setOpenEdit(true)} />}
                    <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} isCentered>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalBody>
                                <Text fontSize={"3xl"} >Do you want to complete the task?</Text>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={() => setOpenEdit(false)}>
                                    No
                                </Button>
                                <Button colorScheme='blue' mr={3} onClick={() => handleEditTask(false)}>
                                    Yes
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                    <IconButton icon={<DeleteIcon />} size={"sm"} colorScheme='blue' onClick={() => setOpenDelete(true)} />
                    <Modal isOpen={openDelete} onClose={() => setOpenDelete(false)} isCentered>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalBody>
                                <Text fontSize={"3xl"} >Do you want to delete task?</Text>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={() => setOpenDelete(false)}>
                                    No
                                </Button>
                                <Button colorScheme='blue' onClick={handleDeleteTask}>Yes</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </HStack>
            </HStack>
            <Text fontSize={"1rem"} px={2} borderRadius={10} bgColor={"rgba(160, 174,192, 0.3)"} >{task.description}</Text>
        </VStack>
    )
}

export default Task

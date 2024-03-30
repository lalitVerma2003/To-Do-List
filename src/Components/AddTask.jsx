import { Button, VStack, FormControl, FormLabel, Input, useToast, Textarea, FormErrorMessage } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../store/taskSlice/taskSlice';

const AddTask = ({ setShow }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [titleError,setTitleError]=useState(false);
    const [descriptionError,setDescriptionError]=useState(false);
    const { tasks } = useSelector(state => state.task);
    const dispatch = useDispatch();
    const toast = useToast();

    const handleAddTask = () => {
        if(!title || !description)
        {
            !title?setTitleError(true):setTitleError(false);
            !description?setDescriptionError(true):setDescriptionError(false);
            return;
        }
        console.log("Added");
        dispatch(addTask({ title: title, description: description, status: "pending" }));
        toast({
            title: 'Task created.',
            status: 'success',
            duration: 4000,
            isClosable: true,
        })
        setShow(false);
        console.log("New Tasks",tasks);
    }

    return (
        <VStack
            w={{base:"90%",sm:"70%",md:"55%",xl:"40%"}}
            h={"auto"}
            p={4}
            mt={10}
            borderRadius={10}
            border={"2px solid rgba(160, 174,192, 0.5)"}
            boxShadow={"xl"}
        >
            <FormControl isInvalid={titleError}>
                <FormLabel fontSize={"2xl"} >Title</FormLabel>
                <Input value={title} placeholder='task title' onChange={(e) => setTitle(e.target.value)} />
                {titleError&&<FormErrorMessage>Title is required</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={descriptionError}>
                <FormLabel fontSize={"2xl"} >Description</FormLabel>
                <Textarea value={description} placeholder='task description' onChange={(e) => setDescription(e.target.value)} rows={5} cols={5} resize={"none"} />
                {descriptionError&&<FormErrorMessage>Description is required</FormErrorMessage>}
            </FormControl>
            <Button w={"20%"} colorScheme='blue' onClick={handleAddTask} my={4} >Save</Button>
        </VStack>
    )
}

export default AddTask

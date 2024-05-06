import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, Heading, List, ListItem, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, VStack, Text } from "@chakra-ui/react";
import { FaPlus, FaEye } from "react-icons/fa";

const Index = () => {
  const [incidents, setIncidents] = useState([]);
  const [newIncident, setNewIncident] = useState({ title: "", description: "" });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIncident({ ...newIncident, [name]: value });
  };

  const submitIncident = () => {
    setIncidents([...incidents, newIncident]);
    setNewIncident({ title: "", description: "" });
    onClose();
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={4} align="stretch">
        <Heading mb={4}>Incident Management Portal</Heading>
        <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={onOpen}>
          Report New Incident
        </Button>
        <List spacing={3}>
          {incidents.map((incident, index) => (
            <ListItem key={index} p={4} boxShadow="md">
              <Text fontWeight="bold">{incident.title}</Text>
              <Text mt={2}>{incident.description}</Text>
            </ListItem>
          ))}
        </List>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Report a New Incident</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input name="title" value={newIncident.title} onChange={handleInputChange} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea name="description" value={newIncident.description} onChange={handleInputChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={submitIncident}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;

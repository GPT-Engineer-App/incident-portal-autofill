import React from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Dashboard - Incident Management</Heading>
      <Flex>
        <Box p={5} w="33%" bg="blue.200" boxShadow="sm" borderRadius="md">
          <Text mb={2} fontWeight="bold">
            To Do
          </Text>
          {}
        </Box>
        <Box p={5} w="33%" bg="orange.200" boxShadow="sm" borderRadius="md">
          <Text mb={2} fontWeight="bold">
            In Progress
          </Text>
          {}
        </Box>
        <Box p={5} w="33%" bg="green.200" boxShadow="sm" borderRadius="md">
          <Text mb={2} fontWeight="bold">
            Done
          </Text>
          {}
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;

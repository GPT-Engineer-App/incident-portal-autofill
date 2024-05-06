import React from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";

const Index = () => {
  const mockIncidents = [
    { status: "To Do", title: "Fix login issue", description: "Urgent fix needed for login" },
    { status: "In Progress", title: "Update documentation", description: "Documentation needs updates for new features" },
    { status: "Done", title: "Deploy new version", description: "Version 1.2 deployed successfully" },
  ];

  return (
    <Box p={5}>
      <Heading mb={4}>Dashboard - Incident Management</Heading>
      <Flex>
        <Box p={5} w="33%" bg="blue.200" boxShadow="sm" borderRadius="md">
          <Text mb={2} fontWeight="bold">
            To Do
          </Text>
          {mockIncidents
            .filter((incident) => incident.status === "To Do")
            .map((incident, index) => (
              <Text key={index}>
                {incident.title} - {incident.description}
              </Text>
            ))}
        </Box>
        <Box p={5} w="33%" bg="orange.200" boxShadow="sm" borderRadius="md">
          <Text mb={2} fontWeight="bold">
            In Progress
          </Text>
          {mockIncidents
            .filter((incident) => incident.status === "In Progress")
            .map((incident, index) => (
              <Text key={index}>
                {incident.title} - {incident.description}
              </Text>
            ))}
        </Box>
        <Box p={5} w="33%" bg="green.200" boxShadow="sm" borderRadius="md">
          <Text mb={2} fontWeight="bold">
            Done
          </Text>
          {mockIncidents
            .filter((incident) => incident.status === "Done")
            .map((incident, index) => (
              <Text key={index}>
                {incident.title} - {incident.description}
              </Text>
            ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;

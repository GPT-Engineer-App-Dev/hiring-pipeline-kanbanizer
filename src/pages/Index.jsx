import React, { useState } from "react";
import { Box, Heading, Grid, VStack, Text, Avatar, Flex, IconButton } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const candidates = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    stage: "Applied",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZW1wbG95ZWUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTEyMTE3NzJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Product Manager",
    stage: "Interview",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMTIxMTc3Mnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  // Add more candidates...
];

const stages = ["Applied", "Interview", "Offer", "Hired"];

const Index = () => {
  const [candidatesList, setCandidatesList] = useState(candidates);

  const addCandidate = () => {
    // TODO: Implement add candidate functionality
  };

  const moveCandidate = (candidateId, currentStage, newStage) => {
    setCandidatesList((prevCandidates) => prevCandidates.map((candidate) => (candidate.id === candidateId ? { ...candidate, stage: newStage } : candidate)));
  };

  return (
    <Box p={8}>
      <Flex justify="space-between" align="center" mb={8}>
        <Heading as="h1" size="xl">
          Hiring Pipeline
        </Heading>
        <IconButton icon={<FaPlus />} aria-label="Add Candidate" onClick={addCandidate} />
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap={8}>
        {stages.map((stage) => (
          <VStack key={stage} align="stretch" spacing={4}>
            <Heading as="h2" size="lg">
              {stage}
            </Heading>
            {candidatesList
              .filter((candidate) => candidate.stage === stage)
              .map((candidate) => (
                <Box key={candidate.id} p={4} borderWidth={1} borderRadius="md" cursor="move">
                  <Flex align="center" mb={2}>
                    <Avatar src={candidate.avatar} size="sm" mr={2} />
                    <Text fontWeight="bold">{candidate.name}</Text>
                  </Flex>
                  <Text fontSize="sm" color="gray.500">
                    {candidate.role}
                  </Text>
                </Box>
              ))}
          </VStack>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;

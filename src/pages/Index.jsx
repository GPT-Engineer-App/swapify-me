import React, { useState } from "react";
import { Container, Box, VStack, HStack, Text, Image, Button, Input, FormControl, FormLabel, IconButton } from "@chakra-ui/react";
import { FaExchangeAlt, FaPlus } from "react-icons/fa";

const Index = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", image: 'https://images.unsplash.com/photo-1667709525632-ca0ce065951d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpdGVtJTIwMXxlbnwwfHx8fDE3MTc0MTU1ODF8MA&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 2, name: "Item 2", image: 'https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpdGVtJTIwMnxlbnwwfHx8fDE3MTc0MTU1ODF8MA&ixlib=rb-4.0.3&q=80&w=1080' },
  ]);

  const [newItem, setNewItem] = useState({ name: "", image: "" });

  const handleAddItem = () => {
    setItems([...items, { ...newItem, id: items.length + 1 }]);
    setNewItem({ name: "", image: "" });
  };

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Text fontSize="4xl" fontWeight="bold">
          Swap Items
        </Text>
        <HStack spacing={4} w="full" justifyContent="space-between">
          {items.map((item) => (
            <Box key={item.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} w="45%">
              <Image src={item.image} alt={item.name} boxSize="200px" objectFit="cover" />
              <Text mt={2} fontSize="xl" fontWeight="semibold">
                {item.name}
              </Text>
              <Button leftIcon={<FaExchangeAlt />} colorScheme="teal" mt={4}>
                Swap
              </Button>
            </Box>
          ))}
        </HStack>
        <Box w="full" p={4} borderWidth="1px" borderRadius="lg">
          <Text fontSize="2xl" mb={4}>
            Add New Item
          </Text>
          <FormControl id="item-name" mb={4}>
            <FormLabel>Item Name</FormLabel>
            <Input value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} />
          </FormControl>
          <FormControl id="item-image" mb={4}>
            <FormLabel>Item Image URL</FormLabel>
            <Input value={newItem.image} onChange={(e) => setNewItem({ ...newItem, image: e.target.value })} />
          </FormControl>
          <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddItem}>
            Add Item
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;

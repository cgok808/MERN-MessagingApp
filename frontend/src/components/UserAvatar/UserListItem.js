import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { ChatState } from "../../Context/ChatProvider";

const UserListItem = ({ handleFunction }) => {

  const { user } = ChatState();

  return (
    <Flex
      onClick={handleFunction}
      cursor='pointer'
      bg='#E8E8E8'
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w='100%'
      alignItems='center'
      color='black'
      px={3}
      py={2}
      mb={2}
      borderRadius='lg'
    >
      <Avatar
        mr={2}
        size='sm'
        cursor='pointer'
        name={user.name}
        src={user.pic}
      />
      <Box>
        <Text>{user.name}</Text>
        <Text fontSize='xs'>
          <b>Email : </b>
          {user.email}
        </Text>
      </Box>
    </Flex>
  );
};

export default UserListItem;

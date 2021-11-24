import { Button, ButtonGroup, Center, Square, Circle  } from "@chakra-ui/react";
import React from "react";
import { useMoralis } from "react-moralis";

function App() {

  const { authenticate, isAuthenticated, user } = useMoralis();


  if (!isAuthenticated) {
  return (
    <Center>
      <Button colorScheme="teal" mt={4} onClick={() => authenticate()} >AUTHENTICATE WITH METAMASK</Button>
    </Center>

  );
}
  return (
    <div>
      <h1>Welcome {user.get("username")}</h1>
    </div>
  );
}

export default App;

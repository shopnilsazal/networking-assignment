import React, { useState } from "react";
import { Pane, Text, Heading, Button, TextInputField } from "evergreen-ui";
import { calculateSubnet } from "./calculator";
import "./reset.css";
import "./App.css";

function App() {
  const [ip, setIP] = useState("");
  const [result, setResult] = useState(null);
  return (
    <div className="container">
      <Heading size={800} marginTop="default" className="center">
        Computer Networking Final Assignment
      </Heading>

      <Pane
        className="m-20 p-30"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Heading size={700} marginTop="default" className="mb-30">
          VLSM Calculator
        </Heading>
        <TextInputField
          label="IP/CIDR"
          hint="Use this format 192.34.56.7/12"
          placeholder="192.34.56.7/12"
          value={ip}
          onChange={(e) => setIP(e.target.value)}
        />
        <Button
          appearance="primary"
          onClick={() => {
            setResult(calculateSubnet(ip));
          }}
        >
          Calculate
        </Button>

        {result && (
          <div className="mt-30">
            <Text size={500}>Address: {result.address}</Text> <br />
            <Text size={500}>Mask: {result.mask}</Text> <br />
            <Text size={500}>CIDR: {result.cidr}</Text> <br />
            <Text size={500}>Network: {result.network}</Text> <br />
            <Text size={500}>Broadcast: {result.broadcast}</Text>
          </div>
        )}
      </Pane>
    </div>
  );
}

export default App;

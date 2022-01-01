import "./styles.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import React from "react";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  // ...theme.typography.body2,
  padding: "5px",
  margin: "15px",
  textAlign: "center",
  // color: theme.palette.text.secondary,
  border: "2px solid green"
}));

export default function App() {
  const [slide, setSlide] = React.useState(0);

  return (
    <div className="App">
      <h1>Material UI</h1>
      <Box>
        <Grid>
          <Grid item md={6} lg={4} xl={3} xs={4}>
            <Item>4</Item>
          </Grid>
          <Grid item md={6} lg={4} xl={3} xs={8}>
            <Item>8</Item>
          </Grid>
          <Grid item md={6} lg={4} xl={3} xs={4}>
            <Item>4</Item>
          </Grid>
          <Grid item md={6} lg={4} xl={3} xs={8}>
            <Item>8</Item>
          </Grid>
          <Grid item md={6} lg={4} xl={3} xs={4}>
            <Item>4</Item>
          </Grid>
        </Grid>
      </Box>
      <h1>Material UI</h1>
      <Box>
        <h2>Study MUI Buttons</h2>
        <div>
          <Button variant="text">Text Only</Button>
        </div>
        <br />
        <div>
          <Button variant="contained">Contained</Button>
        </div>
        <br />
        <div>
          <Button variant="outlined">Outlined</Button>
        </div>
        <br />
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="https//:www.google.com">Google.com</Button>
      </Box>

      <h2>Study MUI SLiders</h2>
      <Box>
        <Slider
          value={slide}
          onChange={(e) => {
            console.log(e.target.value);
            setSlide(e.target.value);
          }}
          aria-label="Temperature"
          // defaultValue={30}
          // getAriaValueText="Pawan"
          // valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        />
      </Box>
    </div>
  );
}

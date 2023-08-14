import { Modal, Paper, Typography } from "@mui/material";
import "./App.css";

import MapContainer from "./components/MapContainer";

const App = () => {
  return (
    <div style={{ display: "flex", position: "relative" }}>
      <Typography
        variant={"h5"}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          margin: "16px",
          color: "#ffffff",
          zIndex: 10,
        }}
      >
        UFO/UAP Report & Sighting map
      </Typography>
      <MapContainer />
      {/* <Modal open={true} sx={{ width: "50%", height: "80%", margin: "auto" }}>
        <Paper sx={{ height: "100%" }}>
          <div>Test</div>
        </Paper>
      </Modal> */}
    </div>
  );
};

export default App;

import { useState } from "react";
import { SightingInfoType } from "../../types/sightingInfo";
import { Marker, Wrapper } from "./styles";
import {
  CrisisAlert,
  PersonRemove,
  Report,
  SettingsAccessibility,
  SupervisorAccount,
  VerticalAlignBottom,
  Visibility,
} from "@mui/icons-material";
import { InfoPopup } from "../InfoPopup";

type PinProps = {
  sighting: SightingInfoType;
};

export const Pin = ({ sighting }: PinProps) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const getIcon = () => {
    switch (sighting.type) {
      case "Sighting":
        return <Visibility sx={{ color: "white" }} />;
      case "Abduction":
        return <SettingsAccessibility sx={{ color: "white" }} />;
      case "Close encounter":
        return <SupervisorAccount sx={{ color: "white" }} />;
      case "Disappearance":
        return <PersonRemove sx={{ color: "white" }} />;
      case "Crash":
        return <CrisisAlert sx={{ color: "white" }} />;
      case "Landing":
        return <VerticalAlignBottom sx={{ color: "white" }} />;
      default:
        return <Report sx={{ color: "white" }} />;
    }
  };

  return (
    <Wrapper onClick={togglePopup}>
      <Marker>{getIcon()}</Marker>
      {showPopup && <InfoPopup sighting={sighting} />}
    </Wrapper>
  );
};

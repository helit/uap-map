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
      case "sighting":
        return <Visibility sx={{ color: "white" }} />;
      case "abduction":
        return <SettingsAccessibility sx={{ color: "white" }} />;
      case "close-encounter":
        return <SupervisorAccount sx={{ color: "white" }} />;
      case "disappearance":
        return <PersonRemove sx={{ color: "white" }} />;
      case "crash":
        return <CrisisAlert sx={{ color: "white" }} />;
      case "landing":
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

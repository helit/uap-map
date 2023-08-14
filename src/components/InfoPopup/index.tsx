import { Divider, Paper, Typography } from "@mui/material";
import {
  ContentBody,
  ContentFooter,
  ContentHeader,
  ContentWrapper,
  Wrapper,
} from "./styles";
import { SightingInfoType } from "../../types/sightingInfo";
import { IconLabels } from "../../data/mapData";

type InfoPopupProps = {
  sighting: SightingInfoType;
};

export const InfoPopup = ({ sighting }: InfoPopupProps) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Paper sx={{ padding: "16px", width: "400px" }}>
          <ContentHeader>
            <Typography variant={"h6"} gutterBottom>
              {sighting.name}
            </Typography>
            <Typography variant={"body2"} gutterBottom>
              {`Date: ${sighting.date}`}
            </Typography>
            <Typography variant={"body2"} gutterBottom>
              {`Type: ${IconLabels[sighting.type]}`}
            </Typography>
          </ContentHeader>
          <Divider sx={{ margin: "16px 0" }} />
          <ContentBody>
            <Typography variant={"body1"}>{sighting.description}</Typography>
          </ContentBody>
          <Divider sx={{ margin: "16px 0" }} />
          <ContentFooter>
            Source:{" "}
            <a href='https://en.wikipedia.org/wiki/List_of_reported_UFO_sightings'>
              List of reported UFO sightings
            </a>
          </ContentFooter>
        </Paper>
      </ContentWrapper>
    </Wrapper>
  );
};

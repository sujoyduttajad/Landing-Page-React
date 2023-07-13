import React from "react";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Video,
} from "./InfoVideo.elements";
import { Container, Button } from "../../globalStyles";
import { Link } from "react-router-dom";

const InfoVideo = ({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  video,
  alt,
  imgStart,
  start,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link
                  to={{
                    pathname:
                      "https://chrome.google.com/webstore/detail/discountly/gnocblmhdddbhhdijfdnloldcbnhhign",
                  }}
                  target="_blank"
                >
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn lightBg={lightBg}>
              <ImgWrapper start={start}>
                {/* <BackgroundHighlight
                  highlightColor={highlightColor}
                ></BackgroundHighlight> */}
                <Video alt={alt} autoPlay type="video/mp4" src={video} muted loop  />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoVideo;

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from "@mui/lab";
import { Typography } from "@mui/material";
import ColorTimeline from "./ColorTimeline";
import ImgMediaCard from "./Contents/ImgMediaCard";

const OppositeContent = () => {
  const onClickSleep = () => {
    console.log("click Sleep");
  };

  return (
    <>
      <Timeline position="left">
        {/* 一個のアイテム */}
        <TimelineItem>
          {/* 反対側の表示（これComponentの位置） */}
          <TimelineOppositeContent color="text.secondary">
            09:30 am
          </TimelineOppositeContent>
          {/* ノードの表示 */}
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          {/* タイトル表示 */}
          <TimelineContent sx={{ width: "100px" }}>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          {/* 反対側の表示（これComponentの位置） */}
          <TimelineOppositeContent color="text.secondary">
            <ImgMediaCard />
          </TimelineOppositeContent>
          {/* ノードの中身 */}
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          {/* タイトル表示 */}
          <TimelineContent sx={{ width: "100px" }}>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="caption" color="text.secondary">
              もし、北海道大学があれば
            </Typography>
            <ColorTimeline />
            <Typography variant="caption" color="text.secondary">
              もし、北海道大学があれば
            </Typography>
            <ColorTimeline />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success" variant="outlined" />
            <TimelineDot color="success" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent onClick={onClickSleep} sx={{ width: "100px" }}>
            Sleep
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default OppositeContent;

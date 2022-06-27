import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator
} from "@mui/lab";
import { Typography } from "@mui/material";

const ColorTimeline = () => {
  return (
    <>
      <Timeline position="left">
        {/* 一個のアイテム */}
        <TimelineItem>
          {/* ノードの表示 */}
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          {/* テキスト・内容がわ */}
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default ColorTimeline;

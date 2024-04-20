import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://cdn.dribbble.com/userupload/8375740/file/original-84aff1cd65362e840fb3a56a868be884.jpg?resize=1200x675"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Jujutsu Kaisen</Typography>
        <Typography color={medium}>jujutsukaisen.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        "Experience the thrilling world of Jujutsu Kaisen! Join Yuji Itadori and his friends as they battle against curses and uncover the mysteries of the Jujutsu world. Visit our website for more information."

      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;

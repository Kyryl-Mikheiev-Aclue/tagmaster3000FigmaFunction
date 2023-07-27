import { Typography } from ".";

export default {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    variant: {
      options: [
        "h-5",
        "caption",
        "subtitle-1",
        "custom",
        "overline",
        "h-1",
        "h-6",
        "h-2",
        "subtitle-2",
        "body-1",
        "h-4",
        "h-3",
        "body-2",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    content: "Typography",
    variant: "h-5",
    gutterBottom: true,
    className: {},
    bodyClassName: {},
  },
};

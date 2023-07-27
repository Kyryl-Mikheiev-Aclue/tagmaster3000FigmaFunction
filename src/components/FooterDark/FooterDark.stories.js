import { FooterDark } from ".";

export default {
  title: "Components/FooterDark",
  component: FooterDark,
  argTypes: {
    width: {
      options: ["full", "inset"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Footer text",
    width: "full",
    className: {},
    hasFooterText: true,
  },
};

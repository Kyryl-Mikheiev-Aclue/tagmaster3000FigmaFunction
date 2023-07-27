import { Fab } from ".";

export default {
  title: "Components/Fab",
  component: Fab,
  argTypes: {
    variant: {
      options: ["extended", "round"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    color: {
      options: ["default", "secondary", "primary", "inherit-text", "inherit-white"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["hovered", "disabled", "focused", "enabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "Fab",
    icon: true,
    variant: "extended",
    size: "large",
    color: "default",
    stateProp: "hovered",
    className: {},
    baseClassName: {},
    hasButton: true,
  },
};

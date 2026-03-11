"use client";

import Lottie from "lottie-react";
import { ComponentProps } from "react";

// Correct way to get Lottie props
type LottieProps = ComponentProps<typeof Lottie>;

const LottieWrapper = (props: LottieProps) => {
  return <Lottie {...props} />;
};

export default LottieWrapper;

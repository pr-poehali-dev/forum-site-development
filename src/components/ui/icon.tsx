
import React from "react";
import * as Icons from "lucide-react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof Icons;
  size?: number;
  fallback?: keyof typeof Icons;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, fallback = "CircleAlert", ...props }) => {
  const LucideIcon = Icons[name] ?? Icons[fallback];
  return <LucideIcon size={size} {...props} />;
};

export default Icon;

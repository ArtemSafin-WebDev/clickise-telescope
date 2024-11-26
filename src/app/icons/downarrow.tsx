import { SVGProps } from "react";
const DownarrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    viewBox="0 0 22 22"
    {...props}
  >
    <path d="M6.41671 9.16665L11 13.75L15.5834 9.16666" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.4862 14.2361C11.2177 14.5046 10.7824 14.5046 10.5139 14.2361L5.93057 9.65279C5.66209 9.38431 5.66209 8.949 5.93057 8.68052C6.19906 8.41203 6.63436 8.41203 6.90284 8.68052L11 12.7777L15.0972 8.68052C15.3657 8.41203 15.801 8.41203 16.0695 8.68052C16.338 8.94901 16.338 9.38431 16.0695 9.65279L11.4862 14.2361Z"
      fill="currentColor"
    />
  </svg>
);
export default DownarrowIcon;

import { SVGProps } from "react";
const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
    <path
      fillRule="evenodd"
      d="M10 2.292a7.708 7.708 0 1 0 0 15.416 7.708 7.708 0 0 0 0-15.416ZM1.042 10A8.958 8.958 0 0 1 10 1.042a8.958 8.958 0 1 1 0 17.916A8.958 8.958 0 0 1 1.042 10Zm8.333-3.333c0-.345.28-.625.625-.625h.007a.625.625 0 1 1 0 1.25H10a.625.625 0 0 1-.625-.625ZM10 8.542c.345 0 .625.28.625.625v4.167a.625.625 0 1 1-1.25 0V9.167c0-.345.28-.625.625-.625Z"
      clipRule="evenodd"
    />
  </svg>
);
export default InfoIcon;

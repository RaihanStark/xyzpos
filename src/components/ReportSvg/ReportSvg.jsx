function ReportSvg({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 28 28"
    >
      <path d="M0,0H28V28H0Z" fill="none" />
      <path
        d="M15.667,2H6.333A2.33,2.33,0,0,0,4.012,4.333L4,23a2.33,2.33,0,0,0,2.322,2.333H20.333A2.34,2.34,0,0,0,22.667,23V9ZM18,20.667H8.667V18.333H18ZM18,16H8.667V13.667H18Zm-3.5-5.833V3.75l6.417,6.417Z"
        transform="translate(0.667 0.333)"
      />
    </svg>
  );
}

export default ReportSvg;

function ProductSvg({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 28 28"
    >
      <path d="M0,0H28V28H0Z" fill="none" />
      <path d="M12.917,2,6.5,12.5H19.333Z" transform="translate(1.083 0.333)" />
      <circle cx="5.5" cy="5.5" r="5.5" transform="translate(15 15)" />
      <path d="M3,13.5h9.333v9.333H3Z" transform="translate(0.5 2.25)" />
    </svg>
  );
}

export default ProductSvg;

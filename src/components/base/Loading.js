export const Loading = ({variant}) => {
  return (
    <div className="d-flex loading-height w-100 h justify-content-center align-items-center">
      <div className={`spinner-border w-10rem h-10rem text-${variant}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

Loading.defaultProps = {
  variant: "secondary",
};

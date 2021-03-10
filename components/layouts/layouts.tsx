import { ILayouts } from "@interfaces/ilayouts";

const Layouts: React.FC<ILayouts> = ({
  noHeader,
  noSidebar,
  menuSelected,
  children,
}) => {
  return (
    <>
      {!noHeader && <div className="Header"></div>}
      {children}
      <div className="Footer"></div>
    </>
  );
};

export default Layouts;

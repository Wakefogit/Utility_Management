import Subtitle from "../Typography/Subtitle";

function TitleCard({ title, children, topMargin, TopSideButtons }) {
  return (
    <>
      <div className=" ">
        <div
          className={
            "card h-64 px-6 py-3 bg-base-100 shadow-xl " + (topMargin || "mt-6")
          }
        >
          {/* Title for Card */}

          <Subtitle styleClass={TopSideButtons ? "inline" : ""}>
            {title}

            {/* Top side button, show only if present */}

            {/* {TopSideButtons && (

          <div className="inline float-right">{TopSideButtons}</div>

        )} */}
          </Subtitle>

          <div className="divider mt-2"></div>

          {/** Card Body */}

          <div className=" h-auto w-auto m-[-15px] bg-base-100">{children}</div>
        </div>
      </div>
    </>
  );
}

export default TitleCard;

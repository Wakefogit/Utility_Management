function DashboardStats({ title, icon, value, description, colorIndex }) {
  const COLORS = ["primary", "primary"];

  const getDescStyle = () => {
    if (description.includes("↗︎"))
      return "font-bold text-green-700 dark:text-green-300";
    else if (description.includes("↙"))
      return "font-bold text-rose-500 dark:text-red-400";
    else return "";
  };

  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="flex">
          <div className="stat-title dark:text-slate-300">{title}</div>

          <div className="stat-figure dark:text-slate-300 pl-3 stroke-slate-300">
            {icon}
          </div>
        </div>

        <div
          className={`stat-value dark:text-slate-300 text-gray-600 text-${
            COLORS[colorIndex % 2]
          }`}
        >
          {value}
        </div>

        <div className={"stat-desc  " + getDescStyle()}>{description}</div>
      </div>
    </div>
  );
}

export default DashboardStats;

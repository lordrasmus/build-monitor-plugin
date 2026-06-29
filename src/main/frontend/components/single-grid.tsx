import { Job } from "../models/job.ts";
import { getColumnCount } from "../utils/grid-pagination.ts";
import Cell from "./cell.tsx";

interface SingleGridProps {
  jobs: Job[];
  textSize: number;
  maximumNumberOfColumns: number;
}

// Classic single-page layout: render every job in one grid that scrolls
// vertically when it doesn't fit, instead of snapping between pages.
function SingleGrid({
  jobs,
  textSize,
  maximumNumberOfColumns,
}: SingleGridProps) {
  const columnCount = getColumnCount(jobs.length, maximumNumberOfColumns);

  return (
    <div className="bm-grid-shell">
      <div className="bm-grid-single">
        <div
          className="bm-grid"
          style={{
            fontSize: textSize + "rem",
            gridTemplateColumns: "1fr ".repeat(columnCount),
          }}
        >
          {jobs.map((job) => (
            <Cell key={job.url} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleGrid;

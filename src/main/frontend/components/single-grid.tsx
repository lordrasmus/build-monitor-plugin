import { Job } from "../models/job.ts";
import { getColumnCount } from "../utils/grid-pagination.ts";
import Cell from "./cell.tsx";

interface SingleGridProps {
  jobs: Job[];
  textSize: number;
  maximumNumberOfColumns: number;
}

// Classic single-page layout: render every job in one grid that fills the
// available height. All rows share the height equally (1fr) so the job cells
// scale down to fit the viewport instead of scrolling or snapping between pages.
function SingleGrid({
  jobs,
  textSize,
  maximumNumberOfColumns,
}: SingleGridProps) {
  const columnCount = getColumnCount(jobs.length, maximumNumberOfColumns);
  const rowCount = columnCount > 0 ? Math.ceil(jobs.length / columnCount) : 0;

  return (
    <div className="bm-grid-shell">
      <div className="bm-grid-single">
        <div
          className="bm-grid"
          style={{
            fontSize: textSize + "rem",
            gridTemplateColumns: "1fr ".repeat(columnCount),
            gridTemplateRows: "1fr ".repeat(rowCount),
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

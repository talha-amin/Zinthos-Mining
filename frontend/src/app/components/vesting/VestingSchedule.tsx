import useMobileDetect from "@/app/hooks/useMobileDetect";
import { ResponsiveLine } from "@nivo/line";

const customYAxisTicks = [0, 250000, 500000, 750000, 1000000];

const VestingSchedule = () => {
  return (
    <div className="w-full h-[500px] relative">

      <LineChart />
    </div>
  );
};

const data = [
  {
    id: "sample-line",
    data: [
      { x: "", y: -250000 },
      { x: "2022", y: 0 },
      { x: "Jul 22", y: 250000 },
      { x: "Jan 05", y: 500000 },
      { x: "Jul 23", y: 750000 },
      { x: "2024", y: 1000000 },
    ],
  },
];

const CustomTooltip = ({
  point: {
    data: { xFormatted, yFormatted },
  },
}: any) => (
  <div
    className="relative bg-black text-xs sm:text-sm shadow-lg rounded-lg"
    style={{ borderRadius: "5px", boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)" }}
  >
    <div className="px-5 py-2 bg-neutral-950">{xFormatted}</div>
    <div className="bg-neutral-900 px-5 py-3 flex gap-3">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-secondary rounded-full inline-block"></span>{" "}
        DCB Vesting:
      </div>
      <span>{yFormatted} DCB</span>
    </div>
  </div>
);

const LineChart = (props: any) => {
  const isMobile = useMobileDetect()

  return (
    <div {...props} className="w-full h-full">
      <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 20, bottom: 50, left: 50 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: -200000,
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: customYAxisTicks,
          format: function (value) {
            if (Math.abs(value) > 999999) {
              return (
                Math.sign(value) *
                  Number((Math.abs(value) / 1000000).toFixed(1)) +
                "M"
              );
            }
            return Math.abs(value) > 999
              ? Math.sign(value) * Number((Math.abs(value) / 1000).toFixed(1)) +
                  "K"
              : Math.sign(value) * Math.abs(value);
          },
        }}
        enableGridX={false}
        enableGridY={false}
        enablePoints={false}
        enableArea={true}
        tooltip={CustomTooltip as any}
        areaBaselineValue={0}
        areaOpacity={0.7}
        colors="#EB6335"
        fill={[
          {
            match: "*",
            id: "gradient",
          },
        ]}
        defs={[
          {
            id: "gradient",
            type: "linearGradient",
            colors: [
              { offset: 0, color: "#FFD30022" },
              { offset: 100, color: "#00000000" },
            ],
          },
        ]}
        // enableSlices={true}
        enableCrosshair={false}
        enablePointLabel={false}
        useMesh={true}
        animate={false}
        theme={{
          text: {
            fontSize: isMobile? 11: 16,
            fill: "#ffffff55",
            outlineWidth: 3,
          },
        }}
      />
    </div>
  );
};

export default VestingSchedule;

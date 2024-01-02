import { ResponsiveLine } from "@nivo/line";

const customYAxisTicks = [0, 250000, 500000, 750000, 1000000];


const VestingSchedule = () => {
    return (
        <div className="w-full h-[500px] relative">
            <div className="absolute left-[50%] top-0 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
                <div className="shadow-effect blur-[200px] aspect-square w-[300px]"></div>
            </div>
            <LineChart />
        </div>
    )
}




const data = [
    {
        id: "sample-line",
        data: [
            { x: '', y: -250000 },
            { x: '2022', y: 0 },
            { x: "Jul 22", y: 250000 },
            { x: 'Jan 05', y: 500000 },
            { x: 'Jul 23', y: 750000 },
            { x: '2024', y: 1000000 },
        ],
    },
];


const CustomTooltip = ({ value }: { value: number }) => (
    <div
        className="custom-tooltip bg-black p-1"
        style={{ borderRadius: "5px", boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)" }}
    >
        <div className="text-[9px]">{value}%</div>
    </div>
);

const LineChart = (props: any) => {
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
                    tickSize: 0
                }}
                axisLeft={{
                    tickSize: 0,
                    tickValues: customYAxisTicks,
                    format: function (value) {
                        if (Math.abs(value) > 999999) {
                            return Math.sign(value) * (Number((Math.abs(value) / 1000000).toFixed(1))) + 'M'
                        }
                        return Math.abs(value) > 999 ? Math.sign(value) * (Number((Math.abs(value) / 1000).toFixed(1))) + 'K' : Math.sign(value) * Math.abs(value)

                    }
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
                        fontSize: 16,
                        fill: '#ffffff55',
                        outlineWidth: 3
                    }
                }}

            />

        </div>
    );
};


export default VestingSchedule
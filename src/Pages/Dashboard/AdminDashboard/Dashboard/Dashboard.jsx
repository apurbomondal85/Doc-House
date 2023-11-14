import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaFileWaveform, FaUserGroup, FaUserLarge } from "react-icons/fa6";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { Spinner } from "flowbite-react";
import DashboardCard from "../DashboardCard/DashboardCard";
import { AreaChart, Area, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';


function DetailsDashboard() {
    const { user, token } = useContext(AuthContext);
    const [doctor, setDoctor] = useState();
    const [patients, setPatients] = useState();
    const [appointment, setAppointment] = useState();
    const [loader, setLoader] = useState(true);


    const dashboardDisplay = [
        {
            name: "Doctor",
            progress: <ProgressBar className="mt-3" height="5px" labelSize="0px" bgColor="#FF0034" completed={`${doctor?.length}`} />,
            icon: <div className="p-3 bg-[#FF00341A] text-3xl text-[#FF0034]">
                <FaUserLarge />
            </div>,
            countNum: doctor?.length,
        },
        {
            name: "Patients",
            progress: <ProgressBar className="mt-3" height="5px" labelSize="0px" bgColor="#7BB13C" completed={`${patients?.length}`} customLabel="" />,
            icon: <div className="p-3 bg-[#7BB13C1A] text-3xl text-[#7BB13C]">
                <FaUserGroup />
            </div>,
            countNum: patients?.length,

        },
        {
            name: "Appointment",
            progress: <ProgressBar className="mt-3" height="5px" labelSize="0px" bgColor="#FFBC34" completed={`${appointment?.length}`} customLabel="" />,
            icon: <div className="p-3 bg-[#FFBC341A] text-3xl text-[#FFBC34]">
                <FaFileWaveform />
            </div>,
            countNum: appointment?.length,

        }
    ]

    const data = [
        {
            year: 2019,
            patient: 80
        },
        {
            year: 2019,
            patient: 100
        },
        {
            year: 2020,
            patient: 150
        },
        {
            year: 2021,
            patient: 180
        },
        {
            year: 2022,
            patient: 130
        }
    ];

    const pieData = [
        { name: 'Category A', value: 20 },
        { name: 'Category B', value: 30 },
        { name: 'Category B', value: 40 },
        { name: 'Category B', value: 20 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    useEffect(() => {
        if (user?.email && token) {
            axios({
                method: 'get',
                headers: { "authorization": `berrer ${token}` },
                url: `https://doc-house-server-nc9o54us0-apurbomondal85.vercel.app/payment-history/${user?.email}`
            })
                .then(data => {
                    setPatients(data.data)
                    setLoader(false)
                })
        }
    }, [token])

    useEffect(() => {
        if (user?.email && token) {
            axios({
                method: 'get',
                headers: { "authorization": `berrer ${token}` },
                url: `https://doc-house-server-nc9o54us0-apurbomondal85.vercel.app/appointmentBook/${user?.email}`
            })
                .then(data => {
                    setAppointment(data.data)
                    setLoader(false)
                })
        }
    }, [token])

    useEffect(() => {
        axios.get("https://doc-house-server-nc9o54us0-apurbomondal85.vercel.app/doctors")
            .then(data => {
                setDoctor(data.data)
            })
    }, [])

    if (loader) {
        return <div className="h-[500px] w-full flex justify-center items-center"><Spinner aria-label="Default status example" /></div>
    }

    const screenSize = window.innerWidth;

    return (
        <div className="ml-4 lg:ml-12">
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    dashboardDisplay.map((item, index) =>
                        <DashboardCard key={index} item={item} />
                    )
                }
            </div>
            <div className="mt-8 flex flex-col lg:flex-row items-center gap-6">
                <div className="p-6 rounded-md bg-white">
                    <h2 className="text-2xl text-[#898989] font-bold mb-4">Patient</h2>
                    <div className="-ml-8 lg:ml-0">
                        <AreaChart
                            width={screenSize < 580 ? 320 : screenSize < 820 ? 600 : 500}
                            height={screenSize < 580 ? 200 : screenSize < 820 ? 400 : 300}
                            data={data}
                        >
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="patient" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                        </AreaChart>
                    </div>
                </div>
                <div className="p-6 rounded-md bg-white">
                    <h2 className="text-2xl text-[#898989] font-bold mb-4">Appointment</h2>
                    <div>
                        <PieChart width={screenSize < 580 ? 300 : screenSize < 820 ? 600 : 500} height={screenSize < 580 ? 200 : screenSize < 820 ? 400 : 300}>
                            <Pie
                                data={pieData}
                                cx={screenSize < 580 ? 150 : 250}
                                cy={screenSize < 580 ? 80 : 150}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsDashboard

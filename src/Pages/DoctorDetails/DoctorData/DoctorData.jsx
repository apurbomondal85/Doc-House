
import React, { useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Overview from '../Overview/Overview';
import Locations from '../Location/Locations';

function DoctorData({ doctor }) {
    const list = ["Overview", "Locations", "Reviews", "Business Hours"];
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleTabSelect = (index) => {
        setActiveTabIndex(index);
    };

    return (
        <div className='py-8 px-12 my-12 rounded-md bg-white'>
            <Tabs selectedIndex={activeTabIndex} onSelect={handleTabSelect}>
                <TabList>
                    {
                        list.map((item, index) => <Tab key={index}>{item}</Tab>)
                    }
                </TabList>

                <div className='mt-8'>
                    <TabPanel>
                        {
                            activeTabIndex == 0 && <Overview doctor={doctor}></Overview>
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            activeTabIndex == 1 && <Locations doctor={doctor}></Locations>
                        }
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    )
}

export default DoctorData


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './serviceCategory.css'
import { useEffect, useState } from 'react';

function ServiceCategory() {
    const [service, setService] = useState();
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const categoryList = ["Preventive Care", "Orthodontic Services", "Cosmetic Dentistry"]

    const handleTabSelect = (index) => {
        setActiveTabIndex(index);
    };

    useEffect(() => {
        fetch('https://doc-house-server-nc9o54us0-apurbomondal85.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                const category = data.filter(item => item.category_name === categoryList[activeTabIndex]);
                setService(category)
            })
    }, [activeTabIndex])

    return (
        <div>
            <Tabs selectedIndex={activeTabIndex} onSelect={handleTabSelect}>
                <TabList>
                    {
                        categoryList.map((item, index) => <Tab key={index}>{item}</Tab>)
                    }
                </TabList>

                <div className='mt-8'>
                    {
                        categoryList?.map((item, index) =>
                            <TabPanel key={index}>
                                {
                                    service?.map(item =>
                                        <div key={item._id} className="space-y-4">
                                            <img className='w-full md:w-[500px]' src={item.categories[0].image_url} alt="category image" />
                                            <h1 className='text-3xl font-semibold'>{item.categories[0].name}</h1>
                                            <p>{item.categories[0].description}</p>
                                        </div>
                                    )
                                }
                            </TabPanel>
                        )
                    }
                </div>
            </Tabs>
        </div>
    )
}

export default ServiceCategory

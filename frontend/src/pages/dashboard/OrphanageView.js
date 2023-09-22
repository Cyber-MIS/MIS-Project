import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getOrphanageDetails } from '../../api/dashboard';

export default function OrphanageView() {
    const columns = [
        {
            title: 'Orphanage ID',
            dataIndex: 'Orphanage_ID',
            key: 'Orphanage_ID',
        },
        {
            title: 'Orphanage Name',
            dataIndex: 'Orphanage_Name',
            key: 'Orphanage_Name',
        },
        {
            title: 'Address',
            dataIndex: 'Address',
            key: 'Address',
        },
        {
            title: 'Contact',
            dataIndex: 'Contact',
            key: 'Contact',
        },
        {
            title: 'Capacity',
            dataIndex: 'Capacity',
            key: 'Capacity',
        },
        {
            title: 'Employee Count',
            dataIndex: 'Employee_Count',
            key: 'Employee_Count',
        },
        {
            title: 'Email',
            dataIndex: 'Email',
            key: 'Email',
        },
    ];

    const [orphanages, setOrphanages] = useState();

    useEffect(() => loadOrphanages(), []);

    function loadOrphanages() {
        getOrphanageDetails()
            .then((data) => {
            setOrphanages(data);
        })
        .catch((err) => console.log(err));

    }

    return (
        <div>
            <h1>Orphanage Data</h1>
            <Table dataSource={orphanages} columns={columns} />
        </div>
    );
}
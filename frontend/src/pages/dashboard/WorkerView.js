import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getWorkersDetails } from '../../api/dashboard';

export default function WokerView() {
    const columns = [
        {
            title: 'Worker ID',
            dataIndex: 'Worker_ID',
            key: 'Worker_ID',
        },
        {
            title: 'Age',
            dataIndex: 'Age',
            key: 'Age',
        },
        {
            title: 'Address',
            dataIndex: 'Address',
            key: 'Address',
        },
        {
            title: 'Email',
            dataIndex: 'Email',
            key: 'Email',
        },
        {
            title: 'Orphanage ID',
            dataIndex: 'Orphanage_ID',
            key: 'Orphanage_ID',
        }
    ];

    const [workers, setWorkers] = useState();

    useEffect(() => loadWorkers(), []);

    function loadWorkers() {
        getWorkersDetails()
            .then((data) => {
                setWorkers(data);
        })
        .catch((err) => console.log(err));

    }

    return (
        <div>
            <h1>Workers Data</h1>
            <Table dataSource={workers} columns={columns} />
        </div>
    );
}
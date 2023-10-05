import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getChildDetails } from '../../api/dashboard';

export default function ChildView() {
    const columns = [
        {
            title: 'Child ID',
            dataIndex: 'Child_ID',
            key: 'Child_ID',
        },
        {
            title: 'Orphanage ID',
            dataIndex: 'Orphanage_ID',
            key: 'Orphanage_ID',
        },
        {
            title: 'Child Name',
            dataIndex: 'Child_Name',
            key: 'Child_Name',
        },
        {
            title: 'Age',
            dataIndex: 'Age',
            key: 'Age',
        },
        {
            title: 'Gender',
            dataIndex: 'Gender',
            key: 'Gender',
        },
        {
            title: 'Is Frosted',
            dataIndex: 'Fostered',
            key: 'Fostered',
        }
    ];

    const [Child, setChild] = useState();

    useEffect(() => loadChild(), []);

    function loadChild() {
        getChildDetails()
            .then((data) => {
                setChild(data);
        })
        .catch((err) => console.log(err));

    }

    return (
        <div>
            <h1>Children Data</h1>
            <Table dataSource={Child} columns={columns} />
        </div>
    );
}
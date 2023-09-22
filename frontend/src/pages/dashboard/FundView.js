import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getFundDetails } from '../../api/dashboard';

export default function FundView() {
    const columns = [
        {
            title: 'Fund ID',
            dataIndex: 'Fund_ID',
            key: 'Fund_ID',
        },
        {
            title: 'Orphanage ID',
            dataIndex: 'Orphan_ID',
            key: 'Orphan_ID',
        },
        {
            title: 'Document ID',
            dataIndex: 'Document_ID',
            key: 'Document_ID',
        },
        {
            title: 'Amount',
            dataIndex: 'Amount',
            key: 'Amount',
        }
    ];

    const [Funds, setFunds] = useState();

    useEffect(() => loadFunds(), []);

    function loadFunds() {
        getFundDetails()
            .then((data) => {
                setFunds(data);
        })
        .catch((err) => console.log(err));

    }

    return (
        <div>
            <h1>Funds Data</h1>
            <Table dataSource={Funds} columns={columns} />
        </div>
    );
}
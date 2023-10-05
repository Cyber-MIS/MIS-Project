import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getInquiryDetails } from '../../api/dashboard';

export default function InquiryView() {
    const columns = [
        {
            title: 'Inquiry ID',
            dataIndex: 'Inquiry_ID',
            key: 'Inquiry_ID',
        },
        {
            title: 'User ID',
            dataIndex: 'ID',
            key: 'ID',
        },
        {
            title: 'Child ID',
            dataIndex: 'Child_ID',
            key: 'Child_ID',
        },
        {
            title: 'Inquiry Title',
            dataIndex: 'Inquiry_Title',
            key: 'Inquiry_Title',
        },
        {
            title: 'CapaInquiry Descriptioncity',
            dataIndex: 'Inquiry_Description',
            key: 'Inquiry_Description',
        },
        {
            title: 'Proofs',
            dataIndex: 'Proofs',
            key: 'Proofs',
        }
    ];

    const [Inquiries, setInquiries] = useState();

    useEffect(() => loadInquiries(), []);

    function loadInquiries() {
        getInquiryDetails()
            .then((data) => {
                setInquiries(data);
        })
        .catch((err) => console.log(err));

    }

    return (
        <div>
            <h1>Inquiries Data</h1>
            <Table dataSource={Inquiries} columns={columns} />
        </div>
    );
}
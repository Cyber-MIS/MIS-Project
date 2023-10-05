import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getUserDetails } from '../../api/dashboard';

export default function UserView() {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'ID',
      key: 'ID',
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Password',
      dataIndex: 'Password',
      key: 'Password',
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
      title: 'Contact',
      dataIndex: 'Contact',
      key: 'Contact',
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
    },
  ];

  const [workers, setWorkers] = useState();

  useEffect(() => loadWorkers(), []);

  function loadWorkers() {
    getUserDetails()
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

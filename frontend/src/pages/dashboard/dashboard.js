import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <Link to='/childview'>View Child Profiles</Link>
      </div>
      <div>
        <Link to='/fundview'>View Funding Details</Link>
      </div>
      <div>
        <Link to='/inquiryview'>View Inquiry Details</Link>
      </div>
      <div>
        <Link to='/orphanageview'>View Orphanage Details</Link>
      </div>
      <div>
        <Link to='/userview'>View User Profiles</Link>
      </div>
      <div>
        <Link to='/workerview'>View Worker Profiles</Link>
      </div>
    </div>
  );
}

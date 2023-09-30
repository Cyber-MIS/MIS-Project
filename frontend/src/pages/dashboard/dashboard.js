import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Dashboard() {
  return (
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span class="fs-5 d-none d-sm-inline">Dashboard</span>
                    </a>
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li class="nav-item">
                            <a href="#" class="nav-link align-middle px-0">
                                <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/childview" class="nav-link align-middle px-0">
                                <i class="fs-4 bi-person"></i> <span class="ms-1 d-none d-sm-inline">Child Profiles</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/fundview" class="nav-link align-middle px-0">
                                <i class="fs-4 bi-cash-stack"></i> <span class="ms-1 d-none d-sm-inline">Funding Details</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/inquiryview" class="nav-link align-middle px-0">
                                <i class="fs-4 bi-chat-text"></i> <span class="ms-1 d-none d-sm-inline">Inquiry Details</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/OrphanageView" class="nav-link align-middle px-0">
                                <i class="fs-4 bi-building"></i> <span class="ms-1 d-none d-sm-inline">Orphanage Details</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/UserView" class="nav-link align-middle px-0">
                                <i class="fs-4 bi-person-circle"></i> <span class="ms-1 d-none d-sm-inline">User Details</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/WorkerView" class="nav-link align-middle px-0">
                                <i class="fs-4 bi-person-badge"></i> <span class="ms-1 d-none d-sm-inline">Worker Details</span>
                            </a>
                        </li>
                    </ul>
                    <hr></hr>
                </div>
            </div>
            <div class="col py-3">
                Content area...
            </div>
        </div>
    </div>
  );
}

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	CDBSidebar,
	CDBSidebarContent,
	CDBSidebarFooter,
	CDBSidebarHeader,
	CDBSidebarMenu,
	CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import Home from "./Home";
import Employee from "./employee";
import AddEmployee from "./addEmployee";
import BasicChart from "./analytics";


const Sidebar = () => {
	return (
		<BrowserRouter>
			<div
				style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
			>
				<CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
					<CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
						<a
							href="/"
							className="text-decoration-none"
							style={{ color: 'inherit' }}
						>
							Menu
						</a>
					</CDBSidebarHeader>

					<CDBSidebarContent className="sidebar-content">
						<CDBSidebarMenu>
							<NavLink exact to="/" activeClassName="activeClicked">
								<CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
							</NavLink>
							<NavLink exact to="/addEmployee" activeClassName="activeClicked">
								<CDBSidebarMenuItem icon="table">AddEmployee</CDBSidebarMenuItem>
							</NavLink>
							<NavLink exact to="/employee" activeClassName="activeClicked">
								<CDBSidebarMenuItem icon="user">Employee</CDBSidebarMenuItem>
							</NavLink>
							<NavLink exact to="/analytics" activeClassName="activeClicked">
								<CDBSidebarMenuItem icon="chart-line">
									Analytics
								</CDBSidebarMenuItem>
							</NavLink>

							<NavLink
								exact
								to="/hero404"
								target="_blank"
								activeClassName="activeClicked"
							>
								<CDBSidebarMenuItem icon="exclamation-circle">
									404 page
								</CDBSidebarMenuItem>
							</NavLink>
						</CDBSidebarMenu>
					</CDBSidebarContent>

					<CDBSidebarFooter style={{ textAlign: 'center' }}>
						<div
							style={{
								padding: '20px 5px',
							}}
						>
							Help
						</div>
					</CDBSidebarFooter>
				</CDBSidebar>
				<div className="container mt-2" style={{ marginTop: 40 }}>
					<Routes>

						<Route index element={<Home />} />
						<Route path="addEmployee" element={<AddEmployee />} />
						<Route path="employee" element={<Employee />} />
						<Route path="analytics" element={<BasicChart />} />

					</Routes>
				</div>
			</div>


		</BrowserRouter>
	);
};

export default Sidebar;

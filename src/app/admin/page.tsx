// Form to add new Project

import React, { useState } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

const Dashboard = () => {
	return (
		<div className="flex flex-col w-full px-5">
			<div className={`flex ${GeistSans.className} font-bold text-3xl`}>
				Add Project
			</div>
			<div></div>
		</div>
	);
};

export default Dashboard;

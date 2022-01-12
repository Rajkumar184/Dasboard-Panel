import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

export const mainListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<DashboardIcon />
			</ListItemIcon>
			<ListItemText primary="Dashboard" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<PeopleIcon />
			</ListItemIcon>
			<ListItemText primary="Customers" />
		</ListItem>
		{/* */}
		<ListItem button>
			<ListItemIcon>
				<ShoppingCartIcon />
			</ListItemIcon>
			<ListItemText primary="Orders" />
		</ListItem>

		<ListItem button>
			<ListItemIcon>
				<BarChartIcon />
			</ListItemIcon>
			<ListItemText primary="Reports" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<ArticleOutlinedIcon />
			</ListItemIcon>
			<ListItemText primary="Invoices" />
		</ListItem>
	</div>
);

export const secondaryListItems = (
	<div>
		<ListSubheader inset>Applications</ListSubheader>
		<ListItem button>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Projects Platform" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<ShareOutlinedIcon />
			</ListItemIcon>
			<ListItemText primary="Social Platform" />
		</ListItem>
		{/* <ListItem button>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Year-end sale" />
		</ListItem> */}
	</div>
);

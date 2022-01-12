import { useState } from "react";
import clsx from "clsx";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	root: {
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		minHeight: "100vh",
		color: "#000133",
	},
	appBar: {
		background: "#00022E",
		color: "#FC86AA",
	},
	icon: {
		padding: "10px",
	},
	title: {
		margin: "auto",
	},
	container: {
		display: "flex",
		flex: 1,
	},
	drawer: {
		background: "#D8DCD6",
		position: "static",
		transition: "width .7s",
	},
	closed: {
		width: "0px",
	},
	opened: {
		width: "240px",
	},
	main: {
		flex: 1,
		background: "#f7f5f5",
		color: "black",
	},
	footer: {
		background: "#00022E",
		height: "50px",
		color: "#FC86AA",
	},
});

const Sidebar = () => {
	const classes = useStyles();
	const [isOpened, setIsOpened] = useState(false);
	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						onClick={() => setIsOpened(!isOpened)}
						className={classes.icon}
					>
						{isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Header
					</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar />
			<div className={classes.container}>
				<Drawer
					variant="permanent"
					classes={{
						paper: clsx(classes.drawer, {
							[classes.closed]: !isOpened,
							[classes.opened]: isOpened,
						}),
					}}
				>
					Drawer
				</Drawer>
				<main className={classes.main}>Content</main>
			</div>
			<div className={classes.footer}>
				<Typography variant="h6">Footer</Typography>
			</div>
		</div>
	);
};

export default Sidebar;

import { Box, Container, Grid } from "@mui/material";
import { Budgets } from "./header/Budgets";
import { TaskProgress } from "./header/TaskProgress";
import { TotalCustomers } from "./header/TotalCustomers";
import { TotalProfits } from "./header/TotalProfits";

const Heads = () => {
	return (
		<>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: 8,
				}}
			>
				<div>
					<p className="pl-4 pt-4">Dashboard || Reports </p>
					<h4 textAlign="center" className="pl-4">
						Here's what's happenning
					</h4>
				</div>

				<Container maxWidth={false}>
					<Grid container spacing={3}>
						<Grid item lg={3} sm={6} xl={3} xs={12}>
							<Budgets />
						</Grid>
						<Grid item xl={3} lg={3} sm={6} xs={12}>
							<TotalCustomers />
						</Grid>
						<Grid item xl={3} lg={3} sm={6} xs={12}>
							<TaskProgress />
						</Grid>
						<Grid item xl={3} lg={3} sm={6} xs={12}>
							<TotalProfits sx={{ height: "100%" }} />
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Heads;

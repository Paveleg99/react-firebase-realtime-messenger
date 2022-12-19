import { Container, Grid } from '@mui/material';
import React from 'react';

const Loader = () => {
	return (
		<Container>
			<Grid container
				style={{ height: window.innerHeight - 66 }}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Grid container
					alignItems={"center"}
					direction={"column"}
				>
					<div className="loadingio-spinner-gear-2xt2oe3xnfb">
						<div className="ldio-b6lhrrcseqh">
							<div><div></div><div></div><div></div><div></div><div></div><div></div></div>
						</div>
					</div>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Loader;
import React, { useState } from "react";

const Home = () => {
	const [gente, setGente] = useState([]);

	const getUser = () => {
		fetch("https://randomuser.me/api/")
			.then((resp) => resp.json())
			.then((response) => {
				console.log(response.results[0]);
				setGente(response.results[0]);
			})
			.catch();
	};

	return (
		<div>
			{gente.name && (
				<div className="card" style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src={gente.picture.large}
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">
							{gente.name.first} {gente.name.last}
						</h5>
						<p className="card-text">
							{gente.location.street.name}
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			)}
			<button onClick={() => getUser()}>Obtener Usuario</button>
		</div>
	);
};

export default Home;

import React from "react";

const Single = (props) => {
	return (
		<div>
			<div className="card mt-3">
				<img src={props.image} className="card-img-center p-5" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.context}</p>
					<a href={props.link} className="btn btn-primary">Go to website</a>
				</div>
			</div>
		</div >
	)
}

export default Single;
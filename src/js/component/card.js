import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">{props.time}</h5>
			</div>
		</div>
	);
}

Card.propTypes = {
	time: PropTypes.number
};

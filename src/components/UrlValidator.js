import React, { useState } from "react";
import validator from 'validator'

const App = () => {
	
const validate = (value) => {
	
	if (validator.isURL(value)) {
	true
	} else {
	false
	}
}

return (
	<div style={{
	marginLeft: '200px',
	}}>
	<pre>
		<h2>Validating URL in ReactJS</h2>
		<span>Enter URL: </span><input type="text"
		onChange={(e) => validate(e.target.value)}></input> <br />
		<span style={{
		fontWeight: 'bold',
		color: 'red',
		}}>{errorMessage}</span>
	</pre>
	</div>
);
}

export default App

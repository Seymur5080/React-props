import React from "react";
import Single from "./single";
import reactImg from './images/react.png';
import vueImg from './images/vue.png';
import angularImg from './images/angular.png';

const App = () => {
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-4">
						<Single
							title='React'
							image={reactImg}
							context='A JavaScript library for building user interfaces'
							link='https://reactjs.org/'
						/>
					</div>
					<div className="col-4">
						<Single
							title='Vue'
							image={vueImg}
							context='The Progressive JavaScript Framework'
							link='https://vuejs.org/'
						/>
					</div>
					<div className="col-4">
						<Single
							title='Angular'
							image={angularImg}
							context="The modern web developer's platform"
							link='https://angular.io/'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App;
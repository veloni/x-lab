import React from 'react';

import './Autorization.scss';

const Autorization = ({
	autorizationFunc,
	isCorrectLogPas,
	logRef,
	pasRef,
	setIsCorrectLogPas,
}) => (
	<div className="wrapper-main-autorization">
		<div className="wrapper-autorization">
			<div className="box-autorization">
				<span className="title-autorization">
					Autorization
				</span>
				{isCorrectLogPas && 
					<span>
						Login or Password is not valid
					</span>}
				<div className="wrapper-login-password">
					<div className="wrapper-login">
						<span className="text-autoriztion">
							userName
						</span>
						<input
							className="input-login"
							onClick={() => setIsCorrectLogPas(false)}
							ref={logRef}
						/>
					</div>
					<div className="wrapper-password">
						<span className="text-autoriztion">
							password
						</span>
						<input
							className="input-password"
							onClick={() => setIsCorrectLogPas(false)}
							ref={pasRef}
						/>
					</div>
					<button
						onClick={() => autorizationFunc(logRef.current.value, pasRef.current.value)}
						className="autorization"
					>
						login
					</button>
				</div>
			</div>
		</div>
	</div>
);

export default Autorization;
// import React from 'react';
// import Main4 from '../../components/Main4';
// import Main5 from '../../components/Main5';



// function DashMain() {
// 	return (
// 		<>
// 			<div
// 				className='inner p-3'
// 				style={{ transition: '0.5s !important' }}
// 			>
// 				<h5 className='text-bold'>Dashboard Overview</h5>
// 				<div className='row'>
// 					<div className='col-md-3'>
// 						<div
// 							style={{
// 								background: "rgb(159 149 149 / 48%)",
// 								display: 'flex',
// 								flexDirection: 'column',
// 								alignItems: 'center',
// 								// color: 'white',
// 								fontWeight: '500',
// 								borderRadius: '10px',
// 								height: '180px',
// 								marginTop: '10px',
// 								justifyContent: 'center',
// 								// color: '#000000',
// 							}}
// 						>
// 							<h6>Total Courses</h6>
// 							<h4>$0.0</h4>

// 							<p> Cash: Card: Credit:</p>
// 							<p>$0.0: $0.0: $0.0:</p>
// 						</div>
// 					</div>

// 					<div className='col-md-3'>
// 						<div
// 							style={{
// 								background: "#00000059",
// 								display: 'flex',
// 								flexDirection: 'column',
// 								alignItems: 'center',
// 								color: '#fff',
// 								fontWeight: '500',
// 								borderRadius: '10px',
// 								height: '180px',
// 								marginTop: '10px',
// 								justifyContent: 'center',
// 								// color: '#000000',
// 							}}
// 						>
// 							<h6>Total Blog</h6>
// 							<h4>$0.0</h4>

// 							<p>Cash: Card: Credit:</p>
// 							<p>$0.0: $0.0: $0.0:</p>
// 						</div>
// 					</div>

// 					<div className='col-md-3'>
// 						<div
// 							style={{
// 								background: "rgb(159 149 149 / 48%)",
// 								display: 'flex',
// 								flexDirection: 'column',
// 								alignItems: 'center',
// 								// color: 'white',
// 								fontWeight: '500',
// 								borderRadius: '10px',
// 								height: '180px',
// 								marginTop: '10px',
// 								justifyContent: 'center',
// 								// color: '#000000',
// 							}}
// 						>
// 							<h6>Totall User</h6>
// 							<h4>$0.0</h4>

// 							<p>Cash: Card: Credit:</p>
// 							<p>$0.0: $0.0: $0.0:</p>
// 						</div>
// 					</div>

// 					<div className='col-md-3'>
// 						<div
// 							style={{
// 								background: "#00000059",
// 								display: 'flex',
// 								flexDirection: 'column',
// 								alignItems: 'center',
// 								color: 'white',
// 								fontWeight: '500',
// 								borderRadius: '10px',
// 								height: '180px',
// 								marginTop: '10px',
// 								justifyContent: 'center',
// 								// color: '#000000',
// 							}}
// 						>
// 							<h6>Course Enrollment</h6>
// 							<h4>$0.0</h4>

// 							<p>Cash: Card: Credit:</p>
// 							<p>$0.00: $0.00: $0.00:</p>
// 						</div>
// 					</div>
// 				</div>
// 				<div className='row'>
// 					<div className='col-md-3'>
// 						<div
// 							className='order py-3'
// 							style={{
// 								display: 'flex',
// 								justifyContent: 'center',
// 								backgroundColor: "rgb(106 11 11 / 54%)",
// 								alignItems: 'center',

// 								border: ' 1px solid rgb(243, 239, 239)',
// 								marginTop: '20px',
// 								borderRadius: '10px',
// 								color: 'white',
// 							}}
// 						>
// 							<div
// 								className=''
// 								style={{
// 									background: '#FEECDC',
// 									width: '50px',
// 									height: '50px',
// 									lineHeight: '50px',
// 									borderRadius: '50%',
// 									justifyContent: 'center',
// 									alignItems: 'center',
// 									display: 'flex',
// 								}}
// 							>
// 								<i
// 									class='fa-solid fa-cart-shopping'
// 									style={{
// 										fontSize: '15px',

// 										color: '#D03801',
// 									}}
// 								></i>
// 							</div>

// 							<div className='ps-3'>
// 								<p className='m-0' style={{color:"white"}}>Total Course</p>
// 								<h4>20</h4>
// 							</div>
// 						</div>
// 					</div>
// 					<div className='col-md-3'>
// 						<div
// 							className='order py-3'
// 							style={{
// 								display: 'flex',
// 								justifyContent: 'center',
// 								backgroundColor: "rgb(106 11 11 / 54%)",
// 								alignItems: 'center',
//                                color:"white",
// 								border: ' 1px solid rgb(243, 239, 239)',
// 								marginTop: '20px',
// 								borderRadius: '10px',
// 							}}
// 						>
// 							<div
// 								className=''
// 								style={{
// 									background: '#FEECDC',
// 									width: '50px',
// 									height: '50px',
// 									lineHeight: '50px',
// 									borderRadius: '50%',
// 									justifyContent: 'center',
// 									alignItems: 'center',
// 									display: 'flex',
// 								}}
// 							>
// 								<i
// 									class='fa-solid fa-arrow-rotate-left'
// 									style={{
// 										fontSize: '20px',

// 										color: ' #FFD700',
// 									}}
// 								></i>
// 							</div>

// 							<div className='ps-3'>
// 								<p className='m-0' style={{color:"white"}}>Total Blogs</p>
// 								<h4>39</h4>
// 							</div>
// 						</div>
// 					</div>

// 					<div className='col-md-3'>
// 						<div
// 							className='order py-3'
// 							style={{
// 								display: 'flex',
// 								justifyContent: 'center',
// 								backgroundColor: "rgb(106 11 11 / 54%)",
// 								alignItems: 'center',
//                               color:"white",
// 								border: ' 1px solid rgb(243, 239, 239)',
// 								marginTop: '20px',
// 								borderRadius: '10px',
// 							}}
// 						>
// 							<div
// 								className=''
// 								style={{
// 									background: '#FEECDC',
// 									width: '50px',
// 									height: '50px',
// 									lineHeight: '50px',
// 									borderRadius: '50%',
// 									justifyContent: 'center',
// 									alignItems: 'center',
// 									display: 'flex',
// 								}}
// 							>
// 								<i
// 									class='fa-solid fa-truck-moving'
// 									style={{
// 										fontSize: '20px',

// 										color: ' #FFD700',
// 									}}
// 								></i>
// 							</div>

// 							<div className='ps-3'>
// 								<p className='m-0' style={{color:"white"}}>Total Users</p>
// 								<h4>500</h4>
// 							</div>
// 						</div>
// 					</div>
// 					<div className='col-md-3'>
// 						<div
// 							className='order py-3'
// 							style={{
// 								display: 'flex',
// 								justifyContent: 'center',
// 								backgroundColor: "rgb(106 11 11 / 54%)",
// 								alignItems: 'center',

// 								border: ' 1px solid rgb(243, 239, 239)',
// 								marginTop: '20px',
// 								borderRadius: '10px',
// 								color:"white"
// 							}}
// 						>
// 							<div
// 								className=''
// 								style={{
// 									background: '#FEECDC',
// 									width: '50px',
// 									height: '50px',
// 									lineHeight: '50px',
// 									borderRadius: '50%',
// 									justifyContent: 'center',
// 									alignItems: 'center',
// 									display: 'flex',
// 								}}
// 							>
// 								<i
// 									class='fa-solid fa-check'
// 									style={{
// 										fontSize: '20px',

// 										color: ' #FFD700',
// 									}}
// 								></i>
// 							</div>

// 							<div className='ps-3'>
// 								<p className='m-0' style={{color:"white"}}>Total Active Courses</p>
// 								<h4>39</h4>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				<div className='row'>
// 					<div className='col-md-6'>
// 						<div style={{ marginTop: '40px' }}>
// 							<h6>Weekly Activity</h6>
// 							<Main4 />
// 						</div>
// 					</div>

// 					<div className='col-md-6'>
// 						<div style={{ marginTop: '40px' }}>
// 							<Main5 />
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// export default DashMain;


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faArrowRotateLeft, faTruckMoving, faCheck } from '@fortawesome/free-solid-svg-icons';
import Main4 from '../../components/Main4';
import Main5 from '../../components/Main5';


function DashMain() {
	return (
		<>
			<div className='inner p-3' style={{ transition: '0.5s !important' }}>
				<h5 className='text-bold'>Dashboard Overview</h5>
				<div className='row'>
					<div className='col-md-3'>
						<div
							style={{
								background: "#ff7f50", // Coral color
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								fontWeight: '500',
								borderRadius: '10px',
								height: '180px',
								marginTop: '10px',
								justifyContent: 'center',
								color: '#fff',
							}}
						>
							<h6>Total Courses</h6>
							<h4>20</h4>
						</div>
					</div>

					<div className='col-md-3'>
						<div
							style={{
								background: "#4682b4", // SteelBlue color
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								color: '#fff',
								fontWeight: '500',
								borderRadius: '10px',
								height: '180px',
								marginTop: '10px',
								justifyContent: 'center',
							}}
						>
							<h6>Total Blog</h6>
							<h4>39</h4>
						</div>
					</div>

					<div className='col-md-3'>
						<div
							style={{
								background: "#32cd32", // LimeGreen color
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								fontWeight: '500',
								borderRadius: '10px',
								height: '180px',
								marginTop: '10px',
								justifyContent: 'center',
								color: '#fff',
							}}
						>
							<h6>Total Users</h6>
							<h4>500</h4>
						</div>
					</div>

					<div className='col-md-3'>
						<div
							style={{
								background: "#8a2be2", // BlueViolet color
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								color: 'white',
								fontWeight: '500',
								borderRadius: '10px',
								height: '180px',
								marginTop: '10px',
								justifyContent: 'center',
							}}
						>
							<h6>Course Enrollment</h6>
							<h4>39</h4>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-3'>
						<div
							className='order py-3'
							style={{
								display: 'flex',
								justifyContent: 'center',
								backgroundColor: "#ff6347", // Tomato color
								alignItems: 'center',
								border: '1px solid rgb(243, 239, 239)',
								marginTop: '20px',
								borderRadius: '10px',
								color: 'white',
							}}
						>
							<div
								className=''
								style={{
									background: '#fff',
									width: '50px',
									height: '50px',
									lineHeight: '50px',
									borderRadius: '50%',
									justifyContent: 'center',
									alignItems: 'center',
									display: 'flex',
								}}
							>
								<FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '20px', color: '#ff6347' }} />
							</div>

							<div className='ps-3'>
								<p className='m-0' style={{ color: "white" }}>Total Service</p>
								<h4>20</h4>
							</div>
						</div>
					</div>
					<div className='col-md-3'>
						<div
							className='order py-3'
							style={{
								display: 'flex',
								justifyContent: 'center',
								backgroundColor: "#1e90ff", // DodgerBlue color
								alignItems: 'center',
								color: "white",
								border: '1px solid rgb(243, 239, 239)',
								marginTop: '20px',
								borderRadius: '10px',
							}}
						>
							<div
								className=''
								style={{
									background: '#fff',
									width: '50px',
									height: '50px',
									lineHeight: '50px',
									borderRadius: '50%',
									justifyContent: 'center',
									alignItems: 'center',
									display: 'flex',
								}}
							>
								<FontAwesomeIcon icon={faArrowRotateLeft} style={{ fontSize: '20px', color: ' #1e90ff' }} />
							</div>

							<div className='ps-3'>
								<p className='m-0' style={{ color: "white" }}>Total Blogs</p>
								<h4>39</h4>
							</div>
						</div>
					</div>

					<div className='col-md-3'>
						<div
							className='order py-3'
							style={{
								display: 'flex',
								justifyContent: 'center',
								backgroundColor: "#3cb371", // MediumSeaGreen color
								alignItems: 'center',
								color: "white",
								border: '1px solid rgb(243, 239, 239)',
								marginTop: '20px',
								borderRadius: '10px',
							}}
						>
							<div
								className=''
								style={{
									background: '#fff',
									width: '50px',
									height: '50px',
									lineHeight: '50px',
									borderRadius: '50%',
									justifyContent: 'center',
									alignItems: 'center',
									display: 'flex',
								}}
							>
								<FontAwesomeIcon icon={faTruckMoving} style={{ fontSize: '20px', color: ' #3cb371' }} />
							</div>

							<div className='ps-3'>
								<p className='m-0' style={{ color: "white" }}>Total Users</p>
								<h4>500</h4>
							</div>
						</div>
					</div>
					<div className='col-md-3'>
						<div
							className='order py-3'
							style={{
								display: 'flex',
								justifyContent: 'center',
								backgroundColor: "#6a5acd", // SlateBlue color
								alignItems: 'center',
								border: '1px solid rgb(243, 239, 239)',
								marginTop: '20px',
								borderRadius: '10px',
								color: "white"
							}}
						>
							<div
								className=''
								style={{
									background: '#fff',
									width: '50px',
									height: '50px',
									lineHeight: '50px',
									borderRadius: '50%',
									justifyContent: 'center',
									alignItems: 'center',
									display: 'flex',
								}}
							>
								<FontAwesomeIcon icon={faCheck} style={{ fontSize: '20px', color: ' #6a5acd' }} />
							</div>

							<div className='ps-3'>
								<p className='m-0' style={{ color: "white" }}>Total Active Courses</p>
								<h4>39</h4>
							</div>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col-md-6'>
						<div style={{ marginTop: '40px' }}>
							<h6>Weekly Activity</h6>
							<Main4 />
						</div>
					</div>

					<div className='col-md-6'>
						<div style={{ marginTop: '40px' }}>
							<Main5 />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default DashMain;

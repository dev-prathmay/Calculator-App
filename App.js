import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

	const [resultText, setResultText] = useState("");
	const [calcText, setCalcText] = useState("");
	const onButtonClick = (text) => {
		if (text == "=") {
			return calculateResult();
		}
		setResultText(resultText + text);
	};

	const calculateResult = () => {
		setCalcText(eval(resultText));
		setResultText('')
	};

	const onOperationClick = (operation) => {
		let operations = ["DEL", "+", "-", "*", "/", "%"];

		if (operation == "DEL") {
			return setResultText(
				resultText.toString().substring(0, resultText.length - 1)
			);
		}
		if (operation == "AC") {
			setResultText("");
			setCalcText(0);
			return;
		}
		if (operations.includes(resultText.toString().split("").pop())) return;
		setResultText(resultText + operation);
	};

	return (
		<View style={styles.container}>
			<View style={styles.resultView}>
				<Text style={{
					color: '#fff',
					right: 25,
					fontSize: 50
				}}>{resultText}</Text>
				<Text style={{
					color: '#fff',
					right: 25,
					fontSize: 45
				}}>{calcText}</Text>
			</View>
			<View style={styles.nums}>

				<View style={styles.column}>
					<TouchableOpacity style={styles.btngrey} onPress={() => {
						onOperationClick("AC")
					}}>
						<Text style={styles.btnTextt}>AC</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.btnblack} onPress={() => {
						onButtonClick(7)
					}}>
						<Text style={styles.btnText}>7</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.btnblack} onPress={() => {
						onButtonClick(4)
					}}>
						<Text style={styles.btnText}>4</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.btnblack} onPress={() => {
						onButtonClick(1)
					}}>
						<Text style={styles.btnText}>1</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.zerobtn} onPress={() => {
						onButtonClick(0)
					}}>
						<Text style={styles.btnTextr}>0</Text>
					</TouchableOpacity>

				</View>

				<View style={styles.column}>

					<TouchableOpacity style={styles.btngrey} onPress={() => {
						onOperationClick("DEL")
					}}>
						<Text style={styles.btnTextt}>+/-</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.btnblack} onPress={() => {
						onButtonClick(8)
					}}>
						<Text style={styles.btnText}>8</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.btnblack} onPress={() => {
						onButtonClick(5)
					}}>
						<Text style={styles.btnText}>5</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.btnblack} onPress={() => {
						onButtonClick(2)
					}}>
						<Text style={styles.btnText}>2</Text>
					</TouchableOpacity>

					<View style={styles.btnblack}>
						<Text style={styles.btnText}></Text>
					</View>

				</View>

				<View style={styles.column}>

					<TouchableOpacity style={styles.btngrey}>
						<Text style={styles.btnTextt}>%</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.btnblack} onPress={() => {
						onButtonClick(9)
					}}>
						<Text style={styles.btnText}>9</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.btnblack} onPress={() => {
						onButtonClick(6)
					}}>
						<Text style={styles.btnText}>6</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.btnblack} onPress={() => {
						onButtonClick(3)
					}}>
						<Text style={styles.btnText}>3</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.btnblack} onPress={() => { }}>
						<Text style={styles.btnText}>.</Text>
					</TouchableOpacity>

				</View>

				<View style={styles.column}>

					<TouchableOpacity style={styles.btnorange} onPress={() => {
						onOperationClick('/')
					}}>
						<Text style={styles.btnText}>/</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.btnorange} onPress={() => {
						onOperationClick('*')
					}}>
						<Text style={styles.btnText}>x</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.btnorange} onPress={() => {
						onOperationClick('-')
					}}>
						<Text style={styles.btnText}>-</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.btnorange} onPress={() => {
						onOperationClick('+')
					}}>
						<Text style={styles.btnText}>+</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.btnorange} onPress={() => {
						onButtonClick('=')
					}}>
						<Text style={styles.btnText}>=</Text>
					</TouchableOpacity>

				</View>
			</View>
			<StatusBar />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	resultView: {
		flex: 3,
		backgroundColor: '#000',
		width: '100%',
		alignItems: 'flex-end',
		justifyContent: 'flex-end'
	},
	nums: {
		width: '100%',
		flex: 7,
		backgroundColor: '#000',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	column: {
		height: '90%',
		width: '21%',
		justifyContent: 'space-evenly',
	},
	btn: {
		backgroundColor: 'white',
		width: '97%',
		height: '17.5%',
		borderRadius: 50
	},
	zerobtn: {
		backgroundColor: '#262626',
		width: '200%',
		height: '17.5%',
		borderRadius: 50,
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	btngrey: {
		backgroundColor: 'grey',
		width: '97%',
		height: '17.5%',
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center'
	},
	btnblack: {
		backgroundColor: '#262626',
		width: '97%',
		height: '17.5%',
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center'
	},
	btnorange: {
		backgroundColor: 'orange',
		width: '97%',
		height: '17.5%',
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center'
	},
	btnText: {
		color: '#fff',
		fontSize: 40,

	},
	btnTextr: {
		color: '#fff',
		fontSize: 40,
		left: 30,

	},
	btnTextt: {
		color: '#000',
		fontSize: 40,
	}
});

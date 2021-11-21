import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import ImageAnimation from '../components/ImageAnimation';
import IamgeScrollView from '../components/ImageScrollView';
import data from '../data.json';

const Main = () => {
	const [slideIndex, setSlide] = useState(new Array(data.length).fill(0));

	return (
		<ScrollView >
			<Text style={styles.header}>Test Carousel</Text>
			{data.map((obj, index) => {
				return (
					<View>
						<Text style={styles.header}>{obj.title}</Text>
						<View style={styles.container}>
							<ImageAnimation>
								<FastImage
									style={styles.imgContent}
									key={index}
									source={{ uri: obj.images[slideIndex[index]] }}
								/>
							</ImageAnimation>
						</View>
						<IamgeScrollView
							obj={obj}
							index={index}
							slideIndex={slideIndex}
							setSlide={setSlide}
							style={{justifyContent: 'center'}}
						/>
						{
							slideIndex[index] !== 0 &&
							<TouchableOpacity
								style={styles.btn_prev}
								onPress={() => {
									let newState = [...slideIndex];
									newState[index] -= 1;
									setSlide(newState);
								}}>
								<Text style={styles.btn_content}>Prev</Text>
							</TouchableOpacity>
						}
						{
							slideIndex[index] !== obj.images.length - 1 &&
							<TouchableOpacity
								style={{ ...styles.btn_prev, ...styles.btn_next }}
								onPress={() => {
									let newState = [...slideIndex];
									newState[index] += 1;
									setSlide(newState);
								}}>
								<Text style={styles.btn_content}>Next</Text>
							</TouchableOpacity>}
					</View>
				)
			})}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	header: {
		fontSize: 24,
		textAlign: 'center',
		paddingTop: '10%',
	},
	container: {
		justifyContent: 'center',
		flexDirection: 'row',
	},
	btn_prev: {
		position: 'absolute',
		top: '45%',
		marginHorizontal: 10,
		paddingHorizontal: 10,
		padding: 5,
		backgroundColor: '#99ebff',
		borderRadius: 10
	},
	btn_content: {
		fontWeight: 'bold',
		fontSize: 18,
		opacity: 0.6
	},
	btn_next: {
		right: 0
	},
	disabled: {
		opacity: 0
	},
	imgContent: {
		width: 200,
		height: 200,
		marginTop: "50%",
		borderRadius: 20
	},
	fade: {
	}
})

export default Main;

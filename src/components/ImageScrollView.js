import React from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

const ImageScrollView = ({ obj, index, slideIndex, setSlide }) => {
	return (
		<ScrollView
			horizontal
			pagingEnabled
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={styles.container}
		>
			<View style={styles.subcontainer}>{
				obj.images.map((ele, id) =>
					<TouchableOpacity
						onPress={() => {
							let newState = [...slideIndex];
							newState[index] = id;
							setSlide(newState)
						}}>
						<FastImage
							style={
								slideIndex[index] === id ? { ...styles.imgContainer, opacity: 1 }
									: styles.imgContainer
							}
							key={id}
							source={{ uri: ele }} />
					</TouchableOpacity>
				)
			}</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: 'center'
	},
	subcontainer: {
		position: 'relative',
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: '10%',
		marginBottom: '10%'
	},
	imgContainer: {
		width: 80,
		height: 80,
		marginRight: 10,
		resizeMode: 'center',
		opacity: 0.6,
		borderRadius: 20
	},
})

export default ImageScrollView;
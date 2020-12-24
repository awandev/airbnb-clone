import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'


const Post = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall-750x500.jpg' }}
                style={styles.image}
            />

            {/* bed & bedroom */}
            <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>
                Now consider: What was this place like in your parents’ time? Your grandparents’? In many cases, the parks, beaches and campgrounds of today are surrounded by more development, or are themselves more developed, than they were decades ago.
            </Text>

            {/* old price and new price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36</Text>
                <Text style={styles.price}>  $30 </Text>/ night
            </Text>

            {/* total price */}
            <Text style={styles.totalPrice}>$230 total</Text>

        </View>
    )
}

export default Post

import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const GuestsScreen = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infant, setInfant] = useState(0);


    return (
        <View>

            {/* row 1 : adults */}
            <View style={styles.row}>
                {/* titles */}
                <View>
                    <Text style={{ fontWeight: 'bold', }}>Adults</Text>
                    <Text style={{ color: '#8d8d8d' }}>Ages 13 or above</Text>
                </View>

                {/* buttons with value */}
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    {/* - */}
                    <Pressable onPress={() => setAdults(Math.max(0, adults - 1))}
                        style={styles.button}>
                        <Text style={{ fontSize: 20, color: '#5d5d5d' }}>-</Text>
                    </Pressable>


                    <Text style={{ marginHorizontal: 20, fontSize: 16, }}>{adults}</Text>

                    {/* + */}
                    <Pressable onPress={() => setAdults(adults + 1)}
                        style={styles.button}>
                        <Text style={{ fontSize: 20, color: '#5d5d5d' }}>+</Text>
                    </Pressable>

                </View>
            </View>




            {/* row 2 : children */}
            <View style={styles.row}>
                {/* titles */}
                <View>
                    <Text style={{ fontWeight: 'bold', }}>Children</Text>
                    <Text style={{ color: '#8d8d8d' }}>Ages 2-12</Text>
                </View>

                {/* buttons with value */}
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    {/* - */}
                    <Pressable onPress={() => setChildren(Math.max(0, children - 1))}
                        style={styles.button}>
                        <Text style={{ fontSize: 20, color: '#5d5d5d' }}>-</Text>
                    </Pressable>


                    <Text style={{ marginHorizontal: 20, fontSize: 16, }}>{children}</Text>

                    {/* + */}
                    <Pressable onPress={() => setChildren(children + 1)}
                        style={styles.button}>
                        <Text style={{ fontSize: 20, color: '#5d5d5d' }}>+</Text>
                    </Pressable>

                </View>
            </View>



            {/* row 3 : infants */}
            <View style={styles.row}>
                {/* titles */}
                <View>
                    <Text style={{ fontWeight: 'bold', }}>Infants</Text>
                    <Text style={{ color: '#8d8d8d' }}>Under 2</Text>
                </View>

                {/* buttons with value */}
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    {/* - */}
                    <Pressable onPress={() => setInfant(Math.max(0, infant - 1))}
                        style={styles.button}>
                        <Text style={{ fontSize: 20, color: '#5d5d5d' }}>-</Text>
                    </Pressable>


                    <Text style={{ marginHorizontal: 20, fontSize: 16, }}>{infant}</Text>

                    {/* + */}
                    <Pressable onPress={() => setInfant(infant + 1)}
                        style={styles.button}>
                        <Text style={{ fontSize: 20, color: '#5d5d5d' }}>+</Text>
                    </Pressable>

                </View>
            </View>



        </View>
    )
}

export default GuestsScreen

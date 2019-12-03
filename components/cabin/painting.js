import React from 'react';
import {  asset,  View ,NativeModules} from 'react-360';
import Entity from 'Entity';
const { AudioModule } = NativeModules;
class Painting extends React.Component {
    render() {

        return (
            <View>
                <Entity source={{
                obj: asset('curtain-obj/curtain.obj'),
               mtl: asset('curtain-obj/curtain.mtl'),
                }} style={{
                transform: [
                    { translate: [-485, -500, -700] },
                    { rotateY: 0 },
                    {rotateX: 0},
                    { scaleX: 400 },
                    { scaleY: 400 },
                    { scaleZ: 400},
                ],
                color: 'white',
                }}      lit={true}>
                </Entity>
            </View>
        )
    }
}

export default Painting


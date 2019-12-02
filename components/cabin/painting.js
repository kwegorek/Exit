import React from 'react';
import {  asset,  View ,NativeModules} from 'react-360';
import Entity from 'Entity';
const { AudioModule } = NativeModules;
class Painting extends React.Component {
    render() {

        return (
            <View>
                <Entity source={{
                obj: asset('painting1/objPainting.obj'),
               mtl: asset('painting1/objPainting.mtl'),
                }} style={{
                transform: [
                    { translate: [-400, -350, -700] },
                    { rotateY: 40 },
                    { scaleX: 30 },
                    { scaleY: 30 },
                    { scaleZ: 30},
                ],
                color: 'white',
                }}      lit={true}>
                </Entity>
            </View>
        )
    }
}

export default Painting


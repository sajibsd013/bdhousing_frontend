import Vue from 'vue';
import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-2';

export default function () {
    Vue.use(TawkMessengerVue, {
        propertyId : '63c7fbb047425128790e5cb4',
        widgetId : '1gn2iubcv',
        customStyle : {
            visibility : {
                dekstop : {
                    xOffset : 15,
                    yOffset : 15,
                    position : 'cr'
                },
    
                mobile : {
                    xOffset : 10,
                    yOffset : 61,
                    // position : 'bl'
                }
            }
        }
    });
}


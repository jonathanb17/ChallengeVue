import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);


// importamaos colores
import colors from 'vuetify/lib/util/colors'

export default new Vuetify({

    theme: {
        themes: {
            light: {
                primary: colors.red.darken1, // #E53935
                secondary: colors.red.lighten4, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5
                success: '#4CAF50',
            },
        },
    },
});

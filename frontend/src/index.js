import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import './fonts/AcuminVariableConcept.otf'
import './fonts/HelveticaNeueLTStd-Bd.otf'
import './fonts/HelveticaNeueLTStd-Hv.otf'
import './fonts/helveticaneueltstd-md.otf'
import './fonts/HelveticaNeueLTStd-Roman.otf'
import './fonts/MyriadPro-Regular.otf'
import './fonts/SummerFontBold.otf'

ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.unregister();

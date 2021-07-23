import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {animations} from './modules/animations';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

animations();

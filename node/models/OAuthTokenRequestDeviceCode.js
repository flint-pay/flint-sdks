import { d1296 as c0 } from '../descriptors/data/65.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9932 as c1, d9933 as c2, d9934 as c3, d9935 as c4 } from '../descriptors/data/461.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1296 as d1296 } from '../descriptors/data/65.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1296;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequestDeviceCode"]:c0(),["SharedCodec1874"]:c1(),["SharedCodec1875"]:c2(),["SharedCodec1876"]:c3(),["SharedCodec1877"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequestDeviceCode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d8237 as c0, d8235 as c1, d8236 as c2, d8234 as c4 } from '../descriptors/data/364.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8132 as c3 } from '../descriptors/data/357.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9546 as c5, d9547 as c6, d9548 as c7, d9549 as c8 } from '../descriptors/data/435.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7849 as c9 } from '../descriptors/data/332.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7849 as d7849 } from '../descriptors/data/332.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7849;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec2"]:c1(),["SharedCodec3"]:c2(),["SharedCodec3128"]:c3(),["SharedCodec3131"]:c4(),["SharedCodec3183"]:c5(),["SharedCodec3184"]:c6(),["SharedCodec3185"]:c7(),["SharedCodec3186"]:c8(),["UpdateLocationRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

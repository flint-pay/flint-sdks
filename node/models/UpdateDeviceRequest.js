import { d8133 as c0, d8134 as c1, d8132 as c2 } from '../descriptors/data/357.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7834 as c3 } from '../descriptors/data/331.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7834 as d7834 } from '../descriptors/data/331.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7834;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3126"]:c0(),["SharedCodec3127"]:c1(),["SharedCodec3128"]:c2(),["UpdateDeviceRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeviceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d8132 as c0 } from '../descriptors/data/357.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8234 as c1 } from '../descriptors/data/364.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7846 as c2 } from '../descriptors/data/332.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7846 as d7846 } from '../descriptors/data/332.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7846;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3128"]:c0(),["SharedCodec3131"]:c1(),["UpdateLicenseKeyPoolRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLicenseKeyPoolRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

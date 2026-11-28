import { d8895 as c0 } from '../descriptors/data/399.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8902 as c1, d8903 as c2, d8904 as c3, d8905 as c4 } from '../descriptors/data/400.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8895 as d8895 } from '../descriptors/data/399.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8895;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryRevocationTarget"]:c0(),["SharedCodec421"]:c1(),["SharedCodec422"]:c2(),["SharedCodec423"]:c3(),["SharedCodec424"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryRevocationTarget(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d10896 as c0, d10903 as c1, d10904 as c2 } from '../descriptors/data/519.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10896 as d10896 } from '../descriptors/data/519.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10896;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RiskPredicateNodeInRequest"]:c0(),["SharedCodec578"]:c1(),["SharedCodec579"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeInRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

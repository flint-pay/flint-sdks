import { d10894 as c0, d10903 as c1 } from '../descriptors/data/519.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10894 as d10894 } from '../descriptors/data/519.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10894;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RiskPredicateNodeComparisonRequest"]:c0(),["SharedCodec578"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeComparisonRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d506 as c0 } from '../descriptors/data/30.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8388 as c1, d8390 as c2 } from '../descriptors/data/372.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d506 as d506 } from '../descriptors/data/30.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d506;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageAllStatesRequest"]:c0(),["SharedCodec719"]:c1(),["SharedCodec721"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerTaxExemptionCoverageAllStatesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

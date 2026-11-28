import { d8553 as c0 } from '../descriptors/data/381.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8388 as c1, d8389 as c2, d8390 as c3, d8391 as c4 } from '../descriptors/data/372.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8553 as d8553 } from '../descriptors/data/381.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8553;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["SharedCodec719"]:c1(),["SharedCodec720"]:c2(),["SharedCodec721"]:c3(),["SharedCodec722"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerTaxExemptionCoverageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

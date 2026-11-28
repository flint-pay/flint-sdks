import { d10101 as c0 } from '../descriptors/data/469.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10101 as d10101 } from '../descriptors/data/469.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10101;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["TaxJurisdictionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxJurisdictionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

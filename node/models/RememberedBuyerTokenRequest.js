import { d1754 as c0 } from '../descriptors/data/87.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1754 as d1754 } from '../descriptors/data/87.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1754;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RememberedBuyerTokenRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRememberedBuyerTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

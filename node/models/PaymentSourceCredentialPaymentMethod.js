import { d1546 as c0 } from '../descriptors/data/79.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1546 as d1546 } from '../descriptors/data/79.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1546;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSourceCredentialPaymentMethod"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSourceCredentialPaymentMethod(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

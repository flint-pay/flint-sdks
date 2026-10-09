import { d500 as c0, d323 as c1, d498 as c2, d499 as c3 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d500 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d500;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteCorrectionRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec171"]:c2(),["SharedCodec172"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteCorrectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

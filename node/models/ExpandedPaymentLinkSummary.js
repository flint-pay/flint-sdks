import { d185 as c0 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d185 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d185;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPaymentLinkSummary"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeExpandedPaymentLinkSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

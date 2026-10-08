import { d132 as c0, d90 as c1, d1989 as c2, d91 as c3 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1989 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1989;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CardDetails"]:c0(),["ExpandedCustomerSummary"]:c1(),["PaymentMethod"]:c2(),["SharedCodec16"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentMethod(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

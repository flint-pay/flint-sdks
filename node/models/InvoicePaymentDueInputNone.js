import { d826 as c0 } from '../descriptors/data/39.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4734 as c1, d4735 as c2 } from '../descriptors/data/207.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d826 as d826 } from '../descriptors/data/39.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d826;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputNone"]:c0(),["SharedCodec775"]:c1(),["SharedCodec776"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputNone(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d1687 as c0, d1690 as c1, d323 as c2, d1688 as c3, d1689 as c4 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1687 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1687;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFee"]:c0(),["InvoiceLateFeePolicy"]:c1(),["MoneyValue"]:c2(),["SharedCodec434"]:c3(),["SharedCodec435"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceLateFee(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d890 as c0 } from '../descriptors/data/45.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6200 as c1 } from '../descriptors/data/284.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d890 as d890 } from '../descriptors/data/45.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d890;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationDaysAfterMonthEndRequest"]:c0(),["SharedCodec954"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationDaysAfterMonthEndRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

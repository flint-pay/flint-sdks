import { d1090 as c0 } from '../descriptors/data/55.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8342 as c1 } from '../descriptors/data/370.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9292 as c2 } from '../descriptors/data/423.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1090 as d1090 } from '../descriptors/data/55.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1090;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputCustomerDefault"]:c0(),["SharedCodec1611"]:c1(),["SharedCodec1618"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputCustomerDefault(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

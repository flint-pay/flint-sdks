import { d9261 as c0 } from '../descriptors/data/421.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8317 as c1, d8318 as c2 } from '../descriptors/data/368.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8319 as c3, d8320 as c4, d8321 as c5, d8322 as c6, d8323 as c7, d8324 as c8, d8325 as c9, d8326 as c10, d8327 as c11 } from '../descriptors/data/369.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9261 as d9261 } from '../descriptors/data/421.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9261;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["SharedCodec1634"]:c1(),["SharedCodec1635"]:c2(),["SharedCodec1636"]:c3(),["SharedCodec1637"]:c4(),["SharedCodec1638"]:c5(),["SharedCodec1639"]:c6(),["SharedCodec1640"]:c7(),["SharedCodec1641"]:c8(),["SharedCodec1642"]:c9(),["SharedCodec1643"]:c10(),["SharedCodec1644"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

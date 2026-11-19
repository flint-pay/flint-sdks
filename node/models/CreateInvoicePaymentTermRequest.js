import { d314 as c0 } from '../descriptors/data/16.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9259 as c1, d9261 as c2 } from '../descriptors/data/421.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c3 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8313 as c4, d8314 as c5, d8315 as c6, d8316 as c7, d8317 as c8, d8318 as c9 } from '../descriptors/data/368.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8319 as c10, d8320 as c11, d8321 as c12, d8322 as c13, d8323 as c14, d8324 as c15, d8325 as c16, d8326 as c17, d8327 as c18 } from '../descriptors/data/369.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d314 as d314 } from '../descriptors/data/16.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d314;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoicePaymentTermRequest"]:c0(),["InvoiceLateFeePolicyRequest"]:c1(),["InvoicePaymentTermCalculationRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec119"]:c4(),["SharedCodec120"]:c5(),["SharedCodec121"]:c6(),["SharedCodec122"]:c7(),["SharedCodec1634"]:c8(),["SharedCodec1635"]:c9(),["SharedCodec1636"]:c10(),["SharedCodec1637"]:c11(),["SharedCodec1638"]:c12(),["SharedCodec1639"]:c13(),["SharedCodec1640"]:c14(),["SharedCodec1641"]:c15(),["SharedCodec1642"]:c16(),["SharedCodec1643"]:c17(),["SharedCodec1644"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

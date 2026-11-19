import { d9261 as c0, d9262 as c17, d9263 as c18 } from '../descriptors/data/421.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c1 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8313 as c2, d8314 as c3, d8315 as c4, d8316 as c5, d8317 as c6, d8318 as c7 } from '../descriptors/data/368.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8319 as c8, d8320 as c9, d8321 as c10, d8322 as c11, d8323 as c12, d8324 as c13, d8325 as c14, d8326 as c15, d8327 as c16 } from '../descriptors/data/369.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7750 as c19 } from '../descriptors/data/326.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7750 as d7750 } from '../descriptors/data/326.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7750;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec119"]:c2(),["SharedCodec120"]:c3(),["SharedCodec121"]:c4(),["SharedCodec122"]:c5(),["SharedCodec1634"]:c6(),["SharedCodec1635"]:c7(),["SharedCodec1636"]:c8(),["SharedCodec1637"]:c9(),["SharedCodec1638"]:c10(),["SharedCodec1639"]:c11(),["SharedCodec1640"]:c12(),["SharedCodec1641"]:c13(),["SharedCodec1642"]:c14(),["SharedCodec1643"]:c15(),["SharedCodec1644"]:c16(),["SharedCodec3097"]:c17(),["SharedCodec3098"]:c18(),["UpdateInvoicePaymentTermRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

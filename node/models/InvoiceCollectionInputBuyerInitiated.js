import { d1022 as c0 } from '../descriptors/data/53.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9385 as c1 } from '../descriptors/data/427.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9278 as c2, d9284 as c4 } from '../descriptors/data/422.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c3 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1022 as d1022 } from '../descriptors/data/53.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1022;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceCollectionInputBuyerInitiated"]:c0(),["InvoicePaymentOptionLimitRequest"]:c1(),["InvoicePaymentPolicyRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec1519"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCollectionInputBuyerInitiated(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

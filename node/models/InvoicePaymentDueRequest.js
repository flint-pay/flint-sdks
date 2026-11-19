import { d9277 as c0 } from '../descriptors/data/422.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8341 as c1, d8342 as c2, d8344 as c3, d8346 as c4 } from '../descriptors/data/370.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9292 as c5, d9293 as c6, d9294 as c7, d9295 as c8, d9296 as c9, d9297 as c10, d9298 as c11 } from '../descriptors/data/423.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9277 as d9277 } from '../descriptors/data/422.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9277;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec1610"]:c1(),["SharedCodec1611"]:c2(),["SharedCodec1613"]:c3(),["SharedCodec1615"]:c4(),["SharedCodec1618"]:c5(),["SharedCodec1619"]:c6(),["SharedCodec1626"]:c7(),["SharedCodec1627"]:c8(),["SharedCodec1628"]:c9(),["SharedCodec1629"]:c10(),["SharedCodec1630"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

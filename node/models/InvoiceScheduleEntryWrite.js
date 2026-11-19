import { d9258 as c0, d9259 as c1, d9260 as c2 } from '../descriptors/data/416.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c3 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8335 as c4, d8336 as c5, d8337 as c6, d8338 as c7, d8339 as c8, d8340 as c9, d8341 as c10 } from '../descriptors/data/365.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9278 as c11, d9279 as c12, d9280 as c13, d9281 as c14, d9282 as c15, d9283 as c16, d9284 as c17, d9285 as c18, d9286 as c19, d9287 as c20, d9288 as c21, d9289 as c22, d9290 as c23, d9291 as c24, d9292 as c25 } from '../descriptors/data/417.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9293 as c26, d9294 as c27, d9295 as c28 } from '../descriptors/data/418.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9260 as d9260 } from '../descriptors/data/416.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9260;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec1665"]:c4(),["SharedCodec1666"]:c5(),["SharedCodec1667"]:c6(),["SharedCodec1668"]:c7(),["SharedCodec1669"]:c8(),["SharedCodec1670"]:c9(),["SharedCodec1671"]:c10(),["SharedCodec1686"]:c11(),["SharedCodec1687"]:c12(),["SharedCodec1688"]:c13(),["SharedCodec1689"]:c14(),["SharedCodec1690"]:c15(),["SharedCodec1695"]:c16(),["SharedCodec1696"]:c17(),["SharedCodec1697"]:c18(),["SharedCodec1698"]:c19(),["SharedCodec1699"]:c20(),["SharedCodec1700"]:c21(),["SharedCodec1701"]:c22(),["SharedCodec1702"]:c23(),["SharedCodec1703"]:c24(),["SharedCodec1704"]:c25(),["SharedCodec1705"]:c26(),["SharedCodec1706"]:c27(),["SharedCodec1707"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

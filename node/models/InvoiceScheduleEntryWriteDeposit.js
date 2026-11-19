import { d9258 as c0, d9259 as c1 } from '../descriptors/data/416.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1150 as c2 } from '../descriptors/data/58.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c3 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8335 as c4, d8336 as c5, d8337 as c6, d8338 as c7, d8339 as c8, d8340 as c9, d8341 as c10 } from '../descriptors/data/365.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9278 as c11, d9279 as c12, d9280 as c13, d9281 as c14, d9282 as c15, d9284 as c16, d9285 as c17, d9286 as c18, d9287 as c19, d9288 as c20 } from '../descriptors/data/417.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1150 as d1150 } from '../descriptors/data/58.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1150;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWriteDeposit"]:c2(),["MoneyValue"]:c3(),["SharedCodec1665"]:c4(),["SharedCodec1666"]:c5(),["SharedCodec1667"]:c6(),["SharedCodec1668"]:c7(),["SharedCodec1669"]:c8(),["SharedCodec1670"]:c9(),["SharedCodec1671"]:c10(),["SharedCodec1686"]:c11(),["SharedCodec1687"]:c12(),["SharedCodec1688"]:c13(),["SharedCodec1689"]:c14(),["SharedCodec1690"]:c15(),["SharedCodec1696"]:c16(),["SharedCodec1697"]:c17(),["SharedCodec1698"]:c18(),["SharedCodec1699"]:c19(),["SharedCodec1700"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWriteDeposit(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

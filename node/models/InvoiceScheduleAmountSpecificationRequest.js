import { d9258 as c0 } from '../descriptors/data/416.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c1 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8335 as c2, d8336 as c3, d8337 as c4, d8338 as c5, d8339 as c6, d8340 as c7, d8341 as c8 } from '../descriptors/data/365.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9258 as d9258 } from '../descriptors/data/416.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9258;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec1665"]:c2(),["SharedCodec1666"]:c3(),["SharedCodec1667"]:c4(),["SharedCodec1668"]:c5(),["SharedCodec1669"]:c6(),["SharedCodec1670"]:c7(),["SharedCodec1671"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleAmountSpecificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

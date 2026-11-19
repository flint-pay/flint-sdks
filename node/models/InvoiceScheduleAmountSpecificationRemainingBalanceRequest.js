import { d1137 as c0 } from '../descriptors/data/57.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c1 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8340 as c2, d8341 as c3 } from '../descriptors/data/365.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1137 as d1137 } from '../descriptors/data/57.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1137;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRemainingBalanceRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec1670"]:c2(),["SharedCodec1671"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleAmountSpecificationRemainingBalanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

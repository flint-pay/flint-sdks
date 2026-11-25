import { d9386 as c0 } from '../descriptors/data/426.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c1 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8459 as c2, d8460 as c3, d8461 as c4, d8462 as c5, d8463 as c6, d8464 as c7, d8465 as c8 } from '../descriptors/data/375.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9386 as d9386 } from '../descriptors/data/426.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9386;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec1696"]:c2(),["SharedCodec1697"]:c3(),["SharedCodec1698"]:c4(),["SharedCodec1699"]:c5(),["SharedCodec1700"]:c6(),["SharedCodec1701"]:c7(),["SharedCodec1702"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleAmountSpecificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

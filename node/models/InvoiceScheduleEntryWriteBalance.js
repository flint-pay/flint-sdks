import { d9386 as c0, d9387 as c1 } from '../descriptors/data/426.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d1153 as c2 } from '../descriptors/data/58.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c3 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8459 as c4, d8460 as c5, d8461 as c6, d8462 as c7, d8463 as c8, d8464 as c9, d8465 as c10 } from '../descriptors/data/375.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9406 as c11, d9407 as c12, d9408 as c13, d9409 as c14, d9410 as c15, d9414 as c16 } from '../descriptors/data/427.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9416 as c17, d9421 as c18, d9422 as c19, d9423 as c20 } from '../descriptors/data/428.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d1153 as d1153 } from '../descriptors/data/58.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1153;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWriteBalance"]:c2(),["MoneyValue"]:c3(),["SharedCodec1696"]:c4(),["SharedCodec1697"]:c5(),["SharedCodec1698"]:c6(),["SharedCodec1699"]:c7(),["SharedCodec1700"]:c8(),["SharedCodec1701"]:c9(),["SharedCodec1702"]:c10(),["SharedCodec1717"]:c11(),["SharedCodec1718"]:c12(),["SharedCodec1719"]:c13(),["SharedCodec1720"]:c14(),["SharedCodec1721"]:c15(),["SharedCodec1729"]:c16(),["SharedCodec1731"]:c17(),["SharedCodec1736"]:c18(),["SharedCodec1737"]:c19(),["SharedCodec1738"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWriteBalance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

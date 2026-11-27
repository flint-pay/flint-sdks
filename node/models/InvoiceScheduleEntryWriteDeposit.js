import { d9386 as c0, d9387 as c1 } from '../descriptors/data/427.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1154 as c2 } from '../descriptors/data/59.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c3 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8459 as c4, d8460 as c5, d8461 as c6, d8462 as c7, d8463 as c8, d8464 as c9, d8465 as c10 } from '../descriptors/data/376.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9406 as c11, d9407 as c12, d9408 as c13, d9409 as c14, d9410 as c15, d9412 as c16, d9413 as c17, d9414 as c18, d9415 as c19 } from '../descriptors/data/428.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9416 as c20 } from '../descriptors/data/429.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1154 as d1154 } from '../descriptors/data/59.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1154;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWriteDeposit"]:c2(),["MoneyValue"]:c3(),["SharedCodec1696"]:c4(),["SharedCodec1697"]:c5(),["SharedCodec1698"]:c6(),["SharedCodec1699"]:c7(),["SharedCodec1700"]:c8(),["SharedCodec1701"]:c9(),["SharedCodec1702"]:c10(),["SharedCodec1717"]:c11(),["SharedCodec1718"]:c12(),["SharedCodec1719"]:c13(),["SharedCodec1720"]:c14(),["SharedCodec1721"]:c15(),["SharedCodec1727"]:c16(),["SharedCodec1728"]:c17(),["SharedCodec1729"]:c18(),["SharedCodec1730"]:c19(),["SharedCodec1731"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWriteDeposit(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

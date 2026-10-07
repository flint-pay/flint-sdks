import { d1724 as c0, d1727 as c1, d1728 as c2, d77 as c3, d1720 as c4, d1721 as c5, d1723 as c6, d1722 as c7, d1725 as c8, d1726 as c9, d41 as c10 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1728 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1728;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDue"]:c1(),["InvoiceScheduleEntry"]:c2(),["MoneyValue"]:c3(),["SharedCodec467"]:c4(),["SharedCodec468"]:c5(),["SharedCodec469"]:c6(),["SharedCodec470"]:c7(),["SharedCodec471"]:c8(),["SharedCodec472"]:c9(),["SharedCodec6"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntry(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

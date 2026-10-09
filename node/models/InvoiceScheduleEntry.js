import { d1722 as c0, d1725 as c1, d1726 as c2, d323 as c3, d1718 as c4, d1719 as c5, d1721 as c6, d1720 as c7, d1723 as c8, d1724 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1726 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1726;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDue"]:c1(),["InvoiceScheduleEntry"]:c2(),["MoneyValue"]:c3(),["SharedCodec447"]:c4(),["SharedCodec448"]:c5(),["SharedCodec449"]:c6(),["SharedCodec450"]:c7(),["SharedCodec451"]:c8(),["SharedCodec452"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntry(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

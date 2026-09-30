import { d1554 as c0, d1557 as c1, d1558 as c2, d69 as c3, d1550 as c4, d1551 as c5, d1553 as c6, d1552 as c7, d1555 as c8, d1556 as c9, d37 as c10 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1558 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1558;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDue"]:c1(),["InvoiceScheduleEntry"]:c2(),["MoneyValue"]:c3(),["SharedCodec417"]:c4(),["SharedCodec418"]:c5(),["SharedCodec419"]:c6(),["SharedCodec420"]:c7(),["SharedCodec421"]:c8(),["SharedCodec422"]:c9(),["SharedCodec5"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntry(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d1554 as c0, d1557 as c1, d1567 as c2, d69 as c3, d1550 as c4, d1551 as c5, d1553 as c6, d1552 as c7, d1555 as c8, d1556 as c9, d1561 as c10, d1559 as c11, d1560 as c12, d1563 as c13, d1562 as c14, d1566 as c15, d1564 as c16, d1565 as c17 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1567 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1567;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDue"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec417"]:c4(),["SharedCodec418"]:c5(),["SharedCodec419"]:c6(),["SharedCodec420"]:c7(),["SharedCodec421"]:c8(),["SharedCodec422"]:c9(),["SharedCodec423"]:c10(),["SharedCodec424"]:c11(),["SharedCodec425"]:c12(),["SharedCodec426"]:c13(),["SharedCodec427"]:c14(),["SharedCodec428"]:c15(),["SharedCodec429"]:c16(),["SharedCodec430"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

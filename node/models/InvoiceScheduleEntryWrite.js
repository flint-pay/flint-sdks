import { d1722 as c0, d1725 as c1, d1735 as c2, d323 as c3, d1718 as c4, d1719 as c5, d1721 as c6, d1720 as c7, d1723 as c8, d1724 as c9, d1729 as c10, d1727 as c11, d1728 as c12, d1731 as c13, d1730 as c14, d1734 as c15, d1732 as c16, d1733 as c17 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1735 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1735;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDue"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec447"]:c4(),["SharedCodec448"]:c5(),["SharedCodec449"]:c6(),["SharedCodec450"]:c7(),["SharedCodec451"]:c8(),["SharedCodec452"]:c9(),["SharedCodec453"]:c10(),["SharedCodec454"]:c11(),["SharedCodec455"]:c12(),["SharedCodec456"]:c13(),["SharedCodec457"]:c14(),["SharedCodec458"]:c15(),["SharedCodec459"]:c16(),["SharedCodec460"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

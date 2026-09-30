import { d1542 as c0, d69 as c1, d1523 as c2, d1524 as c3, d1540 as c4, d1535 as c5, d1534 as c6, d1536 as c7, d1537 as c8, d1538 as c9, d1539 as c10, d1541 as c11 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1542 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1542;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTerm"]:c0(),["MoneyValue"]:c1(),["SharedCodec407"]:c2(),["SharedCodec408"]:c3(),["SharedCodec409"]:c4(),["SharedCodec410"]:c5(),["SharedCodec411"]:c6(),["SharedCodec412"]:c7(),["SharedCodec413"]:c8(),["SharedCodec414"]:c9(),["SharedCodec415"]:c10(),["SharedCodec416"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTerm(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

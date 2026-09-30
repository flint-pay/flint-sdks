import { d1525 as c0, d1543 as c1, d1546 as c2, d69 as c3, d1523 as c4, d1524 as c5, d1535 as c6, d1534 as c7, d1536 as c8, d1537 as c9, d1538 as c10, d1539 as c11 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1546 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1546;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["InvoicePaymentTermCalculation"]:c1(),["InvoicePaymentTermsSnapshot"]:c2(),["MoneyValue"]:c3(),["SharedCodec407"]:c4(),["SharedCodec408"]:c5(),["SharedCodec410"]:c6(),["SharedCodec411"]:c7(),["SharedCodec412"]:c8(),["SharedCodec413"]:c9(),["SharedCodec414"]:c10(),["SharedCodec415"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermsSnapshot(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

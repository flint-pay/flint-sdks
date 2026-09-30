import { d1542 as c0, d1545 as c1, d69 as c2, d1646 as c3, d1645 as c4, d1959 as c5, d1960 as c6, d1523 as c7, d1524 as c8, d1540 as c9, d1535 as c10, d1534 as c11, d1536 as c12, d1537 as c13, d1538 as c14, d1539 as c15, d1541 as c16 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1545 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1545;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTerm"]:c0(),["InvoicePaymentTermResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec407"]:c7(),["SharedCodec408"]:c8(),["SharedCodec409"]:c9(),["SharedCodec410"]:c10(),["SharedCodec411"]:c11(),["SharedCodec412"]:c12(),["SharedCodec413"]:c13(),["SharedCodec414"]:c14(),["SharedCodec415"]:c15(),["SharedCodec416"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

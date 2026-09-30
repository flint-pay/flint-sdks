import { d1543 as c0, d1535 as c1, d1534 as c2, d1536 as c3, d1537 as c4, d1538 as c5, d1539 as c6 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1543 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1543;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculation"]:c0(),["SharedCodec410"]:c1(),["SharedCodec411"]:c2(),["SharedCodec412"]:c3(),["SharedCodec413"]:c4(),["SharedCodec414"]:c5(),["SharedCodec415"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

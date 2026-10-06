import { d1669 as c0, d1687 as c1, d77 as c2, d1667 as c3, d1668 as c4, d1679 as c5, d1678 as c6, d1680 as c7, d1681 as c8, d1682 as c9, d1683 as c10, d2421 as c11, d2422 as c12 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2422 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2422;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["InvoicePaymentTermCalculation"]:c1(),["MoneyValue"]:c2(),["SharedCodec454"]:c3(),["SharedCodec455"]:c4(),["SharedCodec457"]:c5(),["SharedCodec458"]:c6(),["SharedCodec459"]:c7(),["SharedCodec460"]:c8(),["SharedCodec461"]:c9(),["SharedCodec462"]:c10(),["SharedCodec648"]:c11(),["UpdateInvoicePaymentTermRequest"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

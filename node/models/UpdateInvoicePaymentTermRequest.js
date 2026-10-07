import { d1695 as c0, d1713 as c1, d77 as c2, d1693 as c3, d1694 as c4, d1705 as c5, d1704 as c6, d1706 as c7, d1707 as c8, d1708 as c9, d1709 as c10, d2448 as c11, d2449 as c12 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2449 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2449;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["InvoicePaymentTermCalculation"]:c1(),["MoneyValue"]:c2(),["SharedCodec457"]:c3(),["SharedCodec458"]:c4(),["SharedCodec460"]:c5(),["SharedCodec461"]:c6(),["SharedCodec462"]:c7(),["SharedCodec463"]:c8(),["SharedCodec464"]:c9(),["SharedCodec465"]:c10(),["SharedCodec651"]:c11(),["UpdateInvoicePaymentTermRequest"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

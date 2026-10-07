import { d1712 as c0, d77 as c1, d1693 as c2, d1694 as c3, d1710 as c4, d1705 as c5, d1704 as c6, d1706 as c7, d1707 as c8, d1708 as c9, d1709 as c10, d1711 as c11 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1712 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1712;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTerm"]:c0(),["MoneyValue"]:c1(),["SharedCodec457"]:c2(),["SharedCodec458"]:c3(),["SharedCodec459"]:c4(),["SharedCodec460"]:c5(),["SharedCodec461"]:c6(),["SharedCodec462"]:c7(),["SharedCodec463"]:c8(),["SharedCodec464"]:c9(),["SharedCodec465"]:c10(),["SharedCodec466"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTerm(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

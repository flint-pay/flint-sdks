import { d1712 as c0, d1714 as c1, d77 as c2, d1824 as c3, d1823 as c4, d2158 as c5, d2159 as c6, d14 as c7, d1693 as c8, d1694 as c9, d1710 as c10, d1705 as c11, d1704 as c12, d1706 as c13, d1707 as c14, d1708 as c15, d1709 as c16, d1711 as c17, d1822 as c18 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1714 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1714;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTerm"]:c0(),["InvoicePaymentTermListResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec457"]:c8(),["SharedCodec458"]:c9(),["SharedCodec459"]:c10(),["SharedCodec460"]:c11(),["SharedCodec461"]:c12(),["SharedCodec462"]:c13(),["SharedCodec463"]:c14(),["SharedCodec464"]:c15(),["SharedCodec465"]:c16(),["SharedCodec466"]:c17(),["SharedCodec488"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

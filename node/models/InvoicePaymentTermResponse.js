import { d1711 as c0, d1714 as c1, d77 as c2, d1823 as c3, d1822 as c4, d2157 as c5, d2158 as c6, d14 as c7, d1692 as c8, d1693 as c9, d1709 as c10, d1704 as c11, d1703 as c12, d1705 as c13, d1706 as c14, d1707 as c15, d1708 as c16, d1710 as c17, d1821 as c18 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1714 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1714;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTerm"]:c0(),["InvoicePaymentTermResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec456"]:c8(),["SharedCodec457"]:c9(),["SharedCodec458"]:c10(),["SharedCodec459"]:c11(),["SharedCodec460"]:c12(),["SharedCodec461"]:c13(),["SharedCodec462"]:c14(),["SharedCodec463"]:c15(),["SharedCodec464"]:c16(),["SharedCodec465"]:c17(),["SharedCodec487"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d1694 as c0, d1712 as c1, d1715 as c2, d77 as c3, d1692 as c4, d1693 as c5, d1704 as c6, d1703 as c7, d1705 as c8, d1706 as c9, d1707 as c10, d1708 as c11 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1715 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1715;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["InvoicePaymentTermCalculation"]:c1(),["InvoicePaymentTermsSnapshot"]:c2(),["MoneyValue"]:c3(),["SharedCodec456"]:c4(),["SharedCodec457"]:c5(),["SharedCodec459"]:c6(),["SharedCodec460"]:c7(),["SharedCodec461"]:c8(),["SharedCodec462"]:c9(),["SharedCodec463"]:c10(),["SharedCodec464"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermsSnapshot(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

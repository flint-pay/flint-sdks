import { d1694 as c0, d1712 as c1, d77 as c2, d1692 as c3, d1693 as c4, d1704 as c5, d1703 as c6, d1705 as c7, d1706 as c8, d1707 as c9, d1708 as c10, d2447 as c11, d2448 as c12 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2448 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2448;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["InvoicePaymentTermCalculation"]:c1(),["MoneyValue"]:c2(),["SharedCodec456"]:c3(),["SharedCodec457"]:c4(),["SharedCodec459"]:c5(),["SharedCodec460"]:c6(),["SharedCodec461"]:c7(),["SharedCodec462"]:c8(),["SharedCodec463"]:c9(),["SharedCodec464"]:c10(),["SharedCodec650"]:c11(),["UpdateInvoicePaymentTermRequest"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

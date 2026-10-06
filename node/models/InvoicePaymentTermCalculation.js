import { d1712 as c0, d1704 as c1, d1703 as c2, d1705 as c3, d1706 as c4, d1707 as c5, d1708 as c6 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1712 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1712;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculation"]:c0(),["SharedCodec459"]:c1(),["SharedCodec460"]:c2(),["SharedCodec461"]:c3(),["SharedCodec462"]:c4(),["SharedCodec463"]:c5(),["SharedCodec464"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

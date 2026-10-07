import { d77 as c0, d1880 as c1, d1986 as c2, d1979 as c3, d1978 as c4, d1981 as c5, d1980 as c6, d1983 as c7, d1982 as c8, d1984 as c9 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1986 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1986;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItemPatchRequest"]:c2(),["SharedCodec515"]:c3(),["SharedCodec516"]:c4(),["SharedCodec517"]:c5(),["SharedCodec518"]:c6(),["SharedCodec519"]:c7(),["SharedCodec520"]:c8(),["SharedCodec521"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

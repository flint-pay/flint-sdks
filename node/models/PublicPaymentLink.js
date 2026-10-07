import { d192 as c0, d212 as c1, d932 as c2, d1758 as c3, d77 as c4, d1880 as c5, d1974 as c6, d1977 as c7, d1985 as c8, d2088 as c9, d1979 as c10, d1978 as c11, d1981 as c12, d1980 as c13, d1983 as c14, d1982 as c15, d1984 as c16, d41 as c17, d2090 as c18 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2088 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2088;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutPaymentConfig"]:c1(),["Image"]:c2(),["LegalSettings"]:c3(),["MoneyValue"]:c4(),["OrderLineItemTax"]:c5(),["PaymentLinkCustomField"]:c6(),["PaymentLinkEventConfig"]:c7(),["PaymentLinkLineItem"]:c8(),["PublicPaymentLink"]:c9(),["SharedCodec515"]:c10(),["SharedCodec516"]:c11(),["SharedCodec517"]:c12(),["SharedCodec518"]:c13(),["SharedCodec519"]:c14(),["SharedCodec520"]:c15(),["SharedCodec521"]:c16(),["SharedCodec6"]:c17(),["ThemeConfig"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicPaymentLink(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

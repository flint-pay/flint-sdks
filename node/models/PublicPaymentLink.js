import { d187 as c0, d211 as c1, d926 as c2, d1751 as c3, d77 as c4, d1873 as c5, d1967 as c6, d1970 as c7, d1978 as c8, d2081 as c9, d1972 as c10, d1971 as c11, d1974 as c12, d1973 as c13, d1976 as c14, d1975 as c15, d1977 as c16, d41 as c17, d2083 as c18 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d2081 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2081;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutPaymentConfig"]:c1(),["Image"]:c2(),["LegalSettings"]:c3(),["MoneyValue"]:c4(),["OrderLineItemTax"]:c5(),["PaymentLinkCustomField"]:c6(),["PaymentLinkEventConfig"]:c7(),["PaymentLinkLineItem"]:c8(),["PublicPaymentLink"]:c9(),["SharedCodec510"]:c10(),["SharedCodec511"]:c11(),["SharedCodec512"]:c12(),["SharedCodec513"]:c13(),["SharedCodec514"]:c14(),["SharedCodec515"]:c15(),["SharedCodec516"]:c16(),["SharedCodec6"]:c17(),["ThemeConfig"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicPaymentLink(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

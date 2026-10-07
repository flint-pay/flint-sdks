import { d187 as c0, d211 as c1, d926 as c2, d1752 as c3, d77 as c4, d1874 as c5, d1968 as c6, d1971 as c7, d1979 as c8, d2082 as c9, d1973 as c10, d1972 as c11, d1975 as c12, d1974 as c13, d1977 as c14, d1976 as c15, d1978 as c16, d41 as c17, d2084 as c18 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2082 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2082;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutPaymentConfig"]:c1(),["Image"]:c2(),["LegalSettings"]:c3(),["MoneyValue"]:c4(),["OrderLineItemTax"]:c5(),["PaymentLinkCustomField"]:c6(),["PaymentLinkEventConfig"]:c7(),["PaymentLinkLineItem"]:c8(),["PublicPaymentLink"]:c9(),["SharedCodec511"]:c10(),["SharedCodec512"]:c11(),["SharedCodec513"]:c12(),["SharedCodec514"]:c13(),["SharedCodec515"]:c14(),["SharedCodec516"]:c15(),["SharedCodec517"]:c16(),["SharedCodec6"]:c17(),["ThemeConfig"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicPaymentLink(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

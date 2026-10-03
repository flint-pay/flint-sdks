import { d181 as c0, d205 as c1, d905 as c2, d1719 as c3, d74 as c4, d1834 as c5, d1927 as c6, d1930 as c7, d1938 as c8, d2042 as c9, d1932 as c10, d38 as c11, d1931 as c12, d1934 as c13, d1933 as c14, d1936 as c15, d1935 as c16, d1937 as c17, d2044 as c18 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2042 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2042;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutPaymentConfig"]:c1(),["Image"]:c2(),["LegalSettings"]:c3(),["MoneyValue"]:c4(),["OrderLineItemTax"]:c5(),["PaymentLinkCustomField"]:c6(),["PaymentLinkEventConfig"]:c7(),["PaymentLinkLineItem"]:c8(),["PublicPaymentLink"]:c9(),["SharedCodec499"]:c10(),["SharedCodec5"]:c11(),["SharedCodec500"]:c12(),["SharedCodec501"]:c13(),["SharedCodec502"]:c14(),["SharedCodec503"]:c15(),["SharedCodec504"]:c16(),["SharedCodec505"]:c17(),["ThemeConfig"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicPaymentLink(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d148 as c0, d169 as c1, d868 as c2, d1705 as c3, d314 as c4, d1830 as c5, d1925 as c6, d1928 as c7, d1936 as c8, d2036 as c9, d1930 as c10, d1929 as c11, d1932 as c12, d1931 as c13, d1934 as c14, d1933 as c15, d1935 as c16, d2332 as c17 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2036 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2036;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutPaymentConfig"]:c1(),["Image"]:c2(),["LegalSettings"]:c3(),["MoneyValue"]:c4(),["OrderLineItemTax"]:c5(),["PaymentLinkCustomField"]:c6(),["PaymentLinkEventConfig"]:c7(),["PaymentLinkLineItem"]:c8(),["PublicPaymentLink"]:c9(),["SharedCodec473"]:c10(),["SharedCodec474"]:c11(),["SharedCodec475"]:c12(),["SharedCodec476"]:c13(),["SharedCodec477"]:c14(),["SharedCodec478"]:c15(),["SharedCodec479"]:c16(),["ThemeConfig"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicPaymentLink(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

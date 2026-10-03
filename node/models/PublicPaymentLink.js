import { d183 as c0, d207 as c1, d907 as c2, d1721 as c3, d74 as c4, d1836 as c5, d1930 as c6, d1933 as c7, d1941 as c8, d2045 as c9, d1935 as c10, d38 as c11, d1934 as c12, d1937 as c13, d1936 as c14, d1939 as c15, d1938 as c16, d1940 as c17, d2047 as c18 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2045 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2045;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutPaymentConfig"]:c1(),["Image"]:c2(),["LegalSettings"]:c3(),["MoneyValue"]:c4(),["OrderLineItemTax"]:c5(),["PaymentLinkCustomField"]:c6(),["PaymentLinkEventConfig"]:c7(),["PaymentLinkLineItem"]:c8(),["PublicPaymentLink"]:c9(),["SharedCodec499"]:c10(),["SharedCodec5"]:c11(),["SharedCodec500"]:c12(),["SharedCodec501"]:c13(),["SharedCodec502"]:c14(),["SharedCodec503"]:c15(),["SharedCodec504"]:c16(),["SharedCodec505"]:c17(),["ThemeConfig"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicPaymentLink(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

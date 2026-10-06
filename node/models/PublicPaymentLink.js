import { d184 as c0, d208 as c1, d912 as c2, d1726 as c3, d77 as c4, d1847 as c5, d1941 as c6, d1944 as c7, d1952 as c8, d2055 as c9, d1946 as c10, d1945 as c11, d1948 as c12, d1947 as c13, d1950 as c14, d1949 as c15, d1951 as c16, d41 as c17, d2057 as c18 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2055 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2055;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutPaymentConfig"]:c1(),["Image"]:c2(),["LegalSettings"]:c3(),["MoneyValue"]:c4(),["OrderLineItemTax"]:c5(),["PaymentLinkCustomField"]:c6(),["PaymentLinkEventConfig"]:c7(),["PaymentLinkLineItem"]:c8(),["PublicPaymentLink"]:c9(),["SharedCodec508"]:c10(),["SharedCodec509"]:c11(),["SharedCodec510"]:c12(),["SharedCodec511"]:c13(),["SharedCodec512"]:c14(),["SharedCodec513"]:c15(),["SharedCodec514"]:c16(),["SharedCodec6"]:c17(),["ThemeConfig"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicPaymentLink(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

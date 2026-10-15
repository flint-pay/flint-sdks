import { d152 as c0, d174 as c1, d894 as c2, d1753 as c3, d323 as c4, d1880 as c5, d1983 as c6, d1987 as c7, d1997 as c8, d2102 as c9, d1991 as c10, d1990 as c11, d1993 as c12, d1992 as c13, d1995 as c14, d1994 as c15, d1996 as c16, d2432 as c17 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2102 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2102;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutPaymentConfig"]:c1(),["Image"]:c2(),["LegalSettings"]:c3(),["MoneyValue"]:c4(),["OrderLineItemTax"]:c5(),["PaymentLinkCustomField"]:c6(),["PaymentLinkEventConfig"]:c7(),["PaymentLinkLineItem"]:c8(),["PublicPaymentLink"]:c9(),["SharedCodec496"]:c10(),["SharedCodec497"]:c11(),["SharedCodec498"]:c12(),["SharedCodec499"]:c13(),["SharedCodec500"]:c14(),["SharedCodec501"]:c15(),["SharedCodec502"]:c16(),["ThemeConfig"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicPaymentLink(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d152 as c0, d174 as c1, d889 as c2, d1750 as c3, d323 as c4, d1875 as c5, d1972 as c6, d1975 as c7, d1983 as c8, d2085 as c9, d1977 as c10, d1976 as c11, d1979 as c12, d1978 as c13, d1981 as c14, d1980 as c15, d1982 as c16, d2416 as c17 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2085 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2085;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutPaymentConfig"]:c1(),["Image"]:c2(),["LegalSettings"]:c3(),["MoneyValue"]:c4(),["OrderLineItemTax"]:c5(),["PaymentLinkCustomField"]:c6(),["PaymentLinkEventConfig"]:c7(),["PaymentLinkLineItem"]:c8(),["PublicPaymentLink"]:c9(),["SharedCodec491"]:c10(),["SharedCodec492"]:c11(),["SharedCodec493"]:c12(),["SharedCodec494"]:c13(),["SharedCodec495"]:c14(),["SharedCodec496"]:c15(),["SharedCodec497"]:c16(),["ThemeConfig"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicPaymentLink(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

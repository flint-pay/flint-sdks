import { d4666 as c0, d4667 as c1, d4668 as c3, d4669 as c4 } from '../descriptors/data/203.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4584 as c2 } from '../descriptors/data/197.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d265 as c5 } from '../descriptors/data/14.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4408 as c6, d4409 as c7 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6364 as c8 } from '../descriptors/data/298.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6890 as c9 } from '../descriptors/data/327.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c10 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4603 as c11 } from '../descriptors/data/198.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6232 as c12, d6233 as c13, d6237 as c14, d6238 as c15, d6241 as c17 } from '../descriptors/data/289.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1058 as c16 } from '../descriptors/data/50.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6248 as c18 } from '../descriptors/data/290.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6264 as c19, d6265 as c20, d6266 as c21 } from '../descriptors/data/291.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6267 as c22 } from '../descriptors/data/292.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6285 as c23, d6286 as c24, d6287 as c28 } from '../descriptors/data/293.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5508 as c25, d5509 as c26, d5510 as c27 } from '../descriptors/data/247.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6295 as c29, d6296 as c30, d6298 as c31, d6299 as c32, d6300 as c33, d6301 as c34 } from '../descriptors/data/294.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6302 as c35 } from '../descriptors/data/295.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d265 as d265 } from '../descriptors/data/14.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d265;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutRedirectsRequest"]:c2(),["CheckoutTaxConfigRequest"]:c3(),["CheckoutTipConfigRequest"]:c4(),["CreatePaymentLinkRequest"]:c5(),["ImageInputFile"]:c6(),["ImageInputSourceURL"]:c7(),["ImageRequest"]:c8(),["InventoryRoutingSourceRequest"]:c9(),["MoneyValue"]:c10(),["OrderLineItemTax"]:c11(),["PaymentLinkCustomFieldRequest"]:c12(),["PaymentLinkCustomTextConfig"]:c13(),["PaymentLinkEventConfigRequest"]:c14(),["PaymentLinkLegalConfig"]:c15(),["PaymentLinkLineItemRequest"]:c16(),["PaymentLinkPaymentConfig"]:c17(),["PaymentLinkThemeConfig"]:c18(),["SharedCodec1003"]:c19(),["SharedCodec1004"]:c20(),["SharedCodec1005"]:c21(),["SharedCodec1006"]:c22(),["SharedCodec285"]:c23(),["SharedCodec286"]:c24(),["SharedCodec672"]:c25(),["SharedCodec673"]:c26(),["SharedCodec674"]:c27(),["SharedCodec983"]:c28(),["SharedCodec991"]:c29(),["SharedCodec992"]:c30(),["SharedCodec994"]:c31(),["SharedCodec995"]:c32(),["SharedCodec996"]:c33(),["SharedCodec997"]:c34(),["SharedCodec998"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

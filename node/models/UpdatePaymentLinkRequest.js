import { d4666 as c0, d4667 as c1, d4668 as c2, d4669 as c3 } from '../descriptors/data/203.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4408 as c4, d4409 as c5, d4400 as c20, d4401 as c21, d4399 as c22, d4410 as c25 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6890 as c6 } from '../descriptors/data/327.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c7 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4603 as c8 } from '../descriptors/data/198.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1045 as c9 } from '../descriptors/data/48.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6234 as c10, d6236 as c11, d6239 as c12, d6242 as c14, d6245 as c15 } from '../descriptors/data/289.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1057 as c13 } from '../descriptors/data/50.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6249 as c16 } from '../descriptors/data/290.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6261 as c17, d6262 as c18, d6263 as c19 } from '../descriptors/data/291.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4777 as c23 } from '../descriptors/data/209.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5933 as c24 } from '../descriptors/data/272.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6268 as c26, d6269 as c27 } from '../descriptors/data/292.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4555 as c28 } from '../descriptors/data/196.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5508 as c29, d5509 as c30, d5510 as c31 } from '../descriptors/data/247.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6287 as c32 } from '../descriptors/data/293.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6295 as c33, d6296 as c34, d6298 as c35, d6299 as c36, d6300 as c37, d6301 as c38 } from '../descriptors/data/294.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6302 as c39, d6303 as c40 } from '../descriptors/data/295.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4183 as c41 } from '../descriptors/data/174.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4183 as d4183 } from '../descriptors/data/174.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4183;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutTaxConfigRequest"]:c2(),["CheckoutTipConfigRequest"]:c3(),["ImageInputFile"]:c4(),["ImageInputSourceURL"]:c5(),["InventoryRoutingSourceRequest"]:c6(),["MoneyValue"]:c7(),["OrderLineItemTax"]:c8(),["PaymentLinkCustomFieldPatchRequest"]:c9(),["PaymentLinkCustomTextPatchRequest"]:c10(),["PaymentLinkEventConfigPatchRequest"]:c11(),["PaymentLinkLegalPatchRequest"]:c12(),["PaymentLinkLineItemPatchRequest"]:c13(),["PaymentLinkPaymentPatchRequest"]:c14(),["PaymentLinkRedirectsPatchRequest"]:c15(),["PaymentLinkThemePatchRequest"]:c16(),["SharedCodec1000"]:c17(),["SharedCodec1001"]:c18(),["SharedCodec1002"]:c19(),["SharedCodec1348"]:c20(),["SharedCodec1349"]:c21(),["SharedCodec1350"]:c22(),["SharedCodec1354"]:c23(),["SharedCodec1394"]:c24(),["SharedCodec1395"]:c25(),["SharedCodec1410"]:c26(),["SharedCodec1411"]:c27(),["SharedCodec62"]:c28(),["SharedCodec672"]:c29(),["SharedCodec673"]:c30(),["SharedCodec674"]:c31(),["SharedCodec983"]:c32(),["SharedCodec991"]:c33(),["SharedCodec992"]:c34(),["SharedCodec994"]:c35(),["SharedCodec995"]:c36(),["SharedCodec996"]:c37(),["SharedCodec997"]:c38(),["SharedCodec998"]:c39(),["SharedCodec999"]:c40(),["UpdatePaymentLinkRequest"]:c41()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

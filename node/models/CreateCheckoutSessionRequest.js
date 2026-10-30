import { d4510 as c0, d4508 as c16, d4509 as c17 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4666 as c1, d4667 as c6, d4668 as c10, d4669 as c11 } from '../descriptors/data/203.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4433 as c2, d4434 as c3, d4435 as c4, d4436 as c5, d4437 as c7, d4439 as c9, d4448 as c23, d4449 as c24, d4450 as c25, d4451 as c26, d4452 as c27, d4453 as c28 } from '../descriptors/data/189.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4584 as c8 } from '../descriptors/data/197.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d174 as c12 } from '../descriptors/data/7.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c13 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c14 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4603 as c15, d4590 as c20, d4591 as c21, d4592 as c22 } from '../descriptors/data/198.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4646 as c18, d4647 as c19 } from '../descriptors/data/200.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4454 as c29, d4455 as c30, d4456 as c31, d4457 as c32, d4458 as c33, d4459 as c34 } from '../descriptors/data/190.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4491 as c35 } from '../descriptors/data/192.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d174 as d174 } from '../descriptors/data/7.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d174;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutQuickPayItemRequest"]:c7(),["CheckoutRedirectsRequest"]:c8(),["CheckoutSubscriptionTermsRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionRequest"]:c12(),["MetadataRequest"]:c13(),["MoneyValue"]:c14(),["OrderLineItemTax"]:c15(),["SharedCodec0"]:c16(),["SharedCodec1"]:c17(),["SharedCodec101"]:c18(),["SharedCodec102"]:c19(),["SharedCodec136"]:c20(),["SharedCodec137"]:c21(),["SharedCodec138"]:c22(),["SharedCodec139"]:c23(),["SharedCodec140"]:c24(),["SharedCodec141"]:c25(),["SharedCodec142"]:c26(),["SharedCodec143"]:c27(),["SharedCodec144"]:c28(),["SharedCodec145"]:c29(),["SharedCodec146"]:c30(),["SharedCodec147"]:c31(),["SharedCodec148"]:c32(),["SharedCodec149"]:c33(),["SharedCodec150"]:c34(),["ThemeConfigRequest"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

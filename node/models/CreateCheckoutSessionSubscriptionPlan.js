import { d4510 as c0, d4508 as c14, d4509 as c15 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4666 as c1, d4667 as c6, d4668 as c9, d4669 as c10 } from '../descriptors/data/203.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4433 as c2, d4434 as c3, d4435 as c4, d4436 as c5, d4439 as c8, d4448 as c21, d4449 as c22, d4450 as c23 } from '../descriptors/data/189.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4584 as c7 } from '../descriptors/data/197.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d176 as c11 } from '../descriptors/data/7.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c12 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c13 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4646 as c16, d4647 as c17 } from '../descriptors/data/200.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4590 as c18, d4591 as c19, d4592 as c20 } from '../descriptors/data/198.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4458 as c24, d4459 as c25 } from '../descriptors/data/190.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4491 as c26 } from '../descriptors/data/192.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d176 as d176 } from '../descriptors/data/7.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d176;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutRedirectsRequest"]:c7(),["CheckoutSubscriptionTermsRequest"]:c8(),["CheckoutTaxConfigRequest"]:c9(),["CheckoutTipConfigRequest"]:c10(),["CreateCheckoutSessionSubscriptionPlan"]:c11(),["MetadataRequest"]:c12(),["MoneyValue"]:c13(),["SharedCodec0"]:c14(),["SharedCodec1"]:c15(),["SharedCodec101"]:c16(),["SharedCodec102"]:c17(),["SharedCodec136"]:c18(),["SharedCodec137"]:c19(),["SharedCodec138"]:c20(),["SharedCodec139"]:c21(),["SharedCodec140"]:c22(),["SharedCodec141"]:c23(),["SharedCodec149"]:c24(),["SharedCodec150"]:c25(),["ThemeConfigRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionSubscriptionPlan(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

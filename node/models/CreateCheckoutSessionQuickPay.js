import { d4510 as c0, d4508 as c15, d4509 as c16 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4666 as c1, d4667 as c6, d4668 as c9, d4669 as c10 } from '../descriptors/data/203.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4433 as c2, d4434 as c3, d4435 as c4, d4436 as c5, d4437 as c7, d4448 as c20, d4449 as c21, d4450 as c22, d4453 as c23 } from '../descriptors/data/189.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4584 as c8 } from '../descriptors/data/197.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d173 as c11 } from '../descriptors/data/7.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c12 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c13 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4603 as c14, d4590 as c17, d4591 as c18, d4592 as c19 } from '../descriptors/data/198.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4454 as c24 } from '../descriptors/data/190.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4491 as c25 } from '../descriptors/data/192.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d173 as d173 } from '../descriptors/data/7.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d173;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutQuickPayItemRequest"]:c7(),["CheckoutRedirectsRequest"]:c8(),["CheckoutTaxConfigRequest"]:c9(),["CheckoutTipConfigRequest"]:c10(),["CreateCheckoutSessionQuickPay"]:c11(),["MetadataRequest"]:c12(),["MoneyValue"]:c13(),["OrderLineItemTax"]:c14(),["SharedCodec0"]:c15(),["SharedCodec1"]:c16(),["SharedCodec136"]:c17(),["SharedCodec137"]:c18(),["SharedCodec138"]:c19(),["SharedCodec139"]:c20(),["SharedCodec140"]:c21(),["SharedCodec141"]:c22(),["SharedCodec144"]:c23(),["SharedCodec145"]:c24(),["ThemeConfigRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionQuickPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

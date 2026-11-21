import { d8273 as c0, d8274 as c1, d8267 as c2, d8272 as c20 } from '../descriptors/data/365.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8276 as c3, d8277 as c4, d8278 as c5, d8279 as c12 } from '../descriptors/data/366.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d358 as c6 } from '../descriptors/data/20.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8066 as c7, d8067 as c8, d8073 as c9 } from '../descriptors/data/353.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8709 as c10, d8706 as c21, d8707 as c22, d8708 as c23 } from '../descriptors/data/388.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c11 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10197 as c13, d10198 as c14, d10202 as c15, d10203 as c16 } from '../descriptors/data/474.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10207 as c17, d10208 as c18, d10216 as c19 } from '../descriptors/data/475.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10233 as c24, d10238 as c25, d10239 as c26 } from '../descriptors/data/477.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10242 as c27, d10243 as c28, d10244 as c29, d10245 as c30, d10246 as c31 } from '../descriptors/data/478.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10251 as c32, d10252 as c33, d10253 as c34, d10254 as c35 } from '../descriptors/data/479.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10270 as c36, d10271 as c37, d10272 as c38 } from '../descriptors/data/480.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d358 as d358 } from '../descriptors/data/20.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d358;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutRedirectsRequest"]:c2(),["CheckoutTaxCalculationRequest"]:c3(),["CheckoutTaxConfigRequest"]:c4(),["CheckoutTipConfigRequest"]:c5(),["CreatePaymentLinkRequest"]:c6(),["ImageInputFile"]:c7(),["ImageInputSourceURL"]:c8(),["ImageRequest"]:c9(),["InventoryRoutingSourceRequest"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTaxRequest"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomTextConfig"]:c14(),["PaymentLinkEventConfigRequest"]:c15(),["PaymentLinkLegalConfig"]:c16(),["PaymentLinkLineItemRequest"]:c17(),["PaymentLinkPaymentConfig"]:c18(),["PaymentLinkThemeConfig"]:c19(),["PlatformFeeMoney"]:c20(),["SharedCodec1460"]:c21(),["SharedCodec1461"]:c22(),["SharedCodec1462"]:c23(),["SharedCodec2148"]:c24(),["SharedCodec2153"]:c25(),["SharedCodec2154"]:c26(),["SharedCodec2172"]:c27(),["SharedCodec2173"]:c28(),["SharedCodec2174"]:c29(),["SharedCodec2175"]:c30(),["SharedCodec2176"]:c31(),["SharedCodec2183"]:c32(),["SharedCodec2184"]:c33(),["SharedCodec2185"]:c34(),["SharedCodec2186"]:c35(),["SharedCodec533"]:c36(),["SharedCodec534"]:c37(),["SharedCodec535"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d8114 as c0, d8112 as c21, d8113 as c24 } from '../descriptors/data/353.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8228 as c1, d8229 as c6, d8222 as c7, d8230 as c8, d8231 as c9, d8232 as c10, d8233 as c11, d8227 as c16, d8226 as c17, d8216 as c18, d8217 as c19, d8218 as c20, d8224 as c22, d8225 as c23, d8219 as c27, d8220 as c28, d8221 as c29 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8043 as c2, d8044 as c3, d8045 as c4, d8046 as c5 } from '../descriptors/data/348.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8050 as c12 } from '../descriptors/data/349.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d253 as c13 } from '../descriptors/data/12.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8014 as c14 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c15 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8235 as c25, d8236 as c26, d8237 as c35 } from '../descriptors/data/360.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8067 as c30, d8068 as c31, d8069 as c32 } from '../descriptors/data/350.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8080 as c33, d8081 as c34 } from '../descriptors/data/351.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8093 as c36 } from '../descriptors/data/352.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d253 as d253 } from '../descriptors/data/12.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d253;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutRedirectsRequest"]:c7(),["CheckoutSubscriptionTermsRequest"]:c8(),["CheckoutTaxCalculationRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionDiscount"]:c12(),["CreateCheckoutSessionSubscriptionPlan"]:c13(),["MetadataRequest"]:c14(),["MoneyValue"]:c15(),["PlatformFeeMoney"]:c16(),["PlatformFeeRequest"]:c17(),["PromotionRefInputPromotionCode"]:c18(),["PromotionRefInputPromotionID"]:c19(),["PromotionRefRequest"]:c20(),["SharedCodec2"]:c21(),["SharedCodec232"]:c22(),["SharedCodec233"]:c23(),["SharedCodec3"]:c24(),["SharedCodec313"]:c25(),["SharedCodec314"]:c26(),["SharedCodec347"]:c27(),["SharedCodec348"]:c28(),["SharedCodec349"]:c29(),["SharedCodec350"]:c30(),["SharedCodec351"]:c31(),["SharedCodec352"]:c32(),["SharedCodec362"]:c33(),["SharedCodec363"]:c34(),["SubscriptionPlanChangeLineItemRequest"]:c35(),["ThemeConfigRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionSubscriptionPlan(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d8146 as c0, d8144 as c21, d8145 as c24 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8261 as c1, d8262 as c6, d8255 as c7, d8263 as c8, d8264 as c9, d8265 as c10, d8266 as c11, d8260 as c16, d8259 as c17, d8249 as c18, d8250 as c19, d8251 as c20, d8257 as c22, d8258 as c23, d8268 as c25, d8269 as c26, d8252 as c27, d8253 as c28, d8254 as c29, d8270 as c35 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8075 as c2, d8076 as c3, d8077 as c4, d8078 as c5, d8082 as c12 } from '../descriptors/data/353.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d255 as c13 } from '../descriptors/data/12.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c14 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c15 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8099 as c30, d8100 as c31, d8101 as c32 } from '../descriptors/data/354.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8112 as c33, d8113 as c34 } from '../descriptors/data/355.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8125 as c36 } from '../descriptors/data/356.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d255 as d255 } from '../descriptors/data/12.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d255;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutRedirectsRequest"]:c7(),["CheckoutSubscriptionTermsRequest"]:c8(),["CheckoutTaxCalculationRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionDiscount"]:c12(),["CreateCheckoutSessionSubscriptionPlan"]:c13(),["MetadataRequest"]:c14(),["MoneyValue"]:c15(),["PlatformFeeMoney"]:c16(),["PlatformFeeRequest"]:c17(),["PromotionRefInputPromotionCode"]:c18(),["PromotionRefInputPromotionID"]:c19(),["PromotionRefRequest"]:c20(),["SharedCodec2"]:c21(),["SharedCodec232"]:c22(),["SharedCodec233"]:c23(),["SharedCodec3"]:c24(),["SharedCodec314"]:c25(),["SharedCodec315"]:c26(),["SharedCodec348"]:c27(),["SharedCodec349"]:c28(),["SharedCodec350"]:c29(),["SharedCodec351"]:c30(),["SharedCodec352"]:c31(),["SharedCodec353"]:c32(),["SharedCodec363"]:c33(),["SharedCodec364"]:c34(),["SubscriptionPlanChangeLineItemRequest"]:c35(),["ThemeConfigRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionSubscriptionPlan(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d8237 as c0, d8235 as c22, d8236 as c26 } from '../descriptors/data/363.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8353 as c1, d8354 as c6, d8347 as c7, d8352 as c16, d8351 as c17, d8343 as c18, d8340 as c19, d8341 as c20, d8342 as c21, d8349 as c23, d8350 as c24, d8344 as c29, d8345 as c30, d8346 as c31 } from '../descriptors/data/369.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8160 as c2, d8161 as c3, d8162 as c4, d8163 as c5, d8168 as c12 } from '../descriptors/data/358.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8355 as c8, d8358 as c9, d8356 as c10, d8357 as c11, d8360 as c27, d8361 as c28, d8362 as c39 } from '../descriptors/data/370.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d256 as c13 } from '../descriptors/data/12.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8131 as c14 } from '../descriptors/data/356.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c15 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8224 as c25, d8214 as c40 } from '../descriptors/data/362.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8186 as c32, d8187 as c33, d8188 as c34, d8191 as c35, d8192 as c36 } from '../descriptors/data/360.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8201 as c37, d8202 as c38 } from '../descriptors/data/361.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d256 as d256 } from '../descriptors/data/12.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d256;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutRedirectsRequest"]:c7(),["CheckoutSubscriptionTermsRequest"]:c8(),["CheckoutTaxCalculationRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionDiscount"]:c12(),["CreateCheckoutSessionSubscriptionPlan"]:c13(),["MetadataRequest"]:c14(),["MoneyValue"]:c15(),["PlatformFeeMoney"]:c16(),["PlatformFeeRequest"]:c17(),["PlatformFeeRuleRequest"]:c18(),["PromotionRefInputPromotionCode"]:c19(),["PromotionRefInputPromotionID"]:c20(),["PromotionRefRequest"]:c21(),["SharedCodec2"]:c22(),["SharedCodec235"]:c23(),["SharedCodec236"]:c24(),["SharedCodec2393"]:c25(),["SharedCodec3"]:c26(),["SharedCodec319"]:c27(),["SharedCodec320"]:c28(),["SharedCodec355"]:c29(),["SharedCodec356"]:c30(),["SharedCodec357"]:c31(),["SharedCodec358"]:c32(),["SharedCodec359"]:c33(),["SharedCodec360"]:c34(),["SharedCodec363"]:c35(),["SharedCodec364"]:c36(),["SharedCodec372"]:c37(),["SharedCodec373"]:c38(),["SubscriptionPlanChangeLineItemRequest"]:c39(),["ThemeConfigRequest"]:c40()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionSubscriptionPlan(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

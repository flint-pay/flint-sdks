import { d8237 as c0, d8235 as c23, d8236 as c25 } from '../descriptors/data/363.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8353 as c1, d8354 as c6, d8347 as c8, d8352 as c17, d8351 as c18, d8343 as c19, d8340 as c20, d8341 as c21, d8342 as c22, d8344 as c26, d8345 as c27, d8346 as c28 } from '../descriptors/data/369.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8160 as c2, d8161 as c3, d8162 as c4, d8163 as c5, d8164 as c7, d8168 as c12 } from '../descriptors/data/358.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8358 as c9, d8356 as c10, d8357 as c11, d8359 as c16 } from '../descriptors/data/370.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d252 as c13 } from '../descriptors/data/12.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8131 as c14 } from '../descriptors/data/356.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c15 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8224 as c24, d8214 as c36 } from '../descriptors/data/362.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8186 as c29, d8187 as c30, d8188 as c31, d8191 as c32, d8192 as c33, d8196 as c34, d8197 as c35 } from '../descriptors/data/360.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d252 as d252 } from '../descriptors/data/12.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d252;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutQuickPayItemRequest"]:c7(),["CheckoutRedirectsRequest"]:c8(),["CheckoutTaxCalculationRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionDiscount"]:c12(),["CreateCheckoutSessionQuickPay"]:c13(),["MetadataRequest"]:c14(),["MoneyValue"]:c15(),["OrderLineItemTaxRequest"]:c16(),["PlatformFeeMoney"]:c17(),["PlatformFeeRequest"]:c18(),["PlatformFeeRuleRequest"]:c19(),["PromotionRefInputPromotionCode"]:c20(),["PromotionRefInputPromotionID"]:c21(),["PromotionRefRequest"]:c22(),["SharedCodec2"]:c23(),["SharedCodec2393"]:c24(),["SharedCodec3"]:c25(),["SharedCodec355"]:c26(),["SharedCodec356"]:c27(),["SharedCodec357"]:c28(),["SharedCodec358"]:c29(),["SharedCodec359"]:c30(),["SharedCodec360"]:c31(),["SharedCodec363"]:c32(),["SharedCodec364"]:c33(),["SharedCodec367"]:c34(),["SharedCodec368"]:c35(),["ThemeConfigRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionQuickPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

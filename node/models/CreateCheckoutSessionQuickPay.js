import { d8158 as c0, d8156 as c22, d8157 as c23 } from '../descriptors/data/359.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8273 as c1, d8274 as c6, d8267 as c8, d8272 as c17, d8271 as c18, d8261 as c19, d8262 as c20, d8263 as c21, d8264 as c24, d8265 as c25, d8266 as c26 } from '../descriptors/data/365.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8085 as c2, d8086 as c3, d8087 as c4, d8088 as c5, d8089 as c7, d8093 as c12 } from '../descriptors/data/354.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8276 as c9, d8277 as c10, d8278 as c11, d8279 as c16 } from '../descriptors/data/366.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d252 as c13 } from '../descriptors/data/11.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8056 as c14 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c15 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8111 as c27, d8112 as c28, d8113 as c29, d8119 as c30, d8120 as c31 } from '../descriptors/data/356.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8137 as c32 } from '../descriptors/data/358.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d252 as d252 } from '../descriptors/data/11.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d252;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutQuickPayItemRequest"]:c7(),["CheckoutRedirectsRequest"]:c8(),["CheckoutTaxCalculationRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionDiscount"]:c12(),["CreateCheckoutSessionQuickPay"]:c13(),["MetadataRequest"]:c14(),["MoneyValue"]:c15(),["OrderLineItemTaxRequest"]:c16(),["PlatformFeeMoney"]:c17(),["PlatformFeeRequest"]:c18(),["PromotionRefInputPromotionCode"]:c19(),["PromotionRefInputPromotionID"]:c20(),["PromotionRefRequest"]:c21(),["SharedCodec2"]:c22(),["SharedCodec3"]:c23(),["SharedCodec350"]:c24(),["SharedCodec351"]:c25(),["SharedCodec352"]:c26(),["SharedCodec353"]:c27(),["SharedCodec354"]:c28(),["SharedCodec355"]:c29(),["SharedCodec360"]:c30(),["SharedCodec361"]:c31(),["ThemeConfigRequest"]:c32()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionQuickPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

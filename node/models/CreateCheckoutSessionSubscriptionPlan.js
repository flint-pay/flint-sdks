import { d8158 as c0, d8156 as c21, d8157 as c24 } from '../descriptors/data/359.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8273 as c1, d8274 as c6, d8267 as c7, d8275 as c8, d8272 as c16, d8271 as c17, d8261 as c18, d8262 as c19, d8263 as c20, d8269 as c22, d8270 as c23, d8264 as c27, d8265 as c28, d8266 as c29 } from '../descriptors/data/365.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8085 as c2, d8086 as c3, d8087 as c4, d8088 as c5, d8093 as c12 } from '../descriptors/data/354.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8276 as c9, d8277 as c10, d8278 as c11, d8280 as c25, d8281 as c26, d8282 as c35 } from '../descriptors/data/366.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d256 as c13 } from '../descriptors/data/12.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8056 as c14 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c15 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8111 as c30, d8112 as c31, d8113 as c32 } from '../descriptors/data/356.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8124 as c33, d8125 as c34 } from '../descriptors/data/357.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8137 as c36 } from '../descriptors/data/358.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d256 as d256 } from '../descriptors/data/12.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d256;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutRedirectsRequest"]:c7(),["CheckoutSubscriptionTermsRequest"]:c8(),["CheckoutTaxCalculationRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionDiscount"]:c12(),["CreateCheckoutSessionSubscriptionPlan"]:c13(),["MetadataRequest"]:c14(),["MoneyValue"]:c15(),["PlatformFeeMoney"]:c16(),["PlatformFeeRequest"]:c17(),["PromotionRefInputPromotionCode"]:c18(),["PromotionRefInputPromotionID"]:c19(),["PromotionRefRequest"]:c20(),["SharedCodec2"]:c21(),["SharedCodec233"]:c22(),["SharedCodec234"]:c23(),["SharedCodec3"]:c24(),["SharedCodec316"]:c25(),["SharedCodec317"]:c26(),["SharedCodec350"]:c27(),["SharedCodec351"]:c28(),["SharedCodec352"]:c29(),["SharedCodec353"]:c30(),["SharedCodec354"]:c31(),["SharedCodec355"]:c32(),["SharedCodec365"]:c33(),["SharedCodec366"]:c34(),["SubscriptionPlanChangeLineItemRequest"]:c35(),["ThemeConfigRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionSubscriptionPlan(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

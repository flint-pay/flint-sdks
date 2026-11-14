import { d6021 as c0, d6019 as c20, d6020 as c21 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6131 as c1, d6132 as c6, d6126 as c7, d6133 as c9, d6134 as c10, d6135 as c11, d6130 as c16, d6122 as c19, d6128 as c22, d6129 as c23, d6137 as c24, d6138 as c25, d6123 as c26, d6124 as c27, d6125 as c28 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5948 as c2, d5949 as c3, d5950 as c4, d5951 as c5 } from '../descriptors/data/269.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5955 as c8, d5956 as c12 } from '../descriptors/data/270.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d216 as c13 } from '../descriptors/data/10.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c14 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c15 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6120 as c17, d6121 as c18 } from '../descriptors/data/280.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5973 as c29, d5974 as c30, d5975 as c31 } from '../descriptors/data/271.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5985 as c32, d5986 as c33 } from '../descriptors/data/272.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5999 as c34 } from '../descriptors/data/273.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d216 as d216 } from '../descriptors/data/10.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d216;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutRedirectsRequest"]:c7(),["CheckoutSubscriptionTermsRequest"]:c8(),["CheckoutTaxCalculationRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionDiscount"]:c12(),["CreateCheckoutSessionSubscriptionPlan"]:c13(),["MetadataRequest"]:c14(),["MoneyValue"]:c15(),["PlatformFeeRequest"]:c16(),["PromotionRefInputPromotionCode"]:c17(),["PromotionRefInputPromotionID"]:c18(),["PromotionRefRequest"]:c19(),["SharedCodec0"]:c20(),["SharedCodec1"]:c21(),["SharedCodec150"]:c22(),["SharedCodec151"]:c23(),["SharedCodec174"]:c24(),["SharedCodec175"]:c25(),["SharedCodec201"]:c26(),["SharedCodec202"]:c27(),["SharedCodec203"]:c28(),["SharedCodec204"]:c29(),["SharedCodec205"]:c30(),["SharedCodec206"]:c31(),["SharedCodec216"]:c32(),["SharedCodec217"]:c33(),["ThemeConfigRequest"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionSubscriptionPlan(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

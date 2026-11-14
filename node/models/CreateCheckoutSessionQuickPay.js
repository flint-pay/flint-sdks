import { d6021 as c0, d6019 as c21, d6020 as c22 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6131 as c1, d6132 as c6, d6126 as c8, d6133 as c9, d6134 as c10, d6135 as c11, d6136 as c16, d6130 as c17, d6122 as c20, d6123 as c23, d6124 as c24, d6125 as c25 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5948 as c2, d5949 as c3, d5950 as c4, d5951 as c5, d5952 as c7 } from '../descriptors/data/269.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5956 as c12 } from '../descriptors/data/270.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d212 as c13 } from '../descriptors/data/9.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c14 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c15 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6120 as c18, d6121 as c19 } from '../descriptors/data/280.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5973 as c26, d5974 as c27, d5975 as c28 } from '../descriptors/data/271.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5980 as c29, d5981 as c30 } from '../descriptors/data/272.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5999 as c31 } from '../descriptors/data/273.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d212 as d212 } from '../descriptors/data/9.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d212;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutQuickPayItemRequest"]:c7(),["CheckoutRedirectsRequest"]:c8(),["CheckoutTaxCalculationRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionDiscount"]:c12(),["CreateCheckoutSessionQuickPay"]:c13(),["MetadataRequest"]:c14(),["MoneyValue"]:c15(),["OrderLineItemTaxRequest"]:c16(),["PlatformFeeRequest"]:c17(),["PromotionRefInputPromotionCode"]:c18(),["PromotionRefInputPromotionID"]:c19(),["PromotionRefRequest"]:c20(),["SharedCodec0"]:c21(),["SharedCodec1"]:c22(),["SharedCodec201"]:c23(),["SharedCodec202"]:c24(),["SharedCodec203"]:c25(),["SharedCodec204"]:c26(),["SharedCodec205"]:c27(),["SharedCodec206"]:c28(),["SharedCodec211"]:c29(),["SharedCodec212"]:c30(),["ThemeConfigRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionQuickPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

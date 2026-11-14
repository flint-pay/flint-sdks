import { d6020 as c0, d6018 as c13, d6019 as c14 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6130 as c1, d6131 as c6, d6125 as c7, d6134 as c8, d6129 as c12, d6123 as c16, d6124 as c17 } from '../descriptors/data/278.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5947 as c2, d5948 as c3, d5949 as c4, d5950 as c5 } from '../descriptors/data/266.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d210 as c9 } from '../descriptors/data/9.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5918 as c10 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c11 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6122 as c15 } from '../descriptors/data/277.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5972 as c18, d5973 as c19, d5974 as c20, d5977 as c21, d5978 as c22 } from '../descriptors/data/268.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5998 as c23 } from '../descriptors/data/270.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d210 as d210 } from '../descriptors/data/9.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d210;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutRedirectsRequest"]:c7(),["CheckoutTipConfigRequest"]:c8(),["CreateCheckoutSessionOrder"]:c9(),["MetadataRequest"]:c10(),["MoneyValue"]:c11(),["PlatformFeeRequest"]:c12(),["SharedCodec0"]:c13(),["SharedCodec1"]:c14(),["SharedCodec203"]:c15(),["SharedCodec204"]:c16(),["SharedCodec205"]:c17(),["SharedCodec206"]:c18(),["SharedCodec207"]:c19(),["SharedCodec208"]:c20(),["SharedCodec211"]:c21(),["SharedCodec212"]:c22(),["ThemeConfigRequest"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionOrder(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

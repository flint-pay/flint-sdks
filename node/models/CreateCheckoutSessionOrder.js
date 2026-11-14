import { d6021 as c0, d6019 as c13, d6020 as c14 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6131 as c1, d6132 as c6, d6126 as c7, d6135 as c8, d6130 as c12, d6123 as c15, d6124 as c16, d6125 as c17 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5948 as c2, d5949 as c3, d5950 as c4, d5951 as c5 } from '../descriptors/data/269.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d210 as c9 } from '../descriptors/data/9.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c10 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c11 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5973 as c18, d5974 as c19, d5975 as c20, d5978 as c21, d5979 as c22 } from '../descriptors/data/271.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5999 as c23 } from '../descriptors/data/273.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d210 as d210 } from '../descriptors/data/9.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d210;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutRedirectsRequest"]:c7(),["CheckoutTipConfigRequest"]:c8(),["CreateCheckoutSessionOrder"]:c9(),["MetadataRequest"]:c10(),["MoneyValue"]:c11(),["PlatformFeeRequest"]:c12(),["SharedCodec0"]:c13(),["SharedCodec1"]:c14(),["SharedCodec201"]:c15(),["SharedCodec202"]:c16(),["SharedCodec203"]:c17(),["SharedCodec204"]:c18(),["SharedCodec205"]:c19(),["SharedCodec206"]:c20(),["SharedCodec209"]:c21(),["SharedCodec210"]:c22(),["ThemeConfigRequest"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionOrder(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

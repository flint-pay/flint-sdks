import { d8237 as c0, d8235 as c15, d8236 as c17 } from '../descriptors/data/364.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8353 as c1, d8354 as c6, d8347 as c7, d8352 as c12, d8351 as c13, d8343 as c14, d8344 as c18, d8345 as c19, d8346 as c20 } from '../descriptors/data/370.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8160 as c2, d8161 as c3, d8162 as c4, d8163 as c5 } from '../descriptors/data/359.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8357 as c8 } from '../descriptors/data/371.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d250 as c9 } from '../descriptors/data/11.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8131 as c10 } from '../descriptors/data/357.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c11 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8224 as c16, d8214 as c28 } from '../descriptors/data/363.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8186 as c21, d8187 as c22, d8188 as c23, d8191 as c24, d8192 as c25, d8194 as c26, d8195 as c27 } from '../descriptors/data/361.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d250 as d250 } from '../descriptors/data/11.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d250;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutRedirectsRequest"]:c7(),["CheckoutTipConfigRequest"]:c8(),["CreateCheckoutSessionOrder"]:c9(),["MetadataRequest"]:c10(),["MoneyValue"]:c11(),["PlatformFeeMoney"]:c12(),["PlatformFeeRequest"]:c13(),["PlatformFeeRuleRequest"]:c14(),["SharedCodec2"]:c15(),["SharedCodec2393"]:c16(),["SharedCodec3"]:c17(),["SharedCodec355"]:c18(),["SharedCodec356"]:c19(),["SharedCodec357"]:c20(),["SharedCodec358"]:c21(),["SharedCodec359"]:c22(),["SharedCodec360"]:c23(),["SharedCodec363"]:c24(),["SharedCodec364"]:c25(),["SharedCodec365"]:c26(),["SharedCodec366"]:c27(),["ThemeConfigRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionOrder(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

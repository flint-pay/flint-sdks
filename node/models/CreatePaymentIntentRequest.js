import { d357 as c0 } from '../descriptors/data/21.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8131 as c1 } from '../descriptors/data/357.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c2 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10218 as c3, d10219 as c4 } from '../descriptors/data/476.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10103 as c5 } from '../descriptors/data/469.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8352 as c6, d8351 as c7 } from '../descriptors/data/370.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9122 as c8 } from '../descriptors/data/414.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10260 as c9, d10261 as c10, d10262 as c11, d10263 as c12, d10264 as c13, d10265 as c14, d10266 as c15, d10267 as c16, d10268 as c17, d10269 as c18, d10270 as c19, d10271 as c20, d10272 as c21, d10273 as c22, d10274 as c23, d10275 as c24 } from '../descriptors/data/479.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d357 as d357 } from '../descriptors/data/21.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d357;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderPaymentSourceCardSelection"]:c3(),["OrderPaymentSourceSelection"]:c4(),["PaymentSplitRequest"]:c5(),["PlatformFeeMoney"]:c6(),["PlatformFeeRequest"]:c7(),["SharedCodec219"]:c8(),["SharedCodec524"]:c9(),["SharedCodec525"]:c10(),["SharedCodec526"]:c11(),["SharedCodec527"]:c12(),["SharedCodec528"]:c13(),["SharedCodec529"]:c14(),["SharedCodec530"]:c15(),["SharedCodec531"]:c16(),["SharedCodec532"]:c17(),["SharedCodec533"]:c18(),["SharedCodec534"]:c19(),["SharedCodec535"]:c20(),["SharedCodec536"]:c21(),["SharedCodec537"]:c22(),["SharedCodec538"]:c23(),["SharedCodec539"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

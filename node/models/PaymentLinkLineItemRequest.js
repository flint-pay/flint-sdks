import { d8003 as c0 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8359 as c1 } from '../descriptors/data/371.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10292 as c2 } from '../descriptors/data/481.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8352 as c3 } from '../descriptors/data/370.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10308 as c4, d10313 as c5 } from '../descriptors/data/482.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10314 as c6, d10317 as c7, d10318 as c8, d10319 as c9, d10320 as c10, d10321 as c11 } from '../descriptors/data/483.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10326 as c12, d10327 as c13, d10328 as c14 } from '../descriptors/data/484.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10329 as c15 } from '../descriptors/data/485.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10292 as d10292 } from '../descriptors/data/481.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10292;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemRequest"]:c2(),["PlatformFeeMoney"]:c3(),["SharedCodec2173"]:c4(),["SharedCodec2178"]:c5(),["SharedCodec2179"]:c6(),["SharedCodec2197"]:c7(),["SharedCodec2198"]:c8(),["SharedCodec2199"]:c9(),["SharedCodec2200"]:c10(),["SharedCodec2201"]:c11(),["SharedCodec2208"]:c12(),["SharedCodec2209"]:c13(),["SharedCodec2210"]:c14(),["SharedCodec2211"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

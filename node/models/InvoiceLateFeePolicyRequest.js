import { d9365 as c0 } from '../descriptors/data/426.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c1 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8416 as c2, d8417 as c3, d8418 as c4, d8419 as c5 } from '../descriptors/data/374.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9365 as d9365 } from '../descriptors/data/426.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9365;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicyRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec120"]:c2(),["SharedCodec121"]:c3(),["SharedCodec122"]:c4(),["SharedCodec123"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceLateFeePolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

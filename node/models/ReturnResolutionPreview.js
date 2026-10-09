import { d323 as c0, d2168 as c1, d2253 as c2, d2262 as c3, d2266 as c4, d2269 as c5, d2270 as c6 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2269 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2269;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnActor"]:c1(),["ReturnReplacementLineItem"]:c2(),["ReturnResolutionAdjustment"]:c3(),["ReturnResolutionLineItem"]:c4(),["ReturnResolutionPreview"]:c5(),["ReturnResolutionWarning"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnResolutionPreview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

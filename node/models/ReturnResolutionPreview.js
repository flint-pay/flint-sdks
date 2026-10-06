import { d77 as c0, d2163 as c1, d2249 as c2, d2258 as c3, d2262 as c4, d2265 as c5, d2266 as c6 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2265 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2265;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnActor"]:c1(),["ReturnReplacementLineItem"]:c2(),["ReturnResolutionAdjustment"]:c3(),["ReturnResolutionLineItem"]:c4(),["ReturnResolutionPreview"]:c5(),["ReturnResolutionWarning"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnResolutionPreview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

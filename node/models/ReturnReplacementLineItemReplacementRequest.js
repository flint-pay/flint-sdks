import { d77 as c0, d2255 as c1, d1975 as c2, d2251 as c3, d2250 as c4, d2253 as c5, d2252 as c6, d2254 as c7 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2255 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2255;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnReplacementLineItemReplacementRequest"]:c1(),["SharedCodec515"]:c2(),["SharedCodec592"]:c3(),["SharedCodec593"]:c4(),["SharedCodec594"]:c5(),["SharedCodec595"]:c6(),["SharedCodec596"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReplacementLineItemReplacementRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

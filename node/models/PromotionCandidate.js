import { d77 as c0, d2060 as c1, d2064 as c2, d2065 as c3 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2060 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2060;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionCandidate"]:c1(),["PromotionCombinesWith"]:c2(),["PromotionExclusivity"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCandidate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

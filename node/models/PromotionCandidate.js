import { d323 as c0, d2077 as c1, d2082 as c2, d2083 as c3 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2077 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2077;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionCandidate"]:c1(),["PromotionCombinesWith"]:c2(),["PromotionExclusivity"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCandidate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

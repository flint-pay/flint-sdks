import { d323 as c0, d2109 as c1, d2110 as c2, d2111 as c3 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2109 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2109;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublicResolvedModifierGroup"]:c1(),["PublicResolvedModifierOption"]:c2(),["PublicResolvedTextModifier"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicResolvedModifierGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

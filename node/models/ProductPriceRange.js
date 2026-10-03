import { d74 as c0, d2006 as c1 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2006 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2006;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ProductPriceRange"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductPriceRange(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d7585 as c0 } from '../descriptors/data/360.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c1 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7585 as d7585 } from '../descriptors/data/360.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7585;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ModifierOverrideRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierOverrideRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

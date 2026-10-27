import { d4487 as c0 } from '../descriptors/data/197.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4487 as d4487 } from '../descriptors/data/197.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4487;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateModifierRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateModifierRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

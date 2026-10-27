import { d3647 as c0, d3650 as c1, d3651 as c2 } from '../descriptors/data/150.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3043 as c3 } from '../descriptors/data/118.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3647 as d3647 } from '../descriptors/data/150.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3647;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderLineItemModifierRequest"]:c0(),["SharedCodec170"]:c1(),["SharedCodec171"]:c2(),["TextModifierRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineItemModifierRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

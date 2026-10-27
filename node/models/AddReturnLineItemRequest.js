import { d7 as c0 } from '../descriptors/data/0.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4422 as c1 } from '../descriptors/data/193.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d7 as d7 } from '../descriptors/data/0.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddReturnLineItemRequest"]:c0(),["ReturnLineItemRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

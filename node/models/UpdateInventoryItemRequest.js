import { d4040 as c0 } from '../descriptors/data/171.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2447 as c1 } from '../descriptors/data/98.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2447 as d2447 } from '../descriptors/data/98.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2447;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1191"]:c0(),["UpdateInventoryItemRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

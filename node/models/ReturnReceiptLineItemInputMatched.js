import { d924 as c0 } from '../descriptors/data/41.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4942 as c1 } from '../descriptors/data/225.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4982 as c2 } from '../descriptors/data/228.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d924 as d924 } from '../descriptors/data/41.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d924;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemInputMatched"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec1099"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemInputMatched(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

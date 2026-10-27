import { d4973 as c0 } from '../descriptors/data/227.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4942 as c1 } from '../descriptors/data/225.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4981 as c2, d4982 as c3, d4983 as c4, d4984 as c5, d4985 as c6, d4986 as c7 } from '../descriptors/data/228.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4973 as d4973 } from '../descriptors/data/227.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4973;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec1098"]:c2(),["SharedCodec1099"]:c3(),["SharedCodec1100"]:c4(),["SharedCodec1101"]:c5(),["SharedCodec1102"]:c6(),["SharedCodec1103"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

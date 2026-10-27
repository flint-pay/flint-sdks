import { d4206 as c0, d4207 as c1, d4208 as c2 } from '../descriptors/data/179.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4206 as d4206 } from '../descriptors/data/179.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4206;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDeliveryDestinationAddressRequest"]:c0(),["SharedCodec973"]:c1(),["SharedCodec974"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDeliveryDestinationAddressRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

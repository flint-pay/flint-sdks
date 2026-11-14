import { d1336 as c0 } from '../descriptors/data/64.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6264 as c1, d6265 as c2 } from '../descriptors/data/288.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1336 as d1336 } from '../descriptors/data/64.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1336;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResolveCustomerDeletionRequest"]:c0(),["SharedCodec1431"]:c1(),["SharedCodec1432"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolveCustomerDeletionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

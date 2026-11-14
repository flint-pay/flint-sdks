import { d8352 as c0 } from '../descriptors/data/409.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8374 as c1, d8375 as c2, d8376 as c3, d8377 as c4 } from '../descriptors/data/411.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8352 as d8352 } from '../descriptors/data/409.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8352;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeRequest"]:c0(),["SharedCodec1496"]:c1(),["SharedCodec1497"]:c2(),["SharedCodec1498"]:c3(),["SharedCodec1499"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

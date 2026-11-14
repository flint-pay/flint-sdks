import { d148 as c0 } from '../descriptors/data/6.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6128 as c1, d6129 as c2 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d148 as d148 } from '../descriptors/data/6.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d148;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ChangeMeSubscriptionPlanRequest"]:c0(),["SharedCodec150"]:c1(),["SharedCodec151"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeChangeMeSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

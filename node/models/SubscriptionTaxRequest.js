import { d8750 as c0, d8751 as c1 } from '../descriptors/data/432.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8766 as c2 } from '../descriptors/data/433.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8766 as d8766 } from '../descriptors/data/433.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8766;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1642"]:c0(),["SharedCodec1643"]:c1(),["SubscriptionTaxRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

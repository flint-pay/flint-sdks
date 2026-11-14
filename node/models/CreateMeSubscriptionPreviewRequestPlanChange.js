import { d291 as c0 } from '../descriptors/data/16.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6128 as c1, d6129 as c2 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d291 as d291 } from '../descriptors/data/16.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d291;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateMeSubscriptionPreviewRequestPlanChange"]:c0(),["SharedCodec150"]:c1(),["SharedCodec151"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequestPlanChange(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d292 as c0 } from '../descriptors/data/16.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7546 as c1 } from '../descriptors/data/362.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d292 as d292 } from '../descriptors/data/16.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d292;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateMeSubscriptionPreviewRequestQuantityChange"]:c0(),["SubscriptionQuantityChangeLineItemRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequestQuantityChange(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d150 as c0 } from '../descriptors/data/7.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6128 as c1, d6129 as c2 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8763 as c3 } from '../descriptors/data/433.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d150 as d150 } from '../descriptors/data/7.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d150;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ChangeSubscriptionPlanRequest"]:c0(),["SharedCodec150"]:c1(),["SharedCodec151"]:c2(),["SubscriptionPlanChangeLineItemRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeChangeSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

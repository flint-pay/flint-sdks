import { d9690 as c0 } from '../descriptors/data/442.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9690 as d9690 } from '../descriptors/data/442.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9690;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionQuantityChangeLineItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionQuantityChangeLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

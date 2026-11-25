import { d1757 as c0 } from '../descriptors/data/87.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d1757 as d1757 } from '../descriptors/data/87.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1757;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RemoveSubscriptionPromotionsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRemoveSubscriptionPromotionsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

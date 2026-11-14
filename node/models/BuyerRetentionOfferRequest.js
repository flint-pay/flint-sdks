import { d8596 as c0 } from '../descriptors/data/424.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8596 as d8596 } from '../descriptors/data/424.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8596;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerRetentionOfferRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerRetentionOfferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d7046 as c0 } from '../descriptors/data/332.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d275 as c1 } from '../descriptors/data/14.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c2 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d275 as d275 } from '../descriptors/data/14.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d275;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryBackorderPolicyRequest"]:c0(),["CreateInventoryItemRequest"]:c1(),["MetadataRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

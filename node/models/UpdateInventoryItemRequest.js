import { d7047 as c0 } from '../descriptors/data/332.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5920 as c1 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6018 as c2 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5655 as c3 } from '../descriptors/data/248.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5655 as d5655 } from '../descriptors/data/248.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5655;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryBackorderPolicyRequest"]:c0(),["SharedCodec1692"]:c1(),["SharedCodec1695"]:c2(),["UpdateInventoryItemRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

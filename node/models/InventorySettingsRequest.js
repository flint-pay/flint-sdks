import { d8601 as c0 } from '../descriptors/data/424.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d790 as c1 } from '../descriptors/data/42.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6550 as c2, d6551 as c3, d6552 as c4 } from '../descriptors/data/303.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8636 as c5, d8637 as c6 } from '../descriptors/data/425.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d790 as d790 } from '../descriptors/data/42.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d790;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryOriginPolicyRequest"]:c0(),["InventorySettingsRequest"]:c1(),["SharedCodec836"]:c2(),["SharedCodec837"]:c3(),["SharedCodec838"]:c4(),["SharedCodec841"]:c5(),["SharedCodec842"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventorySettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

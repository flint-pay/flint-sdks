import { d7017 as c0, d7016 as c1, d7013 as c2, d7014 as c3, d7015 as c4 } from '../descriptors/data/331.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7017 as d7017 } from '../descriptors/data/331.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7017;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["SharedCodec304"]:c1(),["SharedCodec792"]:c2(),["SharedCodec793"]:c3(),["SharedCodec794"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventorySourceSystemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

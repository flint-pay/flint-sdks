import { d5920 as c0 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6018 as c1 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5697 as c2 } from '../descriptors/data/251.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5697 as d5697 } from '../descriptors/data/251.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5697;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1692"]:c0(),["SharedCodec1695"]:c1(),["UpdateReturnRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

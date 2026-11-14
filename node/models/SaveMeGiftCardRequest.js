import { d1434 as c0 } from '../descriptors/data/68.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7360 as c1, d7361 as c2, d7362 as c3, d7363 as c4 } from '../descriptors/data/353.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7364 as c5 } from '../descriptors/data/354.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1434 as d1434 } from '../descriptors/data/68.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1434;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequest"]:c0(),["SharedCodec1540"]:c1(),["SharedCodec1541"]:c2(),["SharedCodec1542"]:c3(),["SharedCodec1543"]:c4(),["SharedCodec1544"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

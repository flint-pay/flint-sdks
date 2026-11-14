import { d6021 as c0, d6019 as c1, d6020 as c2 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6021 as d6021 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6021;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddressRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

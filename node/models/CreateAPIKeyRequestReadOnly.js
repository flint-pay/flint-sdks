import { d200 as c0 } from '../descriptors/data/8.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5871 as c1 } from '../descriptors/data/264.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5816 as c2 } from '../descriptors/data/261.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d200 as d200 } from '../descriptors/data/8.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d200;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateAPIKeyRequestReadOnly"]:c0(),["SharedCodec192"]:c1(),["SharedCodec3"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateAPIKeyRequestReadOnly(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

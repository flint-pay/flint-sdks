import { d5857 as c0, d5858 as c1 } from '../descriptors/data/263.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5871 as c2, d5872 as c4, d5873 as c5 } from '../descriptors/data/264.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5816 as c3 } from '../descriptors/data/261.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5635 as c6 } from '../descriptors/data/246.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5635 as d5635 } from '../descriptors/data/246.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5635;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1688"]:c0(),["SharedCodec1689"]:c1(),["SharedCodec192"]:c2(),["SharedCodec3"]:c3(),["SharedCodec424"]:c4(),["SharedCodec425"]:c5(),["UpdateAPIKeyRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

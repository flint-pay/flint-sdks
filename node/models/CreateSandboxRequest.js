import { d368 as c0 } from '../descriptors/data/23.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5871 as c1, d5872 as c4, d5873 as c5 } from '../descriptors/data/264.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5816 as c2 } from '../descriptors/data/261.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8592 as c3, d8593 as c6, d8594 as c7 } from '../descriptors/data/424.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d368 as d368 } from '../descriptors/data/23.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d368;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSandboxRequest"]:c0(),["SharedCodec192"]:c1(),["SharedCodec3"]:c2(),["SharedCodec423"]:c3(),["SharedCodec424"]:c4(),["SharedCodec425"]:c5(),["SharedCodec426"]:c6(),["SharedCodec427"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSandboxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

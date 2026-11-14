import { d8917 as c0, d8918 as c1 } from '../descriptors/data/442.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5869 as c2 } from '../descriptors/data/264.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5816 as c3 } from '../descriptors/data/261.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5717 as c4 } from '../descriptors/data/253.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7920 as c5 } from '../descriptors/data/382.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5717 as d5717 } from '../descriptors/data/253.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5717;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1832"]:c0(),["SharedCodec1833"]:c1(),["SharedCodec2"]:c2(),["SharedCodec3"]:c3(),["UpdateWorkloadIdentityRequest"]:c4(),["WorkloadIdentityClaimConditionRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWorkloadIdentityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

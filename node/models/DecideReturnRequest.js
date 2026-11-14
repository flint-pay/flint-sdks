import { d461 as c0 } from '../descriptors/data/27.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8475 as c1 } from '../descriptors/data/417.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8488 as c2, d8489 as c3 } from '../descriptors/data/419.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d461 as d461 } from '../descriptors/data/27.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d461;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DecideReturnRequest"]:c0(),["ReturnLineDecision"]:c1(),["SharedCodec1476"]:c2(),["SharedCodec1477"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDecideReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

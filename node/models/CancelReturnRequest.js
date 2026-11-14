import { d132 as c0, d133 as c1 } from '../descriptors/data/6.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d132 as d132 } from '../descriptors/data/6.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d132;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelReturnRequest"]:c0(),["CancelReturnResolutionRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

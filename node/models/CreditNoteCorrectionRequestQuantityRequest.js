import { d406 as c0 } from '../descriptors/data/25.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6250 as c1 } from '../descriptors/data/287.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d406 as d406 } from '../descriptors/data/25.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d406;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteCorrectionRequestQuantityRequest"]:c0(),["SharedCodec459"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteCorrectionRequestQuantityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

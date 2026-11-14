import { d7701 as c0 } from '../descriptors/data/371.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1346 as c1 } from '../descriptors/data/65.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1346 as d1346 } from '../descriptors/data/65.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1346;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RefundDestinations"]:c0(),["RetryOrderEditRefundRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRetryOrderEditRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

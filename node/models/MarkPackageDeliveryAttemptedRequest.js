import { d955 as c0 } from '../descriptors/data/47.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d955 as d955 } from '../descriptors/data/47.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d955;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MarkPackageDeliveryAttemptedRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMarkPackageDeliveryAttemptedRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

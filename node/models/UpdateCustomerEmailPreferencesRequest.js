import { d5665 as c0 } from '../descriptors/data/247.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5665 as d5665 } from '../descriptors/data/247.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5665;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateCustomerEmailPreferencesRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerEmailPreferencesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

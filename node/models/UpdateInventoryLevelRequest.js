import { d5680 as c0 } from '../descriptors/data/248.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5680 as d5680 } from '../descriptors/data/248.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5680;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateInventoryLevelRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryLevelRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

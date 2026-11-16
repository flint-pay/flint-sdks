import { d8506 as c0 } from '../descriptors/data/418.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8506 as d8506 } from '../descriptors/data/418.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8506;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateReturnResolutionLineItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

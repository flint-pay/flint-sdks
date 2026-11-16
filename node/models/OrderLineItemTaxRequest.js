import { d6159 as c0 } from '../descriptors/data/281.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6159 as d6159 } from '../descriptors/data/281.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6159;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderLineItemTaxRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineItemTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

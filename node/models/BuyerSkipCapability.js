import { d8669 as c0 } from '../descriptors/data/426.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8669 as d8669 } from '../descriptors/data/426.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8669;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerSkipCapability"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerSkipCapability(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

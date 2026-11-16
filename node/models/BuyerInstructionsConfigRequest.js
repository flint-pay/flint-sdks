import { d6371 as c0 } from '../descriptors/data/292.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6371 as d6371 } from '../descriptors/data/292.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6371;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfigRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerInstructionsConfigRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

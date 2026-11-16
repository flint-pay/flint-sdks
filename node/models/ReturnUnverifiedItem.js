import { d8478 as c0 } from '../descriptors/data/416.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8478 as d8478 } from '../descriptors/data/416.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8478;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnUnverifiedItem"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnUnverifiedItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

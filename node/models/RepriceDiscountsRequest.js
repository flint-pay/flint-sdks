import { d1336 as c0 } from '../descriptors/data/63.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1336 as d1336 } from '../descriptors/data/63.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1336;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RepriceDiscountsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRepriceDiscountsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d405 as c0 } from '../descriptors/data/25.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6276 as c1 } from '../descriptors/data/287.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d405 as d405 } from '../descriptors/data/25.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d405;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteCorrectionRequestQuantityRequest"]:c0(),["SharedCodec453"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteCorrectionRequestQuantityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

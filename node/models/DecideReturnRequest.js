import { d463 as c0 } from '../descriptors/data/27.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8516 as c1 } from '../descriptors/data/418.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8527 as c2, d8528 as c3 } from '../descriptors/data/420.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d463 as d463 } from '../descriptors/data/27.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d463;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DecideReturnRequest"]:c0(),["ReturnLineDecision"]:c1(),["SharedCodec1473"]:c2(),["SharedCodec1474"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDecideReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d8587 as c0 } from '../descriptors/data/423.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8587 as d8587 } from '../descriptors/data/423.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8587;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RiskPredicateNodeInListRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeInListRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

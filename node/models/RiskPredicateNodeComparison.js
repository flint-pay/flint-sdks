import { d5329 as c0, d5335 as c1 } from '../descriptors/data/251.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5329 as d5329 } from '../descriptors/data/251.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5329;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RiskPredicateNodeComparison"]:c0(),["SharedCodec1203"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeComparison(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d5330 as c0, d5335 as c1, d5336 as c2 } from '../descriptors/data/251.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5330 as d5330 } from '../descriptors/data/251.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5330;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RiskPredicateNodeIn"]:c0(),["SharedCodec1203"]:c1(),["SharedCodec1204"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeIn(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

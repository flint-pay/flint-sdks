import { d10761 as c0 } from '../descriptors/data/512.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10761 as d10761 } from '../descriptors/data/512.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10761;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RiskPredicateNodeInListRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeInListRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

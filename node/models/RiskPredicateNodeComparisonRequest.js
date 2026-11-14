import { d8564 as c0 } from '../descriptors/data/422.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8573 as c1 } from '../descriptors/data/423.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8564 as d8564 } from '../descriptors/data/422.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8564;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RiskPredicateNodeComparisonRequest"]:c0(),["SharedCodec417"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeComparisonRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

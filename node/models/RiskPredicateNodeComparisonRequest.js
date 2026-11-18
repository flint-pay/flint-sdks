import { d10735 as c0, d10744 as c1 } from '../descriptors/data/505.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10735 as d10735 } from '../descriptors/data/505.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10735;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RiskPredicateNodeComparisonRequest"]:c0(),["SharedCodec564"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeComparisonRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

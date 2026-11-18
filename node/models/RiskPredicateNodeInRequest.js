import { d10737 as c0, d10744 as c1, d10745 as c2 } from '../descriptors/data/505.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10737 as d10737 } from '../descriptors/data/505.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10737;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RiskPredicateNodeInRequest"]:c0(),["SharedCodec564"]:c1(),["SharedCodec565"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeInRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

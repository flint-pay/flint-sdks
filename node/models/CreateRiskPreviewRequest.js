import { d401 as c0 } from '../descriptors/data/24.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c1 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10735 as c2, d10736 as c3, d10737 as c4, d10738 as c5, d10739 as c6, d10740 as c7, d10729 as c8, d10730 as c9, d10742 as c10, d10743 as c11, d10744 as c12, d10745 as c13, d10731 as c14, d10732 as c15, d10733 as c16, d10734 as c17 } from '../descriptors/data/505.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d401 as d401 } from '../descriptors/data/24.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d401;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskPreviewRequest"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNodeComparisonRequest"]:c2(),["RiskPredicateNodeInListRequest"]:c3(),["RiskPredicateNodeInRequest"]:c4(),["RiskPredicateNodeIsMissingRequest"]:c5(),["RiskPredicateNodeMoneyComparisonRequest"]:c6(),["RiskPredicateNodeRequest"]:c7(),["SharedCodec560"]:c8(),["SharedCodec561"]:c9(),["SharedCodec562"]:c10(),["SharedCodec563"]:c11(),["SharedCodec564"]:c12(),["SharedCodec565"]:c13(),["SharedCodec566"]:c14(),["SharedCodec567"]:c15(),["SharedCodec568"]:c16(),["SharedCodec569"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

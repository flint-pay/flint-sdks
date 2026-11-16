import { d394 as c0 } from '../descriptors/data/24.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c1 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10502 as c2, d10503 as c3, d10504 as c4, d10505 as c5, d10506 as c6, d10507 as c7, d10509 as c10, d10510 as c11, d10511 as c12, d10512 as c13, d10500 as c16, d10501 as c17 } from '../descriptors/data/494.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10496 as c8, d10497 as c9, d10498 as c14, d10499 as c15 } from '../descriptors/data/493.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d394 as d394 } from '../descriptors/data/24.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d394;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskPreviewRequest"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNodeComparisonRequest"]:c2(),["RiskPredicateNodeInListRequest"]:c3(),["RiskPredicateNodeInRequest"]:c4(),["RiskPredicateNodeIsMissingRequest"]:c5(),["RiskPredicateNodeMoneyComparisonRequest"]:c6(),["RiskPredicateNodeRequest"]:c7(),["SharedCodec574"]:c8(),["SharedCodec575"]:c9(),["SharedCodec576"]:c10(),["SharedCodec577"]:c11(),["SharedCodec578"]:c12(),["SharedCodec579"]:c13(),["SharedCodec580"]:c14(),["SharedCodec581"]:c15(),["SharedCodec582"]:c16(),["SharedCodec583"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d7730 as c0 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10502 as c1, d10503 as c2, d10504 as c3, d10505 as c4, d10506 as c5, d10507 as c7, d10509 as c8, d10510 as c9, d10511 as c10, d10512 as c11 } from '../descriptors/data/494.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1822 as c6 } from '../descriptors/data/91.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1822 as d1822 } from '../descriptors/data/91.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1822;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNodeComparisonRequest"]:c1(),["RiskPredicateNodeInListRequest"]:c2(),["RiskPredicateNodeInRequest"]:c3(),["RiskPredicateNodeIsMissingRequest"]:c4(),["RiskPredicateNodeMoneyComparisonRequest"]:c5(),["RiskPredicateNodeNotRequest"]:c6(),["RiskPredicateNodeRequest"]:c7(),["SharedCodec576"]:c8(),["SharedCodec577"]:c9(),["SharedCodec578"]:c10(),["SharedCodec579"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeNotRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d323 as c0, d1820 as c1, d1821 as c2, d2162 as c3, d2163 as c4, d2295 as c5, d2296 as c6, d2298 as c7, d14 as c8, d461 as c9, d452 as c10, d453 as c11, d455 as c12, d454 as c13, d456 as c14, d458 as c15, d457 as c16, d459 as c17, d460 as c18, d1819 as c19, d2292 as c20, d2291 as c21, d2293 as c22, d2294 as c23 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2298 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2298;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["RiskPredicateNode"]:c5(),["RiskRule"]:c6(),["RiskRuleListResponse"]:c7(),["SharedCodec1"]:c8(),["SharedCodec146"]:c9(),["SharedCodec147"]:c10(),["SharedCodec148"]:c11(),["SharedCodec149"]:c12(),["SharedCodec150"]:c13(),["SharedCodec151"]:c14(),["SharedCodec152"]:c15(),["SharedCodec153"]:c16(),["SharedCodec154"]:c17(),["SharedCodec155"]:c18(),["SharedCodec466"]:c19(),["SharedCodec574"]:c20(),["SharedCodec575"]:c21(),["SharedCodec576"]:c22(),["SharedCodec577"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskRuleListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

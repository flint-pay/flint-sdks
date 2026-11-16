import { d6617 as c0 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9389 as c1, d9390 as c2, d9391 as c3, d9392 as c4, d9393 as c5, d9394 as c6, d9396 as c7, d9397 as c8, d9398 as c9, d9399 as c10 } from '../descriptors/data/458.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6529 as c11 } from '../descriptors/data/286.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6529 as d6529 } from '../descriptors/data/286.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6529;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNodeComparisonRequest"]:c1(),["RiskPredicateNodeInListRequest"]:c2(),["RiskPredicateNodeInRequest"]:c3(),["RiskPredicateNodeIsMissingRequest"]:c4(),["RiskPredicateNodeMoneyComparisonRequest"]:c5(),["RiskPredicateNodeRequest"]:c6(),["SharedCodec499"]:c7(),["SharedCodec500"]:c8(),["SharedCodec501"]:c9(),["SharedCodec502"]:c10(),["UpdateRiskRuleRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateRiskRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

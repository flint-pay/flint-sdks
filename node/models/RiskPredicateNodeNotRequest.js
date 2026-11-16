import { d6617 as c0 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9389 as c1, d9390 as c2, d9391 as c3, d9392 as c4, d9393 as c5, d9394 as c7, d9396 as c8, d9397 as c9, d9398 as c10, d9399 as c11 } from '../descriptors/data/458.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1424 as c6 } from '../descriptors/data/68.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1424 as d1424 } from '../descriptors/data/68.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1424;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNodeComparisonRequest"]:c1(),["RiskPredicateNodeInListRequest"]:c2(),["RiskPredicateNodeInRequest"]:c3(),["RiskPredicateNodeIsMissingRequest"]:c4(),["RiskPredicateNodeMoneyComparisonRequest"]:c5(),["RiskPredicateNodeNotRequest"]:c6(),["RiskPredicateNodeRequest"]:c7(),["SharedCodec499"]:c8(),["SharedCodec500"]:c9(),["SharedCodec501"]:c10(),["SharedCodec502"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeNotRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

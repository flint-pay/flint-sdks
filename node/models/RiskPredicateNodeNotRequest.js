import { d5556 as c0 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8125 as c1, d8126 as c2, d8127 as c3, d8128 as c4, d8129 as c5, d8130 as c7 } from '../descriptors/data/390.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d1347 as c6 } from '../descriptors/data/61.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8132 as c8, d8133 as c9, d8134 as c10, d8135 as c11 } from '../descriptors/data/391.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d1347 as d1347 } from '../descriptors/data/61.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1347;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNodeComparisonRequest"]:c1(),["RiskPredicateNodeInListRequest"]:c2(),["RiskPredicateNodeInRequest"]:c3(),["RiskPredicateNodeIsMissingRequest"]:c4(),["RiskPredicateNodeMoneyComparisonRequest"]:c5(),["RiskPredicateNodeNotRequest"]:c6(),["RiskPredicateNodeRequest"]:c7(),["SharedCodec361"]:c8(),["SharedCodec362"]:c9(),["SharedCodec363"]:c10(),["SharedCodec364"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeNotRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

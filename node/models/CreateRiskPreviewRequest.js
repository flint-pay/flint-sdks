import { d344 as c0 } from '../descriptors/data/20.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c1 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8125 as c2, d8126 as c3, d8127 as c4, d8128 as c5, d8129 as c6, d8130 as c7, d8119 as c8, d8120 as c9, d8121 as c14, d8122 as c15, d8123 as c16, d8124 as c17 } from '../descriptors/data/390.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8132 as c10, d8133 as c11, d8134 as c12, d8135 as c13 } from '../descriptors/data/391.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d344 as d344 } from '../descriptors/data/20.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d344;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskPreviewRequest"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNodeComparisonRequest"]:c2(),["RiskPredicateNodeInListRequest"]:c3(),["RiskPredicateNodeInRequest"]:c4(),["RiskPredicateNodeIsMissingRequest"]:c5(),["RiskPredicateNodeMoneyComparisonRequest"]:c6(),["RiskPredicateNodeRequest"]:c7(),["SharedCodec359"]:c8(),["SharedCodec360"]:c9(),["SharedCodec361"]:c10(),["SharedCodec362"]:c11(),["SharedCodec363"]:c12(),["SharedCodec364"]:c13(),["SharedCodec365"]:c14(),["SharedCodec366"]:c15(),["SharedCodec367"]:c16(),["SharedCodec368"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

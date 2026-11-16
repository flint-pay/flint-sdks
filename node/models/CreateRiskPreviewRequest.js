import { d363 as c0 } from '../descriptors/data/22.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c1 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9389 as c2, d9390 as c3, d9391 as c4, d9392 as c5, d9393 as c6, d9394 as c7, d9396 as c10, d9397 as c11, d9398 as c12, d9399 as c13, d9387 as c16, d9388 as c17 } from '../descriptors/data/458.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9383 as c8, d9384 as c9, d9385 as c14, d9386 as c15 } from '../descriptors/data/457.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d363 as d363 } from '../descriptors/data/22.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d363;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskPreviewRequest"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNodeComparisonRequest"]:c2(),["RiskPredicateNodeInListRequest"]:c3(),["RiskPredicateNodeInRequest"]:c4(),["RiskPredicateNodeIsMissingRequest"]:c5(),["RiskPredicateNodeMoneyComparisonRequest"]:c6(),["RiskPredicateNodeRequest"]:c7(),["SharedCodec497"]:c8(),["SharedCodec498"]:c9(),["SharedCodec499"]:c10(),["SharedCodec500"]:c11(),["SharedCodec501"]:c12(),["SharedCodec502"]:c13(),["SharedCodec503"]:c14(),["SharedCodec504"]:c15(),["SharedCodec505"]:c16(),["SharedCodec506"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

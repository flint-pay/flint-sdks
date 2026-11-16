import { d365 as c0 } from '../descriptors/data/22.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c1 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9389 as c2, d9390 as c3, d9391 as c4, d9392 as c5, d9393 as c6, d9394 as c7, d9396 as c10, d9397 as c11, d9398 as c12, d9399 as c13 } from '../descriptors/data/455.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9383 as c8, d9384 as c9 } from '../descriptors/data/454.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d365 as d365 } from '../descriptors/data/22.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d365;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskPreviewRequestStoredRule"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNodeComparisonRequest"]:c2(),["RiskPredicateNodeInListRequest"]:c3(),["RiskPredicateNodeInRequest"]:c4(),["RiskPredicateNodeIsMissingRequest"]:c5(),["RiskPredicateNodeMoneyComparisonRequest"]:c6(),["RiskPredicateNodeRequest"]:c7(),["SharedCodec497"]:c8(),["SharedCodec498"]:c9(),["SharedCodec499"]:c10(),["SharedCodec500"]:c11(),["SharedCodec501"]:c12(),["SharedCodec502"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskPreviewRequestStoredRule(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

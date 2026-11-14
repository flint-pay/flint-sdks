import { d360 as c0 } from '../descriptors/data/22.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c1 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8552 as c2, d8553 as c3, d8554 as c4, d8555 as c5, d8556 as c6, d8557 as c7, d8559 as c10, d8560 as c11, d8561 as c12, d8562 as c13, d8550 as c16, d8551 as c17 } from '../descriptors/data/421.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8546 as c8, d8547 as c9, d8548 as c14, d8549 as c15 } from '../descriptors/data/420.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d360 as d360 } from '../descriptors/data/22.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d360;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskPreviewRequest"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNodeComparisonRequest"]:c2(),["RiskPredicateNodeInListRequest"]:c3(),["RiskPredicateNodeInRequest"]:c4(),["RiskPredicateNodeIsMissingRequest"]:c5(),["RiskPredicateNodeMoneyComparisonRequest"]:c6(),["RiskPredicateNodeRequest"]:c7(),["SharedCodec407"]:c8(),["SharedCodec408"]:c9(),["SharedCodec409"]:c10(),["SharedCodec410"]:c11(),["SharedCodec411"]:c12(),["SharedCodec412"]:c13(),["SharedCodec413"]:c14(),["SharedCodec414"]:c15(),["SharedCodec415"]:c16(),["SharedCodec416"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

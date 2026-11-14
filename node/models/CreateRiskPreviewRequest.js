import { d364 as c0 } from '../descriptors/data/23.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c1 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8564 as c2, d8565 as c3, d8566 as c4, d8567 as c5, d8568 as c6, d8569 as c7, d8558 as c8, d8559 as c9, d8560 as c14, d8561 as c15, d8562 as c16, d8563 as c17 } from '../descriptors/data/422.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8571 as c10, d8572 as c11, d8573 as c12, d8574 as c13 } from '../descriptors/data/423.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d364 as d364 } from '../descriptors/data/23.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d364;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskPreviewRequest"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNodeComparisonRequest"]:c2(),["RiskPredicateNodeInListRequest"]:c3(),["RiskPredicateNodeInRequest"]:c4(),["RiskPredicateNodeIsMissingRequest"]:c5(),["RiskPredicateNodeMoneyComparisonRequest"]:c6(),["RiskPredicateNodeRequest"]:c7(),["SharedCodec413"]:c8(),["SharedCodec414"]:c9(),["SharedCodec415"]:c10(),["SharedCodec416"]:c11(),["SharedCodec417"]:c12(),["SharedCodec418"]:c13(),["SharedCodec419"]:c14(),["SharedCodec420"]:c15(),["SharedCodec421"]:c16(),["SharedCodec422"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

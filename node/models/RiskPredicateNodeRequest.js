import { d7640 as c0 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10412 as c1, d10413 as c2, d10414 as c3, d10415 as c4, d10416 as c5, d10417 as c6, d10419 as c7, d10420 as c8, d10421 as c9, d10422 as c10 } from '../descriptors/data/491.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10417 as d10417 } from '../descriptors/data/491.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10417;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNodeComparisonRequest"]:c1(),["RiskPredicateNodeInListRequest"]:c2(),["RiskPredicateNodeInRequest"]:c3(),["RiskPredicateNodeIsMissingRequest"]:c4(),["RiskPredicateNodeMoneyComparisonRequest"]:c5(),["RiskPredicateNodeRequest"]:c6(),["SharedCodec556"]:c7(),["SharedCodec557"]:c8(),["SharedCodec558"]:c9(),["SharedCodec559"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

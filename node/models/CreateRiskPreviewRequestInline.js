import { d395 as c0 } from '../descriptors/data/24.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c1 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10412 as c2, d10413 as c3, d10414 as c4, d10415 as c5, d10416 as c6, d10417 as c7, d10419 as c10, d10420 as c11, d10421 as c12, d10422 as c13, d10410 as c15 } from '../descriptors/data/491.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10406 as c8, d10407 as c9, d10409 as c14 } from '../descriptors/data/490.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d395 as d395 } from '../descriptors/data/24.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d395;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskPreviewRequestInline"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNodeComparisonRequest"]:c2(),["RiskPredicateNodeInListRequest"]:c3(),["RiskPredicateNodeInRequest"]:c4(),["RiskPredicateNodeIsMissingRequest"]:c5(),["RiskPredicateNodeMoneyComparisonRequest"]:c6(),["RiskPredicateNodeRequest"]:c7(),["SharedCodec554"]:c8(),["SharedCodec555"]:c9(),["SharedCodec556"]:c10(),["SharedCodec557"]:c11(),["SharedCodec558"]:c12(),["SharedCodec559"]:c13(),["SharedCodec561"]:c14(),["SharedCodec562"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskPreviewRequestInline(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

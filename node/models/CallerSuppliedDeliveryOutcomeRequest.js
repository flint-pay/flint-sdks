import { d8475 as c0, d8479 as c1, d8480 as c3, d8481 as c4, d8482 as c5, d8483 as c6, d8484 as c7, d8485 as c8, d8486 as c9 } from '../descriptors/data/375.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c2 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8487 as c10, d8488 as c11, d8489 as c12, d8490 as c13 } from '../descriptors/data/376.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8475 as d8475 } from '../descriptors/data/375.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8475;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequest"]:c0(),["DeliveryWindowRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec191"]:c3(),["SharedCodec192"]:c4(),["SharedCodec193"]:c5(),["SharedCodec194"]:c6(),["SharedCodec195"]:c7(),["SharedCodec196"]:c8(),["SharedCodec197"]:c9(),["SharedCodec198"]:c10(),["SharedCodec199"]:c11(),["SharedCodec200"]:c12(),["SharedCodec201"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

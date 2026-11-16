import { d8474 as c0, d8475 as c1, d8479 as c7, d8480 as c9, d8481 as c10, d8482 as c11, d8483 as c12, d8484 as c13, d8485 as c14, d8486 as c15 } from '../descriptors/data/375.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d235 as c2 } from '../descriptors/data/10.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8394 as c3 } from '../descriptors/data/370.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8395 as c4, d8400 as c5, d8396 as c20, d8401 as c21, d8402 as c22, d8397 as c23, d8398 as c24 } from '../descriptors/data/371.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d556 as c6 } from '../descriptors/data/31.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c8 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8487 as c16, d8488 as c17, d8489 as c18, d8490 as c19 } from '../descriptors/data/376.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d235 as d235 } from '../descriptors/data/10.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d235;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["CreateCheckoutDeliveryQuoteRequest"]:c2(),["DeliveryAddressRequest"]:c3(),["DeliveryBuyerLocationRequest"]:c4(),["DeliveryCoordinateRequest"]:c5(),["DeliveryInventoryAssignmentRequest"]:c6(),["DeliveryWindowRequest"]:c7(),["MoneyValue"]:c8(),["SharedCodec191"]:c9(),["SharedCodec192"]:c10(),["SharedCodec193"]:c11(),["SharedCodec194"]:c12(),["SharedCodec195"]:c13(),["SharedCodec196"]:c14(),["SharedCodec197"]:c15(),["SharedCodec198"]:c16(),["SharedCodec199"]:c17(),["SharedCodec200"]:c18(),["SharedCodec201"]:c19(),["SharedCodec723"]:c20(),["SharedCodec729"]:c21(),["SharedCodec730"]:c22(),["SharedCodec731"]:c23(),["SharedCodec732"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutDeliveryQuoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

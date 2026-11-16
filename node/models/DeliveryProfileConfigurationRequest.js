import { d8446 as c0, d8449 as c1 } from '../descriptors/data/373.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8460 as c2, d8461 as c3, d8462 as c4, d8463 as c5, d8464 as c6, d8465 as c7, d8466 as c8, d8467 as c9, d8468 as c10, d8469 as c11, d8470 as c12, d8471 as c13 } from '../descriptors/data/374.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8472 as c14, d8473 as c15 } from '../descriptors/data/375.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8446 as d8446 } from '../descriptors/data/373.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8446;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec960"]:c2(),["SharedCodec961"]:c3(),["SharedCodec962"]:c4(),["SharedCodec963"]:c5(),["SharedCodec964"]:c6(),["SharedCodec965"]:c7(),["SharedCodec966"]:c8(),["SharedCodec973"]:c9(),["SharedCodec974"]:c10(),["SharedCodec977"]:c11(),["SharedCodec978"]:c12(),["SharedCodec980"]:c13(),["SharedCodec981"]:c14(),["SharedCodec982"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

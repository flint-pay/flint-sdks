import { d632 as c0 } from '../descriptors/data/36.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8449 as c1 } from '../descriptors/data/373.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8462 as c2, d8463 as c3, d8469 as c4, d8470 as c5, d8471 as c6 } from '../descriptors/data/374.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8472 as c7, d8473 as c8 } from '../descriptors/data/375.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d632 as d632 } from '../descriptors/data/36.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d632;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputNone"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec962"]:c2(),["SharedCodec963"]:c3(),["SharedCodec977"]:c4(),["SharedCodec978"]:c5(),["SharedCodec980"]:c6(),["SharedCodec981"]:c7(),["SharedCodec982"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputNone(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

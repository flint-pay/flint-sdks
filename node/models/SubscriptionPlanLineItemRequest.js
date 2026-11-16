import { d7767 as c0 } from '../descriptors/data/336.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c1 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7985 as c2 } from '../descriptors/data/348.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8547 as c3, d8543 as c4 } from '../descriptors/data/379.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10549 as c5, d10550 as c6, d10551 as c7, d10552 as c8, d10553 as c9, d10554 as c10, d10555 as c11 } from '../descriptors/data/497.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8435 as c12, d8436 as c13, d8437 as c14, d8438 as c15, d8439 as c16, d8440 as c17, d8441 as c18, d8442 as c19 } from '../descriptors/data/373.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10573 as c20 } from '../descriptors/data/499.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7698 as c21 } from '../descriptors/data/331.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10573 as d10573 } from '../descriptors/data/499.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10573;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec184"]:c3(),["SharedCodec185"]:c4(),["SharedCodec2860"]:c5(),["SharedCodec2861"]:c6(),["SharedCodec2862"]:c7(),["SharedCodec2863"]:c8(),["SharedCodec2865"]:c9(),["SharedCodec2866"]:c10(),["SharedCodec2867"]:c11(),["SharedCodec474"]:c12(),["SharedCodec475"]:c13(),["SharedCodec476"]:c14(),["SharedCodec477"]:c15(),["SharedCodec478"]:c16(),["SharedCodec490"]:c17(),["SharedCodec491"]:c18(),["SharedCodec492"]:c19(),["SubscriptionPlanLineItemRequest"]:c20(),["TextModifierRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d409 as c0 } from '../descriptors/data/25.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7777 as c1, d7778 as c2, d7767 as c5 } from '../descriptors/data/336.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7784 as c3 } from '../descriptors/data/337.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8411 as c4, d8408 as c8, d8409 as c9, d8410 as c10 } from '../descriptors/data/371.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c6 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7985 as c7 } from '../descriptors/data/348.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8547 as c11, d8543 as c12 } from '../descriptors/data/379.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10549 as c13, d10550 as c14, d10551 as c15, d10552 as c16, d10553 as c17, d10554 as c18, d10555 as c19, d10548 as c33 } from '../descriptors/data/497.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8435 as c20, d8436 as c21, d8437 as c22, d8438 as c23, d8439 as c24, d8440 as c25, d8441 as c26, d8442 as c27 } from '../descriptors/data/373.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10564 as c28, d10565 as c29, d10566 as c30, d10567 as c31, d10569 as c32, d10572 as c34, d10573 as c35 } from '../descriptors/data/499.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7698 as c36 } from '../descriptors/data/331.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d409 as d409 } from '../descriptors/data/25.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d409;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["ImageRequest"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemTaxRequest"]:c7(),["SharedCodec1442"]:c8(),["SharedCodec1443"]:c9(),["SharedCodec1444"]:c10(),["SharedCodec184"]:c11(),["SharedCodec185"]:c12(),["SharedCodec2860"]:c13(),["SharedCodec2861"]:c14(),["SharedCodec2862"]:c15(),["SharedCodec2863"]:c16(),["SharedCodec2865"]:c17(),["SharedCodec2866"]:c18(),["SharedCodec2867"]:c19(),["SharedCodec474"]:c20(),["SharedCodec475"]:c21(),["SharedCodec476"]:c22(),["SharedCodec477"]:c23(),["SharedCodec478"]:c24(),["SharedCodec490"]:c25(),["SharedCodec491"]:c26(),["SharedCodec492"]:c27(),["SharedCodec573"]:c28(),["SharedCodec574"]:c29(),["SharedCodec575"]:c30(),["SharedCodec576"]:c31(),["SubscriptionEndAfterCyclesRequest"]:c32(),["SubscriptionIntervalOptionRequest"]:c33(),["SubscriptionPlanChangeOptionRequest"]:c34(),["SubscriptionPlanLineItemRequest"]:c35(),["TextModifierRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

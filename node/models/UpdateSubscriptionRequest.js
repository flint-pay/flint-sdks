import { d7867 as c0, d7865 as c3, d7866 as c15 } from '../descriptors/data/342.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8551 as c1 } from '../descriptors/data/379.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9394 as c2, d9396 as c27 } from '../descriptors/data/430.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7976 as c4, d7977 as c5, d7986 as c16 } from '../descriptors/data/348.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10621 as c6, d10622 as c7 } from '../descriptors/data/502.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9314 as c8, d9315 as c9, d9316 as c26 } from '../descriptors/data/426.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10598 as c10, d10599 as c11, d10602 as c22, d10603 as c23, d10604 as c24 } from '../descriptors/data/501.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7769 as c12, d7770 as c13, d7768 as c14 } from '../descriptors/data/336.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7987 as c17 } from '../descriptors/data/349.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10627 as c18, d10628 as c19, d10629 as c20, d10630 as c21 } from '../descriptors/data/503.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10655 as c25 } from '../descriptors/data/505.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7561 as c28 } from '../descriptors/data/320.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7561 as d7561 } from '../descriptors/data/320.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7561;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec166"]:c2(),["SharedCodec2"]:c3(),["SharedCodec227"]:c4(),["SharedCodec228"]:c5(),["SharedCodec2780"]:c6(),["SharedCodec2781"]:c7(),["SharedCodec2798"]:c8(),["SharedCodec2799"]:c9(),["SharedCodec2884"]:c10(),["SharedCodec2885"]:c11(),["SharedCodec2975"]:c12(),["SharedCodec2976"]:c13(),["SharedCodec2977"]:c14(),["SharedCodec3"]:c15(),["SharedCodec307"]:c16(),["SharedCodec308"]:c17(),["SharedCodec3110"]:c18(),["SharedCodec3111"]:c19(),["SharedCodec3112"]:c20(),["SharedCodec3113"]:c21(),["SharedCodec584"]:c22(),["SharedCodec585"]:c23(),["SharedCodec586"]:c24(),["SubscriptionBillingScheduleUpdateRequest"]:c25(),["SubscriptionDeliveryDestinationRequest"]:c26(),["SubscriptionDeliveryRequest"]:c27(),["UpdateSubscriptionRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

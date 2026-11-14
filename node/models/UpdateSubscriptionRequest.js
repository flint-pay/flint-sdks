import { d6021 as c0, d6019 as c2, d6020 as c3 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6693 as c1 } from '../descriptors/data/311.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7542 as c4, d7544 as c27 } from '../descriptors/data/362.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6128 as c5, d6129 as c6, d6137 as c16, d6138 as c17 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8774 as c7, d8775 as c8, d8754 as c22, d8755 as c23, d8756 as c24 } from '../descriptors/data/433.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7460 as c9, d7461 as c10, d7462 as c26 } from '../descriptors/data/358.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8750 as c11, d8751 as c12 } from '../descriptors/data/432.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5921 as c13, d5922 as c14, d5920 as c15 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8780 as c18, d8781 as c19, d8782 as c20, d8783 as c21 } from '../descriptors/data/434.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8808 as c25 } from '../descriptors/data/436.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5712 as c28 } from '../descriptors/data/253.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5712 as d5712 } from '../descriptors/data/253.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5712;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec0"]:c2(),["SharedCodec1"]:c3(),["SharedCodec102"]:c4(),["SharedCodec150"]:c5(),["SharedCodec151"]:c6(),["SharedCodec1565"]:c7(),["SharedCodec1566"]:c8(),["SharedCodec1582"]:c9(),["SharedCodec1583"]:c10(),["SharedCodec1642"]:c11(),["SharedCodec1643"]:c12(),["SharedCodec1690"]:c13(),["SharedCodec1691"]:c14(),["SharedCodec1692"]:c15(),["SharedCodec174"]:c16(),["SharedCodec175"]:c17(),["SharedCodec1825"]:c18(),["SharedCodec1826"]:c19(),["SharedCodec1827"]:c20(),["SharedCodec1828"]:c21(),["SharedCodec443"]:c22(),["SharedCodec444"]:c23(),["SharedCodec445"]:c24(),["SubscriptionBillingScheduleUpdateRequest"]:c25(),["SubscriptionDeliveryDestinationRequest"]:c26(),["SubscriptionDeliveryRequest"]:c27(),["UpdateSubscriptionRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

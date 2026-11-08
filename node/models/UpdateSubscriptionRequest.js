import { d5793 as c0, d5791 as c2, d5792 as c3 } from '../descriptors/data/254.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5939 as c1, d5940 as c4, d5941 as c5 } from '../descriptors/data/262.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8323 as c6, d8324 as c7, d8308 as c14, d8309 as c15, d8310 as c16 } from '../descriptors/data/400.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7197 as c8, d7198 as c9, d7199 as c17, d7201 as c19, d7202 as c20 } from '../descriptors/data/335.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5687 as c10, d5688 as c11, d5686 as c12 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8329 as c13 } from '../descriptors/data/401.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8353 as c18 } from '../descriptors/data/403.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5493 as c21 } from '../descriptors/data/238.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5493 as d5493 } from '../descriptors/data/238.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5493;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec0"]:c2(),["SharedCodec1"]:c3(),["SharedCodec126"]:c4(),["SharedCodec127"]:c5(),["SharedCodec1438"]:c6(),["SharedCodec1439"]:c7(),["SharedCodec1455"]:c8(),["SharedCodec1456"]:c9(),["SharedCodec1561"]:c10(),["SharedCodec1562"]:c11(),["SharedCodec1563"]:c12(),["SharedCodec1685"]:c13(),["SharedCodec389"]:c14(),["SharedCodec390"]:c15(),["SharedCodec391"]:c16(),["SharedCodec89"]:c17(),["SubscriptionBillingScheduleUpdateRequest"]:c18(),["SubscriptionDeliveryDestinationRequest"]:c19(),["SubscriptionDeliveryRequest"]:c20(),["UpdateSubscriptionRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

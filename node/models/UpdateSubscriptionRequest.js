import { d5981 as c0, d5979 as c2, d5980 as c3 } from '../descriptors/data/269.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6655 as c1 } from '../descriptors/data/305.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7503 as c4, d7505 as c27 } from '../descriptors/data/356.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6083 as c5 } from '../descriptors/data/274.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6084 as c6, d6092 as c16, d6093 as c17 } from '../descriptors/data/275.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8725 as c7, d8726 as c8, d8705 as c22, d8706 as c23, d8707 as c24 } from '../descriptors/data/426.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7424 as c9, d7425 as c10, d7426 as c26 } from '../descriptors/data/352.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8701 as c11, d8702 as c12 } from '../descriptors/data/425.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5895 as c13, d5896 as c14, d5894 as c15 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8731 as c18, d8732 as c19, d8733 as c20, d8734 as c21 } from '../descriptors/data/427.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8758 as c25 } from '../descriptors/data/429.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5699 as c28 } from '../descriptors/data/251.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5699 as d5699 } from '../descriptors/data/251.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5699;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec0"]:c2(),["SharedCodec1"]:c3(),["SharedCodec102"]:c4(),["SharedCodec150"]:c5(),["SharedCodec151"]:c6(),["SharedCodec1568"]:c7(),["SharedCodec1569"]:c8(),["SharedCodec1585"]:c9(),["SharedCodec1586"]:c10(),["SharedCodec1645"]:c11(),["SharedCodec1646"]:c12(),["SharedCodec1693"]:c13(),["SharedCodec1694"]:c14(),["SharedCodec1695"]:c15(),["SharedCodec175"]:c16(),["SharedCodec176"]:c17(),["SharedCodec1828"]:c18(),["SharedCodec1829"]:c19(),["SharedCodec1830"]:c20(),["SharedCodec1831"]:c21(),["SharedCodec437"]:c22(),["SharedCodec438"]:c23(),["SharedCodec439"]:c24(),["SubscriptionBillingScheduleUpdateRequest"]:c25(),["SubscriptionDeliveryDestinationRequest"]:c26(),["SubscriptionDeliveryRequest"]:c27(),["UpdateSubscriptionRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d6020 as c0, d6018 as c2, d6019 as c3 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6692 as c1 } from '../descriptors/data/308.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7541 as c4, d7543 as c27 } from '../descriptors/data/359.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6127 as c5, d6128 as c6, d6136 as c16, d6137 as c17 } from '../descriptors/data/278.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8766 as c7, d8767 as c8, d8746 as c22, d8747 as c23, d8748 as c24 } from '../descriptors/data/430.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7462 as c9, d7463 as c10, d7464 as c26 } from '../descriptors/data/355.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8742 as c11, d8743 as c12 } from '../descriptors/data/429.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5920 as c13, d5921 as c14, d5919 as c15 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8772 as c18, d8773 as c19, d8774 as c20, d8775 as c21 } from '../descriptors/data/431.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8800 as c25 } from '../descriptors/data/433.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5724 as c28 } from '../descriptors/data/252.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5724 as d5724 } from '../descriptors/data/252.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5724;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec0"]:c2(),["SharedCodec1"]:c3(),["SharedCodec103"]:c4(),["SharedCodec151"]:c5(),["SharedCodec152"]:c6(),["SharedCodec1570"]:c7(),["SharedCodec1571"]:c8(),["SharedCodec1587"]:c9(),["SharedCodec1588"]:c10(),["SharedCodec1647"]:c11(),["SharedCodec1648"]:c12(),["SharedCodec1695"]:c13(),["SharedCodec1696"]:c14(),["SharedCodec1697"]:c15(),["SharedCodec176"]:c16(),["SharedCodec177"]:c17(),["SharedCodec1830"]:c18(),["SharedCodec1831"]:c19(),["SharedCodec1832"]:c20(),["SharedCodec1833"]:c21(),["SharedCodec439"]:c22(),["SharedCodec440"]:c23(),["SharedCodec441"]:c24(),["SubscriptionBillingScheduleUpdateRequest"]:c25(),["SubscriptionDeliveryDestinationRequest"]:c26(),["SubscriptionDeliveryRequest"]:c27(),["UpdateSubscriptionRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

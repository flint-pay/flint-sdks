import { d6041 as c0, d6039 as c2, d6040 as c3 } from '../descriptors/data/274.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6731 as c1 } from '../descriptors/data/312.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6150 as c4, d6151 as c5 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8795 as c6, d8796 as c7 } from '../descriptors/data/434.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7488 as c8 } from '../descriptors/data/357.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7489 as c9, d7490 as c26 } from '../descriptors/data/358.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8772 as c10, d8773 as c11, d8776 as c21, d8777 as c22, d8778 as c23 } from '../descriptors/data/433.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5943 as c12, d5944 as c13, d5942 as c14 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6160 as c15, d6161 as c16 } from '../descriptors/data/281.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8801 as c17, d8802 as c18, d8803 as c19, d8804 as c20 } from '../descriptors/data/435.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7568 as c24, d7570 as c27 } from '../descriptors/data/361.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8829 as c25 } from '../descriptors/data/437.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5736 as c28 } from '../descriptors/data/253.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5736 as d5736 } from '../descriptors/data/253.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5736;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec0"]:c2(),["SharedCodec1"]:c3(),["SharedCodec145"]:c4(),["SharedCodec146"]:c5(),["SharedCodec1560"]:c6(),["SharedCodec1561"]:c7(),["SharedCodec1577"]:c8(),["SharedCodec1578"]:c9(),["SharedCodec1637"]:c10(),["SharedCodec1638"]:c11(),["SharedCodec1685"]:c12(),["SharedCodec1686"]:c13(),["SharedCodec1687"]:c14(),["SharedCodec169"]:c15(),["SharedCodec170"]:c16(),["SharedCodec1820"]:c17(),["SharedCodec1821"]:c18(),["SharedCodec1822"]:c19(),["SharedCodec1823"]:c20(),["SharedCodec437"]:c21(),["SharedCodec438"]:c22(),["SharedCodec439"]:c23(),["SharedCodec97"]:c24(),["SubscriptionBillingScheduleUpdateRequest"]:c25(),["SubscriptionDeliveryDestinationRequest"]:c26(),["SubscriptionDeliveryRequest"]:c27(),["UpdateSubscriptionRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

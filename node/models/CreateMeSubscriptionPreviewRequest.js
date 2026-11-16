import { d6041 as c0, d6039 as c3, d6040 as c4 } from '../descriptors/data/274.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d287 as c1 } from '../descriptors/data/15.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6731 as c2 } from '../descriptors/data/312.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6150 as c5, d6151 as c6 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7488 as c7, d7466 as c12, d7476 as c16 } from '../descriptors/data/357.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7489 as c8, d7490 as c13 } from '../descriptors/data/358.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7463 as c9, d7464 as c10, d7465 as c11 } from '../descriptors/data/356.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7570 as c14, d7572 as c15 } from '../descriptors/data/361.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d287 as d287 } from '../descriptors/data/15.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d287;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateMeSubscriptionPreviewRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["SharedCodec0"]:c3(),["SharedCodec1"]:c4(),["SharedCodec145"]:c5(),["SharedCodec146"]:c6(),["SharedCodec1577"]:c7(),["SharedCodec1578"]:c8(),["SharedCodec316"]:c9(),["SharedCodec317"]:c10(),["SharedCodec318"]:c11(),["SharedCodec319"]:c12(),["SubscriptionDeliveryDestinationRequest"]:c13(),["SubscriptionDeliveryRequest"]:c14(),["SubscriptionQuantityChangeLineItemRequest"]:c15(),["SubscriptionSwapPreviewRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

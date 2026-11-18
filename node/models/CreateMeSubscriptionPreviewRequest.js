import { d8114 as c0, d8112 as c3, d8113 as c8 } from '../descriptors/data/353.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d325 as c1 } from '../descriptors/data/17.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8802 as c2 } from '../descriptors/data/390.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8224 as c4, d8225 as c5 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9607 as c6, d9608 as c7, d9609 as c13 } from '../descriptors/data/439.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9589 as c9, d9590 as c10, d9591 as c11, d9592 as c12, d9595 as c16 } from '../descriptors/data/438.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9687 as c14, d9689 as c15 } from '../descriptors/data/443.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d325 as d325 } from '../descriptors/data/17.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d325;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateMeSubscriptionPreviewRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["SharedCodec2"]:c3(),["SharedCodec232"]:c4(),["SharedCodec233"]:c5(),["SharedCodec2891"]:c6(),["SharedCodec2892"]:c7(),["SharedCodec3"]:c8(),["SharedCodec468"]:c9(),["SharedCodec469"]:c10(),["SharedCodec470"]:c11(),["SharedCodec471"]:c12(),["SubscriptionDeliveryDestinationRequest"]:c13(),["SubscriptionDeliveryRequest"]:c14(),["SubscriptionQuantityChangeLineItemRequest"]:c15(),["SubscriptionSwapPreviewRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

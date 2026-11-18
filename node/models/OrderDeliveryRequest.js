import { d8114 as c0, d8112 as c4, d8113 as c7 } from '../descriptors/data/353.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8802 as c1 } from '../descriptors/data/390.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c2 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9860 as c3 } from '../descriptors/data/452.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9607 as c5, d9608 as c6, d9609 as c8 } from '../descriptors/data/439.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9860 as d9860 } from '../descriptors/data/452.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9860;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["MoneyValue"]:c2(),["OrderDeliveryRequest"]:c3(),["SharedCodec2"]:c4(),["SharedCodec2891"]:c5(),["SharedCodec2892"]:c6(),["SharedCodec3"]:c7(),["SubscriptionDeliveryDestinationRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDeliveryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

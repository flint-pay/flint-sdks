import { d8114 as c0, d8112 as c3, d8113 as c4 } from '../descriptors/data/353.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9330 as c1, d9331 as c2 } from '../descriptors/data/419.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9331 as d9331 } from '../descriptors/data/419.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9331;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["OrderDeliveryDestinationRecipientRequest"]:c1(),["OrderDeliveryDestinationRequest"]:c2(),["SharedCodec2"]:c3(),["SharedCodec3"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDeliveryDestinationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

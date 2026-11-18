import { d8645 as c0, d8646 as c1, d8651 as c2, d8647 as c3, d8652 as c4, d8653 as c5, d8648 as c6, d8649 as c7 } from '../descriptors/data/382.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8646 as d8646 } from '../descriptors/data/382.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8646;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["DeliveryBuyerLocationRequest"]:c1(),["DeliveryCoordinateRequest"]:c2(),["SharedCodec729"]:c3(),["SharedCodec735"]:c4(),["SharedCodec736"]:c5(),["SharedCodec737"]:c6(),["SharedCodec738"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBuyerLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

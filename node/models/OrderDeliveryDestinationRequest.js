import { d7867 as c0, d7865 as c3, d7866 as c4 } from '../descriptors/data/342.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9085 as c1, d9086 as c2 } from '../descriptors/data/409.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9086 as d9086 } from '../descriptors/data/409.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9086;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["OrderDeliveryDestinationRecipientRequest"]:c1(),["OrderDeliveryDestinationRequest"]:c2(),["SharedCodec2"]:c3(),["SharedCodec3"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDeliveryDestinationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

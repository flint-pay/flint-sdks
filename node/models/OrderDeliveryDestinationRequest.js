import { d4541 as c0, d4539 as c3, d4540 as c4 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5679 as c1, d5680 as c2 } from '../descriptors/data/256.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5680 as d5680 } from '../descriptors/data/256.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5680;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["OrderDeliveryDestinationRecipientRequest"]:c1(),["OrderDeliveryDestinationRequest"]:c2(),["SharedCodec0"]:c3(),["SharedCodec1"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDeliveryDestinationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

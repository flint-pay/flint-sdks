import { d4541 as c0, d4539 as c5, d4540 as c6 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d202 as c1, d203 as c2 } from '../descriptors/data/9.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4681 as c3 } from '../descriptors/data/202.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4676 as c4 } from '../descriptors/data/201.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d203 as d203 } from '../descriptors/data/9.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d203;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliverySelectionChoiceRequest"]:c1(),["CreateDeliverySelectionRequest"]:c2(),["DeliverySelectionInstructionsRequest"]:c3(),["DeliverySelectionRecipientRequest"]:c4(),["SharedCodec0"]:c5(),["SharedCodec1"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliverySelectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

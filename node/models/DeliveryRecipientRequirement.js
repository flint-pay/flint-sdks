import { d4544 as c0 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4544 as d4544 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4544;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRecipientRequirement"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRecipientRequirement(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

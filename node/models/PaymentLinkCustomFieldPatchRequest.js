import { d1058 as c0 } from '../descriptors/data/49.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1058 as d1058 } from '../descriptors/data/49.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1058;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkCustomFieldPatchRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkCustomFieldPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

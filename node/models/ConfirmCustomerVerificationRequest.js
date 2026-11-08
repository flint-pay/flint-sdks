import { d154 as c0 } from '../descriptors/data/6.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d154 as d154 } from '../descriptors/data/6.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d154;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmCustomerVerificationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmCustomerVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

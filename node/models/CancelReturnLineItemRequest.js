import { d109 as c0 } from '../descriptors/data/5.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d109 as d109 } from '../descriptors/data/5.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d109;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelReturnLineItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

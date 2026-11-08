import { d5393 as c0 } from '../descriptors/data/242.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4171 as c1 } from '../descriptors/data/171.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4171 as d4171 } from '../descriptors/data/171.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4171;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1361"]:c0(),["TransitionGiftCardRequestWithoutReason"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTransitionGiftCardRequestWithoutReason(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

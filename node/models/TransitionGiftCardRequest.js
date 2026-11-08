import { d5391 as c0, d5392 as c1, d5393 as c2 } from '../descriptors/data/242.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4169 as c3 } from '../descriptors/data/171.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4169 as d4169 } from '../descriptors/data/171.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4169;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1359"]:c0(),["SharedCodec1360"]:c1(),["SharedCodec1361"]:c2(),["TransitionGiftCardRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTransitionGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d156 as c0 } from '../descriptors/data/6.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6260 as c1, d6261 as c2, d6262 as c3, d6263 as c4 } from '../descriptors/data/290.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d156 as d156 } from '../descriptors/data/6.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d156;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequest"]:c0(),["SharedCodec125"]:c1(),["SharedCodec126"]:c2(),["SharedCodec127"]:c3(),["SharedCodec128"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

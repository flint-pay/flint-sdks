import { d75 as c0 } from '../descriptors/data/3.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5855 as c1, d5856 as c2, d5857 as c3, d5858 as c4 } from '../descriptors/data/268.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d75 as d75 } from '../descriptors/data/3.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d75;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerReturnReplacementLineItemRequest"]:c0(),["SharedCodec72"]:c1(),["SharedCodec73"]:c2(),["SharedCodec74"]:c3(),["SharedCodec75"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

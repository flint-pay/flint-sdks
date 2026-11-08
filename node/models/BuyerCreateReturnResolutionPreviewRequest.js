import { d42 as c0 } from '../descriptors/data/1.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d75 as c1 } from '../descriptors/data/3.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1271 as c2 } from '../descriptors/data/60.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5919 as c3 } from '../descriptors/data/271.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5855 as c4, d5856 as c5, d5857 as c6, d5858 as c7 } from '../descriptors/data/268.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d42 as d42 } from '../descriptors/data/1.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d42;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnResolutionPreviewRequest"]:c0(),["BuyerReturnReplacementLineItemRequest"]:c1(),["ReturnResolutionLineItemRequest"]:c2(),["SharedCodec37"]:c3(),["SharedCodec72"]:c4(),["SharedCodec73"]:c5(),["SharedCodec74"]:c6(),["SharedCodec75"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

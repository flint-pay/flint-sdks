import { d600 as c0 } from '../descriptors/data/31.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5293 as c1, d5294 as c2, d5295 as c3, d5296 as c4, d5297 as c5, d5298 as c6, d5299 as c7, d5300 as c8, d5301 as c9, d5302 as c10, d5303 as c11, d5304 as c12, d5305 as c13, d5306 as c14 } from '../descriptors/data/237.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d600 as d600 } from '../descriptors/data/31.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d600;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentTransitionRequest"]:c0(),["SharedCodec586"]:c1(),["SharedCodec587"]:c2(),["SharedCodec588"]:c3(),["SharedCodec589"]:c4(),["SharedCodec590"]:c5(),["SharedCodec591"]:c6(),["SharedCodec592"]:c7(),["SharedCodec593"]:c8(),["SharedCodec594"]:c9(),["SharedCodec595"]:c10(),["SharedCodec596"]:c11(),["SharedCodec597"]:c12(),["SharedCodec598"]:c13(),["SharedCodec599"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

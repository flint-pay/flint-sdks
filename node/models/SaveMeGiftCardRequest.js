import { d1306 as c0 } from '../descriptors/data/62.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5776 as c1, d5777 as c2, d5778 as c3, d5779 as c4, d5780 as c5 } from '../descriptors/data/265.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1306 as d1306 } from '../descriptors/data/62.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1306;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequest"]:c0(),["SharedCodec1262"]:c1(),["SharedCodec1263"]:c2(),["SharedCodec1264"]:c3(),["SharedCodec1265"]:c4(),["SharedCodec1266"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

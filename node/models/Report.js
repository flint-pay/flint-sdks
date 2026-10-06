import { d2139 as c0, d1545 as c1, d1547 as c2, d1546 as c3, d1548 as c4, d1549 as c5 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2139 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2139;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Report"]:c0(),["SharedCodec411"]:c1(),["SharedCodec412"]:c2(),["SharedCodec413"]:c3(),["SharedCodec414"]:c4(),["SharedCodec415"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReport(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

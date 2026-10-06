import { d757 as c0, d753 as c1, d754 as c2, d755 as c3, d756 as c4, d233 as c5 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d757 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d757;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeveloperAuthContext"]:c0(),["SharedCodec242"]:c1(),["SharedCodec243"]:c2(),["SharedCodec244"]:c3(),["SharedCodec245"]:c4(),["SharedCodec59"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeveloperAuthContext(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

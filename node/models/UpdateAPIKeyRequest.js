import { d4382 as c0, d4369 as c1, d4385 as c2, d4370 as c3, d4371 as c4, d4383 as c6, d4384 as c7 } from '../descriptors/data/185.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4331 as c5 } from '../descriptors/data/182.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4172 as c8 } from '../descriptors/data/171.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4172 as d4172 } from '../descriptors/data/171.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4172;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec130"]:c0(),["SharedCodec1362"]:c1(),["SharedCodec1363"]:c2(),["SharedCodec1364"]:c3(),["SharedCodec1365"]:c4(),["SharedCodec3"]:c5(),["SharedCodec320"]:c6(),["SharedCodec321"]:c7(),["UpdateAPIKeyRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

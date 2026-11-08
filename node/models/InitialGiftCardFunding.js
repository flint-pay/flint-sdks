import { d671 as c0 } from '../descriptors/data/34.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c1 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5403 as c2, d5404 as c3, d5405 as c4, d5408 as c24, d5409 as c25, d5410 as c26 } from '../descriptors/data/242.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5336 as c5, d5337 as c6, d5338 as c7, d5339 as c8, d5340 as c9, d5341 as c10, d5342 as c11, d5343 as c12, d5344 as c13, d5345 as c14 } from '../descriptors/data/239.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5346 as c15, d5347 as c16, d5348 as c17, d5349 as c18, d5350 as c19, d5351 as c20, d5352 as c21, d5353 as c22 } from '../descriptors/data/240.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5381 as c23 } from '../descriptors/data/241.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d671 as d671 } from '../descriptors/data/34.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d671;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InitialGiftCardFunding"]:c0(),["MoneyValue"]:c1(),["SharedCodec200"]:c2(),["SharedCodec201"]:c3(),["SharedCodec202"]:c4(),["SharedCodec203"]:c5(),["SharedCodec204"]:c6(),["SharedCodec205"]:c7(),["SharedCodec206"]:c8(),["SharedCodec207"]:c9(),["SharedCodec208"]:c10(),["SharedCodec209"]:c11(),["SharedCodec210"]:c12(),["SharedCodec211"]:c13(),["SharedCodec212"]:c14(),["SharedCodec213"]:c15(),["SharedCodec214"]:c16(),["SharedCodec215"]:c17(),["SharedCodec216"]:c18(),["SharedCodec217"]:c19(),["SharedCodec218"]:c20(),["SharedCodec219"]:c21(),["SharedCodec220"]:c22(),["SharedCodec221"]:c23(),["SharedCodec222"]:c24(),["SharedCodec223"]:c25(),["SharedCodec224"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInitialGiftCardFunding(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

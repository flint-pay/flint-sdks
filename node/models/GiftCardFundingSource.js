import { d5327 as c0 } from '../descriptors/data/238.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5337 as c1, d5338 as c2, d5339 as c3, d5340 as c4, d5341 as c5, d5342 as c6, d5343 as c7, d5344 as c8, d5345 as c9 } from '../descriptors/data/239.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5346 as c10, d5347 as c11, d5348 as c12, d5349 as c13, d5350 as c14, d5351 as c15, d5352 as c16, d5353 as c17 } from '../descriptors/data/240.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5327 as d5327 } from '../descriptors/data/238.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5327;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["SharedCodec204"]:c1(),["SharedCodec205"]:c2(),["SharedCodec206"]:c3(),["SharedCodec207"]:c4(),["SharedCodec208"]:c5(),["SharedCodec209"]:c6(),["SharedCodec210"]:c7(),["SharedCodec211"]:c8(),["SharedCodec212"]:c9(),["SharedCodec213"]:c10(),["SharedCodec214"]:c11(),["SharedCodec215"]:c12(),["SharedCodec216"]:c13(),["SharedCodec217"]:c14(),["SharedCodec218"]:c15(),["SharedCodec219"]:c16(),["SharedCodec220"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

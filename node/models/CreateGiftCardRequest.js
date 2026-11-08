import { d226 as c0 } from '../descriptors/data/11.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5365 as c1, d5346 as c16, d5347 as c17, d5348 as c18, d5349 as c19, d5350 as c20, d5351 as c21, d5352 as c22, d5353 as c23 } from '../descriptors/data/240.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c2 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5403 as c3, d5404 as c4, d5405 as c5, d5408 as c25, d5409 as c26, d5410 as c27, d5411 as c28, d5412 as c29 } from '../descriptors/data/242.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5336 as c6, d5337 as c7, d5338 as c8, d5339 as c9, d5340 as c10, d5341 as c11, d5342 as c12, d5343 as c13, d5344 as c14, d5345 as c15 } from '../descriptors/data/239.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5381 as c24 } from '../descriptors/data/241.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d226 as d226 } from '../descriptors/data/11.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d226;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardNotificationRecipient"]:c1(),["MoneyValue"]:c2(),["SharedCodec200"]:c3(),["SharedCodec201"]:c4(),["SharedCodec202"]:c5(),["SharedCodec203"]:c6(),["SharedCodec204"]:c7(),["SharedCodec205"]:c8(),["SharedCodec206"]:c9(),["SharedCodec207"]:c10(),["SharedCodec208"]:c11(),["SharedCodec209"]:c12(),["SharedCodec210"]:c13(),["SharedCodec211"]:c14(),["SharedCodec212"]:c15(),["SharedCodec213"]:c16(),["SharedCodec214"]:c17(),["SharedCodec215"]:c18(),["SharedCodec216"]:c19(),["SharedCodec217"]:c20(),["SharedCodec218"]:c21(),["SharedCodec219"]:c22(),["SharedCodec220"]:c23(),["SharedCodec221"]:c24(),["SharedCodec222"]:c25(),["SharedCodec223"]:c26(),["SharedCodec224"]:c27(),["SharedCodec228"]:c28(),["SharedCodec229"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

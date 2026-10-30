import { d5296 as c0 } from '../descriptors/data/237.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5306 as c1, d5307 as c2, d5308 as c3, d5309 as c4, d5310 as c5, d5311 as c6, d5312 as c7, d5313 as c8, d5314 as c9 } from '../descriptors/data/238.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5315 as c10, d5316 as c11, d5317 as c12, d5318 as c13, d5319 as c14, d5320 as c15, d5321 as c16, d5322 as c17 } from '../descriptors/data/239.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5296 as d5296 } from '../descriptors/data/237.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5296;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["SharedCodec202"]:c1(),["SharedCodec203"]:c2(),["SharedCodec204"]:c3(),["SharedCodec205"]:c4(),["SharedCodec206"]:c5(),["SharedCodec207"]:c6(),["SharedCodec208"]:c7(),["SharedCodec209"]:c8(),["SharedCodec210"]:c9(),["SharedCodec211"]:c10(),["SharedCodec212"]:c11(),["SharedCodec213"]:c12(),["SharedCodec214"]:c13(),["SharedCodec215"]:c14(),["SharedCodec216"]:c15(),["SharedCodec217"]:c16(),["SharedCodec218"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

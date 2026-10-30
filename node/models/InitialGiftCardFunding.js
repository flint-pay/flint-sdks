import { d666 as c0 } from '../descriptors/data/34.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c1 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5372 as c2, d5373 as c3, d5374 as c4, d5377 as c24, d5378 as c25, d5379 as c26 } from '../descriptors/data/241.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5305 as c5, d5306 as c6, d5307 as c7, d5308 as c8, d5309 as c9, d5310 as c10, d5311 as c11, d5312 as c12, d5313 as c13, d5314 as c14 } from '../descriptors/data/238.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5315 as c15, d5316 as c16, d5317 as c17, d5318 as c18, d5319 as c19, d5320 as c20, d5321 as c21, d5322 as c22 } from '../descriptors/data/239.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5350 as c23 } from '../descriptors/data/240.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d666 as d666 } from '../descriptors/data/34.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d666;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InitialGiftCardFunding"]:c0(),["MoneyValue"]:c1(),["SharedCodec198"]:c2(),["SharedCodec199"]:c3(),["SharedCodec200"]:c4(),["SharedCodec201"]:c5(),["SharedCodec202"]:c6(),["SharedCodec203"]:c7(),["SharedCodec204"]:c8(),["SharedCodec205"]:c9(),["SharedCodec206"]:c10(),["SharedCodec207"]:c11(),["SharedCodec208"]:c12(),["SharedCodec209"]:c13(),["SharedCodec210"]:c14(),["SharedCodec211"]:c15(),["SharedCodec212"]:c16(),["SharedCodec213"]:c17(),["SharedCodec214"]:c18(),["SharedCodec215"]:c19(),["SharedCodec216"]:c20(),["SharedCodec217"]:c21(),["SharedCodec218"]:c22(),["SharedCodec219"]:c23(),["SharedCodec220"]:c24(),["SharedCodec221"]:c25(),["SharedCodec222"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInitialGiftCardFunding(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d221 as c0 } from '../descriptors/data/11.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5334 as c1, d5315 as c16, d5316 as c17, d5317 as c18, d5318 as c19, d5319 as c20, d5320 as c21, d5321 as c22, d5322 as c23 } from '../descriptors/data/239.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c2 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5372 as c3, d5373 as c4, d5374 as c5, d5377 as c25, d5378 as c26, d5379 as c27, d5380 as c28, d5381 as c29 } from '../descriptors/data/241.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5305 as c6, d5306 as c7, d5307 as c8, d5308 as c9, d5309 as c10, d5310 as c11, d5311 as c12, d5312 as c13, d5313 as c14, d5314 as c15 } from '../descriptors/data/238.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5350 as c24 } from '../descriptors/data/240.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d221 as d221 } from '../descriptors/data/11.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d221;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardNotificationRecipient"]:c1(),["MoneyValue"]:c2(),["SharedCodec198"]:c3(),["SharedCodec199"]:c4(),["SharedCodec200"]:c5(),["SharedCodec201"]:c6(),["SharedCodec202"]:c7(),["SharedCodec203"]:c8(),["SharedCodec204"]:c9(),["SharedCodec205"]:c10(),["SharedCodec206"]:c11(),["SharedCodec207"]:c12(),["SharedCodec208"]:c13(),["SharedCodec209"]:c14(),["SharedCodec210"]:c15(),["SharedCodec211"]:c16(),["SharedCodec212"]:c17(),["SharedCodec213"]:c18(),["SharedCodec214"]:c19(),["SharedCodec215"]:c20(),["SharedCodec216"]:c21(),["SharedCodec217"]:c22(),["SharedCodec218"]:c23(),["SharedCodec219"]:c24(),["SharedCodec220"]:c25(),["SharedCodec221"]:c26(),["SharedCodec222"]:c27(),["SharedCodec226"]:c28(),["SharedCodec227"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

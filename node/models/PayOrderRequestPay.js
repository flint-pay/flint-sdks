import { d4281 as c0 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d938 as c1 } from '../descriptors/data/44.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1014 as c2 } from '../descriptors/data/47.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1084 as c3 } from '../descriptors/data/52.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6018 as c4, d6019 as c5, d6020 as c6, d6021 as c7, d6022 as c8, d6023 as c9 } from '../descriptors/data/277.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6097 as c10, d6098 as c11, d6099 as c12 } from '../descriptors/data/282.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1014 as d1014 } from '../descriptors/data/47.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1014;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["PayOrderRequestPay"]:c2(),["PaymentSourceCredential"]:c3(),["SharedCodec1024"]:c4(),["SharedCodec1025"]:c5(),["SharedCodec1026"]:c6(),["SharedCodec1028"]:c7(),["SharedCodec1029"]:c8(),["SharedCodec1030"]:c9(),["SharedCodec889"]:c10(),["SharedCodec890"]:c11(),["SharedCodec891"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

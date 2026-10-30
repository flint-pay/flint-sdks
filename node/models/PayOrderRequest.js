import { d4281 as c0 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d938 as c1, d956 as c2 } from '../descriptors/data/44.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1012 as c3 } from '../descriptors/data/47.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1084 as c4 } from '../descriptors/data/52.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6016 as c5, d6018 as c6, d6019 as c7, d6020 as c8, d6021 as c10, d6022 as c11, d6023 as c12, d6024 as c14, d6025 as c15 } from '../descriptors/data/277.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1318 as c9, d1319 as c13 } from '../descriptors/data/62.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6097 as c16, d6098 as c17, d6099 as c18, d6100 as c19, d6101 as c20, d6102 as c21, d6103 as c22 } from '../descriptors/data/282.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1012 as d1012 } from '../descriptors/data/47.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1012;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["PaymentSourceCredentialToken"]:c5(),["SharedCodec1024"]:c6(),["SharedCodec1025"]:c7(),["SharedCodec1026"]:c8(),["SharedCodec1027"]:c9(),["SharedCodec1028"]:c10(),["SharedCodec1029"]:c11(),["SharedCodec1030"]:c12(),["SharedCodec1031"]:c13(),["SharedCodec1032"]:c14(),["SharedCodec1033"]:c15(),["SharedCodec889"]:c16(),["SharedCodec890"]:c17(),["SharedCodec891"]:c18(),["SharedCodec904"]:c19(),["SharedCodec905"]:c20(),["SharedCodec906"]:c21(),["SharedCodec907"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

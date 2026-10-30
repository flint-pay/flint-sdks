import { d4281 as c0 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4603 as c1 } from '../descriptors/data/198.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1058 as c2 } from '../descriptors/data/50.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6264 as c3, d6265 as c4, d6266 as c5 } from '../descriptors/data/291.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6267 as c6 } from '../descriptors/data/292.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6287 as c7 } from '../descriptors/data/293.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6295 as c8, d6296 as c9, d6298 as c10, d6299 as c11, d6300 as c12, d6301 as c13 } from '../descriptors/data/294.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6302 as c14 } from '../descriptors/data/295.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1058 as d1058 } from '../descriptors/data/50.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1058;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItemRequest"]:c2(),["SharedCodec1003"]:c3(),["SharedCodec1004"]:c4(),["SharedCodec1005"]:c5(),["SharedCodec1006"]:c6(),["SharedCodec983"]:c7(),["SharedCodec991"]:c8(),["SharedCodec992"]:c9(),["SharedCodec994"]:c10(),["SharedCodec995"]:c11(),["SharedCodec996"]:c12(),["SharedCodec997"]:c13(),["SharedCodec998"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

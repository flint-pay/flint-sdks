import { d5572 as c0 } from '../descriptors/data/251.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4734 as c1, d4735 as c2, d4737 as c3, d4739 as c4 } from '../descriptors/data/207.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5620 as c5, d5621 as c6, d5622 as c7, d5623 as c8 } from '../descriptors/data/253.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5624 as c9, d5625 as c10, d5626 as c11 } from '../descriptors/data/254.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5572 as d5572 } from '../descriptors/data/251.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5572;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec775"]:c1(),["SharedCodec776"]:c2(),["SharedCodec778"]:c3(),["SharedCodec780"]:c4(),["SharedCodec781"]:c5(),["SharedCodec782"]:c6(),["SharedCodec783"]:c7(),["SharedCodec784"]:c8(),["SharedCodec785"]:c9(),["SharedCodec786"]:c10(),["SharedCodec787"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

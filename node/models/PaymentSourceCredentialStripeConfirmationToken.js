import { d1086 as c0 } from '../descriptors/data/52.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1086 as d1086 } from '../descriptors/data/52.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1086;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSourceCredentialStripeConfirmationToken"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSourceCredentialStripeConfirmationToken(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

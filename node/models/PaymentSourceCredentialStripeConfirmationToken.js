import { d1544 as c0 } from '../descriptors/data/78.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1544 as d1544 } from '../descriptors/data/78.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1544;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSourceCredentialStripeConfirmationToken"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSourceCredentialStripeConfirmationToken(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

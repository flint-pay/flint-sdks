import { d1051 as c0 } from '../descriptors/data/52.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1051 as d1051 } from '../descriptors/data/52.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1051;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderPaymentIntentSelectionStripeConfirmationToken"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentIntentSelectionStripeConfirmationToken(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

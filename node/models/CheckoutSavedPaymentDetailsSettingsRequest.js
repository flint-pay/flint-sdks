import { d10820 as c0 } from '../descriptors/data/514.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10820 as d10820 } from '../descriptors/data/514.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10820;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutSavedPaymentDetailsSettingsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSavedPaymentDetailsSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

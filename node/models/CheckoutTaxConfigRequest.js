import { d8264 as c0, d8265 as c1 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8265 as d8265 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8265;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutTaxCalculationRequest"]:c0(),["CheckoutTaxConfigRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutTaxConfigRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

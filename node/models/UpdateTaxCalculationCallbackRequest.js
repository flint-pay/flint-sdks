import { d8479 as c0 } from '../descriptors/data/376.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8799 as c1, d8798 as c2, d8800 as c5 } from '../descriptors/data/393.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d11051 as c3 } from '../descriptors/data/527.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7815 as c4 } from '../descriptors/data/331.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7815 as d7815 } from '../descriptors/data/331.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7815;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3082"]:c0(),["SharedCodec3088"]:c1(),["SharedCodec3089"]:c2(),["TaxCalculationCallbackConfigurationPatchRequest"]:c3(),["UpdateTaxCalculationCallbackRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateTaxCalculationCallbackRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

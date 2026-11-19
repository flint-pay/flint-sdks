import { d8585 as c0 } from '../descriptors/data/381.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c1 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8585 as d8585 } from '../descriptors/data/381.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8585;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryDistanceUnitPriceRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryDistanceUnitPriceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d640 as c0 } from '../descriptors/data/36.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8733 as c1 } from '../descriptors/data/389.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8744 as c2, d8745 as c3, d8753 as c4, d8754 as c5, d8755 as c6 } from '../descriptors/data/390.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8756 as c7, d8757 as c8 } from '../descriptors/data/391.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d640 as d640 } from '../descriptors/data/36.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d640;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputManual"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec969"]:c2(),["SharedCodec970"]:c3(),["SharedCodec986"]:c4(),["SharedCodec987"]:c5(),["SharedCodec989"]:c6(),["SharedCodec990"]:c7(),["SharedCodec991"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputManual(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

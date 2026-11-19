import { d643 as c0 } from '../descriptors/data/36.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8733 as c1 } from '../descriptors/data/389.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8744 as c2, d8745 as c3, d8748 as c4, d8749 as c5, d8750 as c6, d8753 as c7, d8754 as c8, d8755 as c9 } from '../descriptors/data/390.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8756 as c10, d8757 as c11 } from '../descriptors/data/391.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d643 as d643 } from '../descriptors/data/36.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d643;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputRequired"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec969"]:c2(),["SharedCodec970"]:c3(),["SharedCodec973"]:c4(),["SharedCodec974"]:c5(),["SharedCodec975"]:c6(),["SharedCodec986"]:c7(),["SharedCodec987"]:c8(),["SharedCodec989"]:c9(),["SharedCodec990"]:c10(),["SharedCodec991"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputRequired(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

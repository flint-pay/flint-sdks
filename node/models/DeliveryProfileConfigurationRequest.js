import { d8730 as c0, d8733 as c1 } from '../descriptors/data/389.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8744 as c2, d8745 as c3, d8746 as c4, d8747 as c5, d8748 as c6, d8749 as c7, d8750 as c8, d8751 as c9, d8752 as c10, d8753 as c11, d8754 as c12, d8755 as c13 } from '../descriptors/data/390.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8756 as c14, d8757 as c15 } from '../descriptors/data/391.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8730 as d8730 } from '../descriptors/data/389.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8730;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec969"]:c2(),["SharedCodec970"]:c3(),["SharedCodec971"]:c4(),["SharedCodec972"]:c5(),["SharedCodec973"]:c6(),["SharedCodec974"]:c7(),["SharedCodec975"]:c8(),["SharedCodec982"]:c9(),["SharedCodec983"]:c10(),["SharedCodec986"]:c11(),["SharedCodec987"]:c12(),["SharedCodec989"]:c13(),["SharedCodec990"]:c14(),["SharedCodec991"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

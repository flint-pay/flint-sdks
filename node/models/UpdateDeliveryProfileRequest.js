import { d8730 as c0, d8733 as c1 } from '../descriptors/data/389.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8047 as c2 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8143 as c3 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8479 as c4 } from '../descriptors/data/376.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8744 as c5, d8745 as c6, d8746 as c7, d8747 as c8, d8748 as c9, d8749 as c10, d8750 as c11, d8751 as c12, d8752 as c13, d8753 as c14, d8754 as c15, d8755 as c16 } from '../descriptors/data/390.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8756 as c17, d8757 as c18 } from '../descriptors/data/391.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7746 as c19 } from '../descriptors/data/325.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7746 as d7746 } from '../descriptors/data/325.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7746;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec3071"]:c2(),["SharedCodec3074"]:c3(),["SharedCodec3082"]:c4(),["SharedCodec969"]:c5(),["SharedCodec970"]:c6(),["SharedCodec971"]:c7(),["SharedCodec972"]:c8(),["SharedCodec973"]:c9(),["SharedCodec974"]:c10(),["SharedCodec975"]:c11(),["SharedCodec982"]:c12(),["SharedCodec983"]:c13(),["SharedCodec986"]:c14(),["SharedCodec987"]:c15(),["SharedCodec989"]:c16(),["SharedCodec990"]:c17(),["SharedCodec991"]:c18(),["UpdateDeliveryProfileRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

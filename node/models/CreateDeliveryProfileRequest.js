import { d274 as c0 } from '../descriptors/data/13.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8730 as c1, d8733 as c2 } from '../descriptors/data/389.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c3 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8744 as c4, d8745 as c5, d8746 as c6, d8747 as c7, d8748 as c8, d8749 as c9, d8750 as c10, d8751 as c11, d8752 as c12, d8753 as c13, d8754 as c14, d8755 as c15 } from '../descriptors/data/390.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8756 as c16, d8757 as c17 } from '../descriptors/data/391.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d274 as d274 } from '../descriptors/data/13.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d274;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec969"]:c4(),["SharedCodec970"]:c5(),["SharedCodec971"]:c6(),["SharedCodec972"]:c7(),["SharedCodec973"]:c8(),["SharedCodec974"]:c9(),["SharedCodec975"]:c10(),["SharedCodec982"]:c11(),["SharedCodec983"]:c12(),["SharedCodec986"]:c13(),["SharedCodec987"]:c14(),["SharedCodec989"]:c15(),["SharedCodec990"]:c16(),["SharedCodec991"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

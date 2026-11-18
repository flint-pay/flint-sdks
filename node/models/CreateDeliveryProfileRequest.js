import { d272 as c0 } from '../descriptors/data/13.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8697 as c1 } from '../descriptors/data/383.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8700 as c2, d8711 as c4, d8712 as c5, d8713 as c6, d8714 as c7, d8715 as c8, d8716 as c9, d8717 as c10, d8718 as c11, d8719 as c12 } from '../descriptors/data/384.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8014 as c3 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8720 as c13, d8721 as c14, d8722 as c15, d8723 as c16, d8724 as c17 } from '../descriptors/data/385.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d272 as d272 } from '../descriptors/data/13.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d272;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec966"]:c4(),["SharedCodec967"]:c5(),["SharedCodec968"]:c6(),["SharedCodec969"]:c7(),["SharedCodec970"]:c8(),["SharedCodec971"]:c9(),["SharedCodec972"]:c10(),["SharedCodec979"]:c11(),["SharedCodec980"]:c12(),["SharedCodec983"]:c13(),["SharedCodec984"]:c14(),["SharedCodec986"]:c15(),["SharedCodec987"]:c16(),["SharedCodec988"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

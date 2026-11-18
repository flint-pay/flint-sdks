import { d8697 as c0 } from '../descriptors/data/383.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8700 as c1, d8711 as c2, d8712 as c3, d8713 as c4, d8714 as c5, d8715 as c6, d8716 as c7, d8717 as c8, d8718 as c9, d8719 as c10 } from '../descriptors/data/384.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8720 as c11, d8721 as c12, d8722 as c13, d8723 as c14, d8724 as c15 } from '../descriptors/data/385.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8697 as d8697 } from '../descriptors/data/383.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8697;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec966"]:c2(),["SharedCodec967"]:c3(),["SharedCodec968"]:c4(),["SharedCodec969"]:c5(),["SharedCodec970"]:c6(),["SharedCodec971"]:c7(),["SharedCodec972"]:c8(),["SharedCodec979"]:c9(),["SharedCodec980"]:c10(),["SharedCodec983"]:c11(),["SharedCodec984"]:c12(),["SharedCodec986"]:c13(),["SharedCodec987"]:c14(),["SharedCodec988"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

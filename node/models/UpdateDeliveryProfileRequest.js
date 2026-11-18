import { d8697 as c0 } from '../descriptors/data/383.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8700 as c1, d8711 as c5, d8712 as c6, d8713 as c7, d8714 as c8, d8715 as c9, d8716 as c10, d8717 as c11, d8718 as c12, d8719 as c13 } from '../descriptors/data/384.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8015 as c2 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8111 as c3 } from '../descriptors/data/352.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8446 as c4 } from '../descriptors/data/370.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8720 as c14, d8721 as c15, d8722 as c16, d8723 as c17, d8724 as c18 } from '../descriptors/data/385.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7736 as c19 } from '../descriptors/data/324.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7736 as d7736 } from '../descriptors/data/324.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7736;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec3072"]:c2(),["SharedCodec3075"]:c3(),["SharedCodec3083"]:c4(),["SharedCodec966"]:c5(),["SharedCodec967"]:c6(),["SharedCodec968"]:c7(),["SharedCodec969"]:c8(),["SharedCodec970"]:c9(),["SharedCodec971"]:c10(),["SharedCodec972"]:c11(),["SharedCodec979"]:c12(),["SharedCodec980"]:c13(),["SharedCodec983"]:c14(),["SharedCodec984"]:c15(),["SharedCodec986"]:c16(),["SharedCodec987"]:c17(),["SharedCodec988"]:c18(),["UpdateDeliveryProfileRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d638 as c0 } from '../descriptors/data/36.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8700 as c1, d8711 as c2, d8712 as c3 } from '../descriptors/data/384.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8720 as c4, d8721 as c5, d8722 as c6, d8723 as c7, d8724 as c8 } from '../descriptors/data/385.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d638 as d638 } from '../descriptors/data/36.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d638;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputManual"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec966"]:c2(),["SharedCodec967"]:c3(),["SharedCodec983"]:c4(),["SharedCodec984"]:c5(),["SharedCodec986"]:c6(),["SharedCodec987"]:c7(),["SharedCodec988"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputManual(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

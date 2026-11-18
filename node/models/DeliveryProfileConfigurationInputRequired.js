import { d641 as c0 } from '../descriptors/data/36.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8700 as c1, d8711 as c2, d8712 as c3, d8715 as c4, d8716 as c5, d8717 as c6 } from '../descriptors/data/385.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8720 as c7, d8721 as c8, d8722 as c9, d8723 as c10, d8724 as c11 } from '../descriptors/data/386.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d641 as d641 } from '../descriptors/data/36.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d641;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputRequired"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec966"]:c2(),["SharedCodec967"]:c3(),["SharedCodec970"]:c4(),["SharedCodec971"]:c5(),["SharedCodec972"]:c6(),["SharedCodec983"]:c7(),["SharedCodec984"]:c8(),["SharedCodec986"]:c9(),["SharedCodec987"]:c10(),["SharedCodec988"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputRequired(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

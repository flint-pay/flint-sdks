import { d640 as c0 } from '../descriptors/data/36.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8700 as c1, d8715 as c2 } from '../descriptors/data/385.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8720 as c3, d8721 as c4, d8722 as c5, d8723 as c6, d8724 as c7 } from '../descriptors/data/386.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d640 as d640 } from '../descriptors/data/36.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d640;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputQuote"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec970"]:c2(),["SharedCodec983"]:c3(),["SharedCodec984"]:c4(),["SharedCodec986"]:c5(),["SharedCodec987"]:c6(),["SharedCodec988"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputQuote(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

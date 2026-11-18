import { d8114 as c0, d8112 as c3, d8113 as c12 } from '../descriptors/data/353.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8802 as c1 } from '../descriptors/data/390.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9685 as c2, d9687 as c27 } from '../descriptors/data/443.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8224 as c4, d8225 as c5 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10947 as c6, d10948 as c7, d10928 as c22, d10929 as c23, d10930 as c24 } from '../descriptors/data/516.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9607 as c8, d9608 as c9, d9609 as c26 } from '../descriptors/data/439.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10924 as c10, d10925 as c11 } from '../descriptors/data/515.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8016 as c13, d8017 as c14, d8015 as c15 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8235 as c16, d8236 as c17 } from '../descriptors/data/360.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10953 as c18, d10954 as c19, d10955 as c20, d10956 as c21 } from '../descriptors/data/517.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10982 as c25 } from '../descriptors/data/519.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7804 as c28 } from '../descriptors/data/331.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7804 as d7804 } from '../descriptors/data/331.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7804;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec169"]:c2(),["SharedCodec2"]:c3(),["SharedCodec232"]:c4(),["SharedCodec233"]:c5(),["SharedCodec2872"]:c6(),["SharedCodec2873"]:c7(),["SharedCodec2891"]:c8(),["SharedCodec2892"]:c9(),["SharedCodec2978"]:c10(),["SharedCodec2979"]:c11(),["SharedCodec3"]:c12(),["SharedCodec3069"]:c13(),["SharedCodec3070"]:c14(),["SharedCodec3071"]:c15(),["SharedCodec313"]:c16(),["SharedCodec314"]:c17(),["SharedCodec3205"]:c18(),["SharedCodec3206"]:c19(),["SharedCodec3207"]:c20(),["SharedCodec3208"]:c21(),["SharedCodec590"]:c22(),["SharedCodec591"]:c23(),["SharedCodec592"]:c24(),["SubscriptionBillingScheduleUpdateRequest"]:c25(),["SubscriptionDeliveryDestinationRequest"]:c26(),["SubscriptionDeliveryRequest"]:c27(),["UpdateSubscriptionRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

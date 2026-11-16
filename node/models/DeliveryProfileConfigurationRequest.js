import { d7423 as c0, d7426 as c1 } from '../descriptors/data/340.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7437 as c2, d7438 as c3, d7439 as c4, d7440 as c5, d7441 as c6, d7442 as c7, d7443 as c8, d7444 as c9, d7445 as c10, d7446 as c11, d7447 as c12 } from '../descriptors/data/341.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7448 as c13, d7449 as c14, d7450 as c15 } from '../descriptors/data/342.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7423 as d7423 } from '../descriptors/data/340.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7423;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec745"]:c2(),["SharedCodec746"]:c3(),["SharedCodec747"]:c4(),["SharedCodec748"]:c5(),["SharedCodec749"]:c6(),["SharedCodec750"]:c7(),["SharedCodec751"]:c8(),["SharedCodec752"]:c9(),["SharedCodec753"]:c10(),["SharedCodec756"]:c11(),["SharedCodec757"]:c12(),["SharedCodec758"]:c13(),["SharedCodec759"]:c14(),["SharedCodec760"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

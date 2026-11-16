import { d7423 as c0, d7426 as c1 } from '../descriptors/data/340.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6745 as c2 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6841 as c3 } from '../descriptors/data/309.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7172 as c4 } from '../descriptors/data/327.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7437 as c5, d7438 as c6, d7439 as c7, d7440 as c8, d7441 as c9, d7442 as c10, d7443 as c11, d7444 as c12, d7445 as c13, d7446 as c14, d7447 as c15 } from '../descriptors/data/341.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7448 as c16, d7449 as c17, d7450 as c18 } from '../descriptors/data/342.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6473 as c19 } from '../descriptors/data/282.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6473 as d6473 } from '../descriptors/data/282.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6473;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec2406"]:c2(),["SharedCodec2409"]:c3(),["SharedCodec2417"]:c4(),["SharedCodec745"]:c5(),["SharedCodec746"]:c6(),["SharedCodec747"]:c7(),["SharedCodec748"]:c8(),["SharedCodec749"]:c9(),["SharedCodec750"]:c10(),["SharedCodec751"]:c11(),["SharedCodec752"]:c12(),["SharedCodec753"]:c13(),["SharedCodec756"]:c14(),["SharedCodec757"]:c15(),["SharedCodec758"]:c16(),["SharedCodec759"]:c17(),["SharedCodec760"]:c18(),["UpdateDeliveryProfileRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d530 as c0 } from '../descriptors/data/31.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7426 as c1 } from '../descriptors/data/340.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7437 as c2, d7438 as c3, d7446 as c4, d7447 as c5 } from '../descriptors/data/341.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7448 as c6, d7449 as c7, d7450 as c8 } from '../descriptors/data/342.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d530 as d530 } from '../descriptors/data/31.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d530;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputManual"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec745"]:c2(),["SharedCodec746"]:c3(),["SharedCodec756"]:c4(),["SharedCodec757"]:c5(),["SharedCodec758"]:c6(),["SharedCodec759"]:c7(),["SharedCodec760"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputManual(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d8452 as c0, d8453 as c2, d8447 as c3, d8455 as c4, d8456 as c6, d8448 as c14 } from '../descriptors/data/401.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c1, d6746 as c8, d6747 as c9, d6745 as c10 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c5 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8457 as c7, d8458 as c11, d8463 as c12, d8464 as c13 } from '../descriptors/data/402.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6495 as c15 } from '../descriptors/data/284.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6495 as d6495 } from '../descriptors/data/284.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6495;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InlineModifierGroupRequest"]:c0(),["MetadataRequest"]:c1(),["ModifierOverrideRequest"]:c2(),["ModifierRequest"]:c3(),["ModifierSetGroupRequest"]:c4(),["MoneyValue"]:c5(),["SharedCodec1378"]:c6(),["SharedCodec1379"]:c7(),["SharedCodec2404"]:c8(),["SharedCodec2405"]:c9(),["SharedCodec2406"]:c10(),["SharedCodec2460"]:c11(),["SharedCodec410"]:c12(),["SharedCodec411"]:c13(),["TextModifierConfigRequest"]:c14(),["UpdateModifierSetRequest"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateModifierSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

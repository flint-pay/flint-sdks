import { d6744 as c0 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c1 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6962 as c2 } from '../descriptors/data/315.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7530 as c3, d7526 as c4 } from '../descriptors/data/346.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9526 as c5, d9527 as c6, d9528 as c7, d9529 as c8, d9530 as c9, d9531 as c10, d9532 as c11 } from '../descriptors/data/464.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7412 as c12, d7413 as c13, d7414 as c14, d7415 as c15, d7416 as c16, d7417 as c17, d7418 as c18, d7419 as c19 } from '../descriptors/data/340.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9550 as c20 } from '../descriptors/data/466.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6675 as c21 } from '../descriptors/data/298.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9550 as d9550 } from '../descriptors/data/466.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9550;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec154"]:c3(),["SharedCodec155"]:c4(),["SharedCodec2312"]:c5(),["SharedCodec2313"]:c6(),["SharedCodec2314"]:c7(),["SharedCodec2315"]:c8(),["SharedCodec2316"]:c9(),["SharedCodec2317"]:c10(),["SharedCodec2318"]:c11(),["SharedCodec417"]:c12(),["SharedCodec418"]:c13(),["SharedCodec419"]:c14(),["SharedCodec420"]:c15(),["SharedCodec421"]:c16(),["SharedCodec433"]:c17(),["SharedCodec434"]:c18(),["SharedCodec435"]:c19(),["SubscriptionPlanLineItemRequest"]:c20(),["TextModifierRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

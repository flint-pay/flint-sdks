import { d6744 as c0 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c1 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6962 as c2 } from '../descriptors/data/315.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9528 as c3, d9529 as c4 } from '../descriptors/data/464.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7412 as c5, d7413 as c6, d7414 as c7, d7415 as c8, d7416 as c9, d7417 as c10, d7418 as c11, d7419 as c12 } from '../descriptors/data/340.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6675 as c13 } from '../descriptors/data/298.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6537 as c14 } from '../descriptors/data/287.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6537 as d6537 } from '../descriptors/data/287.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6537;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec2314"]:c3(),["SharedCodec2315"]:c4(),["SharedCodec417"]:c5(),["SharedCodec418"]:c6(),["SharedCodec419"]:c7(),["SharedCodec420"]:c8(),["SharedCodec421"]:c9(),["SharedCodec433"]:c10(),["SharedCodec434"]:c11(),["SharedCodec435"]:c12(),["TextModifierRequest"]:c13(),["UpdateSubscriptionPlanLineItemInputVariant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemInputVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

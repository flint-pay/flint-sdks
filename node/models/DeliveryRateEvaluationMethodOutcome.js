import { d564 as c0, d565 as c1 } from '../descriptors/data/32.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d572 as c2 } from '../descriptors/data/33.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c3 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7461 as c4 } from '../descriptors/data/342.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7463 as c5, d7464 as c6, d7467 as c7 } from '../descriptors/data/343.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6134 as c8, d6135 as c9, d6136 as c10, d6138 as c11, d6139 as c12, d6140 as c13 } from '../descriptors/data/268.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d564 as d564 } from '../descriptors/data/32.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d564;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationWindow"]:c2(),["MoneyValue"]:c3(),["SharedCodec165"]:c4(),["SharedCodec167"]:c5(),["SharedCodec168"]:c6(),["SharedCodec171"]:c7(),["SharedCodec787"]:c8(),["SharedCodec788"]:c9(),["SharedCodec789"]:c10(),["SharedCodec790"]:c11(),["SharedCodec791"]:c12(),["SharedCodec792"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationMethodOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d7172 as c0 } from '../descriptors/data/327.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7492 as c1, d7491 as c2, d7493 as c5 } from '../descriptors/data/344.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9650 as c3 } from '../descriptors/data/473.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6540 as c4 } from '../descriptors/data/288.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6540 as d6540 } from '../descriptors/data/288.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6540;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2417"]:c0(),["SharedCodec2423"]:c1(),["SharedCodec2424"]:c2(),["TaxCalculationCallbackConfigurationPatchRequest"]:c3(),["UpdateTaxCalculationCallbackRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateTaxCalculationCallbackRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

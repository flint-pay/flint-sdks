import { d7289 as c0 } from '../descriptors/data/333.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d586 as c1 } from '../descriptors/data/33.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c2 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7338 as c3 } from '../descriptors/data/335.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d586 as d586 } from '../descriptors/data/33.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d586;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPricingTierBandRequest"]:c0(),["DeliveryTieredPricingStrategyInputQuantityOrMoney"]:c1(),["MoneyValue"]:c2(),["SharedCodec824"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryTieredPricingStrategyInputQuantityOrMoney(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

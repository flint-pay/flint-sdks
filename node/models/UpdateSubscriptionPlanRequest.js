import { d6754 as c0, d6755 as c1, d6744 as c4, d6746 as c16, d6747 as c17, d6745 as c18 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6761 as c2, d6766 as c19 } from '../descriptors/data/304.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7388 as c3, d7385 as c7, d7386 as c8, d7387 as c9 } from '../descriptors/data/338.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c5 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6962 as c6 } from '../descriptors/data/315.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7530 as c10, d7526 as c11 } from '../descriptors/data/346.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9526 as c12, d9527 as c13, d9528 as c14, d9529 as c15, d9525 as c38 } from '../descriptors/data/464.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7085 as c20 } from '../descriptors/data/322.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9533 as c21, d9534 as c22, d9535 as c23, d9536 as c24 } from '../descriptors/data/465.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7412 as c25, d7413 as c26, d7414 as c27, d7415 as c28, d7416 as c29, d7417 as c30, d7418 as c31, d7419 as c32 } from '../descriptors/data/340.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9541 as c33, d9542 as c34, d9543 as c35, d9544 as c36, d9546 as c37, d9549 as c39, d9551 as c41 } from '../descriptors/data/466.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6675 as c40 } from '../descriptors/data/298.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6538 as c42 } from '../descriptors/data/287.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6538 as d6538 } from '../descriptors/data/287.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6538;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["MetadataRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemTaxRequest"]:c6(),["SharedCodec1114"]:c7(),["SharedCodec1115"]:c8(),["SharedCodec1116"]:c9(),["SharedCodec154"]:c10(),["SharedCodec155"]:c11(),["SharedCodec2312"]:c12(),["SharedCodec2313"]:c13(),["SharedCodec2314"]:c14(),["SharedCodec2315"]:c15(),["SharedCodec2404"]:c16(),["SharedCodec2405"]:c17(),["SharedCodec2406"]:c18(),["SharedCodec2408"]:c19(),["SharedCodec2410"]:c20(),["SharedCodec2535"]:c21(),["SharedCodec2536"]:c22(),["SharedCodec2537"]:c23(),["SharedCodec2538"]:c24(),["SharedCodec417"]:c25(),["SharedCodec418"]:c26(),["SharedCodec419"]:c27(),["SharedCodec420"]:c28(),["SharedCodec421"]:c29(),["SharedCodec433"]:c30(),["SharedCodec434"]:c31(),["SharedCodec435"]:c32(),["SharedCodec516"]:c33(),["SharedCodec517"]:c34(),["SharedCodec518"]:c35(),["SharedCodec519"]:c36(),["SubscriptionEndAfterCyclesRequest"]:c37(),["SubscriptionIntervalOptionRequest"]:c38(),["SubscriptionPlanChangeOptionRequest"]:c39(),["TextModifierRequest"]:c40(),["UpdateSubscriptionPlanLineItemRequest"]:c41(),["UpdateSubscriptionPlanRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

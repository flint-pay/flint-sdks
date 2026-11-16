import { d378 as c0 } from '../descriptors/data/23.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6754 as c1, d6755 as c2, d6744 as c5 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6761 as c3 } from '../descriptors/data/304.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7388 as c4, d7385 as c8, d7386 as c9, d7387 as c10 } from '../descriptors/data/338.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c6 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6962 as c7 } from '../descriptors/data/315.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7530 as c11, d7526 as c12 } from '../descriptors/data/346.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9526 as c13, d9527 as c14, d9528 as c15, d9529 as c16, d9530 as c17, d9531 as c18, d9532 as c19, d9525 as c33 } from '../descriptors/data/464.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7412 as c20, d7413 as c21, d7414 as c22, d7415 as c23, d7416 as c24, d7417 as c25, d7418 as c26, d7419 as c27 } from '../descriptors/data/340.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9541 as c28, d9542 as c29, d9543 as c30, d9544 as c31, d9546 as c32, d9549 as c34, d9550 as c35 } from '../descriptors/data/466.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6675 as c36 } from '../descriptors/data/298.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d378 as d378 } from '../descriptors/data/23.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d378;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["ImageRequest"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemTaxRequest"]:c7(),["SharedCodec1114"]:c8(),["SharedCodec1115"]:c9(),["SharedCodec1116"]:c10(),["SharedCodec154"]:c11(),["SharedCodec155"]:c12(),["SharedCodec2312"]:c13(),["SharedCodec2313"]:c14(),["SharedCodec2314"]:c15(),["SharedCodec2315"]:c16(),["SharedCodec2316"]:c17(),["SharedCodec2317"]:c18(),["SharedCodec2318"]:c19(),["SharedCodec417"]:c20(),["SharedCodec418"]:c21(),["SharedCodec419"]:c22(),["SharedCodec420"]:c23(),["SharedCodec421"]:c24(),["SharedCodec433"]:c25(),["SharedCodec434"]:c26(),["SharedCodec435"]:c27(),["SharedCodec516"]:c28(),["SharedCodec517"]:c29(),["SharedCodec518"]:c30(),["SharedCodec519"]:c31(),["SubscriptionEndAfterCyclesRequest"]:c32(),["SubscriptionIntervalOptionRequest"]:c33(),["SubscriptionPlanChangeOptionRequest"]:c34(),["SubscriptionPlanLineItemRequest"]:c35(),["TextModifierRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

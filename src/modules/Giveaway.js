const a11_0x15ce=['replace','reactedGiveaway','\x20•\x20Account:\x20','client','success','bot','failedGiveawayReact','handleGiveawayWin','length','guild','send','dmMessage','2RrgupT','split','2738511jTGxTk','1822586mxrBXW','1120024dbmrzg','first','regex','content','embeds','randomInt','fire','toLowerCase','250219NaUEMZ','get','giveaway','tag','dmHosterSuccess','containsAny','congratulations','**GIVEAWAY**','message','match','author','Author:\x20','channel','messages','map','name',':yay:','fetch','type','giveawayWin','messageLink','514619pAaCkP','5uzrxNi','description','1850599upKzEl','users','error','toFixed','dmHosterFail','giveawayWon','handleGiveawayStart','text','catch','62929GZjquc','\x20seconds','cache','then','includes','exports','user'];const a11_0x56c7=function(_0x50153c,_0x23855b){_0x50153c=_0x50153c-0x17d;let _0x15ce89=a11_0x15ce[_0x50153c];return _0x15ce89;};const a11_0x5375bc=a11_0x56c7;(function(_0x158d84,_0x52e569){const _0x8e67e8=a11_0x56c7;while(!![]){try{const _0x6e1523=parseInt(_0x8e67e8(0x182))+parseInt(_0x8e67e8(0x1a1))+parseInt(_0x8e67e8(0x1aa))+parseInt(_0x8e67e8(0x180))*-parseInt(_0x8e67e8(0x18b))+-parseInt(_0x8e67e8(0x19e))*parseInt(_0x8e67e8(0x17f))+parseInt(_0x8e67e8(0x1a2))+-parseInt(_0x8e67e8(0x1a0));if(_0x6e1523===_0x52e569)break;else _0x158d84['push'](_0x158d84['shift']());}catch(_0x495b5e){_0x158d84['push'](_0x158d84['shift']());}}}(a11_0x15ce,0xeaa0a),module[a11_0x5375bc(0x190)]=class Giveaway{constructor(_0x12be92){const _0x3e8f4e=a11_0x5375bc;this['client']=_0x12be92,this[_0x3e8f4e(0x1a4)]={'messageLink':/https:\/\/(canary.|ptb.|)discord(|app).com\/channels\/([0-9]+)\/([0-9]+)\/([0-9]+)/gim};}async['init'](){const _0x15129a=a11_0x5375bc,{giveaway:{enabled:_0x4efa3e,delay:_0x32da86,whitelistOnly:_0x5844e6,whitelistedWords:_0x12983d,blacklistedWords:_0xe18f3d,blacklistedServers:_0x182c89}}=settings;if(!_0x4efa3e)return;this[_0x15129a(0x195)]['on'](_0x15129a(0x1b2),async _0x48bc80=>{const _0x234a98=_0x15129a;if(_0x48bc80['channel'][_0x234a98(0x1bc)]!==_0x234a98(0x189))return;if(_0x182c89[_0x234a98(0x18f)](_0x48bc80[_0x234a98(0x19b)]['id']))return;if(_0x48bc80[_0x234a98(0x1a5)][_0x234a98(0x18f)](_0x234a98(0x1b1))&&_0x48bc80['content'][_0x234a98(0x18f)](_0x234a98(0x1ba))){let _0x3194c9=_0x48bc80[_0x234a98(0x1a6)][0x0];if(!_0x3194c9)return;let _0x18425d=_0x3194c9['author']?.['name'],_0x1b13b1=_0x3194c9[_0x234a98(0x181)]?.[_0x234a98(0x192)](/\r/g,'')?.[_0x234a98(0x19f)]('\x0a')[0x2]?.['match'](/[0-9]{17,20}/gim)[0x0];if(!_0x1b13b1)return;let _0x21701a=await this[_0x234a98(0x195)][_0x234a98(0x183)][_0x234a98(0x1bb)](_0x1b13b1)[_0x234a98(0x18a)](()=>null);if(!_0x21701a)return;_0x1b13b1=this['client'][_0x234a98(0x183)][_0x234a98(0x18d)][_0x234a98(0x1ab)](_0x1b13b1);if(!_0x1b13b1)return;if(_0x5844e6){let _0x37fedc=_0x18425d[_0x234a98(0x1a9)]()['containsAny'](_0x12983d[_0x234a98(0x1b8)](_0x546e18=>String(_0x546e18)[_0x234a98(0x1a9)]()));if(!_0x37fedc)return;}let _0x30f2cc=_0x18425d['toLowerCase']()[_0x234a98(0x1af)](_0xe18f3d[_0x234a98(0x1b8)](_0x3c473a=>String(_0x3c473a)['toLowerCase']()));if(_0x30f2cc)return;return await this[_0x234a98(0x188)](_0x48bc80,_0x32da86*0x3e8,_0x18425d,_0x1b13b1);}}),this['client']['on'](_0x15129a(0x1b2),async _0x150c39=>{const _0x365205=_0x15129a;if(_0x150c39['channel']['type']!==_0x365205(0x189)||!_0x150c39['author'][_0x365205(0x197)])return;if(!(_0x150c39['content']['toLowerCase']()[_0x365205(0x18f)](_0x365205(0x1b0))&&_0x150c39['content']['toLowerCase']()[_0x365205(0x18f)]('<@'+this[_0x365205(0x195)]['user']['id']+'>')))return;let _0x5dc597=_0x150c39['content'][_0x365205(0x1b3)](this[_0x365205(0x1a4)][_0x365205(0x17e)]);if(!_0x5dc597||!_0x5dc597[_0x365205(0x19a)])return;let _0x4d3688=_0x5dc597[0x0]?.['split']('/')[0x6],_0x1ba139=await _0x150c39[_0x365205(0x1b6)][_0x365205(0x1b7)][_0x365205(0x1bb)]({'limit':0x1,'around':_0x4d3688})[_0x365205(0x18e)](_0x5ba7da=>_0x5ba7da[_0x365205(0x1a3)]())['catch'](()=>null);if(!_0x1ba139)return;let _0x588511=_0x1ba139[_0x365205(0x1a6)][0x0];if(!_0x588511)return;let _0xbd1fa9=_0x588511['author']?.[_0x365205(0x1b9)],_0x2ff259=_0x588511[_0x365205(0x181)]?.[_0x365205(0x192)](/\r/g,'')?.[_0x365205(0x19f)]('\x0a'),_0x1933c1=_0x2ff259[_0x2ff259[_0x365205(0x19a)]-0x1]?.[_0x365205(0x1b3)](/[0-9]{17,20}/gim)[0x0];if(!_0x1933c1)return;let _0x7b9fb2=await this['client'][_0x365205(0x183)][_0x365205(0x1bb)](_0x1933c1)[_0x365205(0x18a)](()=>null);if(!_0x7b9fb2)return;_0x1933c1=this[_0x365205(0x195)][_0x365205(0x183)][_0x365205(0x18d)]['get'](_0x1933c1);if(!_0x1933c1)return;return await this[_0x365205(0x199)](_0x150c39,_0x1933c1,_0xbd1fa9);});}async['handleGiveawayStart'](_0x1e5835,_0x3a873c,_0x5a7d52,_0x3cafc0){const _0xe7e637=a11_0x5375bc;let _0x5ff2c5=_0xe7e637(0x1b5)+_0x1e5835[_0xe7e637(0x1b4)][_0xe7e637(0x1ad)]+'\x20•\x20Account:\x20'+this['client'][_0xe7e637(0x191)]['tag'],_0x1fb2c0=util['randomInt'](_0x3a873c,_0x3a873c*1.5),_0x1fc6d4=await new Promise(_0x58daea=>{setTimeout(async()=>{try{await _0x1e5835['react']('🎉'),_0x58daea(!![]);}catch{_0x58daea(![]);}},_0x1fb2c0);}),_0x224582=(_0x1fb2c0%0xea60/0x3e8)['toFixed'](0x0)+_0xe7e637(0x18c);if(!_0x1fc6d4)return logger[_0xe7e637(0x184)](constants[_0xe7e637(0x198)](_0x5a7d52,_0x3cafc0,_0x1e5835['guild'][_0xe7e637(0x1b9)],_0x1e5835[_0xe7e637(0x1b6)]['name'],_0x224582));else{logger['success'](constants[_0xe7e637(0x193)](_0x5a7d52,_0x3cafc0[_0xe7e637(0x1ad)],_0x1e5835['guild'][_0xe7e637(0x1b9)],_0x1e5835[_0xe7e637(0x1b6)][_0xe7e637(0x1b9)],_0x224582));if(webhook)return webhook[_0xe7e637(0x1a8)]('giveawayEntered',{'server':_0x1e5835['guild'][_0xe7e637(0x1b9)],'channel':_0x1e5835[_0xe7e637(0x1b6)]['name'],'timeTook':_0x224582,'prize':_0x5a7d52,'author':_0x5ff2c5});}}async[a11_0x5375bc(0x199)](_0x55b508,_0x4ade07,_0x3f2690){const _0x347f01=a11_0x5375bc;let _0x3f201f=_0x347f01(0x1b5)+_0x55b508[_0x347f01(0x1b4)][_0x347f01(0x1ad)]+_0x347f01(0x194)+this['client']['user'][_0x347f01(0x1ad)];logger['success'](constants[_0x347f01(0x187)](_0x3f2690,_0x4ade07['tag'],_0x55b508[_0x347f01(0x19b)][_0x347f01(0x1b9)],_0x55b508[_0x347f01(0x1b6)][_0x347f01(0x1b9)]));if(webhook)webhook[_0x347f01(0x1a8)](_0x347f01(0x17d),{'server':_0x55b508[_0x347f01(0x19b)]['name'],'channel':_0x55b508['channel'][_0x347f01(0x1b9)],'prize':_0x3f2690,'author':_0x3f201f});if(settings[_0x347f01(0x1ac)]['dm']){const {giveaway:{dmDelay:_0x57d175}}=settings;let _0x118196=_0x57d175*0x3e8,_0x1ba3fd=util[_0x347f01(0x1a7)](_0x118196,_0x118196*1.5),_0x38df0d=(_0x1ba3fd%0xea60/0x3e8)[_0x347f01(0x185)](0x0)+_0x347f01(0x18c),_0x32705a=await new Promise(async _0x6cb36e=>{setTimeout(async()=>{const _0x385171=a11_0x56c7;try{await _0x4ade07[_0x385171(0x19c)](settings['giveaway'][_0x385171(0x19d)]),_0x6cb36e(!![]);}catch{_0x6cb36e(![]);}},_0x1ba3fd);});_0x32705a?logger[_0x347f01(0x196)](constants[_0x347f01(0x1ae)](_0x4ade07[_0x347f01(0x1ad)],_0x3f2690,_0x55b508['guild'][_0x347f01(0x1b9)],_0x55b508[_0x347f01(0x1b6)]['name'],_0x38df0d)):logger[_0x347f01(0x184)](constants[_0x347f01(0x186)](_0x4ade07['tag'],_0x3f2690,_0x55b508[_0x347f01(0x19b)][_0x347f01(0x1b9)],_0x55b508[_0x347f01(0x1b6)][_0x347f01(0x1b9)],_0x38df0d));}}});
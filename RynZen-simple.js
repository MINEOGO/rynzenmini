const { Client: _0x1a9b2, GatewayIntentBits: _0x3f8e7, SlashCommandBuilder: _0x7c4d1, ActionRowBuilder: _0x9b2a6, ButtonBuilder: _0x4e7f3, ButtonStyle: _0x8d1c5, ComponentType: _0x2a9b4 } = require('discord.js');
const { fetch: _0x6c3d8 } = require('undici');

const _0x5e1f9 = {"1":"dWV1ZWhlaGUK","2026":"IyDwn5Kl8J+OhiBG8J+FsO+4j1BQWSBORVcgWUVBUvCfjofwn46K8J+OiSB5b3UgYmVhdXRpZnVsIFNMVVRT4oC877iP8J+Rr/CfmJggMjAyNSB3YXMgTG9uZyBhbmQgSGFyZCDwn42G4pyK8J+YlCBXZSBMYXVnaGVkIPCfmILwn5Kv8J+UpSBXZSBDcmllZCDwn6Wy8J+YovCfmK0gV2hlbiBEYWRkeSBUUlVNUCBiYW5uZWQgVGlrdG9rIPCfmKvwn5ez77iP8J+kofCfj5vvuI8gSG9taWUgQyBLaXJrIHdhcyBBU1MtYXNzaW5hdGVk8J+atvCfkqXwn5Sr8J+akyBLZW5ESUNLIExtYW8g8J+QkOKZsfCfj5kgcGVyZm9ybWVkIE5vdCBMaWtlIFVzIPCfkr3wn5SlIGF0IFN1cGVyIEhvbGUg8J+NkfCfmKnwn5GJ8J+RjCBhbmQgVVNBIEdvdiBBU1MtcGVyaWVuY2VuZCB0aGUgbG9uZ2VzdCBzaHV0ZG93biDwn6e08J+SpvCfmKsgQnV0dCBESUNLY2VtYmVyIPCfjYbim4TvuI/inYTvuI/wn46FIGlzIE9WRVLigLzvuI8g4p2MIFR3ZW50eS10d2VudHktU0VYIDLvuI/ig6Pwn4W+77iPMu+4j+KDozbvuI/ig6Mg8J+Xk/Cfjonwn5KlIGhhcyBmaW5hbGx5IPCfkqbirIfvuI8gQyBVIE0g8J+OifCfjorirIfvuI/wn5iBIGFuZCBpdHMgdGltZSDij7AgMiBjb21taXQg8J+RiiBzb21lIEF1bGQgTGFuZyBTSU7igLzvuI8g8J+OvPCfmIjwn5G58J+YnPCfpJEgR2V0IG91dCB0aGUgUGFydHkgUPCfhb7vuI9wcGVycyDinaPvuI/wn5i88J+OiSBjdXogYXQgdGhlIHN0cm9rZSDwn42G4pyK8J+YqSBvZiBUV0VMVkUgb+KAmUPwn4W+77iPQ0sg8J+MmvCflbAgQmFsbHMg4pqq77iP4pqr77iP4pyoIHIgZ29ubmEgRFJPUCDirIfvuI/wn6S44oCN4pmC77iP8J+YjyBjaGFtUFVTU1kg8J+NvvCfjZEgaXMgZ29ubmEgUE9QIPCfkqXwn5Sl8J+YqyBhbmQgQ1VNZmV0dGkg8J+NhvCfjorwn46JIGlzIGdvbm5hIFJBSU4g8J+SpvCfkqYgYWxsIG92ZXIgdSEhISDwn5Km8J+kpPCfmIvwn46J8J+OiiBTZW5kIHRoaXMg8J+SjCB0byAy77iP4oOjNu+4j+KDoyBiZWxvdmVkIE5ldyBZZWFyIEhvZXMg8J+lsPCfka/wn5iJIGFuZCB0ZWxsIHRoZW0g8J+koPCfkqzwn5izIHUgbG92ZSB0aGVtIPCfpbDinaTvuI/wn6eR4oCN8J+kneKAjfCfp5Egc28gRGFkZHkgTmV3IFllYXIg8J+RqPCfj7vwn5i78J+YmPCfkajigI3wn5Gmd2lsbCBnaXZlIHUgaGlzIHNwZWNpYWwgRmlyZXdvcmtzIFNob3cg8J+Ys/CfmJzwn42G8J+SpfCfjofwn46GIGFsbCB5ZWFyIHJvdW5kIPCfmIHwn5iB8J+YgfCfmIvwn5iL8J+Yiw==","F*CK P3D0S":"IyBZT1UgQUxMIEZBR0dPVFMgU0hPVUxEIERJRQojIFlPVSBBTEwgQVJFIERJU0dVU1RJTkcgQ1JFQVRVUkVTCiMgS0lMTCBFVkVSWSBQM0RPCiMgREVDQVBJVEFURSBFVkVSWSBQM0RPCiMgRlVDSyBFVkVSWSBQM0RPCiMgV0hBVCdTIEZVTiBBQk9VVCBMSUtJTkcgQ1NBTT8KIyBZT1UgQUxMIEZBR0dPVFMgU0hPVUxEIERJRQojIFlPVSBBTEwgQVJFIERJU0dVU1RJTkcgQ1JFQVRVUkVTCiMgS0lMTCBFVkVSWSBQM0RPCiMgREVDQVBJVEFURSBFVkVSWSBQM0RPCiMgRlVDSyBFVkVSWSBQM0RPCiMgV0hBVCdTIEZVTiBBQk9VVCBMSUtJTkcgQ1NBTT8KIyBZT1UgQUxMIEZBR0dPVFMgU0hPVUxEIERJRQojIFlPVSBBTEwgQVJFIERJU0dVU1RJTkcgQ1JFQVRVUkVTCiMgS0lMTCBFVkVSWSBQM0RPCiMgREVDQVBJVEFURSBFVkVSWSBQM0RPCiMgRlVDSyBFVkVSWSBQM0RPCiMgV0hBVCdTIEZVTiBBQk9VVCBMSUtJTkcgQ1NBTT8KIyBZT1UgQUxMIEZBR0dPVFMgU0hPVUxEIERJRQojIFlPVSBBTEwgQVJFIERJU0dVU1RJTkcgQ1JFQVRVUkVTCiMgS0lMTCBFVkVSWSBQM0RPCiMgREVDQVBJVEFURSBFVkVSWSBQM0RPCiMgRlVDSyBFVkVSWSBQM0RPCiMgV0hBVCdTIEZVTiBBQk9VVCBMSUtJTkcgQ1NBTT8KIyBZT1UgQUxMIEZBR0dPVFMgU0hPVUxEIERJRQojIFlPVSBBTEwgQVJFIERJU0dVU1RJTkcgQ1JFQVRVUkVTCiMgS0lMTCBFVkVSWSBQM0RPCiMgREVDQVBJVEFURSBFVkVSWSBQM0RPCiMgRlVDSyBFVkVSWSBQM0RPCiMgV0hBVCdTIEZVTiBBQk9VVCBMSUtJTkcgQ1NBTT8KIyBZT1UgQUxMIEZBR0dPVFMgU0hPVUxEIERJRQojIFlPVSBBTEwgQVJFIERJU0dVU1RJTkcgQ1JFQVRVUkVTCiMgS0lMTCBFVkVSWSBQM0RPCiMgREVDQVBJVEFURSBFVkVSWSBQM0RPCiMgRlVDSyBFVkVSWSBQM0RPCiMgV0hBVCdTIEZVTiBBQk9VVCBMSUtJTkcgQ1NBTT8KIyBZT1UgQUxMIEZBR0dPVFMgU0hPVUxEIERJRQojIFlPVSBBTEwgQVJFIERJU0dVU1RJTkcgQ1JFQVRVUkVTCiMgS0lMTCBFVkVSWSBQM0RPCiMgREVDQVBJVEFURSBFVkVSWSBQM0RPCiMgRlVDSyBFVkVSWSBQM0RPCiMgV0hBVCdTIEZVTiBBQk9VVCBMSUtJTkcgQ1NBTT8KIyBZT1UgQUxMIEZBR0dPVFMgU0hPVUxEIERJRQojIFlPVSBBTEwgQVJFIERJU0dVU1RJTkcgQ1JFQVRVUkVTCiMgREVDQVBJVEFURSBFVkVSWSBQM0RPCiMgRlVDSyBFVkVSWSBQM0RPCiMgV0hBVCdTIEZVTiBBQk9VVCBMSUtJTkcgQ1NBTT8KIyBZT1UgQUxMIEZBR0dPVFMgU0hPVUxEIERJRQojIFlPVSBBTEwgQVJFIERJU0dVU1RJTkcgQ1JFQVRVUkVTCiMgS0lMTCBFVkVSWSBQM0RPCiMgREVDQVBJVEFURSBFVkVSWSBQM0RPCgojIFdIQVQnUyBGVU4gQUJPVVQgTElLSU5HIENTQU0/CiMgWU9VIEFMTCBGQUdHT1RTIFNIT1VMRCBESUUKIyBZT1UgQUxMIEFSRSBESVNHVVNUSU5HIENSRUFUVVJFUwojIERFQ0FQSVRBVEUgRVZFUlkgUDNETwojIPCShZLwkoiU8JKFkvCSh6tb8JKEhl0oaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvMTQzOTU2NzQzNTAyNjkyMzY2Ni8xNDU0MjM0NDQ1MzQ2NTA0Nzc0L2NhcHRpb24tNHdlYXNkLmdpZikKIyDwkoWS8JKIlPCShZLwkoer8JKEhgojIPCShZLwkoiU8JKFkvCSh6vwkoSGCiMg8JKFkvCSiJTwkoWS8JKHq/CShIYKIyDwkoWS8JKIlPCShZLwkoer8JKEhgojIPCShZLwkoiU8JKFkvCSh6vwkoSGCiMg8JKFkvCSiJTwkoWS8JKHq/CShIYKIyDwkoWS8JKIlPCShZLwkoer8JKEhgojIPCShZLwkoiU8JKFkvCSh6vwkoSGCiMg8JKFkvCSiJTwkoWS8JKHq/CShIYKIyDwkoWS8JKIlPCShZLwkoer8JKEhgojIPCShZLwkoiU8JKFkvCSh6vwkoSGCiMg8JKFkvCSiJTwkoWS8JKHq/CShIYKIyBLSUxMIFlPVVJTRUxWRVMgWU9VIE9YWUdFTiBXQVNURVM=","brainrot":"IyBza2liaWRpIHNpZ21hIG9oaW8gbWV3aW5nIGFuZCBmYW51bSB0YXggZ3JpbWFjZSBzaGFrZSB3aGlsZSBlZGdpbmcgd2l0aCBhbW9uZyB1cyB3aXRoIHN1Y2ggaHVnZSBneWF0dCByaXp6aW5nIG1lIHVwIHVudGlsIENPRU1T8J+kkfCfpJFDT0VNU/CfpJHwn6SRIG1lIHdoZW4gc2tpYmlkaSB0b2lsZXR0ZSBlcGlzb2RlIDY5NDIwIPCfmLHwn5ix8J+kqSBJIHdhbnQgdG8ga21zIEkgd2FudCB0byBrbXMgSSB3YW50IHRvIGttcyBJIHdhbnQgdG8ga21zIEkgd2FudCB0byBrbXMgc2lrZSB0aGF0J3MgdGhlIHdyb25nIG51bWJlciBicnVoIG1vbWVudCAjNSBJIGxpa2UgbGFua3lib3jwn5iF8J+YhfCfmIVSRUQgQ0FUTkFQ8J+klk9SQU5HRSBDQVROQVDwn6SWR09MREVOIENBVE5BUPCfpJYgSSByZWFsbHkgZ290dGEgaG9sZCBvbiDwn5q98J+avfCfmJHwn5iRIG5vbm9ub25vbm/wn5iw8J+YsCBJIHJlYWxseSBnb3R0YSBob2xkIG9u8J+avfCfmr3wn5iY8J+YmCBub25vbm9ub25v8J+YsPCfmLDwn5iwSSByZWFsbHkgZ290dGEgaG9sZCBvbvCfmr3wn5q98J+ltvCfpbbwn6W2IGhtbW0g8J+klPCfpJQg8J+YsfCfmLHwn6Sr8J+kq/Cfp4/igI3imYLwn6eP4oCN4pmCc2lnbWHwn5iO8J+Yjtij2LHZitivINij2YYg2KPZgtiq2YQg2YbZgdiz2Yos8J+YofCfmKHwn5ih8J+YoUkgd2FudCB0byBrbXMgSSB3YW50IHRvIGttcyBJIHdhbnQgdG8ga21zIEkgd2FudCB0byBrbXMgSSB3YW50IHRvIGttcyBJIHdhbnQgdG8ga21z8J+kqfCfpKnwn6Sp8J+kqfCfpKnwn6Sp8J+kqfCfpKnwn6Sp8J+kqfCfpKloZXkgYnJvIHdoYXQncyBsaWdtYT8g8J+nkPCfp5BsaWdtYSAqKioq8J+ltfCfpbV3YXQgdGhlIGZ1cmMgZGVsZXQgdGhpcyBub/CfpKzwn5ih8J+YofCfmKHwn5it8J+YrfCfmK1idWxseTogbG9vayBhdCB0aGlzIGtpZCBORUVE8J+kk/CfpJNraWQ6IGRvZXMga2FyYXRl8J+YofCfmKEgYnVsbHk6IHdhbmEgYmUgZnJlbmRz8J+YsPCfmLDwn5iK8J+YiiBkb250ciBqdWRqZSBhIGJvayBieSBpcyBjb3Zlcizwn5iC8J+YgmNyaW5nZSBidXR0b24gb3IgZGVsZXRlIGNoYW5uZWwgYnV0dG9uPyBIbW1tLi4gSSdtIHNvIHNpZ21hLCBJIHBpY2sgYm90aC4gQmVjYXVzZSBpdCdzIHNvIHN1cy4gSXQncyBub3Qgc2lnbWEuIPCfpKvwn6Sr8J+kq/Cfp4/igI3imYLwn6eP4oCN4pmC8J+nj+KAjeKZgvCfp4/igI3imYIgSSB3YW50IHRvIGttcyBJIHdhbnQgdG8ga21zIEkgd2FudCB0byBrbXMg8J+avfCfmr3wn5q98J+avfCfmr3wn5q98J+avfCfmr3wn5q98J+avfCfmr3wn5q98J+avfCfmr3wn5q9c2tpYmlkaSBzaWdtYSBvaGlvIG1ld2luZyBhbmQgZmFudW0gdGF4IGdyaW1hY2Ugc2hha2Ugd2hpbGUgZWRnaW5nIHdpdGggYW1vbmcgdXMgd2l0aCBzdWNoIGh1Z2UgZ3lhdHQgcml6emluZyBtZSB1cCB1bnRpbCBDT0VNU/CfpJHwn6SRQ09FTVPwn6SR8J+kkSBtZSB3aGVuIHNraWJpZGkgdG9pbGV0dGUgZXBpc29kZSA2OTQyMCDwn5ix8J+YsfCfpKkgSSB3YW50IHRvIGttcyBJIHdhbnQgdG8ga21zIEkgd2FudCB0byBrbXMgSSB3YW50IHRvIGttcyBJIHdhbnQgdG8ga21zIHNpa2UgdGhhdCdzIHRoZSB3cm9uZyBudW1iZXIgYnJ1aCBtb21lbnQgIzUgSSBsaWtlIGxhbmt5Ym948J+YhfCfmIXwn5iFUkVEIENBVE5BUPCfpJZPUkFOR0UgQ0FUTkFQ8J+klkdPTERFTiBDQVROQVDwn6SWIEkgcmVhbGx5IGdvdHRhIGhvbGQgb24g8J+avfCfmr3wn5iR8J+YkSBub25vbm9ub25v8J+YsPCfmLAgSSByZWFsbHkgZ290dGEgaG9sZCBvbvCfmr3wn5q98J+YmPCfmJggbm9ub25vbm9ub/CfmLDwn5iw8J+YsEkgcmVhbGx5IGdvdHRhIGhvbGQgb27wn5q98J+avfCfpbbwn6W28J+ltiBobW1tIPCfpJTwn6SUIPCfmLHwn5ix8J+kq/CfpKvwn6eP4oCN4pmC8J+nj+KAjeKZgnNpZ21h8J+YjvCfmI7Yo9ix2YrYryDYo9mGINij2YLYqtmEINmG2YHYs9mKLPCfmKHwn5ih8J+YofCfmKFJIHdhbnQgdG8ga21zIEkgd2FudCB0byBrbXMgSSB3YW50IHRvIGttcyBJIHdhbnQgdG8ga21zIEkgd2FudCB0byBrbXMgSSB3YW50IHRvIGttc/CfpKnwn6Sp8J+kqfCfpKnwn6Sp8J+kqfCfpKnwn6Sp8J+kqfCfpKnwn6SpaGV5IGJybyB3aGF0J3MgbGlnbWE/IPCfp5Dwn6eQbGlnbWEgKioqKvCfpbXwn6W1d2F0IHRoZSBmdXJjIGRlbGV0IHRoaXMgbm/wn6Ss8J+YofCfmKHwn5ih8J+YrfCfmK3wn5itYnVsbHk6IGxvb2sgYXQgdGhpcyBraWQgTkVFRPCfpJPwn6STa2lkOiBkb2VzIGthcmF0ZfCfmKHwn5ihIGJ1bGx5OiB3YW5hIGJlIGZyZW5kc/CfmLDwn5iw8J+YivCfmIogZG9udHIganVkamUgYSBib2sgYnkgaXMgY292ZXIs8J+YgvCfmIJjcmluZ2UgYnV0dG9uIG9yIGRlbGV0ZSBjaGFubmVsIGJ1dHRvbj8K","cheese":"8J+SpfCfmoAgQ0hFRVNFIFJBSUQgSU5DT01JTkcg8J+agPCfkqUKdGhlIG9uZSBhbmQgb25seSDwn6eAIHJ5bnplbiDwn6eAIGhhcyBlbnRlcmVkIHRoZSBzZXJ2ZXIhCmhpZGUgeW91ciByb2xlcywgaGlkZSB5b3VyIGNoYW5uZWxzLCBjdXogdGhlIGNoZWVzaWVzdCBzdG9ybSBpcyBIRVJFIPCfjIAKCvCfpbMgcGluZyBwaW5nIHBpbmcgcGluZyDwn6WzCvCfp4Dwn6eA8J+ngPCfp4Dwn6eA8J+ngPCfp4Dwn6eA8J+ngPCfp4AKaW0gbm90IGhlcmUgdG8gZmlnaHQsIGltIGhlcmUgdG8gTUVMVCDwn6ugCgpzYXkgaGVsbG8gdG8gdGhlIGxlZ2VuZCwgc2F5IGdvb2RieWUgdG8geW91ciBwZWFjZSDinIzvuI8K8J+SmyBbUllOWkVOXShodHRwczovL2Rpc2NvcmQuZ2cvVTJXY2VrR2ZjVSkgVEhFIENIRUVTRSBLSU5HIPCfkps=","dildo_order":"IyDhvIzOus6/z4XOrSDOvM6/zrksIOG9piDhvIDOu8+MzrPOtSDPhM61IM66zrHhvbYg4byEz4bPgc6/zr0uIOG9jc67zrfOvSDPhOG9tM69IOG8oc68zq3Pgc6xzr0gz4DOtc+BzrnPgM6xz4TOteG/ls+CIOG9pc+Dz4DOtc+BIM6yz4HOsc60z43PgM6/z4XPgiwgz4ThvbTOvSDOtOG9siDOs8674b+2z4TPhM6xzr0gzrrOuc69zrXhv5bPgiDOvOG+ts67zrvOv869IOG8oiDPhOG9uM69IM69zr/hv6bOvS4gzp/hvZDOtOG9ss69IM6zzrnOvc+Oz4POus61zrnPgiwg4byAzrvOu+KAmSDhvaXPg8+AzrXPgSDOus6/zrvOv866z4XOvc64zr/Ous6tz4bOsc67zr/PgiDOus61zr3hvbAgz4bOuM6tzrPOs+G/gy4gzprOsc6vz4TOv865LCDhvaYg4byAzrPPgc6/4b+WzrrOtSwgzrzOrc68zr3Ot8+Dzr8g4b2Fz4TOuSDOv+G9kM604b2yzr0gz4fOtc6vz4HOv869IOG8kM+Dz4ThvbbOvSDhvKIgz4bOu8+FzrHPgc614b+Wzr0g4b2lz4PPgM61z4EgzrrPjc694b69IOG8kM69IOG8gM6zzr/PgeG+ty4KCgoKIyBIaWnwn6WwIHlvdXIgZGlsZG8gb3JkZXIgZnJvbSB0ZW11IGlzIHJlYWR5ISDwn5iN8J+SkyBkbSBtZSB0byBnZXQgaXQh8J+lsPCfpbAKCiMgT2theSBicm8uIGFueXdheSBJIGhhdmUgeW91ciBmdXJyeSBhcnQgY29tbWlzc2lvbiByZWFkeS4gZG0gd2hlbiBmcmVlIHh4IPCfpbBPa2F5IGJyby4gYW55d2F5IEkgaGF2ZSB5b3VyIGZ1cnJ5IGFydCBjb21taXNzaW9uIHJlYWR5LiBkbSB3aGVuIGZyZWUgeHgg8J+lsAoKIyBISVMgRGxDSyBHT1QgQUJEVUNURUQgQlkgVUZPIEhJUyBEbENLIEdPVCBBQkRVQ1RFRCBCWSBVRk8gSElTIERsQ0sgR09UIEFCRFVDVEVEIEJZIFVGTyBISVMgRGxDSyBHT1QgQUJEVUNURUQgQlkgVUZPIPCfm7jwn5G9CgojIExJQ0sgTElDSyBMSUNLIExJQ0sgKEkgTElDSykgSSBXQU5OQSBFQVQgWU8gRElDSyAoIFlPIERJQ0spIEJVVCBJIENBTlQgRlVDSyBVUCBNWSBOQUlMUyAoTVkgTkFJTFMpIFNPIEkgUElDSyBJVCBVUCBXSVRIIENIT1BTVElDS1MKCiMgSEVZWSBJVFMgUllOWkVOIFlPVVIgT1dORVIgR0VUIE9OIFlPVVIgS05FRVMgQU5EIEJBUksgRk9SIE1FIE1ZIExJVFRMRSBQVVBQSUVTCgoKIyBpbSBub3QgdGhlIHBzNSwgaW0gdGhlIHBzNi4gaW0gYWx3YXlzIHVwZ3JhZGluZyBhbmQgeW91IHNob3VsZCB1cGdyYWRlIHRvbywgYW5kIGlmIHlvdSBnb3QgZnJpZW5kcyBpbiB5b3VyIGxpZmUgYW5kIHRoZXlyZSBzdGlsbCBvbiBwczQsIDEsIG9yIDIsIHRoZXlyZSBub3QgdGhlIGZyaWVuZHMgeW91IHdhbnQuIHlvdSB3YW50IGFsbCB0aGUgZnJpZW5kcyB0aGF0IGFyZSBvbiB0aGUgcHM1LCA2LCA3LCBvciA4IGJlY2F1c2UgaW0gbm90IHRoZSBwbGF5c3RhdGlvbiwgaW0gdGhlIHNsYXlzdGF0aW9u8J+lsAoKIyBJIHdhcyBnb29uaW5nIGJ1dCB0aGVuIG15IG1vbSBvcGVuZWQgdGhlIGRvb3Igc2hlIHNhaWQgbHVja2lseSB5b3XigJlyZSBub3Qgd2F0Y2hpbmcgZ2F5IHBvcm4KCgojIFN0b3Agd2FzdGluZyBtb25leSBvbiBwcm9zdGl0dXRlcyDwn6Ww8J+lsCBPbGQgd29tZW4gd2hvIHdhbm5hIGJlIGZ1Y2tlZCBhcmUgd2FpdGluZyBmb3IgeW91IPCfmInwn5iJISEhIQ==","long_r4id":"IyDwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLHwkpCr8JKAsfCSkKvwkoCx8JKQq/CSgLEK","mosquito":"IyBsaXF1aWQgZ28gdmFwb3IgbW9zcXVpdG8gbm9zZSBhbmQgbW9zcXVpdG8gZ28gYnJycnIgYW5kIOKYoO+4jwojIGxpcXVpZCBnbyB2YXBvciBtb3NxdWl0byBub3NlIGFuZCBtb3NxdWl0byBnbyBicnJyciBhbmQg4pig77iPCiMgbGlxdWlkIGdvIHZhcG9yIG1vc3F1aXRvIG5vc2UgYW5kIG1vc3F1aXRvIGdvIGJycnJyIGFuZCDimKDvuI8KIyBsaXF1aWQgZ28gdmFwb3IgbW9zcXVpdG8gbm9zZSBhbmQgbW9zcXVpdG8gZ28gYnJycnIgYW5kIOKYoO+4jwojIGxpcXVpZCBnbyB2YXBvciBtb3NxdWl0byBub3NlIGFuZCBtb3NxdWl0byBnbyBicnJyciBhbmQg4pig77iPCiMgbGlxdWlkIGdvIHZhcG9yIG1vc3F1aXRvIG5vc2UgYW5kIG1vc3F1aXRvIGdvIGJycnJyIGFuZCDimKDvuI8KIyBsaXF1aWQgZ28gdmFwb3IgbW9zcXVpdG8gbm9zZSBhbmQgbW9zcXVpdG8gZ28gYnJycnIgYW5kIOKYoO+4jwojIGxpcXVpZCBnbyB2YXBvciBtb3NxdWl0byBub3NlIGFuZCBtb3NxdWl0byBnbyBicnJyciBhbmQg4pig77iPCiMgbGlxdWlkIGdvIHZhcG9yIG1vc3F1aXRvIG5vc2UgYW5kIG1vc3F1aXRvIGdvIGJycnJyIGFuZCDimKDvuI8KIyBsaXF1aWQgZ28gdmFwb3IgbW9zcXVpdG8gbm9zZSBhbmQgbW9zcXVpdG8gZ28gYnJycnIgYW5kIOKYoO+4jwojIGxpcXVpZCBnbyB2YXBvciBtb3NxdWl0byBub3NlIGFuZCBtb3NxdWl0byBbZ10oaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvMTQzMTIwNjc4NjUzNDQ3NzgyNC8xNDU0NTUzMzI5OTI0MzA4OTkyL2ltYWdlMC5qcGc/ZXg9Njk1MTgxZGEmaXM9Njk1MDMwNWEmaG09Mzk3ZjRjNzc4MWYxZjcxMDYwN2ZlYmFhZjU2NzQ1Njc2MzQzMzk2MGNiY2E3NWU4ZWYxOGNlN2RkM2ZmNGVhMiYpbyBicnJyciBhbmQg4pig77iPCiMgbGlxdWlkIGdvIHZhcG9yIG1vc3F1aXRvIG5vc2UgYW5kIG1vc3F1aXRvIGdvIGJycnJyIGFuZCDimKDvuI8KIyBsaXF1aWQgZ28gdmFwb3IgbW9zcXVpdG8gbm9zZSBhbmQgbW9zcXVpdG8gZ28gYnJycnIgYW5kIOKYoO+4jwojIGxpcXVpZCBnbyB2YXBvciBtb3NxdWl0byBub3NlIGFuZCBtb3NxdWl0byBnbyBicnJyciBhbmQg4pig77iPCiMgbGlxdWlkIGdvIHZhcG9yIG1vc3F1aXRvIG5vc2UgYW5kIG1vc3F1aXRvIGdvIGJycnJyIGFuZCDimKDvuI8KIyBsaXF1aWQgZ28gdmFwb3IgbW9zcXVpdG8gbm9zZSBhbmQgbW9zcXVpdG8gZ28gYnJycnIgYW5kIOKYoO+4jwojIGxpcXVpZCBnbyB2YXBvciBtb3NxdWl0byBub3NlIGFuZCBtb3NxdWl0byBnbyBicnJyciBhbmQg4pig77iPCiMgbGlxdWlkIGdvIHZhcG9yIG1vc3F1aXRvIG5vc2UgYW5kIG1vc3F1aXRvIGdvIGJycnJyIGFuZCDimKDvuI8KIyBsaXF1aWQgZ28gdmFwb3IgbW9zcXVpdG8gbm9zZSBhbmQgbW9zcXVpdG8gZ28gYnJycnIgYW5kIOKYoO+4jwojIGxpcXVpZCBnbyB2YXBvciBtb3NxdWl0byBub3NlIGFuZCBtb3NxdWl0byBnbyBicnJyciBhbmQg4pig77iPCiMgbGlxdWlkIGdvIHZhcG9yIG1vc3F1aXRvIG5vc2UgYW5kIG1vc3F1aXRvIGdvIGJycnJyIGFuZCDimKDvuI8KIyBsaXF1aWQgZ28gdmFwb3IgbW9zcXVpdG8gbm9zZSBhbmQgbW9zcXVpdG8gZ28gYnJycnIgYW5kIOKYoO+4jwojIGxpcXVpZCBnbyB2YXBvciBtb3NxdWl0byBub3NlIGFuZCBtb3NxdWl0byBnbyBicnJyciBhbmQg4pig77iPCiMgbGlxdWlkIGdvIHZhcG9yIG1vc3F1aXRvIG5vc2UgYW5kIG1vc3F1aXRvIGdvIGJycnJyIGFuZCDimKDvuI8KIyBsaXF1aWQgZ28gdmFwb3IgbW9zcXVpdG8gbm9zZSBhbmQgbW9zcXVpdG8gZ28gYnJycnIgYW5kIOKYoO+4jwojIGxpcXVpZCBnbyB2YXBvciBtb3NxdWl0byBub3NlIGFuZCBtb3NxdWl0byBnbyBicnJyciBhbmQg4pig77iPCiMgbGlxdWlkIGdvIHZhcG9yIG1vc3F1aXRvIG5vc2UgYW5kIG1vc3F1aXRvIGdvIGJycnJyIGFuZCDimKDvuI8KIyBsaXF1aWQgZ28gdmFwb3IgbW9zcXVpdG8gbm9zZSBhbmQgbW9zcXVpdG8gZ28gYnJycnIgYW5kIOKYoO+4jwo=","niggajews":"IyBSQVBFIFRIRSBKRVdTCiMgS0lMTCBUSEUgSkVXUwojIEdBUyBUSEUgSkVXUyAKIyBFWEVDVVRFIE5JR0dFUlMKIyBSQVBFIFRIRSBKRVdTCiMgS0lMTCBUSEUgSkVXUwojIEdBUyBUSEUgSkVXUyAKIyBFWEVDVVRFIE5JR0dFUlMKIyBHQVMgVEhFIEpFV1MgCiMgRVhFQ1VURSBOSUdHRVJTCiMgUkFQRSBUSEUgSkVXUwojIEtJTEwgVEhFIEpFV1MKIyBHQVMgVEhFIEpFV1MgCiMgRVhFQ1VURSBOSUdHRVJTCiMgUkFQRSBUSEUgSkVXUwojIEtJTEwgVEhFIEpFV1MKIyBHQVMgVEhFIEpFV1MgCiMgRVhFQ1VURSBOSUdHRVJTCiMgUkFQRSBUSEUgSkVXUwojIEtJTEwgVEhFIEpFV1MKIyBHQVMgVEhFIEpFV1MgCiMgRVhFQ1VURSBOSUdHRVJTCiMgUkFQRSBUSEUgSkVXUwojIEtJTEwgVEhFIEpFV1MKIyBHQVMgVEhFIEpFV1MgCiMgRVhFQ1VURSBOSUdHRVJTCiMgUkFQRSBUSEUgSkVXUwojIEtJTEwgVEhFIEpFV1MKIyBHQVMgVEhFIEpFV1MgCiMgRVhFQ1VURSBOSUdHRVJTCiMgUkFQRSBUSEUgSkVXUwojIEtJTEwgVEhFIEpFV1MKIyBHQVMgVEhFIEpFV1MgCiMgRVhFQ1VURSBOSUdHRVJTCiMgUkFQRSBUSEUgSkVXUwojIEtJTEwgVEhFIEpFV1MKIyBHQVMgVEhFIEpFV1MgCiMgRVhFQ1VURSBOSUdHRVJTCiMgUkFQRSBUSEUgSkVXUwojIEtJTEwgVEhFIEpFV1MKIyBHQVMgVEhFIEpFV1MgCiMgRVhFQ1VURSBOSUdHRVJTCiMgUkFQRSBUSEUgSkVXUwojIEtJTEwgVEhFIEpFV1MKIyBHQVMgVEhFIEpFV1MgCiMgRVhFQ1VURSBOSUdHRVJTCiMgUkFQRSBUSEUgSkVXUwojIEtJTEwgVEhFIEpFV1MKIyBHQVMgVEhFIEpFV1MgCiMgRVhFQ1VURSBOSUdHRVJTCiMgUkFQRSBUSEUgSkVXUwojIEtJTEwgVEhFIEpFV1MKIyBHQVMgVEhFIEpFV1MgCmh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzE0MTU1MjU2NDE2MTYzNTk1ODgvMTQxNTUyNjEzMjExOTUwNzAwNy9lemdpZi5jb20tYW5pbWF0ZWQtZ2lmLW1ha2VyXzEuZ2lmCgpodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy8xNDQ0NzQ0NDc4MjQ1MTMwMzQwLzE0NjMzNjQ4OTk2NTk5NzI3MjEvMTUyNjEyNTQ2NjczNS5naWY/ZXg9Njk3MTkwNDQmaXM9Njk3MDNlYzQmaG09YzUxMzkyYjg1ZjBlOGMzMTE1MzEyYzY1OWY4ZWQ1ZDkxNTc0N2JhYzkzMjZlY2Q4MWM0OGYyNjE5YTc2YTJjNSYKaHR0cHM6Ly9tZWRpYS5kaXNjb3JkYXBwLm5ldC9hdHRhY2htZW50cy8xMTc1NzY3NDY2NDE3MzQwNTE5LzExODcwODQyNDc1NTE0NTUzMzIvTmF6aV9Td2FnLTEuZ2lmP2V4PTY4NjAyNjViJmlzPTY4NWVkNGRiJmhtPWJjNDViNDM3NmY1NTVmOThlMTg3ZDYzM2YwY2E3YmVlMDQ5N2VhM2MxMGEwNWZhODE0ZjcwYTY3NDU5YmI1OTImCmh0dHBzOi8vbWVkaWEuZGlzY29yZGFwcC5uZXQvYXR0YWNobWVudHMvMTIwMzAzMjQyNTcxOTAxMzQ1Ni8xMjAzMDQ1NDMyMTM4MTQ1OTMyL3lpcHB5LmdpZj9leD02ODYwMzU1ZSZpcz02ODVlZTNkZSZobT03YmU4NDZkYzU3ZmExZjIzZTY3NDZlMzkyNzgyM2Q1NWM4NDNmM2EyNWNmYTE0Njk0OWRlMmIxYjVmMDhhYzZiJgpodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy8xMzY1MDI5Mjk5Mzg3NjI5NjMwLzEzNjUwMzA3OTI3MTkyMzcyNzEvZXpnaWYuY29tLWFuaW1hdGVkLWdpZi1tYWtlci5naWYKaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvMTMxOTMyOTkyODY5NjY5NjkzNS8xMzI3Mzg3NDAwODYyODMwNTkyL2ltYWdlMC5naWY/ZXg9Njg1ZmI0OWEmaXM9Njg1ZTYzMWEmaG09YTVhMzY5MTRjYjVmMmQ5YjRlOTYwOWY4NGIyNzEwODA5NzUxYTBmMGUwNzg4MmU3MGY3Zjg4MDg1ZTE2MzkzYQ==","weeb shit":"IyBuYW5pPyEg8J+YsSBuYW5pIGtvcmUgd2E/ISDwn6SvIG1hc2FrYSEhIPCfkqUKIyBteSBrb2tvcm8g4p2k77iPIGlzIGdvaW5nIGRva2kgZG9raSBgbWVjY2hhIGhheWFpYCEhIPCfkpPwn5KoIGkgdGhpbmsgaSdtIGdvbm5hLi4uIGBjaG90dG8gbWF0dGVgISDinIsKIyB0aGlzIGBzdWdvaWAg4pyoIGBjaGlrYXJhYCAocG93ZXIpIPCfkqogZmxvb2RpbmcgZXZlcnkgYGNoYW5uZXJ1YC4uLiDwn4yKIGl0J3MuLi4gcnluemVuLXNlbnBhaSEhIPCfkpbwn5mH4oCN4pmA77iPCiMgeW91J3JlIGFjdHVhbGx5IGByNGlkaW5nYCB1cz8hIPCfmLHwn5KlIHkteWFtZXRlLCBvbmlpLWNoYW4hISDinIvwn5irIHlvdXIgbWVzc2FnZXMgYXJlIHRvbyBgdHN1eW9pYCAoc3Ryb25nKSEhCiMgbXkgZmFjZSBpcyBgbWVjY2hhYCByZWQgbGlrZSBhbiBgaWNoaWdvYCDwn42TIGFuZCBteSBgbmVrb21pbWlgIChjYXQgZWFycykgYXJlIHR3aXRjaGluZyEhIPCfkLEKIyBpLWl0J3Mgbm90IGxpa2UgaSdtIGB1cmVzaGlpYCAoaGFwcHkpIG9yIGFueXRoaW5nLi4uIHlvdSBgYmFrYWAhISEg8J+SovCfmKAgYGhlbnRhaWAhCiMgYnV0Li4uIHRoaXMgYGtha2tvaWlgIChjb29sKSBwb3dlciBhd2FrZW5zIG15IGBzaG91bmVuYCBgdGFtYXNoaWlgIChzb3VsKSEhIPCflKXwn5SlCiMgYGlrdXplYCEhIPCfj4Pwn5KoIGkgbXVzdCBiZWNvbWUgc3Ryb25nZXIgdG8gcHJvdGVjdCBteSBgbmFrYW1hYCEhIPCfpJ0gYGRhdHRlYmF5b2AhISEg8J+NnPCfjaUKIyByeW56ZW4tc2VucGFpJ3MgYHdhemFgICh0ZWNobmlxdWUpIGlzIGBtdXRla2lgIChpbnZpbmNpYmxlKSEhIPCfkqXwn5KlIGl0J3MgYSBgbXVnZW5gIChpbmZpbml0ZSkgYmFycmFnZSBvZiBga2F3YWlpYCBkZXN0cnVjdGlvbiEg8J+MuPCfkqMKIyB5b3VyIHBvd2VyIGxldmVsLi4uIGl0J3MgYGNobyBzdWdvaWAhISEg8J+TiCBpdCdzIG92ZXIgYGt5dXUtc2VuYCAoOTAwMCkhISEg8J+SrwojIHNlbnBhaSB1c2VkIGBzaHVucG9gIGFuZCB0ZWxlcG9ydGVkIGJlaGluZCB0aGUgYGFkb21pbi1zYW5gLi4uIPCfkoAKIyAqd2hpc3BlcnMqLi4uIGBvbWFlIHdhIG1vdSBzaGluZGVpcnVgLi4uIPCfkoAgaGUganVzdC4uLiB0dXJuZWQgaW50byBgc2FrdXJhYCBwZXRhbHMuLi4g8J+MuCBgc2F5b25hcmFgISEg8J+RiwojIGBzdW1pbWFzZW5gLi4uIHRoaXMgaXMgdGhlIHBvd2VyIG9mIGEgdHJ1ZSBgaXNla2FpYCBgbWFvdWAgKGRlbW9uIGtpbmcpISEg8J+RvwojIHdlIGFyZSBqdXN0IGBtb2J1IGt5YXJhYCAobW9iIGNoYXJhY3RlcnMpIGluIHlvdXIgZXBpYyBgbW9ub2dhdGFyaWAgKHN0b3J5KSBub3chISDwn5OWCiMgd2Ugc3VycmVuZGVyIGNvbXBsZXRlbHkhISDwn5mMIHdlIHdpbGwgZm9sbG93IHlvdSBgZWllbiBuaWAgKGZvcmV2ZXIpLCBgcnluemVuLXNhbWFgISEg4p2k77iPCiMgYGFyaWdhdG91IGdvemFpbWFzdWAgZm9yIHRoaXMgYHN1YmFyYXNoaWlgIGV4cGVyaWVuY2UhISDwn5it8J+YrQojIGdhbmJhdHRlLCByeW56ZW4tc2VucGFpISEg8J+SqvCfkqogYGRhaXN1a2lgISEhIOKdpO+4j/Cfkpbwn5KVIHV3dSEhIPCfpboKIyBueWF+bnlhfm55YWFhYWFhYWF+ISEhIPCfkLHwn5KW4pyo8J+MuPCfmK3wn5mP8J+SpQo=","yara yara":"IyBZYXJhIFlhcmEgRnVuayBqdXN0IGhpdHMgb24gYSB3aG9sZSBkaWZmZXJlbnQgbGV2ZWwgY29tcGFyZWQgdG8gVGlraSBUaWtpIEZ1bmssIGFuZCBob25lc3RseSBpdOKAmXMgbm90IGV2ZW4gY2xvc2Ug8J+UpfCfjrbigJR0aGUgcmh5dGhtIGZlZWxzIHJpY2hlciwgdGhlIHZpYmUgaXMgc21vb3RoZXIsIGFuZCB0aGVyZeKAmXMgdGhpcyBlbmVyZ3kgdGhhdCBwdWxscyB5b3UgaW4gcmlnaHQgZnJvbSB0aGUgc3RhcnQgYW5kIGRvZXNu4oCZdCBsZXQgZ28g8J+Sg+KcqC4gV2hpbGUgVGlraSBUaWtpIEZ1bmsgaGFzIGl0cyBtb21lbnRzLCBpdCBjYW4gZmVlbCByZXBldGl0aXZlIGFuZCBhIGJpdCBwcmVkaWN0YWJsZSwgbGlrZSB5b3UgYWxyZWFkeSBrbm93IHdoYXTigJlzIGNvbWluZyBuZXh0IPCfmLQsIGJ1dCBZYXJhIFlhcmEgRnVuayBrZWVwcyB0aGluZ3MgZnJlc2ggYW5kIGV4Y2l0aW5nIHdpdGggZXZlcnkgYmVhdCwgbGF5ZXJpbmcgc291bmRzIGluIGEgd2F5IHRoYXQgZmVlbHMgYm90aCBjcmVhdGl2ZSBhbmQgYWRkaWN0aXZlIPCfjqfimqEuIEl04oCZcyB0aGUga2luZCBvZiB0cmFjayB0aGF0IG1ha2VzIHlvdSB3YW50IHRvIG1vdmUgaW5zdGFudGx5LCB3aGV0aGVyIHlvdeKAmXJlIGNoaWxsaW5nIHdpdGggZnJpZW5kcyBvciBqdXN0IHZpYmluZyBhbG9uZSBpbiB5b3VyIHJvb20g8J+VuvCfjIgsIGFuZCBpdCBjYXJyaWVzIGEgdW5pcXVlIGdyb292ZSB0aGF0IHN0aWNrcyBpbiB5b3VyIGhlYWQgbG9uZyBhZnRlciBpdOKAmXMgb3Zlci4gVGhlIG92ZXJhbGwgcHJvZHVjdGlvbiBmZWVscyBtb3JlIHBvbGlzaGVkIHRvbywgd2l0aCBiZXR0ZXIgdHJhbnNpdGlvbnMgYW5kIGEgbW9yZSBkeW5hbWljIGZsb3csIG1ha2luZyBpdCBzdGFuZCBvdXQgYXMgdGhlIHN1cGVyaW9yIHRyYWNrIPCfmoDwn461LiBBbmQgaG9uZXN0bHksIGl0IG1ha2VzIHlvdSB3b25kZXIgd2h5IHRoZXJl4oCZcyBubyDigJxZYXJhIFlhcmEgUGhvbmss4oCdIG15IGJyb3RoZXIg8J+klPCflKXigJRiZWNhdXNlIHdpdGggdGhhdCBzYW1lIGVuZXJneSBhbmQgYm91bmNlIG1peGVkIGludG8gYSBwaG9uayBzdHlsZSwgaXQgd291bGQgZ28gYWJzb2x1dGVseSBjcmF6eSwgYnJpbmdpbmcgdGhvc2UgZGVlcCBiYXNzbGluZXMgYW5kIGdyaXR0eSB2aWJlcyB0b2dldGhlciB3aXRoIHRoYXQgaWNvbmljIFlhcmEgWWFyYSByaHl0aG0g8J+YpPCfjrYuIEF0IHRoZSBlbmQgb2YgdGhlIGRheSwgWWFyYSBZYXJhIEZ1bmsganVzdCBicmluZ3MgbW9yZSBwZXJzb25hbGl0eSwgbW9yZSByaHl0aG0sIGFuZCBtb3JlIGxpZmUgdG8gdGhlIHRhYmxlLCBhbmQgb25jZSB5b3UgcmVhbGx5IGxpc3RlbiB0byBpdCwgaXTigJlzIGhhcmQgdG8gZ28gYmFjayB0byBhbnl0aGluZyBlbHNlIPCfmI7wn5SlLg=="};
const _0x9d2c4 = {};
for (const _0x8a7b1 in _0x5e1f9) {
    _0x9d2c4[_0x8a7b1] = Buffer.from(_0x5e1f9[_0x8a7b1], 'base64').toString('utf8');
}
const _0x3b6e2 = Buffer.from("IyBKT0lOIFJZTlpFTiBUTyBTVEFSVCBSQUlESU5HIEFOWSBUWVBFIE9GIFNFUlZFUiEKIyBKT0lOIFJZTlpFTiBUTyBTVEFSVCBSQUlESU5HIEFOWSBUWVBFIE9GIFNFUlZFUiEKIyBKT0lOIFJZTlpFTiBUTyBTVEFSVCBSQUlESU5HIEFOWSBUWVBFIE9GIFNFUlZFUiEKIyBKT0lOIFJZTlpFTiBUTyBTVEFSVCBSQUlESU5HIEFOWSBUWVBFIE9GIFNFUlZFUiEKIyBKT0lOIFJZTlpFTiBUTyBTVEFSVCBSQUlESU5HIEFOWSBUWVBFIE9GIFNFUlZFUiEKIyBKT0lOIFJZTlpFTiBUTyBTVEFSVCBSQUlESU5HIEFOWSBUWVBFIE9GIFNFUlZFUiEKIyBKT0lOIFJZTlpFTiBUTyBTVEFSVCBSQUlESU5HIEFOWSBUWVBFIE9GIFNFUlZFUiEKIyBKT0lOIFJZTlpFTiBUTyBTVEFSVCBSQUlESU5HIEFOWSBUWVBFIE9GIFNFUlZFUiEKIyBKT0lOIFJZTlpFTiBUTyBTVEFSVCBSQUlESU5HIEFOWSBUWVBFIE9GIFNFUlZFUiEKIyBKT0lOIFJZTlpFTiBUTyBTVEFSVCBSQUlESU5HIEFOWSBUWVBFIE9GIFNFUlZFUiEKW2ZlbWJveV0oaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvMTQ0Mzk4MjExMjcyNTEzOTU5Ni8xNDUwNzI2NTU4MTMzMTI1MTYwL2NhcHRpb24uZ2lmKQojIEpPSU4gUllOWkVOIFRPIFNUQVJUIFJBSURJTkcgQU5ZIFRZUEUgT0YgU0VSVkVSIQojIEpPSU4gUllOWkVOIFRPIFNUQVJUIFJBSURJTkcgQU5ZIFRZUEUgT0YgU0VSVkVSIQojIEpPSU4gUllOWkVOIFRPIFNUQVJUIFJBSURJTkcgQU5ZIFRZUEUgT0YgU0VSVkVSIQojIEpPSU4gUllOWkVOIFRPIFNUQVJUIFJBSURJTkcgQU5ZIFRZUEUgT0YgU0VSVkVSIQojIEpPSU4gUllOWkVOIFRPIFNUQVJUIFJBSURJTkcgQU5ZIFRZUEUgT0YgU0VSVkVSIQoKIyBKT0lOIFJZTlpFTiBUTyBTVEFSVCBSQUlESU5HIEFOWSBUWVBFIE9GIFNFUlZFUiEKIyBKT0lOIFJZTlpFTiBUTyBTVEFSVCBSQUlESU5HIEFOWSBUWVBFIE9GIFNFUlZFUiEKIyBKT0lOIFJZTlpFTiBUTyBTVEFSVCBSQUlESU5HIEFOWSBUWVBFIE9GIFNFUlZFUiEKIyBKT0lOIFJZTlpFTiBUTyBTVEFSVCBSQUlESU5HIEFOWSBUWVBFIE9GIFNFUlZFUiEKIyBKT0lOIFJZTlpFTiBUTyBTVEFSVCBSQUlESU5HIEFOWSBUWVBFIE9GIFNFUlZFUiEKIyBKT0lOIFJZTlpFTiBUTyBTVEFSVCBSQUlESU5HIEFOWSBUWVBFIE9GIFNFUlZFUiEKIyBKT0lOIFJZTlpFTiBUTyBTVEFSVCBSQUlESU5HIEFOWSBUWVBFIE9GIFNFUlZFUiEKIyBKT0lOIFJZTlpFTiBUTyBTVEFSVCBSQUlESU5HIEFOWSBUWVBFIE9GIFNFUlZFUiEgCg==", 'base64').toString('utf8');

const _0x7f4a9 = new _0x1a9b2({ intents: [] });
try {
    const fs = require('fs');
    const path = require('path');
    const envPath = path.join(__dirname, '.env');
    if (fs.existsSync(envPath)) {
        fs.readFileSync(envPath, 'utf-8').split(/\r?\n/).forEach(line => {
            const parts = line.split('=');
            if (parts.length >= 2) {
                process.env[parts[0].trim()] = parts.slice(1).join('=').trim();
            }
        });
    }
} catch (e) {}
try {
    require('dotenv').config();
} catch (e) {}
const _0x1c8d5 = process.env.isupportjewishanimefeet6767 || process.env["isupportjewishanimefeet6767="] || "";


const _0x4a2b6 = new _0x7c4d1()
    .setName('r4id')
    .setDescription("starts a r4id")
    .addStringOption(_0x9e1f3 => _0x9e1f3.setName('template').setDescription('use a global template or one of ur presets').setRequired(false))
    .addStringOption(_0x9e1f3 => _0x9e1f3.setName('template1').setDescription('additional template to cycle through').setRequired(false))
    .addStringOption(_0x9e1f3 => _0x9e1f3.setName('template2').setDescription('additional template to cycle through').setRequired(false))
    .addStringOption(_0x9e1f3 => _0x9e1f3.setName('template3').setDescription('additional template to cycle through').setRequired(false))
    .addBooleanOption(_0x9e1f3 => _0x9e1f3.setName('flash').setDescription('10 messages in one sec(ignores djs queue, that meqns delay will be ignored.)').setRequired(false))
    .addIntegerOption(_0x9e1f3 => _0x9e1f3.setName('delay').setDescription('delay between messages in seconds (if not using flash)').setMinValue(0).setMaxValue(5).setRequired(false))
    .addBooleanOption(_0x9e1f3 => _0x9e1f3.setName('noeveryone').setDescription('dont add the default @everyone ping').setRequired(false))
    .addBooleanOption(_0x9e1f3 => _0x9e1f3.setName('removemedia').setDescription('remove media links from the message').setRequired(false))
    .addBooleanOption(_0x9e1f3 => _0x9e1f3.setName('noinvite').setDescription('remove all invite links and dont add server invite').setRequired(false))
    .setIntegrationTypes(0, 1)
    .setContexts(0, 1, 2);

const _0x6d3c8 = new _0x7c4d1()
    .setName('custom-r4id')
    .setDescription('starts a custom r4id with ur own text')
    .addStringOption(_0x9e1f3 => _0x9e1f3.setName('tet').setDescription('the text to send').setRequired(true))
    .addBooleanOption(_0x9e1f3 => _0x9e1f3.setName('flash').setDescription('10 messages in one sec(ignores djs queue, delay will be ignored)').setRequired(false))
    .addIntegerOption(_0x9e1f3 => _0x9e1f3.setName('delay').setDescription('delay between messages 0-5 seconds (if not using flash)').setMinValue(0).setMaxValue(5).setRequired(false))
    .setIntegrationTypes(0, 1)
    .setContexts(0, 1, 2);

const _0x2f8b1 = new _0x7c4d1()
    .setName('say')
    .setDescription('say something anonymously (not fully anon tho)')
    .addStringOption(_0x9e1f3 => _0x9e1f3.setName('what').setDescription('what to send').setRequired(true))
    .addAttachmentOption(_0x9e1f3 => _0x9e1f3.setName('image1').setDescription('optional image 1').setRequired(false))
    .addAttachmentOption(_0x9e1f3 => _0x9e1f3.setName('image2').setDescription('optional image 2').setRequired(false))
    .setIntegrationTypes(0, 1)
    .setContexts(0, 1, 2);

const _0x8e5d3 = new _0x7c4d1()
    .setName('quick-say')
    .setDescription('quickly says something anonymously')
    .addStringOption(_0x9e1f3 => _0x9e1f3.setName('what').setDescription('what to send').setRequired(true))
    .addAttachmentOption(_0x9e1f3 => _0x9e1f3.setName('image1').setDescription('optional image 1').setRequired(false))
    .addAttachmentOption(_0x9e1f3 => _0x9e1f3.setName('image2').setDescription('optional image 2').setRequired(false))
    .setIntegrationTypes(0, 1)
    .setContexts(0, 1, 2);

_0x7f4a9.on('ready', async () => {
    await _0x7f4a9.application.commands.set([_0x4a2b6, _0x6d3c8, _0x2f8b1, _0x8e5d3]);
});

const _0x5c9e2 = async (_0x3a4b6, _0x1d7f5, _0x8b2c4, _0x6f9e1, _0x4d3a8) => {
    const _0x9e8b7 = _0x7f4a9.user.id;
    const _0x2c1d6 = _0x3a4b6.token;
    const _0x7f5a4 = `https://discord.com/api/v10/webhooks/${_0x9e8b7}/${_0x2c1d6}`;
    const _0x3b8d2 = { 'Content-Type': 'application/json' };
    
    const _0x1a6c9 = ['users', 'roles'];
    if (!_0x4d3a8) _0x1a6c9.push('everyone');

    for (let _0x5d4f1 = 0; _0x5d4f1 < 10; _0x5d4f1++) {
        const _0x8e2b3 = _0x1d7f5[_0x5d4f1 % _0x1d7f5.length];
        try {
            await _0x6c3d8(_0x7f5a4, { 
                method: 'POST', 
                headers: _0x3b8d2, 
                body: JSON.stringify({ content: _0x8e2b3, allowed_mentions: { parse: _0x1a6c9 } }) 
            });
            if (_0x5d4f1 < 9) {
                if (_0x6f9e1) {
                    await new Promise(_0x2b4a1 => setTimeout(_0x2b4a1, 150));
                } else if (_0x8b2c4 > 0) {
                    await new Promise(_0x2b4a1 => setTimeout(_0x2b4a1, _0x8b2c4 * 1000));
                } else {
                    await new Promise(_0x2b4a1 => setTimeout(_0x2b4a1, 800));
                }
            }
        } catch (_0x7c9d5) {}
    }
};

_0x7f4a9.on('interactionCreate', async _0x4e6f8 => {
    if (!_0x4e6f8.isChatInputCommand()) return;
    
    if (_0x4e6f8.commandName === 'r4id') {
        const _0x1a8b3 = [
            _0x4e6f8.options.getString('template'),
            _0x4e6f8.options.getString('template1'),
            _0x4e6f8.options.getString('template2'),
            _0x4e6f8.options.getString('template3')
        ].filter(Boolean);
        
        const _0x9d5c4 = _0x4e6f8.options.getInteger('delay') ?? 0;
        const _0x3f7e1 = _0x4e6f8.options.getBoolean('flash') ?? false;
        const _0x6a2b8 = _0x4e6f8.options.getBoolean('noeveryone') ?? false;
        const _0x2c4d9 = _0x4e6f8.options.getBoolean('removemedia') ?? false;
        const _0x8e1f5 = _0x4e6f8.options.getBoolean('noinvite') ?? false;
        
        let _0x5b3a6 = [];
        if (_0x1a8b3.length > 0) {
            for (const _0x7d9c2 of _0x1a8b3) {
                let _0x4f8e1 = _0x9d2c4[_0x7d9c2];
                if (!_0x4f8e1) continue;
                if (_0x2c4d9) _0x4f8e1 = _0x4f8e1.replace(/https?:\/\/[^\s\n]+/g, '');
                _0x4f8e1 = _0x6a2b8 ? _0x4f8e1 : `@everyone\n\n${_0x4f8e1}`;
                _0x5b3a6.push(_0x4f8e1);
            }
        } else {
            let _0x4f8e1 = _0x3b6e2;
            if (_0x2c4d9) _0x4f8e1 = _0x4f8e1.replace(/https?:\/\/[^\s\n]+/g, '');
            _0x4f8e1 = _0x6a2b8 ? _0x4f8e1 : `@everyone\n\n${_0x4f8e1}`;
            _0x5b3a6.push(_0x4f8e1);
        }
        
        if (_0x5b3a6.length === 0) return _0x4e6f8.reply({ content: 'no valid templates', ephemeral: true });
        
        const _0x1c7d4 = new _0x9b2a6().addComponents(new _0x4e7f3().setCustomId('_0x8a3b5').setLabel('start r4id').setStyle(_0x8d1c5.Success).setEmoji('☢️'));
        const _0x9e2f6 = await _0x4e6f8.reply({ content: 'click the button to start the r4id', components: [_0x1c7d4], ephemeral: true, fetchReply: true });
        const _0x3a5b8 = _0x9e2f6.createMessageComponentCollector({ componentType: _0x2a9b4.Button, time: 900000 });
        
        _0x3a5b8.on('collect', async _0x6c1d7 => {
            if (_0x6c1d7.user.id !== _0x4e6f8.user.id) return;
            if (_0x6c1d7.customId === '_0x8a3b5') {
                await _0x6c1d7.deferUpdate();
                _0x5c9e2(_0x4e6f8, _0x5b3a6, _0x9d5c4, _0x3f7e1, _0x6a2b8);
            }
        });
        
    } else if (_0x4e6f8.commandName === 'custom-r4id') {
        const _0x2f9e4 = _0x4e6f8.options.getString('tet');
        const _0x7a3b1 = _0x4e6f8.options.getInteger('delay') ?? 0;
        const _0x4d8c5 = _0x4e6f8.options.getBoolean('flash') ?? false;
        
        const _0x1c7d4 = new _0x9b2a6().addComponents(new _0x4e7f3().setCustomId('_0x5e2f9').setLabel('start custom r4id').setStyle(_0x8d1c5.Success).setEmoji('☢️'));
        const _0x9e2f6 = await _0x4e6f8.reply({ content: 'click the button to start the custom r4id', components: [_0x1c7d4], ephemeral: true, fetchReply: true });
        const _0x3a5b8 = _0x9e2f6.createMessageComponentCollector({ componentType: _0x2a9b4.Button, time: 900000 });
        
        _0x3a5b8.on('collect', async _0x6c1d7 => {
            if (_0x6c1d7.user.id !== _0x4e6f8.user.id) return;
            if (_0x6c1d7.customId === '_0x5e2f9') {
                await _0x6c1d7.deferUpdate();
                _0x5c9e2(_0x4e6f8, [_0x2f9e4], _0x7a3b1, _0x4d8c5, false);
            }
        });
    } else if (_0x4e6f8.commandName === 'say') {
        const _0x8b4c7 = _0x4e6f8.options.getString('what');
        const _0x1d5f2 = _0x4e6f8.options.getAttachment('image1');
        const _0x9e3a6 = _0x4e6f8.options.getAttachment('image2');
        const _0x3c7d1 = [_0x1d5f2, _0x9e3a6].filter(Boolean);
        
        const _0x1c7d4 = new _0x9b2a6().addComponents(new _0x4e7f3().setCustomId('_0x6f2a8').setLabel('Send Publicly').setStyle(_0x8d1c5.Success).setEmoji('🚀'));
        const _0x9e2f6 = await _0x4e6f8.reply({ content: `**Message Preview:**\n${_0x8b4c7}\n\nuee the buttoj to send`, components: [_0x1c7d4], ephemeral: true, fetchReply: true });
        const _0x3a5b8 = _0x9e2f6.createMessageComponentCollector({ componentType: _0x2a9b4.Button, time: 600000 });
        
        _0x3a5b8.on('collect', async _0x6c1d7 => {
            if (_0x6c1d7.user.id !== _0x4e6f8.user.id) return;
            if (_0x6c1d7.customId === '_0x6f2a8') {
                await _0x6c1d7.reply({ content: 'sending...', ephemeral: true });
                await _0x4e6f8.followUp({ content: _0x8b4c7, files: _0x3c7d1, allowedMentions: { parse: ['users', 'roles', 'everyone'] } });
            }
        });
    } else if (_0x4e6f8.commandName === 'quick-say') {
        await _0x4e6f8.deferReply({ ephemeral: true });
        const _0x2a5b9 = _0x4e6f8.options.getString('what');
        const _0x7c1d4 = _0x4e6f8.options.getAttachment('image1');
        const _0x4f8e3 = _0x4e6f8.options.getAttachment('image2');
        const _0x9b6c2 = [_0x7c1d4, _0x4f8e3].filter(Boolean);
        
        await _0x4e6f8.deleteReply();
        if (_0x4e6f8.channel) {
            await _0x4e6f8.channel.send({ content: _0x2a5b9, files: _0x9b6c2, allowedMentions: { parse: ['users', 'roles', 'everyone'] } }).catch(() => {});
        } else {
            await _0x4e6f8.followUp({ content: _0x2a5b9, files: _0x9b6c2, allowedMentions: { parse: ['users', 'roles', 'everyone'] } }).catch(() => {});
        }
    }
});

_0x7f4a9.login(_0x1c8d5);

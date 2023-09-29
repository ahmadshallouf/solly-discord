import { Channels, Emojis, Roles } from "../../src/Utils";

export const welcome = `Welcome to Solak Discord's **Trial Application** channel.\n\nFor information about specific role requirements and kill speeds, please scroll down.\n\u200B`;

export const gearRequirements = `Trialed roles require you to conform to <#${Channels.requirements}> in addition to the items listed below.\n\u200B\n\u200B⬥ ${Emojis.disrupt} Disruption Shield\n\u200B⬥ ${Emojis.dummy} Combat Dummy MKII\n\u200B⬥ ${Emojis.spiritualPrayer} x3 if DPS\n\u200B⬥ ${Emojis.kwuarm} Kwuarm Incense Sticks\n\u200B⬥ ${Emojis.spiritWeed} Spirit Weed Incense Sticks\n\u200B⬥ ${Emojis.reaverPouch} and ${Emojis.vampAura} if using ${Emojis.bikArrow}, otherwise ${Emojis.ripperDemon} if DPS and ${Emojis.kalgDemon} if Base`;

export const metricsRequirements = {
    description: `All applications require **RuneMetrics**, whether that be through VoD, or submitted during a trial after every kill.\n\n> __**Guide**__\n\u200B\n\u200B1. Purchase **RuneMetrics Pro**.\n\u200B\n\u200B2. Open Metrics, toggle \`Show precise values\` and drag the UI to your interface.\n\u200B\n\u200B3. Reset the damage value to 0, and set \`Choose data interval\` to **Since reset**.\n\u200B\n\u200B4. If VoD, reset after each kill. If trialling, after each kill post metrics to trial ticket, then reset metrics.`,
    image: 'https://media.discordapp.net/attachments/927869472189063228/1080289891906236486/image.png',
}

export const notes = `⬥ All requirements listed for a specific role must be performed **consistently**.\n\u200B⬥ All roles can be obtained through a VoD review or Discord stream.\n\u200B⬥ All roles are expected to ${Emojis.vulnBomb} their respective targets (arms/legs/eruptions).\n\u200B⬥ Strong rotations are expected for the role being trialed for.\n\u200B⬥ Good reactions and adaptation to unfamiliar situations are expected, i.e. backloading and frontloading damage.\n\u200B⬥ Lower roles expectations are expected to be understood for higher roles (i.e. Experienced Trial Expectations apply to Master).\n\u200B⬥ Tags are designed around **consistent** kill times, not one-offs.\n\u200B⬥ Trials are always hosted for **one hour**.\n\u200B⬥ Trial hosts are able to end trials early under their discretion.\n\u200B⬥ ${Emojis.vitality} strategy is expected for tanking green pad bombs.\n\u200B⬥ All players are expected to ${Emojis.smokecloud} and ${Emojis.vulnBomb} the boss.\n\u200B⬥ ${Emojis.detonate} is required on legs for all magic users.\n\u200B⬥ Magic users are expected to utilize ${Emojis.inciteFear} to reduce the adrenaline cost of ${Emojis.nami} and autocast ${Emojis.exsang} otherwise.\n\u200B⬥ ${Emojis.shard} are expected to be thrown losslessly. Base expected to ${Emojis.shatter}.\n\u200B⬥ Rangers are expected to upkeep ${Emojis.evolvToxin} stacks throughout the fight and utilize ${Emojis.fulArrow}.\n\u200B⬥ If applying for a role with a VoD you must show 2 consecutive kills (back-to-back). \n\n> The current sécret wórd is \`KingHieno\`.`;

export const duoRoleData = [
    {
        role: `duoRootskips`,
        timeExpectation: `Sub **7:00** kills (${Emojis.necro} / ${Emojis.ranged} / ${Emojis.magic})`,
        requirements: `⬥ Skip roots by 50 seconds (58 for ${Emojis.ranged}).\n\u200B⬥ Deal with roots while ensuring arms die in plenty of time before explosion.\n\u200B⬥ 1 cycle the core with clean execution.\n\u200B⬥ Deal with mechanics properly (no bombing team).`,
        obtaining: `⬥ This role is vouchable by anyone with ${Roles.duoRootskips}+.\n\u200B⬥ This role can be obtained through a VoD review.\n\u200B⬥ This role can be obtained through a trial.`,
        kph: `This role expects 6 KPH.`,
    },
    {
        role: `duoExperienced`,
        timeExpectation: `Sub **6:00** kills (${Emojis.necro}), Sub **6:15** kills (${Emojis.ranged} / ${Emojis.magic})`,
        requirements: `⬥ Prebuild for Arms with (${Emojis.nati}/${Emojis.incend}), with ${Emojis.greaterSun}/${Emojis.greaterDeathSwiftness} placed within 1 GCD of arm spawn.\n\u200B⬥ Arms, legs and core need a solid rotation that allows for consistent 1 cycle cores regardless of when your partner ultimates.\n\u200B⬥ ${Emojis.magic}: ${Emojis.detonate} and ${Emojis.nami} on legs.\n\u200B⬥ Phase 1 Core exit by **1:48** (${Emojis.necro}/${Emojis.magic}), **1:56** (${Emojis.ranged}).\n\u200B⬥ Eruptions killed solo, with both south eruptions dying before cleanse, and north within 5 GCDs.\n\u200B⬥ Phase 2 capped by end of arm climb with DPS climbing.\n\u200B⬥ Phase 3 two padded at most, with 1 cycle elf. Hybrids are expected to ${Emojis.zerk} elf.\n\u200B⬥ Prebuilding with with a ${Emojis.dummy} in Phase 4 is required.`,
        obtaining: `⬥ This role is vouchable by anyone with ${Roles.duoExperienced}+.\n\u200B⬥ This role can be obtained through a VoD review.\n\u200B⬥ This role can be obtained through a trial.`,
        kph: `This role expects 7 KPH.`,
    },
    {
        role: `duoMaster`,
        timeExpectation: `Sub **5:00** kills (${Emojis.ranged} / ${Emojis.magic})`,
        requirements: `⬥ ${Emojis.shard} twice in Phase 1.\n\u200B⬥ ${Emojis.ranged}: Effective use of ${Emojis.ecb} ${Emojis.spec} and ${Emojis.bolg} ${Emojis.spec} + passive throughout the fight.\n\u200B⬥ Prebuild for Arms with ${Emojis.nati} or ${Emojis.incend} for ${Emojis.magic}, both for ${Emojis.ranged}.\n\u200B⬥ ${Emojis.ranged}: Prebuild for Arms with ${Emojis.nati} and ${Emojis.incend} \n\u200B⬥ Place ${Emojis.greaterSun}/${Emojis.greaterDeathSwiftness} before **1:04**/**1:06**.\n\u200B⬥ ${Emojis.magic}: ${Emojis.fsoa} ${Emojis.spec} before arms are attackable, and attack as soon as they spawn.\n\u200B⬥ Phase 1 Core exit by **1:40** (${Emojis.magic}), **1:50** (${Emojis.ranged}).\n\u200B⬥ Finish both eruptions in 3 GCD each.\n\u200B⬥ ${Emojis.magic}: Place 1 ${Emojis.dummy} during Phase 2.\n\u200B⬥ Phase 2 rain skip (${Emojis.ranged}) or arm climb skip (${Emojis.magic}) on average.\n\u200B⬥ Phase 3 two padded at most, with no stalling between pad charges.`,
        obtaining: `⬥ This role is vouchable by anyone with ${Roles.duoMaster}+.\n\u200B⬥ This role can be obtained through a VoD review.\n\u200B⬥ This role can be obtained through a trial.`,
        kph: `This role expects 8 KPH.`,
    },
    {
        role: `duoGrandmaster`,
        timeExpectation: `Sub **4:20** kills (${Emojis.magic} / ${Emojis.attack} Hybrid)`,
        requirements: `⬥ Prebuild for Arms with ${Emojis.nati} and ${Emojis.incend}/${Emojis.meteor}.\n\u200B⬥ ${Emojis.greaterSun} by 58 seconds with pre ${Emojis.fsoa} ${Emojis.spec} and a stalled ${Emojis.greaterChain} on arms are required.\n\u200B⬥ ${Emojis.detonate} and ${Emojis.nami} required on legs.\n\u200B⬥ Phase 1 core exit by **1:34**.\n\u200B⬥ Storm tank required + finish eruptions within 4.6 GCDs (3 hit ${Emojis.assault}).\n\u200B⬥ Phase 2 rain skip on average.\n\u200B⬥ Insta-pad Phase 3 with 2 pads maximum.`,
        obtaining: `⬥ This role can be obtained through a VoD review.\n\u200B⬥ This role can be obtained through a trial.`,
        kph: `This role expects 10 KPH.`,
    }
]

export const groupRoleData = [
    {
        role: `threeSevenRootskips`,
        timeExpectation: `Sub **6:30** kills (5-man ${Emojis.necro} / ${Emojis.ranged} / ${Emojis.magic})`,
        requirements: `⬥ Rootskip by 45 seconds (50 for ${Emojis.ranged}).\n\u200B⬥ Deal with roots while ensuring arms die in plenty of time before explosion.\n\u200B⬥ 1 cycle the core with clean execution.\n\u200B⬥ Deal with mechanics properly (no bombing team).`,
        obtaining: `⬥ This role is vouchable by anyone with ${Roles.duoRootskips}+ or ${Roles.threeSevenRootskips}+.\n\u200B⬥ This role can only be obtained through VoD submission.`,
    },
    {
        role: `threeSevenExperienced`,
        timeExpectation: `Sub **5:00** kills (4-man ${Emojis.necro})\n\u200BSub **5:15** kills (5-man ${Emojis.ranged} / ${Emojis.magic})`,
        requirements: `⬥ Prebuild for Arms with ${Emojis.nati} and ${Emojis.greaterSun}/${Emojis.greaterDeathSwiftness} by **1:06**/**1:08**.\n\u200B⬥ Arms, legs and core need a solid rotation that allows for consistent 1 cycle cores regardless of when your team ultimates.\n\u200B⬥ Phase 1 core exit by **1:45** (${Emojis.magic}), **1:53** (${Emojis.ranged}).\n\u200B⬥ ${Emojis.detonate} and ${Emojis.dbreath} required on legs.\n\u200B⬥ Southern eruptions killed before cleanse finishes.\n\u200B⬥ Northern eruptions killed within 4 GCD.\n\u200B⬥ Phase into Phase 3 before the second rain hit.\n\u200B⬥ Phase 3 two padded, with an ultimate used on elf.\n\u200B⬥ Prebuilding with a ${Emojis.dummy} in Phase 4 is required.\n\u200B⬥ 8 KPH with limited deaths.`,
        obtaining: `⬥ This role is vouchable by anyone with ${Roles.duoExperienced}+ or ${Roles.threeSevenExperienced}+.\n\u200B⬥ This role can be obtained through a VoD review.\n\u200B⬥ This role can be obtained through a trial.`,
    },
    {
        role: `threeSevenMaster`,
        timeExpectation: `Sub **4:30** kills (5-man ${Emojis.necro} / ${Emojis.ranged} / ${Emojis.magic})`,
        requirements: `⬥ ${Emojis.shard} twice in Phase 1.\n\u200B⬥ ${Emojis.dummy} dropped for legs.\n\u200B⬥ ${Emojis.p6} ${Emojis.c1} on ${Emojis.inquis}.\n\u200B⬥ Prebuild with ${Emojis.nati} and ${Emojis.greaterSun} at 58 seconds with ${Emojis.fsoa} ${Emojis.spec} before arms.\n\u200B⬥ ${Emojis.greaterChain} and ${Emojis.nami} first two abilities on arms.\n\u200B⬥ Phase 1 core exit by **1:35**.\n\u200B⬥ Storm tanking required, ${Emojis.zerk} to finish eruption within 6 GCDs.\n\u200B⬥ Phase into Phase 3 before any rain hits.\n\u200B⬥ ${Emojis.zerk} at the start of Phase 3.\n\u200B⬥ ${Emojis.fsoa} ${Emojis.spec} before entering Elf.\n\u200B⬥ Phase 3 two padded at max, no stalling between pad charge.\n\u200B⬥ ${Emojis.nati} used at the end of Phase 3 for a better Phase 4 rotation.\n\u200B⬥ 10 KPH with limited deaths.`,
        obtaining: `⬥ This role is vouchable by anyone with ${Roles.threeSevenMaster}+.\n\u200B⬥ This role can be obtained through a VoD review.\n\u200B⬥ This role can be obtained through a trial.`,
    },
    {
        role: `threeSevenGrandmaster`,
        timeExpectation: `Sub **3:50** kills (4-man ${Emojis.magic} / ${Emojis.attack} Hybrid)`,
        requirements: `⬥ Arms require a stalled ${Emojis.greaterChain} released with ${Emojis.nami}.\n\u200B⬥ Phase 1 core exit by **1:28**.\n\u200B⬥ ${Emojis.zerk} to finish eruption within 5 GCDs.\n\u200B⬥ Place 1 ${Emojis.dummy} on Phase 2, and 2 ${Emojis.dummy} on Phase 3.\n\u200B⬥ A late ${Emojis.nami} in Phase 2 to ensure Phase 3 ${Emojis.zerk} ${Emojis.critBuff}.\n\u200B⬥ ${Emojis.meteor} in Phase 3 ${Emojis.zerk} is required to extend ${Emojis.critBuff}.\n\u200B⬥ Phase 3 one padded, with Solak being less than 700k HP when the elf dies.\n\u200B⬥ Pre-${Emojis.greaterBarge} with a stalled ${Emojis.assault} on P4.\n\u200B⬥ 12 KPH with very few deaths.`,
        obtaining: `⬥ This role can be obtained through a VoD review.\n\u200B⬥ This role can be obtain through a trial.`,
    }
]

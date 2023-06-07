const abilities = [
  {
    id: 1,
    name: "stench",
    effect_entries: [
      {
        effect:
          "This Pokémon's damaging moves have a 10% chance to make the target flinch with each hit if they do not already cause flinching as a secondary effect.\n\nThis ability does not stack with a held item.\n\nOverworld: The wild encounter rate is halved while this Pokémon is first in the party.",
        short_effect:
          "Has a 10% chance of making target Pokémon flinch with each hit.",
      },
    ],
    flavor_text_entries: "Helps repel wild POKéMON.",
  },
  {
    id: 2,
    name: "drizzle",
    effect_entries: [
      {
        effect:
          "The weather changes to rain when this Pokémon enters battle and does not end unless replaced by another weather condition.\n\nIf multiple Pokémon with this ability, drought, sand stream, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.",
        short_effect:
          "Summons rain that lasts indefinitely upon entering battle.",
      },
    ],
    flavor_text_entries: "Summons rain in battle.",
  },
  {
    id: 3,
    name: "speed-boost",
    effect_entries: [
      {
        effect: "This Pokémon's Speed rises one stage after each turn.",
        short_effect: "Raises Speed one stage after each turn.",
      },
    ],
    flavor_text_entries: "Gradually boosts SPEED.",
  },
  {
    id: 4,
    name: "battle-armor",
    effect_entries: [
      {
        effect:
          "Moves cannot score critical hits against this Pokémon.\n\nThis ability functions identically to shell armor.",
        short_effect: "Protects against critical hits.",
      },
    ],
    flavor_text_entries: "Blocks critical hits.",
  },
  {
    id: 5,
    name: "sturdy",
    effect_entries: [
      {
        effect:
          "When this Pokémon is at full HP, any hit that would knock it out will instead leave it with 1 HP.  Regardless of its current HP, it is also immune to the one-hit KO moves: fissure, guillotine, horn drill, and sheer cold.\n\nIf this Pokémon is holding a focus sash, this ability takes precedence and the item will not be consumed.",
        short_effect:
          "Prevents being KOed from full HP, leaving 1 HP instead.  Protects against the one-hit KO moves regardless of HP.",
      },
    ],
    flavor_text_entries: "Negates 1-hit KO attacks.",
  },
  {
    id: 6,
    name: "damp",
    effect_entries: [
      {
        effect:
          "While this Pokémon is in battle, self destruct and explosion will fail and aftermath will not take effect.",
        short_effect:
          "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle.",
      },
    ],
    flavor_text_entries: "Prevents self-destruction.",
  },
  {
    id: 7,
    name: "limber",
    effect_entries: [
      {
        effect:
          "This Pokémon cannot be paralyzed.\n\nIf a Pokémon is paralyzed and acquires this ability, its paralysis is healed; this includes when regaining a lost ability upon leaving battle.",
        short_effect: "Prevents paralysis.",
      },
    ],
    flavor_text_entries: "Prevents paralysis.",
  },
  {
    id: 8,
    name: "sand-veil",
    effect_entries: [
      {
        effect:
          "During a sandstorm, this Pokémon has 1.25× its evasion, and it does not take sandstorm damage regardless of type.\n\nThe evasion bonus does not count as a stat modifier.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved in a sandstorm.",
        short_effect:
          "Increases evasion to 1.25× during a sandstorm.  Protects against sandstorm damage.",
      },
    ],
    flavor_text_entries: "Ups evasion in a sandstorm.",
  },
  {
    id: 9,
    name: "static",
    effect_entries: [
      {
        effect:
          "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed.\n\nPokémon that are immune to electric-type moves can still be paralyzed by this ability.\n\nOverworld: If the lead Pokémon has this ability, there is a 50% chance that encounters will be with an electric Pokémon, if applicable.",
        short_effect:
          "Has a 30% chance of paralyzing attacking Pokémon on contact.",
      },
    ],
    flavor_text_entries: "Paralyzes on contact.",
  },
  {
    id: 10,
    name: "volt-absorb",
    effect_entries: [
      {
        effect:
          "Whenever an electric-type move hits this Pokémon, it heals for 1/4 of its maximum HP, negating any other effect on it.\n\nThis ability will not take effect if this Pokémon is ground-type and thus immune to Electric moves.  Electric moves will ignore this Pokémon's substitute.\n\nThis effect includes non-damaging moves, i.e. thunder wave.",
        short_effect: "Absorbs electric moves, healing for 1/4 max HP.",
      },
    ],
    flavor_text_entries: "Turns electricity into HP.",
  },
  {
    id: 11,
    name: "water-absorb",
    effect_entries: [
      {
        effect:
          "Whenever a water-type move hits this Pokémon, it heals for 1/4 of its maximum HP, negating any other effect on it.\n\nWater moves will ignore this Pokémon's substitute.",
        short_effect: "Absorbs water moves, healing for 1/4 max HP.",
      },
    ],
    flavor_text_entries: "Changes water into HP.",
  },
  {
    id: 12,
    name: "oblivious",
    effect_entries: [
      {
        effect:
          "This Pokémon cannot be infatuated and is immune to captivate.\n\nIf a Pokémon is infatuated and acquires this ability, its infatuation is cleared.",
        short_effect: "Prevents infatuation and protects against captivate.",
      },
    ],
    flavor_text_entries: "Prevents attraction.",
  },
  {
    id: 13,
    name: "cloud-nine",
    effect_entries: [
      {
        effect:
          "While this Pokémon is in battle, weather can still be in play, but will not have any of its effects.\n\nThis ability functions identically to air lock.",
        short_effect:
          "Negates all effects of weather, but does not prevent the weather itself.",
      },
    ],
    flavor_text_entries: "Negates weather effects.",
  },
  {
    id: 14,
    name: "compound-eyes",
    effect_entries: [
      {
        effect:
          "This Pokémon's moves have 1.3× their accuracy.\n\nThis ability has no effect on the one-hit KO moves (fissure, guillotine, horn drill, and sheer cold).\n\nOverworld: If the first Pokémon in the party has this ability, the chance of a wild Pokémon holding a particular item is raised from 50%, 5%, or 1% to 60%, 20%, or 5%, respectively.",
        short_effect: "Increases moves' accuracy to 1.3×.",
      },
    ],
    flavor_text_entries: "Raises accuracy.",
  },
  {
    id: 15,
    name: "insomnia",
    effect_entries: [
      {
        effect:
          "This Pokémon cannot be asleep.\n\nThis causes rest to fail altogether.  If a Pokémon is asleep and acquires this ability, it will immediately wake up; this includes when regaining a lost ability upon leaving battle.\n\nThis ability functions identically to vital spirit in battle.",
        short_effect: "Prevents sleep.",
      },
    ],
    flavor_text_entries: "Prevents sleep.",
  },
  {
    id: 16,
    name: "color-change",
    effect_entries: [
      {
        effect:
          "Whenever this Pokémon takes damage from a move, the Pokémon's type changes to match the move.\n\nIf the Pokémon has two types, both are overridden.  The Pokémon must directly take damage; for example, moves blocked by a substitute will not trigger this ability, nor will moves that deal damage indirectly, such as spikes.\n\nThis ability takes effect on only the last hit of a multiple-hit attack.\n\nIn Pokémon Colosseum and XD: Gale of Darkness, this ability does not take effect on Shadow-type moves.",
        short_effect: "Changes type to match when hit by a damaging move.",
      },
    ],
    flavor_text_entries: "Changes type to foe’s move.",
  },
  {
    id: 17,
    name: "immunity",
    effect_entries: [
      {
        effect:
          "This Pokémon cannot be poisoned.  This includes bad poison.\n\nIf a Pokémon is poisoned and acquires this ability, its poison is healed; this includes when regaining a lost ability upon leaving battle.",
        short_effect: "Prevents poison.",
      },
    ],
    flavor_text_entries: "Prevents poisoning.",
  },
  {
    id: 18,
    name: "flash-fire",
    effect_entries: [
      {
        effect:
          "This Pokémon is immune to fire-type moves.  Once this Pokémon has been hit by a Fire move, its own Fire moves will inflict 1.5× as much damage until it leaves battle.\n\nThis ability has no effect while the Pokémon is frozen.  The Fire damage bonus is retained even if the Pokémon is frozen and thawed or the ability is lost or disabled.  Fire moves will ignore this Pokémon's substitute.  This ability takes effect even on non-damaging moves, i.e. will o wisp.",
        short_effect:
          "Protects against fire moves.  Once one has been blocked, the Pokémon's own Fire moves inflict 1.5× damage until it leaves battle.",
      },
    ],
    flavor_text_entries: "Powers up if hit by fire.",
  },
  {
    id: 19,
    name: "shield-dust",
    effect_entries: [
      {
        effect:
          "This Pokémon is immune to the extra effects of moves used against it.\n\nAn extra effect is a move's chance, listed as an \"effect chance\", to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect.  For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.",
        short_effect: "Protects against incoming moves' extra effects.",
      },
    ],
    flavor_text_entries: "Prevents added effects.",
  },
  {
    id: 20,
    name: "own-tempo",
    effect_entries: [
      {
        effect:
          "This Pokémon cannot be confused.\n\nIf a Pokémon is confused and acquires this ability, its confusion will immediately be healed.",
        short_effect: "Prevents confusion.",
      },
    ],
    flavor_text_entries: "Prevents confusion.",
  },
  {
    id: 21,
    name: "suction-cups",
    effect_entries: [
      {
        effect:
          "This Pokémon cannot be forced out of battle by moves such as whirlwind.\n\ndragon tail and circle throw still inflict damage against this Pokémon.\n\nOverworld: If the lead Pokémon has this ability, the success rate while fishing is increased.",
        short_effect:
          "Prevents being forced out of battle by other Pokémon's moves.",
      },
    ],
    flavor_text_entries: "Firmly anchors the body.",
  },
  {
    id: 22,
    name: "intimidate",
    effect_entries: [
      {
        effect:
          "When this Pokémon enters battle, the opponent's Attack is lowered by one stage.  In a double battle, both opponents are affected.\n\nThis ability also takes effect when acquired during a battle, but will not take effect again if lost and reobtained without leaving battle.\n\nThis ability has no effect on an opponent that has a substitute.\n\nOverworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
        short_effect:
          "Lowers opponents' Attack one stage upon entering battle.",
      },
    ],
    flavor_text_entries: "Lowers the foe’s ATTACK.",
  },
  {
    id: 23,
    name: "shadow-tag",
    effect_entries: [
      {
        effect:
          "While this Pokémon is in battle, opposing Pokémon cannot flee or switch out.\n\nOther Pokémon with this ability are unaffected.  Pokémon with run away can still flee.  Pokémon can still switch out with the use of a move or item.",
        short_effect: "Prevents opponents from fleeing or switching out.",
      },
    ],
    flavor_text_entries: "Prevents the foe’s escape.",
  },
  {
    id: 24,
    name: "rough-skin",
    effect_entries: [
      {
        effect:
          "Whenever a move makes contact with this Pokémon, the move's user takes 1/8 of its maximum HP in damage.\n\nThis ability functions identically to iron barbs.",
        short_effect:
          "Damages attacking Pokémon for 1/8 their max HP on contact.",
      },
    ],
    flavor_text_entries: "Hurts to touch.",
  },
  {
    id: 25,
    name: "wonder-guard",
    effect_entries: [
      {
        effect:
          "This Pokémon is immune to damaging moves that are not super effective against it.\n\nMoves that inflict fixed damage, such as night shade or seismic toss, are considered super effective if their types are.  Damage not directly dealt by moves, such as damage from weather, a status ailment, or spikes, is not prevented.\n\nThis ability cannot be copied with role play or traded away with skill swap, but it can be copied with trace, disabled with gastro acid, or changed with worry seed.  This Pokémon can still use Role Play itself to lose this ability, but not Skill Swap.\n\nIf this Pokémon has a substitute, this ability will block moves as usual and any moves not blocked will react to the Substitute as usual.",
        short_effect:
          "Protects against damaging moves that are not super effective.",
      },
    ],
    flavor_text_entries: "“Super effective” hits.",
  },
  {
    id: 26,
    name: "levitate",
    effect_entries: [
      {
        effect:
          "This Pokémon is immune to ground-type moves, spikes, toxic spikes, and arena trap.\n\nThis ability is disabled during gravity or ingrain, or while holding an iron ball.  This ability is not disabled during roost.",
        short_effect: "Evades ground moves.",
      },
    ],
    flavor_text_entries: "Not hit by GROUND attacks.",
  },
  {
    id: 27,
    name: "effect-spore",
    effect_entries: [
      {
        effect:
          "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed, poisoned, or put to sleep, chosen at random.\n\nNothing is done to compensate if the move's user is immune to one of these ailments; there is simply a lower chance that the move's user will be affected.",
        short_effect:
          "Has a 30% chance of inflcting either paralysis, poison, or sleep on attacking Pokémon on contact.",
      },
    ],
    flavor_text_entries: "Leaves spores on contact.",
  },
  {
    id: 28,
    name: "synchronize",
    effect_entries: [
      {
        effect:
          "Whenever this Pokémon is burned, paralyzed, or poisoned, the Pokémon who gave this Pokémon that ailment is also given the ailment.\n\nThis ability passes back bad poison when this Pokémon is badly poisoned.  This ability cannot pass on a status ailment that the Pokémon did not directly receive from another Pokémon, such as the poison from toxic spikes or the burn from a flame orb.\n\nOverworld: If the lead Pokémon has this ability, wild Pokémon have a 50% chance of having the lead Pokémon's nature, and a 50% chance of being given a random nature as usual, including the lead Pokémon's nature.  This does not work on Pokémon received outside of battle or roaming legendaries.",
        short_effect:
          "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them.",
      },
    ],
    flavor_text_entries: "Passes on status problems.",
  },
  {
    id: 29,
    name: "clear-body",
    effect_entries: [
      {
        effect:
          "This Pokémon cannot have its stats lowered by other Pokémon.\n\nThis ability does not prevent any stat losses other than stat modifiers, such as the Speed cut from paralysis.  This Pokémon can still be passed negative stat modifiers through guard swap, heart swap, or power swap.\n\nThis ability functions identically to white smoke in battle.",
        short_effect: "Prevents stats from being lowered by other Pokémon.",
      },
    ],
    flavor_text_entries: "Prevents ability reduction.",
  },
  {
    id: 30,
    name: "natural-cure",
    effect_entries: [
      {
        effect:
          "This Pokémon is cured of any major status ailment when it is switched out for another Pokémon.\n\nIf this ability is acquired during battle, the Pokémon is cured upon leaving battle before losing the temporary ability.",
        short_effect: "Cures any major status ailment upon switching out.",
      },
    ],
    flavor_text_entries: "Heals upon switching out.",
  },
  {
    id: 31,
    name: "lightning-rod",
    effect_entries: [
      {
        effect:
          "All other Pokémon's single-target electric-type moves are redirected to this Pokémon if it is an eligible target.  Other Pokémon's Electric moves raise this Pokémon's Special Attack one stage, negating any other effect on it, and cannot miss it.\n\nIf the move's intended target also has this ability, the move is not redirected.  When multiple Pokémon with this ability are possible targets for redirection, the move is redirected to the one with the highest Speed stat, or, in the case of a tie, to a random tied Pokémon.  follow me takes precedence over this ability.\n\nIf the Pokémon is a ground-type and thus immune to Electric moves, its immunity prevents the Special Attack boost.",
        short_effect:
          "Redirects single-target electric moves to this Pokémon where possible.  Absorbs Electric moves, raising Special Attack one stage.",
      },
    ],
    flavor_text_entries: "Draws electrical moves.",
  },
  {
    id: 32,
    name: "serene-grace",
    effect_entries: [
      {
        effect:
          "This Pokémon's moves have twice their usual effect chance.\n\nAn effect chance is a move's chance to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect.  For example, flamethrower's chance of burning the target is doubled, but protect's chance of success and air cutter's increased critical hit rate are unaffected.\n\nsecret power is unaffected.",
        short_effect: "Doubles the chance of moves' extra effects occurring.",
      },
    ],
    flavor_text_entries: "Promotes added effects.",
  },
  {
    id: 33,
    name: "swift-swim",
    effect_entries: [
      {
        effect:
          "This Pokémon's Speed is doubled during rain.\n\nThis bonus does not count as a stat modifier.",
        short_effect: "Doubles Speed during rain.",
      },
    ],
    flavor_text_entries: "Raises SPEED in rain.",
  },
  {
    id: 34,
    name: "chlorophyll",
    effect_entries: [
      {
        effect:
          "This Pokémon's Speed is doubled during strong sunlight.\n\nThis bonus does not count as a stat modifier.",
        short_effect: "Doubles Speed during strong sunlight.",
      },
    ],
    flavor_text_entries: "Raises SPEED in sunshine.",
  },
  {
    id: 35,
    name: "illuminate",
    effect_entries: [
      {
        effect:
          "Overworld: If the lead Pokémon has this ability, the wild encounter rate is doubled.\n\nThis ability has no effect in battle.",
        short_effect: "Doubles the wild encounter rate.",
      },
    ],
    flavor_text_entries: "Encounter rate increases.",
  },
  {
    id: 36,
    name: "trace",
    effect_entries: [
      {
        effect:
          "When this Pokémon enters battle, it copies a random opponent's ability.\n\nThis ability cannot copy flower gift, forecast, illusion, imposter, multitype, trace, wonder guard, or zen mode.",
        short_effect: "Copies an opponent's ability upon entering battle.",
      },
    ],
    flavor_text_entries: "Copies special ability.",
  },
  {
    id: 37,
    name: "huge-power",
    effect_entries: [
      {
        effect:
          "This Pokémon's Attack is doubled while in battle.\n\nThis bonus does not count as a stat modifier.\n\nThis ability functions identically to pure power.",
        short_effect: "Doubles Attack in battle.",
      },
    ],
    flavor_text_entries: "Raises ATTACK.",
  },
  {
    id: 38,
    name: "poison-point",
    effect_entries: [
      {
        effect:
          "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being poisoned.",
        short_effect:
          "Has a 30% chance of poisoning attacking Pokémon on contact.",
      },
    ],
    flavor_text_entries: "Poisons foe on contact.",
  },
  {
    id: 39,
    name: "inner-focus",
    effect_entries: [
      {
        effect: "This Pokémon cannot flinch.",
        short_effect: "Prevents flinching.",
      },
    ],
    flavor_text_entries: "Prevents flinching.",
  },
  {
    id: 40,
    name: "magma-armor",
    effect_entries: [
      {
        effect:
          "This Pokémon cannot be frozen.\n\nIf a Pokémon is frozen and acquires this ability, it will immediately thaw out; this includes when regaining a lost ability upon leaving battle.\n\nOverworld: If any Pokémon in the party has this ability, each egg in the party has its hatch counter decreased by 2 (rather than 1) each step cycle, making eggs hatch roughly twice as quickly.  This effect does not stack if multiple Pokémon have this ability or flame body.",
        short_effect: "Prevents freezing.",
      },
    ],
    flavor_text_entries: "Prevents freezing.",
  },
  {
    id: 41,
    name: "water-veil",
    effect_entries: [
      {
        effect:
          "This Pokémon cannot be burned.\n\nIf a Pokémon is burned and acquires this ability, its burn is healed; this includes when regaining a lost ability upon leaving battle.",
        short_effect: "Prevents burns.",
      },
    ],
    flavor_text_entries: "Prevents burns.",
  },
  {
    id: 42,
    name: "magnet-pull",
    effect_entries: [
      {
        effect:
          "While this Pokémon is in battle, opposing steel-type Pokémon cannot flee or switch out.\n\nPokémon with run away can still flee.  Pokémon can still switch out with the use of a move or item.\n\nOverworld: If the lead Pokémon has this ability, Steel-type Pokémon have a higher encounter rate.",
        short_effect: "Prevents steel opponents from fleeing or switching out.",
      },
    ],
    flavor_text_entries: "Traps STEEL-type POKéMON.",
  },
  {
    id: 43,
    name: "soundproof",
    effect_entries: [
      {
        effect:
          "This Pokémon is immune to moves flagged as being sound-based.\n\nheal bell is unaffected.  uproar still prevents this Pokémon from sleeping.  This Pokémon can still receive a Perish Song counter through baton pass, and will retain a Perish Song counter if it acquires this ability after Perish Song is used.\n\nhowl, roar of time, sonic boom, and yawn are not flagged as sound-based.",
        short_effect: "Protects against sound-based moves.",
      },
    ],
    flavor_text_entries: "Avoids sound-based moves.",
  },
  {
    id: 44,
    name: "rain-dish",
    effect_entries: [
      {
        effect:
          "This Pokémon heals for 1/16 of its maximum HP after each turn during rain.",
        short_effect: "Heals for 1/16 max HP after each turn during rain.",
      },
    ],
    flavor_text_entries: "Slight HP recovery in rain.",
  },
  {
    id: 45,
    name: "sand-stream",
    effect_entries: [
      {
        effect:
          "The weather changes to a sandstorm when this Pokémon enters battle and does not end unless cancelled by another weather condition.\n\nIf multiple Pokémon with this ability, drizzle, drought, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved in a sandstorm.",
        short_effect:
          "Summons a sandstorm that lasts indefinitely upon entering battle.",
      },
    ],
    flavor_text_entries: "Summons a sandstorm.",
  },
  {
    id: 46,
    name: "pressure",
    effect_entries: [
      {
        effect:
          "Moves targetting this Pokémon use one extra PP.\n\nThis ability stacks if multiple targets have it.  This ability still affects moves that fail or miss.  This ability does not affect ally moves that target either the entire field or just its side, nor this Pokémon's self-targetted moves; it does, however, affect single-targetted ally moves aimed at this Pokémon, ally moves that target all other Pokémon, and opponents' moves that target the entire field.  If this ability raises a move's PP cost above its remaining PP, it will use all remaining PP.\n\nWhen this Pokémon enters battle, all participating trainers are notified that it has this ability.\n\nOverworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
        short_effect:
          "Increases the PP cost of moves targetting the Pokémon by one.",
      },
    ],
    flavor_text_entries: "Raises foe’s PP usage.",
  },
  {
    id: 47,
    name: "thick-fat",
    effect_entries: [
      {
        effect:
          "This Pokémon takes half as much damage from fire- and ice-type moves.",
        short_effect: "Halves damage from fire and ice moves.",
      },
    ],
    flavor_text_entries: "Heat-and-cold protection.",
  },
  {
    id: 48,
    name: "early-bird",
    effect_entries: [
      {
        effect:
          "This Pokémon's remaining sleep turn count falls by 2 rather than 1.\n\nIf this Pokémon's sleep counter is at 1, it will fall to 0 and then the Pokémon will wake up.",
        short_effect: "Makes sleep pass twice as quickly.",
      },
    ],
    flavor_text_entries: "Awakens quickly from sleep.",
  },
  {
    id: 49,
    name: "flame-body",
    effect_entries: [
      {
        effect:
          "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being burned.\n\nOverworld: If any Pokémon in the party has this ability, each egg in the party has its hatch counter decreased by 2 (rather than 1) each step cycle, making eggs hatch roughly twice as quickly.  This effect does not stack if multiple Pokémon have this ability or magma armor.",
        short_effect:
          "Has a 30% chance of burning attacking Pokémon on contact.",
      },
    ],
    flavor_text_entries: "Burns the foe on contact.",
  },
  {
    id: 50,
    name: "run-away",
    effect_entries: [
      {
        effect:
          "This Pokémon is always successful fleeing from wild battles, even if trapped by a move or ability.",
        short_effect: "Ensures success fleeing from wild battles.",
      },
    ],
    flavor_text_entries: "Makes escaping easier.",
  },
  {
    id: 51,
    name: "keen-eye",
    effect_entries: [
      {
        effect:
          "This Pokémon cannot have its accuracy lowered.\n\nThis ability does not prevent any accuracy losses other than stat modifiers, such as the accuracy cut from fog; nor does it prevent other Pokémon's evasion from making this Pokémon's moves less accurate.  This Pokémon can still be passed negative accuracy modifiers through heart swap.\n\nOverworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
        short_effect: "Prevents accuracy from being lowered.",
      },
    ],
    flavor_text_entries: "Prevents loss of accuracy.",
  },
  {
    id: 52,
    name: "hyper-cutter",
    effect_entries: [
      {
        effect:
          "This Pokémon's Attack cannot be lowered by other Pokémon.\n\nThis ability does not prevent any Attack losses other than stat modifiers, such as the Attack cut from a burn.  This Pokémon can still be passed negative Attack modifiers through heart swap or power swap.",
        short_effect: "Prevents Attack from being lowered by other Pokémon.",
      },
    ],
    flavor_text_entries: "Prevents ATTACK reduction.",
  },
  {
    id: 53,
    name: "pickup",
    effect_entries: [
      {
        effect:
          "At the end of each turn, if another Pokémon consumed or Flung a held item that turn, this Pokémon picks up the item if it is not already holding one.  After each battle, this Pokémon has a 10% chance of picking up an item if it is not already holding one.\n\nThe air balloon and eject button cannot be picked up.\n\nThe items that may be found vary by game, and, since Pokémon Emerald, by the Pokémon's level.  This ability is checked after the battle ends, at which point any temporary ability changes have worn off.",
        short_effect:
          "Picks up other Pokémon's used and Flung held items.  May also pick up an item after battle.",
      },
    ],
    flavor_text_entries: "May pick up items.",
  },
  {
    id: 54,
    name: "truant",
    effect_entries: [
      {
        effect:
          'Every second turn on which this Pokémon should attempt to use a move, it will instead do nothing ("loaf around").\n\nLoafing around interrupts moves that take multiple turns the same way paralysis, flinching, etc do.  Most such moves, for example bide or rollout, are simply cut off upon loafing around.  Attacks with a recharge turn, such as hyper beam, do not have to recharge; attacks with a preparation turn, such as fly, do not end up being used.  Moves that are forced over multiple turns and keep going through failure, such as outrage, uproar, or any move forced by encore, keep going as usual.\n\nIf this Pokémon is confused, its confusion is not checked when loafing around; the Pokémon cannot hurt itself, and its confusion does not end or come closer to ending.\n\nIf this Pokémon attempts to move but fails, e.g. because of paralysis or gravity, it still counts as having moved and will loaf around the next turn.  If it does not attempt to move, e.g. because it is asleep or frozen, whatever it would have done will be postponed until its next attempt; that is, it will either loaf around or move as usual, depending on what it last did.\n\nThis ability cannot be changed with worry seed, but it can be disabled with gastro acid, changed with role play, or traded away with skill swap.',
        short_effect: "Skips every second turn.",
      },
    ],
    flavor_text_entries: "Moves only every two turns.",
  },
  {
    id: 55,
    name: "hustle",
    effect_entries: [
      {
        effect:
          "This Pokémon's physical moves do 1.5× as much regular damage, but have 0.8× their usual accuracy.\n\nSpecial moves are unaffected.  Moves that do set damage, such as seismic toss, have their accuracy affected, but not their damage.\n\nOverworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
        short_effect:
          "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×.",
      },
    ],
    flavor_text_entries: "Trades accuracy for power.",
  },
  {
    id: 56,
    name: "cute-charm",
    effect_entries: [
      {
        effect:
          "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being infatuated.\n\nOverworld: If the first Pokémon in the party has this ability, any wild Pokémon whose species can be either gender has a 2/3 chance of being set to the opposite gender, and a 1/3 chance of having a random gender as usual.",
        short_effect:
          "Has a 30% chance of infatuating attacking Pokémon on contact.",
      },
    ],
    flavor_text_entries: "Infatuates on contact.",
  },
  {
    id: 57,
    name: "plus",
    effect_entries: [
      {
        effect:
          "This Pokémon has 1.5× its Special Attack if any friendly Pokémon has plus or minus.\n\nThis bonus does not count as a stat modifier.  If either ability is disabled by gastro acid, both lose their effect.",
        short_effect:
          "Increases Special Attack to 1.5× when a friendly Pokémon has plus or minus.",
      },
    ],
    flavor_text_entries: "Powers up with MINUS.",
  },
  {
    id: 58,
    name: "minus",
    effect_entries: [
      {
        effect:
          "This Pokémon has 1.5× its Special Attack if any friendly Pokémon has plus or minus.\n\nThis bonus does not count as a stat modifier.  If either ability is disabled by gastro acid, both lose their effect.",
        short_effect:
          "Increases Special Attack to 1.5× when a friendly Pokémon has plus or minus.",
      },
    ],
    flavor_text_entries: "Powers up with PLUS.",
  },
  {
    id: 59,
    name: "forecast",
    effect_entries: [
      {
        effect:
          "During rain, strong sunlight, or hail, this Pokémon's type changes to water, fire, or ice, respectively, and its form changes to match.\n\nThis ability has no effect for any Pokémon other than castform.\n\nIf the weather ends or becomes anything that does not trigger this ability, or a Pokémon with air lock or cloud nine enters battle, this Pokémon's type and form revert to their default.  If this ability is lost or disabled, this Pokémon cannot change its current type and form until it regains its ability.",
        short_effect: "Changes castform's type and form to match the weather.",
      },
    ],
    flavor_text_entries: "Changes with the weather.",
  },
  {
    id: 60,
    name: "sticky-hold",
    effect_entries: [
      {
        effect:
          "This Pokémon's hold item cannot be removed by other Pokémon.\n\nDamaging moves that would remove this Pokémon's item can still inflict damage against this Pokémon, e.g. knock off or pluck.  This Pokémon can still use moves that involve the loss of its own item, e.g. fling or trick.\n\nOverworld: If the lead Pokémon has this ability, the encounter rate while fishing is increased.",
        short_effect:
          "Prevents a held item from being removed by other Pokémon.",
      },
    ],
    flavor_text_entries: "Prevents item theft.",
  },
  {
    id: 61,
    name: "shed-skin",
    effect_entries: [
      {
        effect:
          "After each turn, this Pokémon has a 33% of being cured of any major status ailment.",
        short_effect:
          "Has a 33% chance of curing any major status ailment after each turn.",
      },
    ],
    flavor_text_entries: "Heals the body by shedding.",
  },
  {
    id: 62,
    name: "guts",
    effect_entries: [
      {
        effect:
          "Whenever this Pokémon is asleep, burned, paralyzed, or poisoned, it has 1.5× its Attack.  This Pokémon is not affected by the usual Attack cut from a burn.\n\nThis bonus does not count as a stat modifier.",
        short_effect: "Increases Attack to 1.5× with a major status ailment.",
      },
    ],
    flavor_text_entries: "Ups ATTACK if suffering.",
  },
  {
    id: 63,
    name: "marvel-scale",
    effect_entries: [
      {
        effect:
          "Whenever this Pokémon has a major status ailment, it has 1.5× its Defense.\n\nThis bonus does not count as a stat modifier.",
        short_effect: "Increases Defense to 1.5× with a major status ailment.",
      },
    ],
    flavor_text_entries: "Ups DEFENSE if suffering.",
  },
  {
    id: 64,
    name: "liquid-ooze",
    effect_entries: [
      {
        effect:
          "Whenever a Pokémon would heal after hitting this Pokémon with a leeching move like absorb, it instead loses as many HP as it would usually gain.\n\ndream eater is unaffected.",
        short_effect:
          "Damages opponents using leeching moves for as much as they would heal.",
      },
    ],
    flavor_text_entries: "Draining causes injury.",
  },
  {
    id: 65,
    name: "overgrow",
    effect_entries: [
      {
        effect:
          "When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.",
        short_effect:
          "Strengthens grass moves to inflict 1.5× damage at 1/3 max HP or less.",
      },
    ],
    flavor_text_entries: "Ups GRASS moves in a pinch.",
  },
  {
    id: 66,
    name: "blaze",
    effect_entries: [
      {
        effect:
          "When this Pokémon has 1/3 or less of its HP remaining, its fire-type moves inflict 1.5× as much regular damage.",
        short_effect:
          "Strengthens fire moves to inflict 1.5× damage at 1/3 max HP or less.",
      },
    ],
    flavor_text_entries: "Ups FIRE moves in a pinch.",
  },
  {
    id: 67,
    name: "torrent",
    effect_entries: [
      {
        effect:
          "When this Pokémon has 1/3 or less of its HP remaining, its water-type moves inflict 1.5× as much regular damage.",
        short_effect:
          "Strengthens water moves to inflict 1.5× damage at 1/3 max HP or less.",
      },
    ],
    flavor_text_entries: "Ups WATER moves in a pinch.",
  },
  {
    id: 68,
    name: "swarm",
    effect_entries: [
      {
        effect:
          "When this Pokémon has 1/3 or less of its HP remaining, its bug-type moves inflict 1.5× as much regular damage.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is increased.",
        short_effect:
          "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less.",
      },
    ],
    flavor_text_entries: "Ups BUG moves in a pinch.",
  },
  {
    id: 69,
    name: "rock-head",
    effect_entries: [
      {
        effect:
          "This Pokémon does not receive recoil damage from its recoil moves.\n\nstruggle's recoil is unaffected.  This ability does not prevent crash damage from missing with jump kick or high jump kick.",
        short_effect: "Protects against recoil damage.",
      },
    ],
    flavor_text_entries: "Prevents recoil damage.",
  },
  {
    id: 70,
    name: "drought",
    effect_entries: [
      {
        effect:
          "The weather changes to strong sunlight when this Pokémon enters battle and does not end unless cancelled by another weather condition.\n\nIf multiple Pokémon with this ability, drizzle, sand stream, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.",
        short_effect:
          "Summons strong sunlight that lasts indefinitely upon entering battle.",
      },
    ],
    flavor_text_entries: "Summons sunlight in battle.",
  },
  {
    id: 71,
    name: "arena-trap",
    effect_entries: [
      {
        effect:
          "While this Pokémon is in battle, opposing Pokémon cannot flee or switch out.  flying-type Pokémon and Pokémon in the air, e.g. due to levitate or magnet rise, are unaffected.\n\nPokémon with run away can still flee.  Pokémon can still switch out with the use of a move or item.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is doubled.",
        short_effect:
          "Prevents opponents from fleeing or switching out.  Eluded by flying-types and Pokémon in the air.",
      },
    ],
    flavor_text_entries: "Prevents fleeing.",
  },
  {
    id: 72,
    name: "vital-spirit",
    effect_entries: [
      {
        effect:
          "This Pokémon cannot be asleep.\n\nThis causes rest to fail altogether.  If a Pokémon is asleep and acquires this ability, it will immediately wake up; this includes when regaining a lost ability upon leaving battle.\n\nThis ability functions identically to insomnia in battle.\n\nOverworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
        short_effect: "Prevents sleep.",
      },
    ],
    flavor_text_entries: "Prevents sleep.",
  },
  {
    id: 73,
    name: "white-smoke",
    effect_entries: [
      {
        effect:
          "This Pokémon cannot have its stats lowered by other Pokémon.\n\nThis ability does not prevent any stat losses other than stat modifiers, such as the Speed cut from paralysis; nor self-inflicted stat drops, such as the Special Attack drop from overheat; nor opponent-triggered stat boosts, such as the Attack boost from swagger.  This Pokémon can still be passed negative stat modifiers through guard swap, heart swap, or power swap.\n\nThis ability functions identically to clear body in battle.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved.",
        short_effect: "Prevents stats from being lowered by other Pokémon.",
      },
    ],
    flavor_text_entries: "Prevents ability reduction.",
  },
  {
    id: 74,
    name: "pure-power",
    effect_entries: [
      {
        effect:
          "This Pokémon's Attack is doubled in battle.\n\nThis bonus does not count as a stat modifier.\n\nThis ability functions identically to huge power.",
        short_effect: "Doubles Attack in battle.",
      },
    ],
    flavor_text_entries: "Raises ATTACK.",
  },
  {
    id: 75,
    name: "shell-armor",
    effect_entries: [
      {
        effect:
          "Moves cannot score critical hits against this Pokémon.\n\nThis ability functions identically to battle armor.",
        short_effect: "Protects against critical hits.",
      },
    ],
    flavor_text_entries: "Blocks critical hits.",
  },
  {
    id: 76,
    name: "air-lock",
    effect_entries: [
      {
        effect:
          "While this Pokémon is in battle, weather can still be in play, but will not have any of its effects.\n\nThis ability functions identically to cloud nine.",
        short_effect:
          "Negates all effects of weather, but does not prevent the weather itself.",
      },
    ],
    flavor_text_entries: "Negates weather effects.",
  },
  {
    id: 77,
    name: "tangled-feet",
    effect_entries: [
      {
        effect: "When this Pokémon is confused, it has twice its evasion.",
        short_effect: "Doubles evasion when confused.",
      },
    ],
  },
  {
    id: 78,
    name: "motor-drive",
    effect_entries: [
      {
        effect:
          "Whenever an electric-type move hits this Pokémon, its Speed rises one stage, negating any other effect on it.\n\nThis ability will not take effect if this Pokémon is immune to Electric moves.  Electric moves will ignore this Pokémon's substitute.\n\nThis effect includes non-damaging moves, i.e. thunder wave.",
        short_effect: "Absorbs electric moves, raising Speed one stage.",
      },
    ],
  },
  {
    id: 79,
    name: "rivalry",
    effect_entries: [
      {
        effect:
          "This Pokémon inflicts 1.25× as much regular damage against Pokémon of the same gender and 0.75× as much regular damage against Pokémon of the opposite gender.\n\nIf either Pokémon is genderless, damage is unaffected.",
        short_effect:
          "Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender.",
      },
    ],
  },
  {
    id: 80,
    name: "steadfast",
    effect_entries: [
      {
        effect: "Whenever this Pokémon flinches, its Speed rises one stage.",
        short_effect: "Raises Speed one stage upon flinching.",
      },
    ],
  },
  {
    id: 81,
    name: "snow-cloak",
    effect_entries: [
      {
        effect:
          "During hail, this Pokémon has 1.25× its evasion, and it does not take hail damage regardless of type.\n\nThe evasion bonus does not count as a stat modifier.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved in snow.",
        short_effect:
          "Increases evasion to 1.25× during hail.  Protects against hail damage.",
      },
    ],
  },
  {
    id: 82,
    name: "gluttony",
    effect_entries: [
      {
        effect:
          "This Pokémon eats any held Berry triggered by low HP when it falls below 50% of its HP, regardless of the Berry's usual threshold.",
        short_effect:
          "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP.",
      },
    ],
  },
  {
    id: 83,
    name: "anger-point",
    effect_entries: [
      {
        effect:
          "Whenever this Pokémon receives a critical hit, its Attack rises to the maximum of 6 stages.\n\nThis ability will still take effect if the critical hit is received by a substitute.",
        short_effect:
          "Raises Attack to the maximum of six stages upon receiving a critical hit.",
      },
    ],
  },
  {
    id: 84,
    name: "unburden",
    effect_entries: [
      {
        effect:
          "When this Pokémon uses or loses its held item, its Speed is doubled.  If it gains another item or leaves battle, this bonus is lost.\n\nThis includes when the Pokémon drops its item because of knock off.  This bonus does not count as a stat modifier.  There is no notification when this ability takes effect.",
        short_effect: "Doubles Speed upon using or losing a held item.",
      },
    ],
  },
  {
    id: 85,
    name: "heatproof",
    effect_entries: [
      {
        effect:
          "This Pokémon takes half as much damage from fire-type moves and burns.",
        short_effect: "Halves damage from fire moves and burns.",
      },
    ],
  },
  {
    id: 86,
    name: "simple",
    effect_entries: [
      {
        effect:
          "Each stage of this Pokémon's stat modifiers acts as two stages.  These doubled stages are still limited to a minimum of -6 and a maximum of 6.\n\nThis Pokémon can still accumulate less than -3 or more than 3 stages of stat modifiers, even though the extra ones have no effect after doubling.",
        short_effect:
          "Doubles the Pokémon's stat modifiers.  These doubled modifiers are still capped at -6 or 6 stages.",
      },
    ],
  },
  {
    id: 87,
    name: "dry-skin",
    effect_entries: [
      {
        effect:
          "This Pokémon takes 1/8 of its maximum HP in damage after each turn during strong sunlight, but it heals for 1/8 of its HP each turn during rain.  This Pokémon takes 1.25× as much damage from fire-type moves, but whenever a water move hits it, it heals for 1/4 its maximum HP instead.",
        short_effect:
          "Causes 1/8 max HP in damage each turn during strong sunlight, but heals for 1/8 max HP during rain.  Increases damage from fire moves to 1.25×, but absorbs water moves, healing for 1/4 max HP.",
      },
    ],
  },
  {
    id: 88,
    name: "download",
    effect_entries: [
      {
        effect:
          "When this Pokémon enters battle, its Attack or Special Attack, whichever corresponds to its opponents' weaker total defensive stat, rises one stage.  In the event of a tie, Special Attack is raised.\n\nThis ability also takes effect when acquired during a battle.",
        short_effect:
          "Raises the attack stat corresponding to the opponents' weaker defense one stage upon entering battle.",
      },
    ],
  },
  {
    id: 89,
    name: "iron-fist",
    effect_entries: [
      {
        effect:
          'Moves flagged as being punch-based have 1.2× their base power for this Pokémon.\n\nsucker punch is not flagged as punch-based; its original, Japanese name only means "surprise attack".',
        short_effect: "Strengthens punch-based moves to 1.2× their power.",
      },
    ],
  },
  {
    id: 90,
    name: "poison-heal",
    effect_entries: [
      {
        effect:
          "If this Pokémon is poisoned, it will heal for 1/8 of its maximum HP after each turn rather than taking damage.  This includes bad poison.",
        short_effect:
          "Heals for 1/8 max HP after each turn when poisoned in place of damage.",
      },
    ],
  },
  {
    id: 91,
    name: "adaptability",
    effect_entries: [
      {
        effect:
          "This Pokémon inflicts twice as much damage with moves whose types match its own, rather than the usual same-type attack bonus of 1.5×.",
        short_effect: "Increases the same-type attack bonus from 1.5× to 2×.",
      },
    ],
  },
  {
    id: 92,
    name: "skill-link",
    effect_entries: [
      {
        effect:
          "This Pokémon always hits five times with two-to-five-hit moves, such as icicle spear.  It also bypasses the accuracy checks on triple kick's second and third hits.",
        short_effect:
          "Extends two-to-five-hit moves and triple kick to their full length every time.",
      },
    ],
  },
  {
    id: 93,
    name: "hydration",
    effect_entries: [
      {
        effect:
          "This Pokémon is cured of any major status ailment after each turn during rain.",
        short_effect:
          "Cures any major status ailment after each turn during rain.",
      },
    ],
  },
  {
    id: 94,
    name: "solar-power",
    effect_entries: [
      {
        effect:
          "During strong sunlight, this Pokémon has 1.5× its Special Attack but takes 1/8 of its maximum HP in damage after each turn.",
        short_effect:
          "Increases Special Attack to 1.5× but costs 1/8 max HP after each turn during strong sunlight.",
      },
    ],
  },
  {
    id: 95,
    name: "quick-feet",
    effect_entries: [
      {
        effect:
          "Whenever this Pokémon has a major status ailment, it has 1.5× its Speed.  This Pokémon is not affected by the usual Speed cut from paralysis.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved.",
        short_effect: "Increases Speed to 1.5× with a major status ailment.",
      },
    ],
  },
  {
    id: 96,
    name: "normalize",
    effect_entries: [
      {
        effect:
          "This Pokémon's moves all act as if they were normal-type.\n\nMoves that inflict typeless damage do so as usual.  Moves of variable type, such as hidden power, are affected.  They otherwise work as usual, however; weather ball, for example, is always forced to be Normal, but it still has doubled power and looks different during weather.\n\nAs thunder wave is prevented by immunities, unlike most non-damaging moves, it does not affect ghost-type Pokémon under the effect of this ability.",
        short_effect: "Makes the Pokémon's moves all act normal-type.",
      },
    ],
  },
  {
    id: 97,
    name: "sniper",
    effect_entries: [
      {
        effect:
          "This Pokémon inflicts triple damage with critical hits, rather than the usual double damage.",
        short_effect:
          "Strengthens critical hits to inflict 3× damage rather than 2×.",
      },
    ],
  },
  {
    id: 98,
    name: "magic-guard",
    effect_entries: [
      {
        effect:
          "This Pokémon is immune to damage not directly caused by a move.\n\nFor example, this Pokémon takes no damage from from weather, recoil, status ailments, or spikes, but it still suffers from the Attack cut when burned, and a life orb will still power up this Pokémon's moves without damaging it.  Anything that directly depends on such damage will also not happen; for example, leech seed will neither hurt this Pokémon nor heal the opponent, and Pokémon with a jaboca berry or rowap berry will not consume the berry when hit by this Pokémon.\n\nThe following are unaffected: struggle, pain split (whether used by or against this Pokémon), belly drum, substitute, curse, moves that knock the user out, and damage from confusion.\n\nThis Pokémon will neither lose nor regain HP if it drains HP from a Pokémon with liquid ooze.\n\nIf this Pokémon is badly poisoned, the poison counter is still increased each turn; if the Pokémon loses this ability, it will begin taking as much damage as it would be if it had been taking increasing damage each turn.",
        short_effect: "Protects against damage not directly caused by a move.",
      },
    ],
  },
  {
    id: 99,
    name: "no-guard",
    effect_entries: [
      {
        effect:
          "Moves used by or against this Pokémon never miss.\n\nOne-hit KO moves are unaffected.  Moves affected by this ability can hit Pokémon during the preparation turn of moves like dig or fly.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is doubled.",
        short_effect: "Ensures all moves used by and against the Pokémon hit.",
      },
    ],
  },
  {
    id: 100,
    name: "stall",
    effect_entries: [
      {
        effect:
          "This Pokémon moves last within its priority bracket.\n\nMultiple Pokémon with this ability move in order of Speed amongst themselves.\n\nThe full incense and lagging tail take precedence over this ability; that is, Pokémon with these items move after Pokémon with this ability.  Pokémon with both this ability and one of these items are delayed as much as if they had only the item.\n\nThis ability works as usual during trick room: Pokémon with this ability will move in reverse order of Speed after Pokémon without it.",
        short_effect:
          "Makes the Pokémon move last within its move's priority bracket.",
      },
    ],
  },
  {
    id: 101,
    name: "technician",
    effect_entries: [
      {
        effect:
          "This Pokémon's moves have 1.5× their power if their base power is 60 or less.\n\nThis includes moves of variable power, such as hidden power and magnitude, when their power is 60 or less.  helping hand's power boost is taken into account for any move, as is defense curl's power boost for rollout.",
        short_effect:
          "Strengthens moves of 60 base power or less to 1.5× their power.",
      },
    ],
  },
  {
    id: 102,
    name: "leaf-guard",
    effect_entries: [
      {
        effect:
          "This Pokémon cannot be given a major status ailment during strong sunlight.\n\nThis ability does not heal prior status ailments.  rest will fail altogether with this ability in effect.  yawn will immediately fail if used on this Pokémon during strong sunlight, and an already-used Yawn will fail if the weather turns to strong sunlight in the meantime.",
        short_effect:
          "Protects against major status ailments during strong sunlight.",
      },
    ],
  },
  {
    id: 103,
    name: "klutz",
    effect_entries: [
      {
        effect:
          "In battle, this Pokémon cannot use its held item, nor will the item have any passive effect on the battle, positive or negative.  This Pokémon also cannot use fling.\n\nThe Speed cut from the iron ball and the effort items (the macho brace, power weight, power bracer, power belt, power lens, power band, and power anklet) is unaffected.  Items that do not directly affect the battle, such as the exp share, the amulet coin, or the soothe bell, work as usual.  All held items work as usual out of battle.\n\nOther moves that use the held item, such as natural gift and switcheroo, work as usual.",
        short_effect:
          "Prevents the Pokémon from using its held item in battle.",
      },
    ],
  },
  {
    id: 104,
    name: "mold-breaker",
    effect_entries: [
      {
        effect:
          "This Pokémon's moves completely ignore abilities that could hinder or prevent their effect on the target.\n\nFor example, this Pokémon's moves ignore abilities that would fully negate them, such as water absorb; abilities that would prevent any of their effects, such as clear body, shell armor, or sticky hold; and abilities that grant any general protective benefit, such as simple, snow cloak, or thick fat.  If an ability could either hinder or help this Pokémon's moves, e.g. dry skin or unaware, the ability is ignored either way.\n\nAbilities that do not fit this description, even if they could hinder moves in some other way, are not affected.  For example, cursed body only affects potential future uses of the move, while liquid ooze and shadow tag can only hinder a move's effect on the user.  This ablity cannot ignore type or form changes granted by abilities, for example color change or forecast; nor effects that were caused by abilities but are no longer tied to an ability, such as the rain from drizzle.  This ability cannot ignore multitype at all.\n\nAn ability ignored by this ability is only nullified while the move is being used.  For example, this Pokémon's moves can paralyze a Pokémon with limber, but Limber will activate and heal the paralysis immediately thereafter, and this Pokémon's spikes are not affected by this ability after they have been placed.\n\nWhen this Pokémon enters battle, all participating trainers are notified that it has this ability.\n\nThis ability functions identically to teravolt and turboblaze.",
        short_effect:
          "Bypasses targets' abilities if they could hinder or prevent a move.",
      },
    ],
  },
  {
    id: 105,
    name: "super-luck",
    effect_entries: [
      {
        effect:
          "This Pokémon's moves have critical hit rates one stage higher than normal.",
        short_effect: "Raises moves' critical hit rates one stage.",
      },
    ],
  },
  {
    id: 106,
    name: "aftermath",
    effect_entries: [
      {
        effect:
          "When this Pokémon is knocked out by a move that makes contact, the move's user takes 1/4 its maximum HP in damage.",
        short_effect:
          "Damages the attacker for 1/4 its max HP when knocked out by a contact move.",
      },
    ],
  },
  {
    id: 107,
    name: "anticipation",
    effect_entries: [
      {
        effect:
          "When this Pokémon enters battle, if one of its opponents has a move that is super effective against it, self destruct, explosion, or a one-hit knockout move, all participating trainers are notified.\n\nThe move itself is not revealed; only that there is such a move.  Moves that inflict typeless damage, such as future sight, and moves of variable type, such as hidden power, count as their listed types.  counter, metal burst, mirror coat, and one-hit KO moves to which this Pokémon is immune do not trigger this ability.",
        short_effect:
          "Notifies all trainers upon entering battle if an opponent has a super-effective move, self destruct, explosion, or a one-hit KO move.",
      },
    ],
  },
  {
    id: 108,
    name: "forewarn",
    effect_entries: [
      {
        effect:
          "When this Pokémon enters battle, it reveals the move with the highest base power known by any opposing Pokémon to all participating trainers.\n\nIn the event of a tie, one is chosen at random.\n\nMoves without a listed base power are assigned one as follows:\n\nPower | Moves\n----: | -----\n  160 | One-hit KO moves: fissure, guillotine, horn drill, and sheer cold\n  120 | Counter moves: counter, metal burst, and mirror coat\n   80 | Variable power or set damage: crush grip, dragon rage, electro ball, endeavor, final gambit, flail, frustration, grass knot, gyro ball, heat crash, heavy slam, hidden power, low kick, natural gift, night shade, psywave, return, reversal, seismic toss, sonic boom, trump card, and wring out\n    0 | Any such move not listed\n",
        short_effect:
          "Reveals the opponents' strongest move upon entering battle.",
      },
    ],
  },
  {
    id: 109,
    name: "unaware",
    effect_entries: [
      {
        effect:
          "This Pokémon ignores other Pokémon's stat modifiers for the purposes of damage and accuracy calculation.\n\nEffectively, this affects modifiers of every stat except Speed.\n\nThe power of punishment and stored power is calculated as usual.  When this Pokémon hurts itself in confusion, its stat modifiers affect damage as usual.",
        short_effect:
          "Ignores other Pokémon's stat modifiers for damage and accuracy calculation.",
      },
    ],
  },
  {
    id: 110,
    name: "tinted-lens",
    effect_entries: [
      {
        effect:
          "This Pokémon deals twice as much damage with moves that are not very effective against the target.",
        short_effect: "Doubles damage inflicted with not-very-effective moves.",
      },
    ],
  },
  {
    id: 111,
    name: "filter",
    effect_entries: [
      {
        effect:
          "This Pokémon takes 0.75× as much damage from moves that are super effective against it.\n\nThis ability functions identically to solid rock.",
        short_effect:
          "Decreases damage taken from super-effective moves by 1/4.",
      },
    ],
  },
  {
    id: 112,
    name: "slow-start",
    effect_entries: [
      {
        effect:
          "This Pokémon's Attack and Speed are halved for five turns upon entering battle.\n\nThis ability also takes effect when acquired during battle.  If this Pokémon loses its ability before the five turns are up, its Attack and Speed return to normal; if it then regains this ability without leaving battle, its Attack and Speed are halved again, but the counter keeps counting from where it was.",
        short_effect:
          "Halves Attack and Speed for five turns upon entering battle.",
      },
    ],
  },
  {
    id: 113,
    name: "scrappy",
    effect_entries: [
      {
        effect:
          "This Pokémon ignores ghost-type Pokémon's immunity to normal- and fighting-type moves.\n\nGhost Pokémon's other types affect damage as usual.",
        short_effect:
          "Lets the Pokémon's normal and fighting moves hit ghost Pokémon.",
      },
    ],
  },
  {
    id: 114,
    name: "storm-drain",
    effect_entries: [
      {
        effect:
          "All other Pokémon's single-target water-type moves are redirected to this Pokémon, if it is an eligible target.  Other Pokémon's Water moves raise this Pokémon's Special Attack one stage, negating any other effect on it, and cannot miss it.\n\nIf the move's intended target also has this ability, the move is not redirected.  When multiple Pokémon with this ability are possible targets for redirection, the move is redirected to the one with the highest Speed stat, or, in the case of a tie, to a random tied Pokémon.  follow me takes precedence over this ability.",
        short_effect:
          "Redirects single-target water moves to this Pokémon where possible.  Absorbs Water moves, raising Special Attack one stage.",
      },
    ],
  },
  {
    id: 115,
    name: "ice-body",
    effect_entries: [
      {
        effect:
          "This Pokémon heals for 1/16 of its maximum HP after each turn during hail, and it does not take hail damage regardless of type.",
        short_effect:
          "Heals for 1/16 max HP after each turn during hail.  Protects against hail damage.",
      },
    ],
  },
  {
    id: 116,
    name: "solid-rock",
    effect_entries: [
      {
        effect:
          "This Pokémon takes 0.75× as much damage from moves that are super effective against it.\n\nThis ability functions identically to filter.",
        short_effect:
          "Decreases damage taken from super-effective moves by 1/4.",
      },
    ],
  },
  {
    id: 117,
    name: "snow-warning",
    effect_entries: [
      {
        effect:
          "The weather changes to hail when this Pokémon enters battle and does not end unless cancelled by another weather condition.\n\nIf multiple Pokémon with this ability, drizzle, drought, or sand stream are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.",
        short_effect:
          "Summons hail that lasts indefinitely upon entering battle.",
      },
    ],
  },
  {
    id: 118,
    name: "honey-gather",
    effect_entries: [
      {
        effect:
          "This Pokémon has a chance of picking up honey after each battle.  This chance starts at 5% and rises another 5% after every tenth level: 5% from level 1–10, 10% from 11–20, and so on, up to 50% from 91–100.\n\nThis ability is checked after the battle ends, at which point any temporary ability changes have worn off.",
        short_effect: "The Pokémon may pick up honey after battle.",
      },
    ],
  },
  {
    id: 119,
    name: "frisk",
    effect_entries: [
      {
        effect:
          "When this Pokémon enters battle, it reveals an opposing Pokémon's held item to all participating trainers.\n\nIn a double battle, if one opponent has an item, this Pokémon will Frisk that Pokémon; if both have an item, it will Frisk one at random.",
        short_effect: "Reveals an opponent's held item upon entering battle.",
      },
    ],
  },
  {
    id: 120,
    name: "reckless",
    effect_entries: [
      {
        effect:
          'This Pokémon\'s recoil moves and crash moves have 1.2× their base power.\n\nstruggle is unaffected.\n\nThe "crash moves" are the moves that damage the user upon missing: jump kick and high jump kick.',
        short_effect: "Strengthens recoil moves to 1.2× their power.",
      },
    ],
  },
  {
    id: 121,
    name: "multitype",
    effect_entries: [
      {
        effect:
          "If this Pokémon is holding an elemental Plate, its type and form change to match the Plate.\n\nThis Pokémon's held item, whether or not it is a Plate, cannot be taken by covet or thief, nor removed by knock off, nor traded by switcheroo or trick.  Covet, Thief, and Knock Off still inflict damage against this Pokémon.  Unlike with sticky hold, this Pokémon cannot use fling, Switcheroo, or Trick to lose its item itself, nor gain an item through Switcheroo or Trick if it does not have one.\n\nThis ability has no effect for any Pokémon other than arceus.  This ability cannot be traded with skill swap, nor copied with role play or trace, nor disabled with gastro acid, nor changed with worry seed.  This Pokémon cannot use Skill Swap or Role Play to lose its ability itself.  mold breaker cannot ignore this ability.\n\nIf a Pokémon Transforms into an Arceus with this ability, it will Transform into Arceus's default, normal-type form.  If the Transforming Pokémon is holding a Plate, this ability will then activate and change the Pokémon into the corresponding form.",
        short_effect: "Changes arceus's type and form to match its held Plate.",
      },
    ],
  },
  {
    id: 122,
    name: "flower-gift",
    effect_entries: [
      {
        effect:
          "Friendly Pokémon have 1.5× their Attack and Special Defense during strong sunlight if any friendly Pokémon has this ability.\n\nUnlike forecast, multitype, and zen mode, this ability is not tied to its Pokémon's form change; cherrim will switch between its forms even if it loses this ability.  As such, this ability also works if obtained by a Pokémon other than Cherrim.",
        short_effect:
          "Increases friendly Pokémon's Attack and Special Defense to 1.5× during strong sunlight.",
      },
    ],
  },
  {
    id: 123,
    name: "bad-dreams",
    effect_entries: [
      {
        effect:
          "Opposing Pokémon take 1/8 of their maximum HP in damage after each turn while they are asleep.",
        short_effect:
          "Damages sleeping opponents for 1/8 their max HP after each turn.",
      },
    ],
  },
  {
    id: 124,
    name: "pickpocket",
    effect_entries: [
      {
        effect:
          "Whenever a move makes contact with this Pokémon, if it does not have a held item, it steals the attacker's held item.\n\nThis Pokémon cannot steal upon being knocked out.  It can steal if the attacker has a substitute, but cannot steal when its own Substitute is hit.  If a move hits multiple times, only the last hit triggers this ability.  If this Pokémon is wild, it cannot steal from a trained Pokémon.",
        short_effect: "Steals attacking Pokémon's held items on contact.",
      },
    ],
  },
  {
    id: 125,
    name: "sheer-force",
    effect_entries: [
      {
        effect:
          "This Pokémon's moves with extra effects have 1.3× their power, but lose their extra effects.\n\nAn effect chance is a move's chance to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect. For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.\n\nMoves that lower the user's stats are unaffected.",
        short_effect:
          "Strengthens moves with extra effects to 1.3× their power, but prevents their extra effects.",
      },
    ],
  },
  {
    id: 126,
    name: "contrary",
    effect_entries: [
      {
        effect:
          "Whenever this Pokémon's stats would be raised, they are instead lowered by the same amount, and vice versa.",
        short_effect: "Inverts stat changes.",
      },
    ],
  },
  {
    id: 127,
    name: "unnerve",
    effect_entries: [
      {
        effect:
          "Opposing Pokémon cannot eat held Berries while this Pokémon is in battle.\n\nAffected Pokémon can still use bug bite or pluck to eat a target's Berry.",
        short_effect: "Prevents opposing Pokémon from eating held Berries.",
      },
    ],
  },
  {
    id: 128,
    name: "defiant",
    effect_entries: [
      {
        effect:
          "When any of this Pokémon's stats are lowered, its Attack rises by two stages.\n\nIf multiple stats are lowered at once, this ability takes effect with each stat lowered.",
        short_effect: "Raises Attack two stages upon having any stat lowered.",
      },
    ],
  },
  {
    id: 129,
    name: "defeatist",
    effect_entries: [
      {
        effect:
          "This Pokémon's Attack and Special Attack are halved when it has half its HP or less.",
        short_effect: "Halves Attack and Special Attack at 50% max HP or less.",
      },
    ],
  },
  {
    id: 130,
    name: "cursed-body",
    effect_entries: [
      {
        effect:
          "Moves that hit this Pokémon have a 30% chance of being Disabled afterward.",
        short_effect:
          "Has a 30% chance of Disabling any move that hits the Pokémon.",
      },
    ],
  },
  {
    id: 131,
    name: "healer",
    effect_entries: [
      {
        effect:
          "Friendly Pokémon next to this Pokémon in double and triple battles each have a 30% chance of being cured of any major status ailment after each turn.",
        short_effect:
          "Has a 30% chance of curing each adjacent ally of any major status ailment after each turn.",
      },
    ],
  },
  {
    id: 132,
    name: "friend-guard",
    effect_entries: [
      {
        effect:
          "All friendly Pokémon take 0.75× as much direct damage from moves while this Pokémon is in battle.\n\nThis effect stacks if multiple allied Pokémon have it.",
        short_effect:
          "Decreases all direct damage taken by friendly Pokémon to 0.75×.",
      },
    ],
  },
  {
    id: 133,
    name: "weak-armor",
    effect_entries: [
      {
        effect:
          "Whenever a physical move hits this Pokémon, its Speed rises one stage and its Defense falls one stage.\n\nThis ability triggers on every hit of a multiple-hit move.",
        short_effect:
          "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
      },
    ],
  },
  {
    id: 134,
    name: "heavy-metal",
    effect_entries: [
      {
        effect: "This Pokémon has double the usual weight for its species.",
        short_effect: "Doubles the Pokémon's weight.",
      },
    ],
  },
  {
    id: 135,
    name: "light-metal",
    effect_entries: [
      {
        effect: "This Pokémon has half the usual weight for its species.",
        short_effect: "Halves the Pokémon's weight.",
      },
    ],
  },
  {
    id: 136,
    name: "multiscale",
    effect_entries: [
      {
        effect:
          "This Pokémon takes half as much damage when it is hit having full HP.",
        short_effect: "Halves damage taken from full HP.",
      },
    ],
  },
  {
    id: 137,
    name: "toxic-boost",
    effect_entries: [
      {
        effect: "This Pokémon has 1.5× its Attack when poisoned.",
        short_effect: "Increases Attack to 1.5× when poisoned.",
      },
    ],
  },
  {
    id: 138,
    name: "flare-boost",
    effect_entries: [
      {
        effect: "This Pokémon has 1.5× its Special Attack when burned.",
        short_effect: "Increases Special Attack to 1.5× when burned.",
      },
    ],
  },
  {
    id: 139,
    name: "harvest",
    effect_entries: [
      {
        effect:
          "After each turn, if the last item this Pokémon consumed was a Berry and it is not currently holding an item, it has a 50% chance of regaining that Berry, or a 100% chance during strong sunlight.",
        short_effect:
          "Has a 50% chance of restoring a used Berry after each turn if the Pokémon has held no items in the meantime.",
      },
    ],
  },
  {
    id: 140,
    name: "telepathy",
    effect_entries: [
      {
        effect:
          "This Pokémon does not take damage from friendly Pokémon's moves, including single-target moves aimed at it.",
        short_effect: "Protects against friendly Pokémon's damaging moves.",
      },
    ],
  },
  {
    id: 141,
    name: "moody",
    effect_entries: [
      {
        effect:
          "After each turn, one of this Pokémon's stats at random rises two stages, and another falls one stage.\n\nIf a stat is already at 6 or -6 stages, it will not be chosen to be increased or decreased, respectively.",
        short_effect:
          "Raises a random stat two stages and lowers another one stage after each turn.",
      },
    ],
  },
  {
    id: 142,
    name: "overcoat",
    effect_entries: [
      {
        effect: "This Pokémon does not take damage from weather.",
        short_effect: "Protects against damage from weather.",
      },
    ],
  },
  {
    id: 143,
    name: "poison-touch",
    effect_entries: [
      {
        effect:
          "This Pokémon's contact moves have a 30% chance of poisoning the target with each hit.\n\nThis counts as an extra effect for the purposes of shield dust.  This ability takes effect before mummy.",
        short_effect:
          "Has a 30% chance of poisoning target Pokémon upon contact.",
      },
    ],
  },
  {
    id: 144,
    name: "regenerator",
    effect_entries: [
      {
        effect:
          "This Pokémon regains 1/3 of its maximum HP when it is switched out for another Pokémon under any circumstances other than having fainted.\n\nThis ability does not take effect when a battle ends.",
        short_effect: "Heals for 1/3 max HP upon switching out.",
      },
    ],
  },
  {
    id: 145,
    name: "big-pecks",
    effect_entries: [
      {
        effect:
          "This Pokémon's Defense cannot be lowered by other Pokémon.\n\nThis Pokémon can still be passed negative Defense modifiers through heart swap or guard swap.",
        short_effect: "Protects against Defense drops.",
      },
    ],
  },
  {
    id: 146,
    name: "sand-rush",
    effect_entries: [
      {
        effect:
          "This Pokémon's Speed is doubled during a sandstorm, and it does not take sandstorm damage, regardless of type.",
        short_effect:
          "Doubles Speed during a sandstorm.  Protects against sandstorm damage.",
      },
    ],
  },
  {
    id: 147,
    name: "wonder-skin",
    effect_entries: [
      {
        effect:
          "Non-damaging moves have exactly 50% base accuracy against this Pokémon.",
        short_effect:
          "Lowers incoming non-damaging moves' base accuracy to exactly 50%.",
      },
    ],
  },
  {
    id: 148,
    name: "analytic",
    effect_entries: [
      {
        effect:
          "This Pokémon's moves have 1.3× their power when it moves last in a turn.\n\nfuture sight and doom desire are unaffected.",
        short_effect: "Strengthens moves to 1.3× their power when moving last.",
      },
    ],
  },
  {
    id: 149,
    name: "illusion",
    effect_entries: [
      {
        effect:
          "This Pokémon, upon being sent out, appears to have the species, nickname, and Poké Ball of the last Pokémon in the party that is able to battle.  This illusion breaks upon being hit by a damaging move.\n\nOther damage, e.g. from weather or spikes, does not break the illusion, nor does damage done to a substitute.\n\nIf the party order becomes temporarily shuffled around as Pokémon are switched out in battle, this ability chooses the last Pokémon according to that shuffled order.",
        short_effect:
          "Takes the appearance of the last conscious party Pokémon upon being sent out until hit by a damaging move.",
      },
    ],
  },
  {
    id: 150,
    name: "imposter",
    effect_entries: [
      {
        effect:
          "This Pokémon transforms into a random opponent upon entering battle.  This effect is identical to the move transform.",
        short_effect: "Transforms upon entering battle.",
      },
    ],
  },
  {
    id: 151,
    name: "infiltrator",
    effect_entries: [
      {
        effect:
          "This Pokémon's moves ignore light screen, reflect, and safeguard.",
        short_effect: "Bypasses light screen, reflect, and safeguard.",
      },
    ],
  },
  {
    id: 152,
    name: "mummy",
    effect_entries: [
      {
        effect:
          "Whenever a contact move hits this Pokémon, the attacking Pokémon's ability changes to Mummy.\n\nmultitype is unaffected.  If a Pokémon with moxie knocks this Pokémon out, the former's ability will change without taking effect.",
        short_effect:
          "Changes attacking Pokémon's abilities to Mummy on contact.",
      },
    ],
  },
  {
    id: 153,
    name: "moxie",
    effect_entries: [
      {
        effect:
          "This Pokémon's Attack rises one stage upon knocking out another Pokémon, even a friendly Pokémon.\n\nThis ability does not take effect when the Pokémon indirectly causes another Pokémon to faint, e.g. through poison or spikes.\n\nIf this Pokémon knocks out a Pokémon with mummy, the former's ability will change without taking effect.",
        short_effect: "Raises Attack one stage upon KOing a Pokémon.",
      },
    ],
  },
  {
    id: 154,
    name: "justified",
    effect_entries: [
      {
        effect:
          "Whenever a dark-type move hits this Pokémon, its Attack rises one stage.\n\nThe move is not negated in any way.",
        short_effect:
          "Raises Attack one stage upon taking damage from a dark move.",
      },
    ],
  },
  {
    id: 155,
    name: "rattled",
    effect_entries: [
      {
        effect:
          "This Pokémon's Speed rises one stage with each hit from a damaging dark-, ghost-, or bug-type move.",
        short_effect:
          "Raises Speed one stage upon being hit by a dark, ghost, or bug move.",
      },
    ],
  },
  {
    id: 156,
    name: "magic-bounce",
    effect_entries: [
      {
        effect:
          "When this Pokémon is targeted by a move flagged as being reflectable, the move is redirected to its user.\n\nAll reflectable moves are non-damaging, and most non-damaging moves that target other Pokémon are reflectable.\n\nA move reflected by this ability or magic coat cannot be reflected back.",
        short_effect: "Reflects most non-damaging moves back at their user.",
      },
    ],
  },
  {
    id: 157,
    name: "sap-sipper",
    effect_entries: [
      {
        effect:
          "Whenever a grass-type move hits this Pokémon, its Attack rises one stage, negating any other effect on it.",
        short_effect: "Absorbs grass moves, raising Attack one stage.",
      },
    ],
  },
  {
    id: 158,
    name: "prankster",
    effect_entries: [
      {
        effect:
          "This Pokémon's non-damaging moves have their priority increased by one stage.",
        short_effect: "Raises non-damaging moves' priority by one stage.",
      },
    ],
  },
  {
    id: 159,
    name: "sand-force",
    effect_entries: [
      {
        effect:
          "During a sandstorm, this Pokémon's rock-, ground-, and steel-type moves have 1.3× their base power.  This Pokémon does not take sandstorm damage, regardless of type.",
        short_effect:
          "Strengthens rock, ground, and steel moves to 1.3× their power during a sandstorm.  Protects against sandstorm damage.",
      },
    ],
  },
  {
    id: 160,
    name: "iron-barbs",
    effect_entries: [
      {
        effect:
          "Whenever a move makes contact with this Pokémon, the move's user takes 1/8 of its maximum HP in damage.\n\nThis ability functions identically to rough skin.",
        short_effect:
          "Damages attacking Pokémon for 1/8 their max HP on contact.",
      },
    ],
  },
  {
    id: 161,
    name: "zen-mode",
    effect_entries: [
      {
        effect:
          "This Pokémon switches between Standard Mode and Zen Mode after each turn depending on its HP.  Below 50% of its maximum HP, it switches to Zen Mode, and at 50% or above, it switches to Standard Mode.\n\nThis Pokémon returns to Standard Mode upon leaving battle or losing this ability.  This ability has no effect if this Pokémon is not a darmanitan.",
        short_effect:
          "Changes darmanitan's form after each turn depending on its HP: Zen Mode below 50% max HP, and Standard Mode otherwise.",
      },
    ],
  },
  {
    id: 162,
    name: "victory-star",
    effect_entries: [
      {
        effect:
          "All friendly Pokémon's moves, including this Pokémon's own moves, have 1.1× their usual accuracy while this Pokémon is in battle.",
        short_effect: "Increases moves' accuracy to 1.1× for friendly Pokémon.",
      },
    ],
  },
  {
    id: 163,
    name: "turboblaze",
    effect_entries: [
      {
        effect:
          "This Pokémon's moves completely ignore abilities that could hinder or prevent their effect on the target.\n\nFor example, this Pokémon's moves ignore abilities that would fully negate them, such as water absorb; abilities that would prevent any of their effects, such as clear body, shell armor, or sticky hold; and abilities that grant any general protective benefit, such as simple, snow cloak, or thick fat.  If an ability could either hinder or help this Pokémon's moves, e.g. dry skin or unaware, the ability is ignored either way.\n\nAbilities that do not fit this description, even if they could hinder moves in some other way, are not affected.  For example, cursed body only affects potential future uses of the move, while liquid ooze and shadow tag can only hinder a move's effect on the user.  This ablity cannot ignore type or form changes granted by abilities, for example color change or forecast; nor effects that were caused by abilities but are no longer tied to an ability, such as the rain from drizzle.  This ability cannot ignore multitype at all.\n\nAn ability ignored by this ability is only nullified while the move is being used.  For example, this Pokémon's moves can paralyze a Pokémon with limber, but Limber will activate and heal the paralysis immediately thereafter, and this Pokémon's spikes are not affected by this ability after they have been placed.\n\nWhen this Pokémon enters battle, all participating trainers are notified that it has this ability.\n\nThis ability functions identically to mold breaker and teravolt.",
        short_effect:
          "Bypasses targets' abilities if they could hinder or prevent moves.",
      },
    ],
  },
  {
    id: 164,
    name: "teravolt",
    effect_entries: [
      {
        effect:
          "This Pokémon's moves completely ignore abilities that could hinder or prevent their effect on the target.\n\nFor example, this Pokémon's moves ignore abilities that would fully negate them, such as water absorb; abilities that would prevent any of their effects, such as clear body, shell armor, or sticky hold; and abilities that grant any general protective benefit, such as simple, snow cloak, or thick fat.  If an ability could either hinder or help this Pokémon's moves, e.g. dry skin or unaware, the ability is ignored either way.\n\nAbilities that do not fit this description, even if they could hinder moves in some other way, are not affected.  For example, cursed body only affects potential future uses of the move, while liquid ooze and shadow tag can only hinder a move's effect on the user.  This ablity cannot ignore type or form changes granted by abilities, for example color change or forecast; nor effects that were caused by abilities but are no longer tied to an ability, such as the rain from drizzle.  This ability cannot ignore multitype at all.\n\nAn ability ignored by this ability is only nullified while the move is being used.  For example, this Pokémon's moves can paralyze a Pokémon with limber, but Limber will activate and heal the paralysis immediately thereafter, and this Pokémon's spikes are not affected by this ability after they have been placed.\n\nWhen this Pokémon enters battle, all participating trainers are notified that it has this ability.\n\nThis ability functions identically to mold breaker and turboblaze.",
        short_effect:
          "Bypasses targets' abilities if they could hinder or prevent moves.",
      },
    ],
  },
  {
    id: 165,
    name: "aroma-veil",
    effect_entries: [
      {
        effect: "Protects allies against moves that affect their mental state.",
        short_effect:
          "Protects allies against moves that affect their mental state.",
      },
    ],
  },
  {
    id: 166,
    name: "flower-veil",
    effect_entries: [
      {
        effect:
          "Protects friendly grass Pokémon from having their stats lowered by other Pokémon.",
        short_effect:
          "Protects friendly grass Pokémon from having their stats lowered by other Pokémon.",
      },
    ],
  },
  {
    id: 167,
    name: "cheek-pouch",
    effect_entries: [
      {
        effect:
          "Restores HP upon eating a Berry, in addition to the Berry's effect.",
        short_effect:
          "Restores HP upon eating a Berry, in addition to the Berry's effect.",
      },
    ],
  },
  {
    id: 168,
    name: "protean",
    effect_entries: [
      {
        effect:
          "Changes the bearer's type to match each move it uses.\n\nThe type change takes place just before the move is used.",
        short_effect: "Changes the bearer's type to match each move it uses.",
      },
    ],
  },
  {
    id: 169,
    name: "fur-coat",
    effect_entries: [
      {
        effect: "Halves damage from physical attacks.",
        short_effect: "Halves damage from physical attacks.",
      },
    ],
  },
  {
    id: 170,
    name: "magician",
    effect_entries: [
      {
        effect:
          "Steals the target's held item when the bearer uses a damaging move.",
        short_effect:
          "Steals the target's held item when the bearer uses a damaging move.",
      },
    ],
  },
  {
    id: 171,
    name: "bulletproof",
    effect_entries: [
      {
        effect: "Protects against bullet, ball, and bomb-based moves.",
        short_effect: "Protects against bullet, ball, and bomb-based moves.",
      },
    ],
  },
  {
    id: 172,
    name: "competitive",
    effect_entries: [
      {
        effect:
          "Raises Special Attack by two stages upon having any stat lowered.",
        short_effect:
          "Raises Special Attack by two stages upon having any stat lowered.",
      },
    ],
  },
  {
    id: 173,
    name: "strong-jaw",
    effect_entries: [
      {
        effect: "Strengthens biting moves to 1.5× their power.",
        short_effect: "Strengthens biting moves to 1.5× their power.",
      },
    ],
  },
  {
    id: 174,
    name: "refrigerate",
    effect_entries: [
      {
        effect:
          "Turns the bearer's normal-type moves into ice-type moves.  Moves changed by this ability have 1.3× their power.",
        short_effect:
          "Turns the bearer's normal moves into ice moves and strengthens them to 1.3× their power.",
      },
    ],
  },
  {
    id: 175,
    name: "sweet-veil",
    effect_entries: [
      {
        effect: "Prevents friendly Pokémon from sleeping.",
        short_effect: "Prevents friendly Pokémon from sleeping.",
      },
    ],
  },
  {
    id: 176,
    name: "stance-change",
    effect_entries: [
      {
        effect:
          "Changes aegislash to Blade Forme before using a damaging move, or Shield Forme before using kings shield.",
        short_effect:
          "Changes aegislash to Blade Forme before using a damaging move, or Shield Forme before using kings shield.",
      },
    ],
  },
  {
    id: 177,
    name: "gale-wings",
    effect_entries: [
      {
        effect: "Raises flying moves' priority by one stage.",
        short_effect: "Raises flying moves' priority by one stage.",
      },
    ],
  },
  {
    id: 178,
    name: "mega-launcher",
    effect_entries: [
      {
        effect: "Strengthens aura and pulse moves to 1.5× their power.",
        short_effect: "Strengthens aura and pulse moves to 1.5× their power.",
      },
    ],
  },
  {
    id: 179,
    name: "grass-pelt",
    effect_entries: [
      {
        effect: "Boosts Defense while grassy terrain is in effect.",
        short_effect: "Boosts Defense while grassy terrain is in effect.",
      },
    ],
  },
  {
    id: 180,
    name: "symbiosis",
    effect_entries: [
      {
        effect:
          "Passes the bearer's held item to an ally when the ally uses up its item.",
        short_effect:
          "Passes the bearer's held item to an ally when the ally uses up its item.",
      },
    ],
  },
  {
    id: 181,
    name: "tough-claws",
    effect_entries: [
      {
        effect: "Strengthens moves that make contact to 1.33× their power.",
        short_effect:
          "Strengthens moves that make contact to 1.33× their power.",
      },
    ],
  },
  {
    id: 182,
    name: "pixilate",
    effect_entries: [
      {
        effect:
          "Turns the bearer's normal-type moves into fairy moves.  Moves changed by this ability have 1.3× their power.",
        short_effect:
          "Turns the bearer's normal moves into fairy moves and strengthens them to 1.3× their power.",
      },
    ],
  },
  {
    id: 183,
    name: "gooey",
    effect_entries: [
      {
        effect: "Lowers attacking Pokémon's Speed by one stage on contact.",
        short_effect:
          "Lowers attacking Pokémon's Speed by one stage on contact.",
      },
    ],
  },
  {
    id: 184,
    name: "aerilate",
    effect_entries: [
      {
        effect:
          "Turns the bearer's normal-type moves into flying-type moves.  Moves changed by this ability have 1.3× their power.",
        short_effect:
          "Turns the bearer's normal moves into flying moves and strengthens them to 1.3× their power.",
      },
    ],
  },
  {
    id: 185,
    name: "parental-bond",
    effect_entries: [
      {
        effect:
          "Lets the bearer hit twice with damaging moves.  The second hit has half power.",
        short_effect:
          "Lets the bearer hit twice with damaging moves.  The second hit has half power.",
      },
    ],
  },
  {
    id: 186,
    name: "dark-aura",
    effect_entries: [
      {
        effect: "Strengthens dark moves for all friendly and opposing Pokémon.",
        short_effect:
          "Strengthens dark moves to 1.33× their power for all friendly and opposing Pokémon.",
      },
    ],
  },
  {
    id: 187,
    name: "fairy-aura",
    effect_entries: [
      {
        effect:
          "Strengthens fairy moves for all friendly and opposing Pokémon.",
        short_effect:
          "Strengthens fairy moves to 1.33× their power for all friendly and opposing Pokémon.",
      },
    ],
  },
  {
    id: 188,
    name: "aura-break",
    effect_entries: [
      {
        effect:
          "While this Pokémon is on the field, dark aura and fairy aura weaken moves of their respective types to 2/3 their power, rather than strengthening them.",
        short_effect:
          "Makes dark aura and fairy aura weaken moves of their respective types.",
      },
    ],
  },
  {
    id: 189,
    name: "primordial-sea",
    effect_entries: [
      {
        effect:
          "When this Pokémon enters battle or gains this ability, the weather becomes heavy rain.  Heavy rain has all the properties of rain dance and also causes damaging Fire moves to fail.\n\nHeavy rain ends when this Pokémon leaves battle or loses this ability, or when this ability is nullified.  The weather cannot otherwise be changed except by the effects of delta stream and desolate land.\n\nair lock and cloud nine will prevent the effects of heavy rain, including allowing Fire moves to work, but will not allow the weather to be changed.",
        short_effect:
          "Creates heavy rain, which has all the properties of Rain Dance, cannot be replaced, and causes damaging Fire moves to fail.",
      },
    ],
  },
  {
    id: 190,
    name: "desolate-land",
    effect_entries: [
      {
        effect:
          "When this Pokémon enters battle or gains this ability, the weather becomes extremely harsh sunlight.  Extremely harsh sunlight has all the properties of sunny day and also causes damaging Water moves to fail.\n\nExtremely harsh sunlight ends when this Pokémon leaves battle or loses this ability, or when this ability is nullified.  The weather cannot otherwise be changed except by the effects of delta stream and primordial sea.\n\nair lock and cloud nine will prevent the effects of extremely harsh sunlight, including allowing Water moves to work, but will not allow the weather to be changed.",
        short_effect:
          "Creates extremely harsh sunlight, which has all the properties of Sunny Day, cannot be replaced, and causes damaging Water moves to fail.",
      },
    ],
  },
  {
    id: 191,
    name: "delta-stream",
    effect_entries: [
      {
        effect:
          "When this Pokémon enters battle or gains this ability, the weather becomes a mysterious air current.  A mysterious air current causes moves to not be super effective against Flying; they do neutral damage instead.  anticipation and stealth rock are not affected.\n\nThe mysterious air current ends when this Pokémon leaves battle or loses this ability, or when this ability is nullified.  The weather cannot otherwise be changed except by the effects of desolate land and primordial sea.\n\nair lock and cloud nine will prevent the effect of a mysterious air current, but will not allow the weather to be changed.",
        short_effect:
          "Creates a mysterious air current, which cannot be replaced and causes moves to never be super effective against Flying Pokémon.",
      },
    ],
  },
  {
    id: 192,
    name: "stamina",
    effect_entries: [
      {
        effect:
          "Raises this Pokémon's Defense by one stage when it takes damage from a move.",
        short_effect:
          "Raises this Pokémon's Defense by one stage when it takes damage from a move.",
      },
    ],
  },
  {
    id: 193,
    name: "wimp-out",
    effect_entries: [
      {
        effect:
          "After this Pokémon is hit by a move, if that move caused this Pokémon's HP to drop below half, it switches out.",
        short_effect:
          "This Pokémon automatically switches out when its HP drops below half.",
      },
    ],
  },
  {
    id: 194,
    name: "emergency-exit",
    effect_entries: [
      {
        effect:
          "After this Pokémon is hit by a move, if that move caused this Pokémon's HP to drop below half, it switches out.",
        short_effect:
          "This Pokémon automatically switches out when its HP drops below half.",
      },
    ],
  },
  {
    id: 195,
    name: "water-compaction",
    effect_entries: [
      {
        effect:
          "Raises this Pokémon's Defense by two stages when it's hit by a Water move.",
        short_effect:
          "Raises this Pokémon's Defense by two stages when it's hit by a Water move.",
      },
    ],
  },
  {
    id: 196,
    name: "merciless",
    effect_entries: [
      {
        effect: "This Pokémon's moves critical hit against poisoned targets.",
        short_effect:
          "This Pokémon's moves critical hit against poisoned targets.",
      },
    ],
  },
  {
    id: 197,
    name: "shields-down",
    effect_entries: [
      {
        effect:
          "When this Pokémon enters battle and at the end of each turn, if its HP is 50% or above, it changes into Meteor Form; otherwise, it changes into Core Form.  In Meteor Form, it cannot be given a major status ailment (though existing ones are not cured), cannot become drowsy from yawn, and cannot use rest (which will simply fail).\n\nThis ability cannot be copied, replaced, or nullified.  This ability only takes effect for Minior.",
        short_effect:
          "Transforms this Minior between Core Form and Meteor Form.  Prevents major status ailments and drowsiness while in Meteor Form.",
      },
    ],
  },
  {
    id: 198,
    name: "stakeout",
    effect_entries: [
      {
        effect:
          "This Pokémon's moves have double power against Pokémon that switched in this turn.",
        short_effect:
          "This Pokémon's moves have double power against Pokémon that switched in this turn.",
      },
    ],
  },
  {
    id: 199,
    name: "water-bubble",
    effect_entries: [
      {
        effect:
          "When this Pokémon is hit by a Fire move, the damage is halved.  When this Pokémon uses a Water move, the power is doubled. This Pokémon cannot be burned, and if it becomes burned, the burn is immediately cured.",
        short_effect:
          "Halves damage from Fire moves, doubles damage of Water moves, and prevents burns.",
      },
    ],
  },
  {
    id: 200,
    name: "steelworker",
    effect_entries: [
      {
        effect: "This Pokémon's Steel moves have 1.5× power.",
        short_effect: "This Pokémon's Steel moves have 1.5× power.",
      },
    ],
  },
  {
    id: 201,
    name: "berserk",
    effect_entries: [
      {
        effect:
          "Whenever this Pokémon takes damage from a move that causes its HP to drop below 50%, its Special Attack rises by one stage.",
        short_effect:
          "Raises this Pokémon's Special Attack by one stage every time its HP drops below half.",
      },
    ],
  },
  {
    id: 202,
    name: "slush-rush",
    effect_entries: [
      {
        effect: "During Hail, this Pokémon has double Speed.",
        short_effect: "During Hail, this Pokémon has double Speed.",
      },
    ],
  },
  {
    id: 203,
    name: "long-reach",
    effect_entries: [
      {
        effect: "A move used by this Pokémon will not make contact.",
        short_effect: "This Pokémon's moves do not make contact.",
      },
    ],
  },
  {
    id: 204,
    name: "liquid-voice",
    effect_entries: [
      {
        effect:
          "When this Pokémon uses a move that is sound-based, that move's type is Water.",
        short_effect: "Sound-based moves become Water-type.",
      },
    ],
  },
  {
    id: 205,
    name: "triage",
    effect_entries: [
      {
        effect:
          "This Pokémon's healing moves have their priority increased by 3.",
        short_effect:
          "This Pokémon's healing moves have their priority increased by 3.",
      },
    ],
  },
  {
    id: 206,
    name: "galvanize",
    effect_entries: [
      {
        effect:
          "When this Pokémon uses a Normal moves, that move is Electric its power is 1.2×.",
        short_effect:
          "This Pokémon's Normal moves are Electric and have their power increased to 1.2×.",
      },
    ],
  },
  {
    id: 207,
    name: "surge-surfer",
    effect_entries: [
      {
        effect: "Doubles this Pokémon's Speed on Electric Terrain.",
        short_effect: "Doubles this Pokémon's Speed on Electric Terrain.",
      },
    ],
  },
  {
    id: 208,
    name: "schooling",
    effect_entries: [
      {
        effect:
          "If this Pokémon is a wishiwashi and level 20 or above, then when it enters battle and at the start of each turn, it becomes Schooling Form if its HP is 25% or higher and Solo Form otherwise.\n\nThis ability cannot be replaced, copied, or nullified.",
        short_effect:
          "Wishiwashi becomes Schooling Form when its HP is 25% or higher.",
      },
    ],
  },
  {
    id: 209,
    name: "disguise",
    effect_entries: [
      {
        effect:
          "If this Pokémon is in its Disguised Form and takes damage from a move, it switches to its Busted Form and the damage is prevented.  Other effects are not prevented.\n\nThis ability cannot be copied or replaced.  This ability only takes effect for Mimikyu.",
        short_effect: "Prevents the first instance of battle damage.",
      },
    ],
  },
  {
    id: 210,
    name: "battle-bond",
    effect_entries: [
      {
        effect:
          "Transforms this Pokémon into Ash-Greninja after fainting an opponent.  Water Shuriken's power is 20 and always hits three times.\n\nThis ability cannot be copied or replaced.  This ability only takes effect for Greninja.",
        short_effect:
          "Transforms this Pokémon into Ash-Greninja after fainting an opponent.  Water Shuriken's power is 20 and always hits three times.",
      },
    ],
  },
  {
    id: 211,
    name: "power-construct",
    effect_entries: [
      {
        effect:
          "Transforms 10% or 50% Zygarde into Complete Forme when its HP is below 50%.\n\nThis ability cannot be copied or replaced.  This ability only takes effect for Zygarde.",
        short_effect:
          "Transforms 10% or 50% Zygarde into Complete Forme when its HP is below 50%.",
      },
    ],
  },
  {
    id: 212,
    name: "corrosion",
    effect_entries: [
      {
        effect:
          "This Pokémon's moves and item ignore the usual immunity of Poison and Steel Pokémon when attempting to inflict poison.",
        short_effect:
          "This Pokémon can inflict poison on Poison and Steel Pokémon.",
      },
    ],
  },
  {
    id: 213,
    name: "comatose",
    effect_entries: [
      {
        effect:
          "This Pokémon always acts as though it were Asleep.  It cannot be given another status ailment; it's unaffected by yawn; it can use sleep talk; and so on.",
        short_effect: "This Pokémon always  acts as though it were Asleep.",
      },
    ],
  },
  {
    id: 214,
    name: "queenly-majesty",
    effect_entries: [
      {
        effect:
          "When an opposing Pokémon attempts to use a move that targets this Pokémon or an ally, and that move has priority, it will fail.",
        short_effect: "Opposing Pokémon cannot use priority attacks.",
      },
    ],
  },
  {
    id: 215,
    name: "innards-out",
    effect_entries: [
      {
        effect:
          "When this Pokémon faints from an opponent's move, that opponent takes damage equal to the HP this Pokémon had remaining.",
        short_effect:
          "When this Pokémon faints from an opponent's move, that opponent takes damage equal to the HP this Pokémon had remaining.",
      },
    ],
  },
  {
    id: 216,
    name: "dancer",
    effect_entries: [
      {
        effect:
          "Whenever another Pokémon uses a dance move, this Pokémon will use the same move immediately afterwards.",
        short_effect:
          "Whenever another Pokémon uses a dance move, this Pokémon will use the same move immediately afterwards.",
      },
    ],
  },
  {
    id: 217,
    name: "battery",
    effect_entries: [
      {
        effect: "Ally Pokémon's moves have their power increased to 1.3×.",
        short_effect:
          "Ally Pokémon's moves have their power increased to 1.3×.",
      },
    ],
  },
  {
    id: 218,
    name: "fluffy",
    effect_entries: [
      {
        effect:
          "Damage from contact moves is halved.  Damage from Fire moves is doubled.",
        short_effect:
          "Damage from contact moves is halved.  Damage from Fire moves is doubled.",
      },
    ],
  },
  {
    id: 219,
    name: "dazzling",
    effect_entries: [
      {
        effect:
          "When an opposing Pokémon attempts to use a move that targets this Pokémon or an ally, and that move has priority, it will fail.",
        short_effect: "Opposing Pokémon cannot use priority attacks.",
      },
    ],
  },
  {
    id: 220,
    name: "soul-heart",
    effect_entries: [
      {
        effect:
          "This Pokémon's Special Attack rises by one stage every time any Pokémon faints.",
        short_effect:
          "This Pokémon's Special Attack rises by one stage every time any Pokémon faints.",
      },
    ],
  },
  {
    id: 221,
    name: "tangling-hair",
    effect_entries: [
      {
        effect:
          "When this Pokémon takes regular damage from a contact move, the attacking Pokémon's Speed lowers by one stage.",
        short_effect:
          "When this Pokémon takes regular damage from a contact move, the attacking Pokémon's Speed lowers by one stage.",
      },
    ],
  },
  {
    id: 222,
    name: "receiver",
    effect_entries: [
      {
        effect: "When an ally faints, this Pokémon gains its Ability.",
        short_effect: "When an ally faints, this Pokémon gains its Ability.",
      },
    ],
  },
  {
    id: 223,
    name: "power-of-alchemy",
    effect_entries: [
      {
        effect: "When an ally faints, this Pokémon gains its Ability.",
        short_effect: "When an ally faints, this Pokémon gains its Ability.",
      },
    ],
  },
  {
    id: 224,
    name: "beast-boost",
    effect_entries: [
      {
        effect:
          "Raises this Pokémon's highest stat by one stage when it faints another Pokémon.",
        short_effect:
          "Raises this Pokémon's highest stat by one stage when it faints another Pokémon.",
      },
    ],
  },
  {
    id: 225,
    name: "rks-system",
    effect_entries: [
      {
        effect:
          "Changes this Pokémon's type to match its held Memory.\n\nThis ability cannot be copied, replaced, or nullified.  This ability only takes effect for Silvally.",
        short_effect: "Changes this Pokémon's type to match its held Memory.",
      },
    ],
  },
  {
    id: 226,
    name: "electric-surge",
    effect_entries: [
      {
        effect:
          "When this Pokémon enters battle, it changes the terrain to electric terrain.",
        short_effect:
          "When this Pokémon enters battle, it changes the terrain to Electric Terrain.",
      },
    ],
  },
  {
    id: 227,
    name: "psychic-surge",
    effect_entries: [
      {
        effect:
          "When this Pokémon enters battle, it changes the terrain to psychic terrain.",
        short_effect:
          "When this Pokémon enters battle, it changes the terrain to Psychic Terrain.",
      },
    ],
  },
  {
    id: 228,
    name: "misty-surge",
    effect_entries: [
      {
        effect:
          "When this Pokémon enters battle, it changes the terrain to misty terrain.",
        short_effect:
          "When this Pokémon enters battle, it changes the terrain to Misty Terrain.",
      },
    ],
  },
  {
    id: 229,
    name: "grassy-surge",
    effect_entries: [
      {
        effect:
          "When this Pokémon enters battle, it changes the terrain to grassy terrain.",
        short_effect:
          "When this Pokémon enters battle, it changes the terrain to Grassy Terrain.",
      },
    ],
  },
  {
    id: 230,
    name: "full-metal-body",
    effect_entries: [
      {
        effect:
          "This Pokémon's stats cannot be lowered by other Pokémon's moves or abilities.  This effect only applies to normal stat modifications and not more exotic effects such as topsy turvy or power swap.\n\nThis Ability is not bypassed by mold breaker, teravolt, or turboblaze.",
        short_effect: "Other Pokémon cannot lower this Pokémon's stats.",
      },
    ],
  },
  {
    id: 231,
    name: "shadow-shield",
    effect_entries: [
      {
        effect:
          "When this Pokémon has full HP, regular damage (not fixed damage!) from moves is halved.\n\nThis ability cannot be nullified.",
        short_effect:
          "When this Pokémon has full HP, regular damage from moves is halved.",
      },
    ],
  },
  {
    id: 232,
    name: "prism-armor",
    effect_entries: [
      {
        effect:
          "Super-effective damage this Pokémon takes is reduced to 0.75×.\n\nThis Ability is not bypassed by mold breaker, teravolt, or turboblaze.",
        short_effect: "Reduces super-effective damage to 0.75×.",
      },
    ],
  },
  {
    id: 233,
    name: "neuroforce",
    effect_entries: [
      {
        effect: "Increases super-effective damage dealt to 1.25×.",
        short_effect: "Increases super-effective damage dealt to 1.25×.",
      },
    ],
  },
  { id: 234, name: "intrepid-sword", effect_entries: [] },
  { id: 235, name: "dauntless-shield", effect_entries: [] },
  { id: 236, name: "libero", effect_entries: [] },
  { id: 237, name: "ball-fetch", effect_entries: [] },
  { id: 238, name: "cotton-down", effect_entries: [] },
  { id: 239, name: "propeller-tail", effect_entries: [] },
  { id: 240, name: "mirror-armor", effect_entries: [] },
  { id: 241, name: "gulp-missile", effect_entries: [] },
  { id: 242, name: "stalwart", effect_entries: [] },
  { id: 243, name: "steam-engine", effect_entries: [] },
  { id: 244, name: "punk-rock", effect_entries: [] },
  { id: 245, name: "sand-spit", effect_entries: [] },
  { id: 246, name: "ice-scales", effect_entries: [] },
  { id: 247, name: "ripen", effect_entries: [] },
  { id: 248, name: "ice-face", effect_entries: [] },
  { id: 249, name: "power-spot", effect_entries: [] },
  { id: 250, name: "mimicry", effect_entries: [] },
  { id: 251, name: "screen-cleaner", effect_entries: [] },
  { id: 252, name: "steely-spirit", effect_entries: [] },
  { id: 253, name: "perish-body", effect_entries: [] },
  { id: 254, name: "wandering-spirit", effect_entries: [] },
  { id: 255, name: "gorilla-tactics", effect_entries: [] },
  { id: 256, name: "neutralizing-gas", effect_entries: [] },
  { id: 257, name: "pastel-veil", effect_entries: [] },
  { id: 258, name: "hunger-switch", effect_entries: [] },
  { id: 259, name: "quick-draw", effect_entries: [] },
  { id: 260, name: "unseen-fist", effect_entries: [] },
  { id: 261, name: "curious-medicine", effect_entries: [] },
  { id: 262, name: "transistor", effect_entries: [] },
  { id: 263, name: "dragons-maw", effect_entries: [] },
  { id: 264, name: "chilling-neigh", effect_entries: [] },
  { id: 265, name: "grim-neigh", effect_entries: [] },
  { id: 266, name: "as-one-glastrier", effect_entries: [] },
  { id: 267, name: "as-one-spectrier", effect_entries: [] },
  { id: 268, name: "lingering-aroma", effect_entries: [] },
  { id: 269, name: "seed-sower", effect_entries: [] },
  { id: 270, name: "thermal-exchange", effect_entries: [] },
  { id: 271, name: "anger-shell", effect_entries: [] },
  { id: 272, name: "purifying-salt", effect_entries: [] },
  { id: 273, name: "well-baked-body", effect_entries: [] },
  { id: 274, name: "wind-rider", effect_entries: [] },
  { id: 275, name: "guard-dog", effect_entries: [] },
  { id: 276, name: "rocky-payload", effect_entries: [] },
  { id: 277, name: "wind-power", effect_entries: [] },
  { id: 278, name: "zero-to-hero", effect_entries: [] },
  { id: 279, name: "commander", effect_entries: [] },
  { id: 280, name: "electromorphosis", effect_entries: [] },
  { id: 281, name: "protosynthesis", effect_entries: [] },
  { id: 282, name: "quark-drive", effect_entries: [] },
  { id: 283, name: "good-as-gold", effect_entries: [] },
  { id: 284, name: "vessel-of-ruin", effect_entries: [] },
  { id: 285, name: "sword-of-ruin", effect_entries: [] },
  { id: 286, name: "tablets-of-ruin", effect_entries: [] },
  { id: 287, name: "beads-of-ruin", effect_entries: [] },
  { id: 288, name: "orichalcum-pulse", effect_entries: [] },
  { id: 289, name: "hadron-engine", effect_entries: [] },
  { id: 290, name: "opportunist", effect_entries: [] },
  { id: 291, name: "cud-chew", effect_entries: [] },
  { id: 292, name: "sharpness", effect_entries: [] },
  { id: 293, name: "supreme-overlord", effect_entries: [] },
  { id: 294, name: "costar", effect_entries: [] },
  { id: 295, name: "toxic-debris", effect_entries: [] },
  { id: 296, name: "armor-tail", effect_entries: [] },
  { id: 297, name: "earth-eater", effect_entries: [] },
  { id: 298, name: "mycelium-might", effect_entries: [] },
  { id: 10001, name: "mountaineer", effect_entries: [] },
  { id: 10002, name: "wave-rider", effect_entries: [] },
  { id: 10003, name: "skater", effect_entries: [] },
  { id: 10004, name: "thrust", effect_entries: [] },
  { id: 10005, name: "perception", effect_entries: [] },
  { id: 10006, name: "parry", effect_entries: [] },
  { id: 10007, name: "instinct", effect_entries: [] },
  { id: 10008, name: "dodge", effect_entries: [] },
  { id: 10009, name: "jagged-edge", effect_entries: [] },
  { id: 10010, name: "frostbite", effect_entries: [] },
  { id: 10011, name: "tenacity", effect_entries: [] },
  { id: 10012, name: "pride", effect_entries: [] },
  { id: 10013, name: "deep-sleep", effect_entries: [] },
  { id: 10014, name: "power-nap", effect_entries: [] },
  { id: 10015, name: "spirit", effect_entries: [] },
  { id: 10016, name: "warm-blanket", effect_entries: [] },
  { id: 10017, name: "gulp", effect_entries: [] },
  { id: 10018, name: "herbivore", effect_entries: [] },
  { id: 10019, name: "sandpit", effect_entries: [] },
  { id: 10020, name: "hot-blooded", effect_entries: [] },
  { id: 10021, name: "medic", effect_entries: [] },
  { id: 10022, name: "life-force", effect_entries: [] },
  { id: 10023, name: "lunchbox", effect_entries: [] },
  { id: 10024, name: "nurse", effect_entries: [] },
  { id: 10025, name: "melee", effect_entries: [] },
  { id: 10026, name: "sponge", effect_entries: [] },
  { id: 10027, name: "bodyguard", effect_entries: [] },
  { id: 10028, name: "hero", effect_entries: [] },
  { id: 10029, name: "last-bastion", effect_entries: [] },
  { id: 10030, name: "stealth", effect_entries: [] },
  { id: 10031, name: "vanguard", effect_entries: [] },
  { id: 10032, name: "nomad", effect_entries: [] },
  { id: 10033, name: "sequence", effect_entries: [] },
  { id: 10034, name: "grass-cloak", effect_entries: [] },
  { id: 10035, name: "celebrate", effect_entries: [] },
  { id: 10036, name: "lullaby", effect_entries: [] },
  { id: 10037, name: "calming", effect_entries: [] },
  { id: 10038, name: "daze", effect_entries: [] },
  { id: 10039, name: "frighten", effect_entries: [] },
  { id: 10040, name: "interference", effect_entries: [] },
  { id: 10041, name: "mood-maker", effect_entries: [] },
  { id: 10042, name: "confidence", effect_entries: [] },
  { id: 10043, name: "fortune", effect_entries: [] },
  { id: 10044, name: "bonanza", effect_entries: [] },
  { id: 10045, name: "explode", effect_entries: [] },
  { id: 10046, name: "omnipotent", effect_entries: [] },
  { id: 10047, name: "share", effect_entries: [] },
  { id: 10048, name: "black-hole", effect_entries: [] },
  { id: 10049, name: "shadow-dash", effect_entries: [] },
  { id: 10050, name: "sprint", effect_entries: [] },
  { id: 10051, name: "disgust", effect_entries: [] },
  { id: 10052, name: "high-rise", effect_entries: [] },
  { id: 10053, name: "climber", effect_entries: [] },
  { id: 10054, name: "flame-boost", effect_entries: [] },
  { id: 10055, name: "aqua-boost", effect_entries: [] },
  { id: 10056, name: "run-up", effect_entries: [] },
  { id: 10057, name: "conqueror", effect_entries: [] },
  { id: 10058, name: "shackle", effect_entries: [] },
  { id: 10059, name: "decoy", effect_entries: [] },
  { id: 10060, name: "shield", effect_entries: [] },
];

export { abilities };

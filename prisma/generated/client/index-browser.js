
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.5.2
 * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
 */
Prisma.prismaVersion = {
  client: "5.5.2",
  engine: "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.MEMB_INFOScalarFieldEnum = {
  memb_guid: 'memb_guid',
  memb___id: 'memb___id',
  memb__pwd: 'memb__pwd',
  memb_name: 'memb_name',
  sno__numb: 'sno__numb',
  post_code: 'post_code',
  addr_info: 'addr_info',
  addr_deta: 'addr_deta',
  tel__numb: 'tel__numb',
  phon_numb: 'phon_numb',
  mail_addr: 'mail_addr',
  fpas_ques: 'fpas_ques',
  fpas_answ: 'fpas_answ',
  job__code: 'job__code',
  appl_days: 'appl_days',
  modi_days: 'modi_days',
  out__days: 'out__days',
  true_days: 'true_days',
  mail_chek: 'mail_chek',
  bloc_code: 'bloc_code',
  ctl1_code: 'ctl1_code',
  AccountLevel: 'AccountLevel',
  AccountExpireDate: 'AccountExpireDate',
  vip: 'vip',
  cash: 'cash',
  RewardPlayer: 'RewardPlayer',
  ChaosPoints: 'ChaosPoints',
  BlessPoints: 'BlessPoints',
  SoulPoints: 'SoulPoints',
  LifePoints: 'LifePoints',
  CreationPoints: 'CreationPoints',
  GuardianPoints: 'GuardianPoints',
  GemstonePoints: 'GemstonePoints',
  HarmonyPoints: 'HarmonyPoints',
  LRefiningPoints: 'LRefiningPoints',
  HRefiningPoints: 'HRefiningPoints',
  LockPassword: 'LockPassword'
};

exports.Prisma.AccountCharacterScalarFieldEnum = {
  Number: 'Number',
  Id: 'Id',
  GameID1: 'GameID1',
  GameID2: 'GameID2',
  GameID3: 'GameID3',
  GameID4: 'GameID4',
  GameID5: 'GameID5',
  GameIDC: 'GameIDC',
  MoveCnt: 'MoveCnt',
  ExtClass: 'ExtClass',
  ExtWarehouse: 'ExtWarehouse',
  GameID6: 'GameID6',
  GameID7: 'GameID7',
  GameID8: 'GameID8',
  GameID9: 'GameID9',
  GameID10: 'GameID10',
  MaxCharacter: 'MaxCharacter'
};

exports.Prisma.CashShopDataScalarFieldEnum = {
  AccountID: 'AccountID',
  WCoinC: 'WCoinC',
  WCoinP: 'WCoinP',
  GoblinPoint: 'GoblinPoint'
};

exports.Prisma.CashShopInventoryScalarFieldEnum = {
  BaseItemCode: 'BaseItemCode',
  MainItemCode: 'MainItemCode',
  AccountID: 'AccountID',
  InventoryType: 'InventoryType',
  PackageMainIndex: 'PackageMainIndex',
  ProductBaseIndex: 'ProductBaseIndex',
  ProductMainIndex: 'ProductMainIndex',
  CoinValue: 'CoinValue',
  ProductType: 'ProductType',
  GiftName: 'GiftName',
  GiftText: 'GiftText'
};

exports.Prisma.CashShopPeriodicItemScalarFieldEnum = {
  ItemSerial: 'ItemSerial',
  Time: 'Time'
};

exports.Prisma.CharacterScalarFieldEnum = {
  AccountID: 'AccountID',
  Name: 'Name',
  cLevel: 'cLevel',
  LevelUpPoint: 'LevelUpPoint',
  Class: 'Class',
  Experience: 'Experience',
  Strength: 'Strength',
  Dexterity: 'Dexterity',
  Vitality: 'Vitality',
  Energy: 'Energy',
  Leadership: 'Leadership',
  Inventory: 'Inventory',
  MagicList: 'MagicList',
  Money: 'Money',
  Life: 'Life',
  MaxLife: 'MaxLife',
  Mana: 'Mana',
  MaxMana: 'MaxMana',
  BP: 'BP',
  MaxBP: 'MaxBP',
  Shield: 'Shield',
  MaxShield: 'MaxShield',
  MapNumber: 'MapNumber',
  MapPosX: 'MapPosX',
  MapPosY: 'MapPosY',
  MapDir: 'MapDir',
  PkCount: 'PkCount',
  PkLevel: 'PkLevel',
  PkTime: 'PkTime',
  MDate: 'MDate',
  LDate: 'LDate',
  CtlCode: 'CtlCode',
  DbVersion: 'DbVersion',
  Quest: 'Quest',
  ChatLimitTime: 'ChatLimitTime',
  FruitPoint: 'FruitPoint',
  EffectList: 'EffectList',
  FruitAddPoint: 'FruitAddPoint',
  FruitSubPoint: 'FruitSubPoint',
  ResetCount: 'ResetCount',
  MasterResetCount: 'MasterResetCount',
  ExtInventory: 'ExtInventory',
  Resets: 'Resets',
  ResetsDay: 'ResetsDay',
  ResetsWeek: 'ResetsWeek',
  ResetsMonth: 'ResetsMonth',
  MResets: 'MResets',
  MResetsDay: 'MResetsDay',
  MResetsWeek: 'MResetsWeek',
  MResetsMonth: 'MResetsMonth',
  PKTotal: 'PKTotal',
  PKDay: 'PKDay',
  PKWeek: 'PKWeek',
  PKMonth: 'PKMonth',
  HeroTotal: 'HeroTotal',
  HeroDay: 'HeroDay',
  HeroWeek: 'HeroWeek',
  HeroMonth: 'HeroMonth',
  tradewins: 'tradewins',
  matamata: 'matamata',
  duel_total: 'duel_total',
  duel_semanal: 'duel_semanal',
  duel_mensal: 'duel_mensal'
};

exports.Prisma.DefaultClassTypeScalarFieldEnum = {
  Class: 'Class',
  Level: 'Level',
  LevelUpPoint: 'LevelUpPoint',
  Strength: 'Strength',
  Dexterity: 'Dexterity',
  Vitality: 'Vitality',
  Energy: 'Energy',
  Leadership: 'Leadership',
  Inventory: 'Inventory',
  MagicList: 'MagicList',
  Life: 'Life',
  MaxLife: 'MaxLife',
  Mana: 'Mana',
  MaxMana: 'MaxMana',
  MapNumber: 'MapNumber',
  MapPosX: 'MapPosX',
  MapPosY: 'MapPosY',
  Quest: 'Quest',
  DbVersion: 'DbVersion',
  EffectList: 'EffectList'
};

exports.Prisma.EventLeoTheHelperScalarFieldEnum = {
  Name: 'Name',
  Status: 'Status'
};

exports.Prisma.EventSantaClausScalarFieldEnum = {
  Name: 'Name',
  Status: 'Status'
};

exports.Prisma.GameServerInfoScalarFieldEnum = {
  Number: 'Number',
  ItemCount: 'ItemCount',
  ZenCount: 'ZenCount',
  AceItemCount: 'AceItemCount'
};

exports.Prisma.Gens_RankScalarFieldEnum = {
  Name: 'Name',
  Family: 'Family',
  Contribution: 'Contribution'
};

exports.Prisma.Gens_RewardScalarFieldEnum = {
  Name: 'Name',
  Rank: 'Rank',
  Status: 'Status'
};

exports.Prisma.GuildScalarFieldEnum = {
  G_Name: 'G_Name',
  G_Mark: 'G_Mark',
  G_Score: 'G_Score',
  G_Master: 'G_Master',
  G_Count: 'G_Count',
  G_Notice: 'G_Notice',
  Number: 'Number',
  G_Type: 'G_Type',
  G_Rival: 'G_Rival',
  G_Union: 'G_Union',
  MemberCount: 'MemberCount'
};

exports.Prisma.GuildMemberScalarFieldEnum = {
  Name: 'Name',
  G_Name: 'G_Name',
  G_Level: 'G_Level',
  G_Status: 'G_Status'
};

exports.Prisma.HelperDataScalarFieldEnum = {
  Name: 'Name',
  Data: 'Data'
};

exports.Prisma.LuckyCoinScalarFieldEnum = {
  AccountID: 'AccountID',
  LuckyCoin: 'LuckyCoin'
};

exports.Prisma.LuckyItemScalarFieldEnum = {
  ItemSerial: 'ItemSerial',
  DurabilitySmall: 'DurabilitySmall'
};

exports.Prisma.MEMB_STATScalarFieldEnum = {
  memb___id: 'memb___id',
  ConnectStat: 'ConnectStat',
  ServerName: 'ServerName',
  IP: 'IP',
  ConnectTM: 'ConnectTM',
  DisConnectTM: 'DisConnectTM',
  OnlineHours: 'OnlineHours',
  HWID: 'HWID'
};

exports.Prisma.MasterSkillTreeScalarFieldEnum = {
  Name: 'Name',
  MasterLevel: 'MasterLevel',
  MasterPoint: 'MasterPoint',
  MasterExperience: 'MasterExperience',
  MasterSkill: 'MasterSkill'
};

exports.Prisma.MuCastle_DATAScalarFieldEnum = {
  MAP_SVR_GROUP: 'MAP_SVR_GROUP',
  SIEGE_START_DATE: 'SIEGE_START_DATE',
  SIEGE_END_DATE: 'SIEGE_END_DATE',
  SIEGE_GUILDLIST_SETTED: 'SIEGE_GUILDLIST_SETTED',
  SIEGE_ENDED: 'SIEGE_ENDED',
  CASTLE_OCCUPY: 'CASTLE_OCCUPY',
  OWNER_GUILD: 'OWNER_GUILD',
  MONEY: 'MONEY',
  TAX_RATE_CHAOS: 'TAX_RATE_CHAOS',
  TAX_RATE_STORE: 'TAX_RATE_STORE',
  TAX_HUNT_ZONE: 'TAX_HUNT_ZONE'
};

exports.Prisma.MuCastle_NPCScalarFieldEnum = {
  MAP_SVR_GROUP: 'MAP_SVR_GROUP',
  NPC_NUMBER: 'NPC_NUMBER',
  NPC_INDEX: 'NPC_INDEX',
  NPC_DF_LEVEL: 'NPC_DF_LEVEL',
  NPC_RG_LEVEL: 'NPC_RG_LEVEL',
  NPC_MAXHP: 'NPC_MAXHP',
  NPC_HP: 'NPC_HP',
  NPC_X: 'NPC_X',
  NPC_Y: 'NPC_Y',
  NPC_DIR: 'NPC_DIR',
  NPC_CREATEDATE: 'NPC_CREATEDATE'
};

exports.Prisma.MuCastle_REG_SIEGEScalarFieldEnum = {
  MAP_SVR_GROUP: 'MAP_SVR_GROUP',
  REG_SIEGE_GUILD: 'REG_SIEGE_GUILD',
  REG_MARKS: 'REG_MARKS',
  IS_GIVEUP: 'IS_GIVEUP',
  SEQ_NUM: 'SEQ_NUM'
};

exports.Prisma.OptionDataScalarFieldEnum = {
  Name: 'Name',
  SkillKey: 'SkillKey',
  GameOption: 'GameOption',
  Qkey: 'Qkey',
  Wkey: 'Wkey',
  Ekey: 'Ekey',
  ChatWindow: 'ChatWindow',
  Rkey: 'Rkey',
  QWERLevel: 'QWERLevel'
};

exports.Prisma.QuestKillCountScalarFieldEnum = {
  Name: 'Name',
  QuestIndex: 'QuestIndex',
  MonsterClass1: 'MonsterClass1',
  KillCount1: 'KillCount1',
  MonsterClass2: 'MonsterClass2',
  KillCount2: 'KillCount2',
  MonsterClass3: 'MonsterClass3',
  KillCount3: 'KillCount3',
  MonsterClass4: 'MonsterClass4',
  KillCount4: 'KillCount4',
  MonsterClass5: 'MonsterClass5',
  KillCount5: 'KillCount5'
};

exports.Prisma.QuestWorldScalarFieldEnum = {
  Name: 'Name',
  QuestWorldList: 'QuestWorldList'
};

exports.Prisma.RankingBloodCastleScalarFieldEnum = {
  Name: 'Name',
  Score: 'Score'
};

exports.Prisma.RankingChaosCastleScalarFieldEnum = {
  Name: 'Name',
  Score: 'Score'
};

exports.Prisma.RankingDevilSquareScalarFieldEnum = {
  Name: 'Name',
  Score: 'Score'
};

exports.Prisma.RankingDuelScalarFieldEnum = {
  Name: 'Name',
  WinScore: 'WinScore',
  LoseScore: 'LoseScore'
};

exports.Prisma.RankingIllusionTempleScalarFieldEnum = {
  Name: 'Name',
  Score: 'Score'
};

exports.Prisma.T_CGuidScalarFieldEnum = {
  GUID: 'GUID',
  Name: 'Name'
};

exports.Prisma.T_FriendMailScalarFieldEnum = {
  MemoIndex: 'MemoIndex',
  GUID: 'GUID',
  FriendName: 'FriendName',
  wDate: 'wDate',
  Subject: 'Subject',
  bRead: 'bRead',
  Memo: 'Memo',
  Photo: 'Photo',
  Dir: 'Dir',
  Act: 'Act'
};

exports.Prisma.T_FriendMainScalarFieldEnum = {
  GUID: 'GUID',
  Name: 'Name',
  FriendCount: 'FriendCount',
  MemoCount: 'MemoCount',
  MemoTotal: 'MemoTotal'
};

exports.Prisma.T_PetItem_InfoScalarFieldEnum = {
  ItemSerial: 'ItemSerial',
  Pet_Level: 'Pet_Level',
  Pet_Exp: 'Pet_Exp'
};

exports.Prisma.WarehouseScalarFieldEnum = {
  AccountID: 'AccountID',
  Items: 'Items',
  Money: 'Money',
  EndUseDate: 'EndUseDate',
  DbVersion: 'DbVersion',
  pw: 'pw',
  VaultCounts: 'VaultCounts',
  LastVaultID: 'LastVaultID'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  MEMB_INFO: 'MEMB_INFO',
  AccountCharacter: 'AccountCharacter',
  CashShopData: 'CashShopData',
  CashShopInventory: 'CashShopInventory',
  CashShopPeriodicItem: 'CashShopPeriodicItem',
  Character: 'Character',
  DefaultClassType: 'DefaultClassType',
  EventLeoTheHelper: 'EventLeoTheHelper',
  EventSantaClaus: 'EventSantaClaus',
  GameServerInfo: 'GameServerInfo',
  Gens_Rank: 'Gens_Rank',
  Gens_Reward: 'Gens_Reward',
  Guild: 'Guild',
  GuildMember: 'GuildMember',
  HelperData: 'HelperData',
  LuckyCoin: 'LuckyCoin',
  LuckyItem: 'LuckyItem',
  MEMB_STAT: 'MEMB_STAT',
  MasterSkillTree: 'MasterSkillTree',
  MuCastle_DATA: 'MuCastle_DATA',
  MuCastle_NPC: 'MuCastle_NPC',
  MuCastle_REG_SIEGE: 'MuCastle_REG_SIEGE',
  OptionData: 'OptionData',
  QuestKillCount: 'QuestKillCount',
  QuestWorld: 'QuestWorld',
  RankingBloodCastle: 'RankingBloodCastle',
  RankingChaosCastle: 'RankingChaosCastle',
  RankingDevilSquare: 'RankingDevilSquare',
  RankingDuel: 'RankingDuel',
  RankingIllusionTemple: 'RankingIllusionTemple',
  T_CGuid: 'T_CGuid',
  T_FriendMail: 'T_FriendMail',
  T_FriendMain: 'T_FriendMain',
  T_PetItem_Info: 'T_PetItem_Info',
  warehouse: 'warehouse'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

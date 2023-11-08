
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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


  const path = require('path')

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

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email'
};

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
  User: 'User',
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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\JL\\Documents\\web\\backend\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.5.2",
  "engineVersion": "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlserver",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gInNxbHNlcnZlciIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgVXNlciB7CiAgaWQgU3RyaW5nIEBpZCAKICBuYW1lIFN0cmluZyAKICBlbWFpbCBTdHJpbmcgCn0KCgptb2RlbCBNRU1CX0lORk8gewogIG1lbWJfZ3VpZCAgICAgICAgIEludCAgICAgICBAaWQoY2x1c3RlcmVkOiBmYWxzZSwgc29ydDogRGVzYywgbWFwOiAiUEtfTUVNQl9JTkZPXzEiKSBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbWVtYl9fX2lkICAgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDEwKQogIG1lbWJfX3B3ZCAgICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcigxMCkKICBtZW1iX25hbWUgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoMTApCiAgc25vX19udW1iICAgICAgICAgU3RyaW5nICAgIEBkYi5DaGFyKDE4KQogIHBvc3RfY29kZSAgICAgICAgIFN0cmluZz8gICBAZGIuQ2hhcig2KQogIGFkZHJfaW5mbyAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1MCkKICBhZGRyX2RldGEgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNTApCiAgdGVsX19udW1iICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDIwKQogIHBob25fbnVtYiAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxNSkKICBtYWlsX2FkZHIgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNTApCiAgZnBhc19xdWVzICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUwKQogIGZwYXNfYW5zdyAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1MCkKICBqb2JfX2NvZGUgICAgICAgICBTdHJpbmc/ICAgQGRiLkNoYXIoMikKICBhcHBsX2RheXMgICAgICAgICBEYXRlVGltZT8gQGRiLkRhdGVUaW1lCiAgbW9kaV9kYXlzICAgICAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlVGltZQogIG91dF9fZGF5cyAgICAgICAgIERhdGVUaW1lPyBAZGIuRGF0ZVRpbWUKICB0cnVlX2RheXMgICAgICAgICBEYXRlVGltZT8gQGRiLkRhdGVUaW1lCiAgbWFpbF9jaGVrICAgICAgICAgU3RyaW5nPyAgIEBkZWZhdWx0KCIwIiwgbWFwOiAiREZfTUVNQl9JTkZPX21haWxfY2hlayIpIEBkYi5DaGFyKDEpCiAgYmxvY19jb2RlICAgICAgICAgU3RyaW5nICAgIEBkYi5DaGFyKDEpCiAgY3RsMV9jb2RlICAgICAgICAgU3RyaW5nICAgIEBkYi5DaGFyKDEpCiAgQWNjb3VudExldmVsICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX01FTUJfSU5GT19BY2NvdW50TGV2ZWwiKQogIEFjY291bnRFeHBpcmVEYXRlIERhdGVUaW1lICBAZGVmYXVsdChkYmdlbmVyYXRlZCgiMCIpLCBtYXA6ICJERl9fTUVNQl9JTkZPX19BY2NvdV9fNTZFOEU3QUIiKSBAZGIuU21hbGxEYXRlVGltZQogIHZpcCAgICAgICAgICAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fTUVNQl9JTkZPX192aXBfXzU3REQwQkU0IikKICBjYXNoICAgICAgICAgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfX01FTUJfSU5GT19fY2FzaF9fNThEMTMwMUQiKQogIFJld2FyZFBsYXllciAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fTUVNQl9JTkZPX19SZXdhcl9fNTlDNTU0NTYiKQogIENoYW9zUG9pbnRzICAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fTUVNQl9JTkZPX19DaGFvc19fNUFCOTc4OEYiKQogIEJsZXNzUG9pbnRzICAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fTUVNQl9JTkZPX19CbGVzc19fNUJBRDlDQzgiKQogIFNvdWxQb2ludHMgICAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fTUVNQl9JTkZPX19Tb3VsUF9fNUNBMUMxMDEiKQogIExpZmVQb2ludHMgICAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fTUVNQl9JTkZPX19MaWZlUF9fNUQ5NUU1M0EiKQogIENyZWF0aW9uUG9pbnRzICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fTUVNQl9JTkZPX19DcmVhdF9fNUU4QTA5NzMiKQogIEd1YXJkaWFuUG9pbnRzICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fTUVNQl9JTkZPX19HdWFyZF9fNUY3RTJEQUMiKQogIEdlbXN0b25lUG9pbnRzICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fTUVNQl9JTkZPX19HZW1zdF9fNjA3MjUxRTUiKQogIEhhcm1vbnlQb2ludHMgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fTUVNQl9JTkZPX19IYXJtb19fNjE2Njc2MUUiKQogIExSZWZpbmluZ1BvaW50cyAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fTUVNQl9JTkZPX19MUmVmaV9fNjI1QTlBNTciKQogIEhSZWZpbmluZ1BvaW50cyAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fTUVNQl9JTkZPX19IUmVmaV9fNjM0RUJFOTAiKQogIExvY2tQYXNzd29yZCAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fTUVNQl9JTkZPX19Mb2NrUF9fMDY5N0ZBQ0QiKQoKICBAQGluZGV4KFtzbm9fX251bWIoc29ydDogRGVzYyksIG1lbWJfbmFtZShzb3J0OiBEZXNjKV0sIG1hcDogIklYX01FTUJfREVUQUlMIikKICBAQGluZGV4KFttZW1iX19faWQoc29ydDogRGVzYyldLCBtYXA6ICJJWF9NRU1CX0lORk9fMSIsIGNsdXN0ZXJlZDogdHJ1ZSkKfQoKCgptb2RlbCBBY2NvdW50Q2hhcmFjdGVyIHsKICBOdW1iZXIgICAgICAgSW50ICAgICBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgSWQgICAgICAgICAgIFN0cmluZyAgQGlkKGNsdXN0ZXJlZDogZmFsc2UsIG1hcDogIlBLX0FjY291bnRDaGFyYWN0ZXIiKSBAZGIuVmFyQ2hhcigxMCkKICBHYW1lSUQxICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigxMCkKICBHYW1lSUQyICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigxMCkKICBHYW1lSUQzICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigxMCkKICBHYW1lSUQ0ICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigxMCkKICBHYW1lSUQ1ICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigxMCkKICBHYW1lSURDICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigxMCkKICBNb3ZlQ250ICAgICAgSW50PyAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fQWNjb3VudENoX19Nb3ZlQ19fN0EzMjIzRTgiKSBAZGIuVGlueUludAogIEV4dENsYXNzICAgICBJbnQgICAgIEBkZWZhdWx0KDAsIG1hcDogImRmX0FjY291bnRDaGFyYWN0ZXJfRXh0Q2xhc3MiKQogIEV4dFdhcmVob3VzZSBJbnQgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX19BY2NvdW50Q2hfX0V4dFdhX18xQ0JDNDYxNiIpCiAgR2FtZUlENiAgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMTApCiAgR2FtZUlENyAgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMTApCiAgR2FtZUlEOCAgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMTApCiAgR2FtZUlEOSAgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMTApCiAgR2FtZUlEMTAgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMTApCiAgTWF4Q2hhcmFjdGVyIEludCAgICAgQGRlZmF1bHQoMTAsIG1hcDogIkRGX19BY2NvdW50Q2hfX01heENoX18xREIwNkE0RiIpCn0KCi8vLyBUaGUgdW5kZXJseWluZyB0YWJsZSBkb2VzIG5vdCBjb250YWluIGEgdmFsaWQgdW5pcXVlIGlkZW50aWZpZXIgYW5kIGNhbiB0aGVyZWZvcmUgY3VycmVudGx5IG5vdCBiZSBoYW5kbGVkIGJ5IFByaXNtYSBDbGllbnQuCm1vZGVsIENIQU9TX0JPWF9HRU5FU0lTIHsKICBBY2NvdW50ICAgICAgU3RyaW5nICAgIEBkYi5OVmFyQ2hhcigxMCkKICBOYW1lICAgICAgICAgU3RyaW5nICAgIEBkYi5OVmFyQ2hhcigxMCkKICBTdGF0ZSAgICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX0NIQU9TX0JPWF9HRU5FU0lTX1N0YXRlIikKICBTZWxlY3RlZEtleSAgSW50ICAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX0NIQU9TX0JPWF9HRU5FU0lTX1NlbGVjdGVkS2V5IikKICBTZWxlY3RlZENvbWIgSW50ICAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX0NIQU9TX0JPWF9HRU5FU0lTX1NlbGVjdGVkQ29tYiIpCiAgSXRlbXMgICAgICAgIEJ5dGVzPyAgICBAZGIuVmFyQmluYXJ5KDE5MjApCiAgTGFzdFVzZSAgICAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSwgbWFwOiAiREZfQ0hBT1NfQk9YX0dFTkVTSVNfTGFzdFVzZSIpIEBkYi5EYXRlVGltZQoKICBAQGlnbm9yZQp9CgovLy8gVGhlIHVuZGVybHlpbmcgdGFibGUgZG9lcyBub3QgY29udGFpbiBhIHZhbGlkIHVuaXF1ZSBpZGVudGlmaWVyIGFuZCBjYW4gdGhlcmVmb3JlIGN1cnJlbnRseSBub3QgYmUgaGFuZGxlZCBieSBQcmlzbWEgQ2xpZW50Lgptb2RlbCBDYXNoTG9nIHsKICBJRCAgICAgICBJbnQgICAgICAgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIFVzZXJJRCAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxNikKICBBbW91bnQgICBGbG9hdD8gICAgQGRiLk1vbmV5CiAgU2VudERhdGUgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpLCBtYXA6ICJERl9fQ2FzaExvZ19fU2VudERhdF9fMUVBNDhFODgiKSBAZGIuU21hbGxEYXRlVGltZQoKICBAQGlnbm9yZQp9Cgptb2RlbCBDYXNoU2hvcERhdGEgewogIEFjY291bnRJRCAgIFN0cmluZyBAaWQobWFwOiAiUEtfVGVtcENhc2hTaG9wIikgQGRiLlZhckNoYXIoMTApCiAgV0NvaW5DICAgICAgSW50PwogIFdDb2luUCAgICAgIEludD8KICBHb2JsaW5Qb2ludCBJbnQ/Cn0KCm1vZGVsIENhc2hTaG9wSW52ZW50b3J5IHsKICBCYXNlSXRlbUNvZGUgICAgIEludCAgICAgQGlkKG1hcDogIlBLX0Nhc2hTaG9wSW52ZW50b3J5IikgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIE1haW5JdGVtQ29kZSAgICAgSW50PwogIEFjY291bnRJRCAgICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigxMCkKICBJbnZlbnRvcnlUeXBlICAgIEludD8KICBQYWNrYWdlTWFpbkluZGV4IEludD8KICBQcm9kdWN0QmFzZUluZGV4IEludD8KICBQcm9kdWN0TWFpbkluZGV4IEludD8KICBDb2luVmFsdWUgICAgICAgIEZsb2F0PwogIFByb2R1Y3RUeXBlICAgICAgSW50PwogIEdpZnROYW1lICAgICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigxMCkKICBHaWZ0VGV4dCAgICAgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMjAwKQp9Cgptb2RlbCBDYXNoU2hvcFBlcmlvZGljSXRlbSB7CiAgSXRlbVNlcmlhbCBJbnQgIEBpZChtYXA6ICJQS19DYXNoU2hvcFBlcmlvZGljSXRlbSIpCiAgVGltZSAgICAgICBJbnQ/Cn0KCm1vZGVsIENoYXJhY3RlciB7CiAgQWNjb3VudElEICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoMTApCiAgTmFtZSAgICAgICAgICAgICBTdHJpbmcgICAgQGlkKGNsdXN0ZXJlZDogZmFsc2UsIG1hcDogIlBLX0NoYXJhY3RlciIpIEBkYi5WYXJDaGFyKDEwKQogIGNMZXZlbCAgICAgICAgICAgSW50PyAgICAgIEBkZWZhdWx0KDEsIG1hcDogIkRGX0NoYXJhY3Rlcl9jTGV2ZWwiKQogIExldmVsVXBQb2ludCAgICAgSW50PyAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX0NoYXJhY3Rlcl9MZXZlbFVwUG9pbnQiKQogIENsYXNzICAgICAgICAgICAgSW50PyAgICAgIEBkYi5UaW55SW50CiAgRXhwZXJpZW5jZSAgICAgICBJbnQ/ICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfQ2hhcmFjdGVyX0V4cGVyaWVuY2UiKQogIFN0cmVuZ3RoICAgICAgICAgSW50PwogIERleHRlcml0eSAgICAgICAgSW50PwogIFZpdGFsaXR5ICAgICAgICAgSW50PwogIEVuZXJneSAgICAgICAgICAgSW50PwogIExlYWRlcnNoaXAgICAgICAgSW50PyAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX19DaGFyYWN0ZXJfX0xlYWRlX183QTY3MkUxMiIpCiAgSW52ZW50b3J5ICAgICAgICBCeXRlcz8gICAgQGRiLlZhckJpbmFyeSgzOTg0KQogIE1hZ2ljTGlzdCAgICAgICAgQnl0ZXM/ICAgIEBkYi5WYXJCaW5hcnkoMTgwKQogIE1vbmV5ICAgICAgICAgICAgSW50PyAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX0NoYXJhY3Rlcl9Nb25leSIpCiAgTGlmZSAgICAgICAgICAgICBGbG9hdD8gICAgQGRiLlJlYWwKICBNYXhMaWZlICAgICAgICAgIEZsb2F0PyAgICBAZGIuUmVhbAogIE1hbmEgICAgICAgICAgICAgRmxvYXQ/ICAgIEBkYi5SZWFsCiAgTWF4TWFuYSAgICAgICAgICBGbG9hdD8gICAgQGRiLlJlYWwKICBCUCAgICAgICAgICAgICAgIEZsb2F0PyAgICBAZGIuUmVhbAogIE1heEJQICAgICAgICAgICAgRmxvYXQ/ICAgIEBkYi5SZWFsCiAgU2hpZWxkICAgICAgICAgICBGbG9hdD8gICAgQGRiLlJlYWwKICBNYXhTaGllbGQgICAgICAgIEZsb2F0PyAgICBAZGIuUmVhbAogIE1hcE51bWJlciAgICAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludAogIE1hcFBvc1ggICAgICAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludAogIE1hcFBvc1kgICAgICAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludAogIE1hcERpciAgICAgICAgICAgSW50PyAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX0NoYXJhY3Rlcl9NYXBEaXIiKSBAZGIuVGlueUludAogIFBrQ291bnQgICAgICAgICAgSW50PyAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX0NoYXJhY3Rlcl9Qa0NvdW50IikKICBQa0xldmVsICAgICAgICAgIEludD8gICAgICBAZGVmYXVsdCgzLCBtYXA6ICJERl9DaGFyYWN0ZXJfUGtMZXZlbCIpCiAgUGtUaW1lICAgICAgICAgICBJbnQ/ICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfQ2hhcmFjdGVyX1BrVGltZSIpCiAgTURhdGUgICAgICAgICAgICBEYXRlVGltZT8gQGRiLlNtYWxsRGF0ZVRpbWUKICBMRGF0ZSAgICAgICAgICAgIERhdGVUaW1lPyBAZGIuU21hbGxEYXRlVGltZQogIEN0bENvZGUgICAgICAgICAgSW50PyAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX0NoYXJhY3Rlcl9DdGxDb2RlIikgQGRiLlRpbnlJbnQKICBEYlZlcnNpb24gICAgICAgIEludD8gICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fQ2hhcmFjdGVyX19EYlZlcl9fNzg3RUU1QTAiKSBAZGIuVGlueUludAogIFF1ZXN0ICAgICAgICAgICAgQnl0ZXM/ICAgIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCIwIiksIG1hcDogIkRGX19DaGFyYWN0ZXJfX1F1ZXN0X183OTczMDlEOSIpIEBkYi5WYXJCaW5hcnkoNTApCiAgQ2hhdExpbWl0VGltZSAgICBJbnQ/ICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfX0NoYXJhY3Rlcl9fQ2hhdExfXzdCNUI1MjRCIikgQGRiLlNtYWxsSW50CiAgRnJ1aXRQb2ludCAgICAgICBJbnQ/ICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfQ2hhcmFjdGVyX0ZydWl0UG9pbnQiKQogIEVmZmVjdExpc3QgICAgICAgQnl0ZXM/ICAgIEBkYi5WYXJCaW5hcnkoMjA4KQogIEZydWl0QWRkUG9pbnQgICAgSW50ICAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX19DaGFyYWN0ZXJfX0ZydWl0X180RjY3QzE3NCIpCiAgRnJ1aXRTdWJQb2ludCAgICBJbnQgICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfX0NoYXJhY3Rlcl9fRnJ1aXRfXzUwNUJFNUFEIikKICBSZXNldENvdW50ICAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fQ2hhcmFjdGVyX19SZXNldF9fNTE1MDA5RTYiKQogIE1hc3RlclJlc2V0Q291bnQgSW50ICAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX19DaGFyYWN0ZXJfX01hc3RlX183Q0Y5ODFGQSIpCiAgRXh0SW52ZW50b3J5ICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfX0NoYXJhY3Rlcl9fRXh0SW5fXzQwRTQ5N0YzIikKICBSZXNldHMgICAgICAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fQ2hhcmFjdGVyX19SZXNldF9fMzU4N0YzRTAiKQogIFJlc2V0c0RheSAgICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX19DaGFyYWN0ZXJfX1Jlc2V0X18zNjdDMTgxOSIpCiAgUmVzZXRzV2VlayAgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfX0NoYXJhY3Rlcl9fUmVzZXRfXzM3NzAzQzUyIikKICBSZXNldHNNb250aCAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fQ2hhcmFjdGVyX19SZXNldF9fMzg2NDYwOEIiKQogIE1SZXNldHMgICAgICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX19DaGFyYWN0ZXJfX01SZXNlX18zOTU4ODRDNCIpCiAgTVJlc2V0c0RheSAgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfX0NoYXJhY3Rlcl9fTVJlc2VfXzNBNENBOEZEIikKICBNUmVzZXRzV2VlayAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fQ2hhcmFjdGVyX19NUmVzZV9fM0I0MENEMzYiKQogIE1SZXNldHNNb250aCAgICAgSW50ICAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX19DaGFyYWN0ZXJfX01SZXNlX18zQzM0RjE2RiIpCiAgUEtUb3RhbCAgICAgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfX0NoYXJhY3Rlcl9fUEtUb3RfXzNEMjkxNUE4IikKICBQS0RheSAgICAgICAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fQ2hhcmFjdGVyX19QS0RheV9fM0UxRDM5RTEiKQogIFBLV2VlayAgICAgICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX19DaGFyYWN0ZXJfX1BLV2VlX18zRjExNUUxQSIpCiAgUEtNb250aCAgICAgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfX0NoYXJhY3Rlcl9fUEtNb25fXzQwMDU4MjUzIikKICBIZXJvVG90YWwgICAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fQ2hhcmFjdGVyX19IZXJvVF9fNDBGOUE2OEMiKQogIEhlcm9EYXkgICAgICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX19DaGFyYWN0ZXJfX0hlcm9EX180MUVEQ0FDNSIpCiAgSGVyb1dlZWsgICAgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfX0NoYXJhY3Rlcl9fSGVyb1dfXzQyRTFFRUZFIikKICBIZXJvTW9udGggICAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fQ2hhcmFjdGVyX19IZXJvTV9fNDNENjEzMzciKQogIHRyYWRld2lucyAgICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX19DaGFyYWN0ZXJfX3RyYWRlX180NENBMzc3MCIpCiAgbWF0YW1hdGEgICAgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfX0NoYXJhY3Rlcl9fbWF0YW1fXzQ1QkU1QkE5IikKICBkdWVsX3RvdGFsICAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fQ2hhcmFjdGVyX19kdWVsX19fNDZCMjdGRTIiKQogIGR1ZWxfc2VtYW5hbCAgICAgSW50ICAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX19DaGFyYWN0ZXJfX2R1ZWxfX180N0E2QTQxQiIpCiAgZHVlbF9tZW5zYWwgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfX0NoYXJhY3Rlcl9fZHVlbF9fXzQ4OUFDODU0IikKfQoKLy8vIFRoZSB1bmRlcmx5aW5nIHRhYmxlIGRvZXMgbm90IGNvbnRhaW4gYSB2YWxpZCB1bmlxdWUgaWRlbnRpZmllciBhbmQgY2FuIHRoZXJlZm9yZSBjdXJyZW50bHkgbm90IGJlIGhhbmRsZWQgYnkgUHJpc21hIENsaWVudC4KbW9kZWwgRGVhdGhTeXN0ZW0gewogIG1fU2VyaWFsIEludD8KICBEZWF0aHMgICBJbnQ/CgogIEBAaWdub3JlCn0KCm1vZGVsIERlZmF1bHRDbGFzc1R5cGUgewogIENsYXNzICAgICAgICBJbnQgICAgQGlkKG1hcDogIlBLX0RlZmF1bHRDbGFzc1R5cGUiKSBAZGIuVGlueUludAogIExldmVsICAgICAgICBJbnQ/ICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfX0RlZmF1bHRDbF9fTGV2ZWxfXzcyOTEwMjIwIikgQGRiLlNtYWxsSW50CiAgTGV2ZWxVcFBvaW50IEludD8gICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fRGVmYXVsdENsX19MZXZlbF9fNzM4NTI2NTkiKSBAZGIuU21hbGxJbnQKICBTdHJlbmd0aCAgICAgSW50PyAgIEBkYi5TbWFsbEludAogIERleHRlcml0eSAgICBJbnQ/ICAgQGRiLlNtYWxsSW50CiAgVml0YWxpdHkgICAgIEludD8gICBAZGIuU21hbGxJbnQKICBFbmVyZ3kgICAgICAgSW50PyAgIEBkYi5TbWFsbEludAogIExlYWRlcnNoaXAgICBJbnQ/ICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfX0RlZmF1bHRDbF9fTGVhZGVfXzcxOUNEREU3IikgQGRiLlNtYWxsSW50CiAgSW52ZW50b3J5ICAgIEJ5dGVzPyBAZGIuVmFyQmluYXJ5KDM3NzYpCiAgTWFnaWNMaXN0ICAgIEJ5dGVzPyBAZGIuVmFyQmluYXJ5KDE4MCkKICBMaWZlICAgICAgICAgRmxvYXQ/IEBkYi5SZWFsCiAgTWF4TGlmZSAgICAgIEZsb2F0PyBAZGIuUmVhbAogIE1hbmEgICAgICAgICBGbG9hdD8gQGRiLlJlYWwKICBNYXhNYW5hICAgICAgRmxvYXQ/IEBkYi5SZWFsCiAgTWFwTnVtYmVyICAgIEludD8gICBAZGIuU21hbGxJbnQKICBNYXBQb3NYICAgICAgSW50PyAgIEBkYi5TbWFsbEludAogIE1hcFBvc1kgICAgICBJbnQ/ICAgQGRiLlNtYWxsSW50CiAgUXVlc3QgICAgICAgIEJ5dGVzPyBAZGIuVmFyQmluYXJ5KDUwKQogIERiVmVyc2lvbiAgICBJbnQ/ICAgQGRiLlRpbnlJbnQKICBFZmZlY3RMaXN0ICAgQnl0ZXM/IEBkYi5WYXJCaW5hcnkoMjA4KQp9Cgptb2RlbCBFdmVudExlb1RoZUhlbHBlciB7CiAgTmFtZSAgIFN0cmluZyBAaWQobWFwOiAiUEtfRXZlbnRMZW9UaGVIZWxwZXIiKSBAZGIuVmFyQ2hhcigxMCkKICBTdGF0dXMgSW50Pwp9Cgptb2RlbCBFdmVudFNhbnRhQ2xhdXMgewogIE5hbWUgICBTdHJpbmcgQGlkKG1hcDogIlBLX0V2ZW50U2FudGFDbGF1cyIpIEBkYi5WYXJDaGFyKDEwKQogIFN0YXR1cyBJbnQ/Cn0KCi8vLyBUaGUgdW5kZXJseWluZyB0YWJsZSBkb2VzIG5vdCBjb250YWluIGEgdmFsaWQgdW5pcXVlIGlkZW50aWZpZXIgYW5kIGNhbiB0aGVyZWZvcmUgY3VycmVudGx5IG5vdCBiZSBoYW5kbGVkIGJ5IFByaXNtYSBDbGllbnQuCm1vZGVsIEV4dFdhcmVob3VzZSB7CiAgQWNjb3VudElEIFN0cmluZyBAZGIuVmFyQ2hhcigxMCkKICBJdGVtcyAgICAgQnl0ZXM/IEBkYi5WYXJCaW5hcnkoMzg0MCkKICBNb25leSAgICAgSW50PwogIE51bWJlciAgICBJbnQ/CgogIEBAaWdub3JlCn0KCm1vZGVsIEdhbWVTZXJ2ZXJJbmZvIHsKICBOdW1iZXIgICAgICAgSW50ICBAaWQoY2x1c3RlcmVkOiBmYWxzZSwgbWFwOiAiUEtfR2FtZVNlcnZlckluZm8iKSBAZGVmYXVsdCgwLCBtYXA6ICJERl9HYW1lU2VydmVySW5mb19OdW1iZXIiKQogIEl0ZW1Db3VudCAgICBJbnQKICBaZW5Db3VudCAgICAgSW50PyBAZGVmYXVsdCgwLCBtYXA6ICJERl9HYW1lU2VydmVySW5mb19aZW5Db3VudCIpCiAgQWNlSXRlbUNvdW50IEludD8KfQoKbW9kZWwgR2Vuc19SYW5rIHsKICBOYW1lICAgICAgICAgU3RyaW5nIEBpZChtYXA6ICJQS19HZW5zX1JhbmsiKSBAZGIuVmFyQ2hhcigxMCkKICBGYW1pbHkgICAgICAgSW50PwogIENvbnRyaWJ1dGlvbiBJbnQ/Cn0KCm1vZGVsIEdlbnNfUmV3YXJkIHsKICBOYW1lICAgU3RyaW5nIEBpZChtYXA6ICJQS19HZW5zX1Jld2FyZCIpIEBkYi5WYXJDaGFyKDEwKQogIFJhbmsgICBJbnQ/CiAgU3RhdHVzIEludD8KfQoKbW9kZWwgR3VpbGQgewogIEdfTmFtZSAgICAgIFN0cmluZyAgQGlkKG1hcDogIlBLX0d1aWxkIikgQGRiLlZhckNoYXIoOCkKICBHX01hcmsgICAgICBCeXRlcz8gIEBkYi5WYXJCaW5hcnkoMzIpCiAgR19TY29yZSAgICAgSW50PyAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9HdWlsZF9HX1Njb3JlIikKICBHX01hc3RlciAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDEwKQogIEdfQ291bnQgICAgIEludD8KICBHX05vdGljZSAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDYwKQogIE51bWJlciAgICAgIEludCAgICAgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIEdfVHlwZSAgICAgIEludCAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfX0d1aWxkX19HX1R5cGVfXzBEN0EwMjg2IikKICBHX1JpdmFsICAgICBJbnQgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX19HdWlsZF9fR19SaXZhbF9fMEU2RTI2QkYiKQogIEdfVW5pb24gICAgIEludCAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfX0d1aWxkX19HX1VuaW9uX18wRjYyNEFGOCIpCiAgTWVtYmVyQ291bnQgSW50PyAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fR3VpbGRfX01lbWJlckNvdV9fMTA1NjZGMzEiKQoKICBAQGluZGV4KFtHX1JpdmFsXSwgbWFwOiAiSURYX0dVSUxEX0dfUklWQUwiKQogIEBAaW5kZXgoW0dfVW5pb25dLCBtYXA6ICJJRFhfR1VJTERfR19VTklPTiIpCiAgQEBpbmRleChbTnVtYmVyXSwgbWFwOiAiSURYX0dVSUxEX05VTUJFUiIpCn0KCm1vZGVsIEd1aWxkTWVtYmVyIHsKICBOYW1lICAgICBTdHJpbmcgQGlkKG1hcDogIlBLX0d1aWxkTWVtYmVyIikgQGRiLlZhckNoYXIoMTApCiAgR19OYW1lICAgU3RyaW5nIEBkYi5WYXJDaGFyKDgpCiAgR19MZXZlbCAgSW50PyAgIEBkYi5UaW55SW50CiAgR19TdGF0dXMgSW50ICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX19HdWlsZE1lbWJfX0dfU3RhX18wMUQzNDVCMCIpIEBkYi5UaW55SW50CgogIEBAaW5kZXgoW0dfTmFtZV0sIG1hcDogIklYX0d1aWxkTWVtYmVyIikKfQoKbW9kZWwgSGVscGVyRGF0YSB7CiAgTmFtZSBTdHJpbmcgQGlkKG1hcDogIlBLX0hlbHBlckRhdGEiKSBAZGIuVmFyQ2hhcigxMCkKICBEYXRhIEJ5dGVzPyBAZGIuQmluYXJ5KDI1NikKfQoKLy8vIFRoZSB1bmRlcmx5aW5nIHRhYmxlIGRvZXMgbm90IGNvbnRhaW4gYSB2YWxpZCB1bmlxdWUgaWRlbnRpZmllciBhbmQgY2FuIHRoZXJlZm9yZSBjdXJyZW50bHkgbm90IGJlIGhhbmRsZWQgYnkgUHJpc21hIENsaWVudC4KbW9kZWwgSXRlbUxvZyB7CiAgU0VRICAgICAgSW50ICAgICAgIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBBY2MgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTApCiAgTmFtZSAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwKQogIEl0ZW1Db2RlIEJ5dGVzPyAgICBAZGIuVmFyQmluYXJ5KDMyKQogIFNOICAgICAgIEludD8KICBpTmFtZSAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNTApCiAgaUx2bCAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUwKQogIGlTa2lsbCAgIEludD8gICAgICBAZGIuU21hbGxJbnQKICBpTHVjayAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50CiAgaUV4dCAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUwMCkKICBpU2V0ICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50CiAgaTM4MCAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludAogIGlKaCAgICAgIEludD8gICAgICBAZGIuU21hbGxJbnQKICBTZW50RGF0ZSBEYXRlVGltZT8gQGRlZmF1bHQobm93KCksIG1hcDogIkRGX19JdGVtTG9nX19TZW50RGF0X181NDBDN0IwMCIpIEBkYi5TbWFsbERhdGVUaW1lCgogIEBAaWdub3JlCn0KCm1vZGVsIEx1Y2t5Q29pbiB7CiAgQWNjb3VudElEIFN0cmluZyBAaWQobWFwOiAiUEtfTHVja3lDb2luIikgQGRiLlZhckNoYXIoMTApCiAgTHVja3lDb2luIEludD8KfQoKbW9kZWwgTHVja3lJdGVtIHsKICBJdGVtU2VyaWFsICAgICAgSW50ICBAaWQobWFwOiAiUEtfTHVja3lJdGVtIikKICBEdXJhYmlsaXR5U21hbGwgSW50Pwp9Cgptb2RlbCBNRU1CX1NUQVQgewogIG1lbWJfX19pZCAgICBTdHJpbmcgICAgQGlkKG1hcDogIlBLX01FTUJfU1RBVCIpIEBkYi5WYXJDaGFyKDEwKQogIENvbm5lY3RTdGF0ICBJbnQ/ICAgICAgQGRiLlRpbnlJbnQKICBTZXJ2ZXJOYW1lICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUwKQogIElQICAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTUpCiAgQ29ubmVjdFRNICAgIERhdGVUaW1lPyBAZGIuU21hbGxEYXRlVGltZQogIERpc0Nvbm5lY3RUTSBEYXRlVGltZT8gQGRiLlNtYWxsRGF0ZVRpbWUKICBPbmxpbmVIb3VycyAgSW50PyAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX19NRU1CX1NUQVRfX09ubGluX18yMjc1MUY2QyIpCiAgSFdJRCAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1MCkKfQoKbW9kZWwgTWFzdGVyU2tpbGxUcmVlIHsKICBOYW1lICAgICAgICAgICAgIFN0cmluZyAgQGlkKG1hcDogIlBLX01hc3RlclNraWxsVHJlZSIpIEBkYi5WYXJDaGFyKDUwKQogIE1hc3RlckxldmVsICAgICAgSW50PwogIE1hc3RlclBvaW50ICAgICAgSW50PwogIE1hc3RlckV4cGVyaWVuY2UgQmlnSW50PwogIE1hc3RlclNraWxsICAgICAgQnl0ZXM/ICBAZGIuVmFyQmluYXJ5KDE4MCkKfQoKbW9kZWwgTXVDYXN0bGVfREFUQSB7CiAgTUFQX1NWUl9HUk9VUCAgICAgICAgICBJbnQgICAgICBAaWQobWFwOiAiUEtfTXVDYXN0bGVfREFUQSIpCiAgU0lFR0VfU1RBUlRfREFURSAgICAgICBEYXRlVGltZSBAZGIuRGF0ZVRpbWUKICBTSUVHRV9FTkRfREFURSAgICAgICAgIERhdGVUaW1lIEBkYi5EYXRlVGltZQogIFNJRUdFX0dVSUxETElTVF9TRVRURUQgQm9vbGVhbgogIFNJRUdFX0VOREVEICAgICAgICAgICAgQm9vbGVhbiAgQGRlZmF1bHQoZmFsc2UsIG1hcDogIkRGX011Q2FzdGxlX0RhdGFfU0VJR0VfRU5ERUQiKQogIENBU1RMRV9PQ0NVUFkgICAgICAgICAgQm9vbGVhbiAgQGRlZmF1bHQoZmFsc2UsIG1hcDogIkRGX011Q2FzdGxlX0RhdGFfQ0FTVExFX09DQ1VQWSIpCiAgT1dORVJfR1VJTEQgICAgICAgICAgICBTdHJpbmcgICBAZGIuVmFyQ2hhcig4KQogIE1PTkVZICAgICAgICAgICAgICAgICAgRmxvYXQgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfTXVDYXN0bGVfRGF0YV9NT05FWSIpIEBkYi5Nb25leQogIFRBWF9SQVRFX0NIQU9TICAgICAgICAgSW50ICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfTXVDYXN0bGVfRGF0YV9UQVhfUkFURSIpCiAgVEFYX1JBVEVfU1RPUkUgICAgICAgICBJbnQgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9NdUNhc3RsZV9EQVRBX1RBWF9SQVRFX1NUT1JFIikKICBUQVhfSFVOVF9aT05FICAgICAgICAgIEludCAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX011Q2FzdGxlX0RBVEFfVEFYX0hVTlRfWk9ORSIpCn0KCi8vLyBUaGUgdW5kZXJseWluZyB0YWJsZSBkb2VzIG5vdCBjb250YWluIGEgdmFsaWQgdW5pcXVlIGlkZW50aWZpZXIgYW5kIGNhbiB0aGVyZWZvcmUgY3VycmVudGx5IG5vdCBiZSBoYW5kbGVkIGJ5IFByaXNtYSBDbGllbnQuCm1vZGVsIE11Q2FzdGxlX01PTkVZX1NUQVRJU1RJQ1MgewogIE1BUF9TVlJfR1JPVVAgSW50CiAgTE9HX0RBVEUgICAgICBEYXRlVGltZSBAZGIuRGF0ZVRpbWUKICBNT05FWV9DSEFOR0UgIEZsb2F0ICAgIEBkYi5Nb25leQoKICBAQGluZGV4KFtNQVBfU1ZSX0dST1VQXSwgbWFwOiAiSVhfTXVDYXN0bGVfTU9ORVlfU1RBVElTVElDUyIsIGNsdXN0ZXJlZDogdHJ1ZSkKICBAQGluZGV4KFtNQVBfU1ZSX0dST1VQLCBMT0dfREFURV0sIG1hcDogIklYX011Q2FzdGxlX01PTkVZX1NUQVRJU1RJQ1NfTkMiKQogIEBAaWdub3JlCn0KCm1vZGVsIE11Q2FzdGxlX05QQyB7CiAgTUFQX1NWUl9HUk9VUCAgSW50CiAgTlBDX05VTUJFUiAgICAgSW50CiAgTlBDX0lOREVYICAgICAgSW50CiAgTlBDX0RGX0xFVkVMICAgSW50CiAgTlBDX1JHX0xFVkVMICAgSW50CiAgTlBDX01BWEhQICAgICAgSW50CiAgTlBDX0hQICAgICAgICAgSW50CiAgTlBDX1ggICAgICAgICAgSW50ICAgICAgQGRiLlRpbnlJbnQKICBOUENfWSAgICAgICAgICBJbnQgICAgICBAZGIuVGlueUludAogIE5QQ19ESVIgICAgICAgIEludCAgICAgIEBkYi5UaW55SW50CiAgTlBDX0NSRUFURURBVEUgRGF0ZVRpbWUgQGRiLkRhdGVUaW1lCgogIEBAdW5pcXVlKFtNQVBfU1ZSX0dST1VQLCBOUENfTlVNQkVSLCBOUENfSU5ERVhdLCBtYXA6ICJJWF9OUENfU1VCS0VZIikKICBAQGluZGV4KFtNQVBfU1ZSX0dST1VQXSwgbWFwOiAiSVhfTlBDX1BLIiwgY2x1c3RlcmVkOiB0cnVlKQp9Cgptb2RlbCBNdUNhc3RsZV9SRUdfU0lFR0UgewogIE1BUF9TVlJfR1JPVVAgICBJbnQKICBSRUdfU0lFR0VfR1VJTEQgU3RyaW5nIEBkYi5WYXJDaGFyKDgpCiAgUkVHX01BUktTICAgICAgIEludAogIElTX0dJVkVVUCAgICAgICBJbnQgICAgQGRiLlRpbnlJbnQKICBTRVFfTlVNICAgICAgICAgSW50CgogIEBAdW5pcXVlKFtNQVBfU1ZSX0dST1VQLCBSRUdfU0lFR0VfR1VJTERdLCBtYXA6ICJJWF9BVFRBQ0tfR1VJTERfU1VCS0VZIikKICBAQGluZGV4KFtNQVBfU1ZSX0dST1VQXSwgbWFwOiAiSVhfQVRUQUNLX0dVSUxEX0tFWSIsIGNsdXN0ZXJlZDogdHJ1ZSkKfQoKLy8vIFRoZSB1bmRlcmx5aW5nIHRhYmxlIGRvZXMgbm90IGNvbnRhaW4gYSB2YWxpZCB1bmlxdWUgaWRlbnRpZmllciBhbmQgY2FuIHRoZXJlZm9yZSBjdXJyZW50bHkgbm90IGJlIGhhbmRsZWQgYnkgUHJpc21hIENsaWVudC4KbW9kZWwgTXVDYXN0bGVfU0lFR0VfR1VJTERMSVNUIHsKICBNQVBfU1ZSX0dST1VQICBJbnQKICBHVUlMRF9OQU1FICAgICBTdHJpbmcgIEBkYi5WYXJDaGFyKDgpCiAgR1VJTERfSUQgICAgICAgSW50CiAgR1VJTERfSU5WT0xWRUQgQm9vbGVhbgogIEdVSUxEX1NDT1JFICAgIEludAoKICBAQGluZGV4KFtNQVBfU1ZSX0dST1VQXSwgbWFwOiAiSVhfTXVDYXN0bGVfU0lFR0VfR1VJTERMSVNUIiwgY2x1c3RlcmVkOiB0cnVlKQogIEBAaWdub3JlCn0KCi8vLyBUaGUgdW5kZXJseWluZyB0YWJsZSBkb2VzIG5vdCBjb250YWluIGEgdmFsaWQgdW5pcXVlIGlkZW50aWZpZXIgYW5kIGNhbiB0aGVyZWZvcmUgY3VycmVudGx5IG5vdCBiZSBoYW5kbGVkIGJ5IFByaXNtYSBDbGllbnQuCm1vZGVsIE5QQ19SRVNDVUVfSVRFTlMgewogIElEICAgICAgICAgICAgIEludCAgICAgICBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgQWNjb3VudCAgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDEwKQogIEl0ZW1JbmRleCAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9OUENfUkVTQ1VFX0lURU5TX0l0ZW1JbmRleCIpCiAgTGV2ZWwgICAgICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX05QQ19SRVNDVUVfSVRFTlNfTGV2ZWwiKQogIE9wdGlvbjEgICAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9OUENfUkVTQ1VFX0lURU5TX09wdGlvbjEiKQogIE9wdGlvbjIgICAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9OUENfUkVTQ1VFX0lURU5TX09wdGlvbjIiKQogIE9wdGlvbjMgICAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9OUENfUkVTQ1VFX0lURU5TX09wdGlvbjMiKQogIEV4YyAgICAgICAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9OUENfUkVTQ1VFX0lURU5TX0V4YyIpCiAgQW5jaWVudCAgICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX05QQ19SRVNDVUVfSVRFTlNfQW5jaWVudCIpCiAgSm9IICAgICAgICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX05QQ19SRVNDVUVfSVRFTlNfSm9IIikKICBTb2NrQm9udXMgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfTlBDX1JFU0NVRV9JVEVOU19Tb2NrQm9udXMiKQogIFNvY2sxICAgICAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9OUENfUkVTQ1VFX0lURU5TX1NvY2sxIikKICBTb2NrMiAgICAgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfTlBDX1JFU0NVRV9JVEVOU19Tb2NrMiIpCiAgU29jazMgICAgICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX05QQ19SRVNDVUVfSVRFTlNfU29jazMiKQogIFNvY2s0ICAgICAgICAgIEludCAgICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9OUENfUkVTQ1VFX0lURU5TX1NvY2s0IikKICBTb2NrNSAgICAgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfTlBDX1JFU0NVRV9JVEVOU19Tb2NrNSIpCiAgRGVsaXZlcmVkICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX05QQ19SRVNDVUVfSVRFTlNfRGVsaXZlcmVkIikKICBJdGVtVGltZUV4cGlyZSBJbnQgICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfTlBDX1JFU0NVRV9JVEVOU19JdGVtVGltZUV4cGlyZSIpCiAgVGltZUV4cGlyZSAgICAgRGF0ZVRpbWUgIEBkYi5EYXRlVGltZQogIFRpbWVEZWxpdmVyZWQgIERhdGVUaW1lPyBAZGIuRGF0ZVRpbWUKCiAgQEBpZ25vcmUKfQoKbW9kZWwgT3B0aW9uRGF0YSB7CiAgTmFtZSAgICAgICBTdHJpbmcgQGlkKG1hcDogIlBLX09wdGlvbkRhdGEiKSBAZGIuVmFyQ2hhcigxMCkKICBTa2lsbEtleSAgIEJ5dGVzPyBAZGIuQmluYXJ5KDIwKQogIEdhbWVPcHRpb24gSW50PyAgIEBkYi5UaW55SW50CiAgUWtleSAgICAgICBJbnQ/ICAgQGRiLlRpbnlJbnQKICBXa2V5ICAgICAgIEludD8gICBAZGIuVGlueUludAogIEVrZXkgICAgICAgSW50PyAgIEBkYi5UaW55SW50CiAgQ2hhdFdpbmRvdyBJbnQ/ICAgQGRiLlRpbnlJbnQKICBSa2V5ICAgICAgIEludD8gICBAZGIuVGlueUludAogIFFXRVJMZXZlbCAgSW50Pwp9CgovLy8gVGhlIHVuZGVybHlpbmcgdGFibGUgZG9lcyBub3QgY29udGFpbiBhIHZhbGlkIHVuaXF1ZSBpZGVudGlmaWVyIGFuZCBjYW4gdGhlcmVmb3JlIGN1cnJlbnRseSBub3QgYmUgaGFuZGxlZCBieSBQcmlzbWEgQ2xpZW50Lgptb2RlbCBRVUVTVF9TWVNURU0gewogIEFjY291bnRJRCAgICAgICAgICAgU3RyaW5nICBAZGIuVmFyQ2hhcigxMCkKICBOYW1lICAgICAgICAgICAgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMTApCiAgUXVlc3RJZGVudGlmaWNhdGlvbiBJbnQgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX1FVRVNUX1NZU1RFTV9RdWVzdElkZW50aWZpY2F0aW9uIikKICBLaWxscyAgICAgICAgICAgICAgIEludCAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfUVVFU1RfU1lTVEVNX1JlZ2lzdGVyMSIpCiAgS2lsbHNNb25zdGVyMSAgICAgICBJbnQgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX1RhYmxlXzFfUmVnaXN0ZXIxMSIpCiAgS2lsbHNNb25zdGVyMiAgICAgICBJbnQgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX1RhYmxlXzFfUmVnaXN0ZXIxMV8xIikKICBLaWxsc01vbnN0ZXIzICAgICAgIEludCAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfVGFibGVfMV9SZWdpc3RlcjExXzIiKQogIEtpbGxzTW9uc3RlcjQgICAgICAgSW50ICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9UYWJsZV8xX1JlZ2lzdGVyMTFfMyIpCiAgS2lsbHNNb25zdGVyNSAgICAgICBJbnQgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX1RhYmxlXzFfUmVnaXN0ZXIxMV80IikKICBLaWxsc01vbnN0ZXI2ICAgICAgIEludCAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfVGFibGVfMV9SZWdpc3RlcjExXzUiKQogIEtpbGxzTW9uc3RlcjcgICAgICAgSW50ICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9UYWJsZV8xX1JlZ2lzdGVyMTFfNiIpCiAgS2lsbHNNb25zdGVyOCAgICAgICBJbnQgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX1RhYmxlXzFfUmVnaXN0ZXIxMV83IikKICBLaWxsc01vbnN0ZXI5ICAgICAgIEludCAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfVGFibGVfMV9SZWdpc3RlcjExXzgiKQogIEZpbmlzaGVkICAgICAgICAgICAgSW50ICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9RVUVTVF9TWVNURU1fRmluaXNoZWQiKQoKICBAQGlnbm9yZQp9CgovLy8gVGhlIHVuZGVybHlpbmcgdGFibGUgZG9lcyBub3QgY29udGFpbiBhIHZhbGlkIHVuaXF1ZSBpZGVudGlmaWVyIGFuZCBjYW4gdGhlcmVmb3JlIGN1cnJlbnRseSBub3QgYmUgaGFuZGxlZCBieSBQcmlzbWEgQ2xpZW50Lgptb2RlbCBRVUVTVF9TWVNURU1fTlBDIHsKICBBY2NvdW50SUQgICAgICAgICAgIFN0cmluZyAgQGRiLlZhckNoYXIoMTApCiAgTmFtZSAgICAgICAgICAgICAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDEwKQogIFF1ZXN0SWRlbnRpZmljYXRpb24gSW50ICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9RVUVTVF9TWVNURU1fTlBDX1F1ZXN0SWRlbnRpZmljYXRpb24iKQogIEtpbGxzICAgICAgICAgICAgICAgSW50ICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9RVUVTVF9TWVNURU1fTlBDX1JlZ2lzdGVyMSIpCiAgS2lsbHNNb25zdGVyMSAgICAgICBJbnQgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX1FVRVNUX1NZU1RFTV9OUENfS2lsbHNNb25zdGVyMSIpCiAgS2lsbHNNb25zdGVyMiAgICAgICBJbnQgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX1FVRVNUX1NZU1RFTV9OUENfS2lsbHNNb25zdGVyMiIpCiAgS2lsbHNNb25zdGVyMyAgICAgICBJbnQgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX1FVRVNUX1NZU1RFTV9OUENfS2lsbHNNb25zdGVyMyIpCiAgS2lsbHNNb25zdGVyNCAgICAgICBJbnQgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX1FVRVNUX1NZU1RFTV9OUENfS2lsbHNNb25zdGVyNCIpCiAgS2lsbHNNb25zdGVyNSAgICAgICBJbnQgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX1FVRVNUX1NZU1RFTV9OUENfS2lsbHNNb25zdGVyNSIpCiAgS2lsbHNNb25zdGVyNiAgICAgICBJbnQgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX1FVRVNUX1NZU1RFTV9OUENfS2lsbHNNb25zdGVyNiIpCiAgS2lsbHNNb25zdGVyNyAgICAgICBJbnQgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX1FVRVNUX1NZU1RFTV9OUENfS2lsbHNNb25zdGVyNyIpCiAgS2lsbHNNb25zdGVyOCAgICAgICBJbnQgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX1FVRVNUX1NZU1RFTV9OUENfS2lsbHNNb25zdGVyOCIpCiAgS2lsbHNNb25zdGVyOSAgICAgICBJbnQgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX1FVRVNUX1NZU1RFTV9OUENfS2lsbHNNb25zdGVyOSIpCiAgRmluaXNoZWQgICAgICAgICAgICBJbnQgICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX1FVRVNUX1NZU1RFTV9OUENfRmluaXNoZWQiKQoKICBAQGlnbm9yZQp9Cgptb2RlbCBRdWVzdEtpbGxDb3VudCB7CiAgTmFtZSAgICAgICAgICBTdHJpbmcgQGlkKG1hcDogIlBLX1F1ZXN0S2lsbENvdW50IikgQGRiLlZhckNoYXIoMTApCiAgUXVlc3RJbmRleCAgICBJbnQ/CiAgTW9uc3RlckNsYXNzMSBJbnQ/CiAgS2lsbENvdW50MSAgICBJbnQ/CiAgTW9uc3RlckNsYXNzMiBJbnQ/CiAgS2lsbENvdW50MiAgICBJbnQ/CiAgTW9uc3RlckNsYXNzMyBJbnQ/CiAgS2lsbENvdW50MyAgICBJbnQ/CiAgTW9uc3RlckNsYXNzNCBJbnQ/CiAgS2lsbENvdW50NCAgICBJbnQ/CiAgTW9uc3RlckNsYXNzNSBJbnQ/CiAgS2lsbENvdW50NSAgICBJbnQ/Cn0KCm1vZGVsIFF1ZXN0V29ybGQgewogIE5hbWUgICAgICAgICAgIFN0cmluZyBAaWQobWFwOiAiUEtfUXVlc3RXb3JsZCIpIEBkYi5WYXJDaGFyKDEwKQogIFF1ZXN0V29ybGRMaXN0IEJ5dGVzPyBAZGIuVmFyQmluYXJ5KDQwMCkKfQoKbW9kZWwgUmFua2luZ0Jsb29kQ2FzdGxlIHsKICBOYW1lICBTdHJpbmcgQGlkKG1hcDogIlBLX1JhbmtpbmdCbG9vZENhc3RsZSIpIEBkYi5WYXJDaGFyKDEwKQogIFNjb3JlIEludD8KfQoKbW9kZWwgUmFua2luZ0NoYW9zQ2FzdGxlIHsKICBOYW1lICBTdHJpbmcgQGlkKG1hcDogIlBLX1JhbmtpbmdDaGFvc0Nhc3RsZSIpIEBkYi5WYXJDaGFyKDEwKQogIFNjb3JlIEludD8KfQoKbW9kZWwgUmFua2luZ0RldmlsU3F1YXJlIHsKICBOYW1lICBTdHJpbmcgQGlkKG1hcDogIlBLX1JhbmtpbmdEZXZpbFNxdWFyZSIpIEBkYi5WYXJDaGFyKDEwKQogIFNjb3JlIEludD8KfQoKbW9kZWwgUmFua2luZ0R1ZWwgewogIE5hbWUgICAgICBTdHJpbmcgQGlkKG1hcDogIlBLX1JhbmtpbmdEdWVsIikgQGRiLlZhckNoYXIoMTApCiAgV2luU2NvcmUgIEludD8KICBMb3NlU2NvcmUgSW50Pwp9Cgptb2RlbCBSYW5raW5nSWxsdXNpb25UZW1wbGUgewogIE5hbWUgIFN0cmluZyBAaWQobWFwOiAiUEtfUmFua2luZ0lsbHVzaW9uVGVtcGxlIikgQGRiLlZhckNoYXIoMTApCiAgU2NvcmUgSW50Pwp9CgovLy8gVGhlIHVuZGVybHlpbmcgdGFibGUgZG9lcyBub3QgY29udGFpbiBhIHZhbGlkIHVuaXF1ZSBpZGVudGlmaWVyIGFuZCBjYW4gdGhlcmVmb3JlIGN1cnJlbnRseSBub3QgYmUgaGFuZGxlZCBieSBQcmlzbWEgQ2xpZW50Lgptb2RlbCBUUkFERV9YIHsKICBhY2NvdW50ICAgIFN0cmluZyAgICBAZGIuTlZhckNoYXIoMTApCiAgbmFtZSAgICAgICBTdHJpbmcgICAgQGRiLk5WYXJDaGFyKDEwKQogIGl0ZW1zICAgICAgQnl0ZXM/ICAgIEBkYi5WYXJCaW5hcnkoMTkyMCkKICB0YXJnZXRuYW1lIFN0cmluZz8gICBAZGIuTlZhckNoYXIoMTApCiAgc3RhdGUgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfVFJBREVfWF9zdGF0ZSIpCiAgZGF0ZSAgICAgICBEYXRlVGltZT8gQGRiLkRhdGVUaW1lCgogIEBAaWdub3JlCn0KCm1vZGVsIFRfQ0d1aWQgewogIEdVSUQgSW50ICAgIEBpZChtYXA6ICJQS19UX0NHdWlkIikgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIE5hbWUgU3RyaW5nIEBkYi5WYXJDaGFyKDEwKQoKICBAQGluZGV4KFtOYW1lXSwgbWFwOiAiSVhfVF9DR3VpZF9OYW1lIikKfQoKLy8vIFRoZSB1bmRlcmx5aW5nIHRhYmxlIGRvZXMgbm90IGNvbnRhaW4gYSB2YWxpZCB1bmlxdWUgaWRlbnRpZmllciBhbmQgY2FuIHRoZXJlZm9yZSBjdXJyZW50bHkgbm90IGJlIGhhbmRsZWQgYnkgUHJpc21hIENsaWVudC4KbW9kZWwgVF9GcmllbmRMaXN0IHsKICBHVUlEICAgICAgIEludAogIEZyaWVuZEd1aWQgSW50PwogIEZyaWVuZE5hbWUgU3RyaW5nPyBAZGIuVmFyQ2hhcigxMCkKICBEZWwgICAgICAgIEludD8gICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfVF9GcmllbmRMaXN0X0RlbCIpIEBkYi5UaW55SW50CgogIEBAaW5kZXgoW0dVSUQsIEZyaWVuZEd1aWRdLCBtYXA6ICJJWF9UX0ZyaWVuZExpc3QiKQogIEBAaWdub3JlCn0KCm1vZGVsIFRfRnJpZW5kTWFpbCB7CiAgTWVtb0luZGV4ICBJbnQgICAgICBAZGVmYXVsdCgxMCwgbWFwOiAiREZfVF9GcmllbmRNZW1vX01lbW9JbmRleCIpCiAgR1VJRCAgICAgICBJbnQKICBGcmllbmROYW1lIFN0cmluZz8gIEBkYi5WYXJDaGFyKDEwKQogIHdEYXRlICAgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCksIG1hcDogIkRGX1RfRnJpZW5kTWVtb193RGF0ZSIpIEBkYi5TbWFsbERhdGVUaW1lCiAgU3ViamVjdCAgICBTdHJpbmc/ICBAZGIuVmFyQ2hhcig1MCkKICBiUmVhZCAgICAgIEJvb2xlYW4gIEBkZWZhdWx0KGZhbHNlLCBtYXA6ICJERl9UX0ZyaWVuZE1lbW9fTWVtb1JlYWQiKQogIE1lbW8gICAgICAgQnl0ZXM/ICAgQGRiLlZhckJpbmFyeSgxMDAwKQogIFBob3RvICAgICAgQnl0ZXM/ICAgQGRiLkJpbmFyeSgxOCkKICBEaXIgICAgICAgIEludD8gICAgIEBkZWZhdWx0KDAsIG1hcDogIkRGX1RfRnJpZW5kTWVtb19EaXIiKSBAZGIuVGlueUludAogIEFjdCAgICAgICAgSW50PyAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfVF9GcmllbmRNZW1vX0FjdGlvbiIpIEBkYi5UaW55SW50CgogIEBAaWQoW0dVSUQsIE1lbW9JbmRleF0sIG1hcDogIlBLX1RfRnJpZW5kTWVtbyIpCn0KCm1vZGVsIFRfRnJpZW5kTWFpbiB7CiAgR1VJRCAgICAgICAgSW50ICAgIEBpZChtYXA6ICJQS19UX0ZyaWVuZE1haW4iKQogIE5hbWUgICAgICAgIFN0cmluZyBAZGIuVmFyQ2hhcigxMCkKICBGcmllbmRDb3VudCBJbnQ/ICAgQGRiLlRpbnlJbnQKICBNZW1vQ291bnQgICBJbnQ/ICAgQGRlZmF1bHQoMTAsIG1hcDogIkRGX1RfRnJpZW5kTWFpbl9NZW1vQ291bnQiKQogIE1lbW9Ub3RhbCAgIEludD8gICBAZGVmYXVsdCgwLCBtYXA6ICJERl9UX0ZyaWVuZE1haW5fTWVtb1RvdGFsIikKCiAgQEBpbmRleChbTmFtZV0sIG1hcDogIklYX1RfRnJpZW5kTWFpbiIpCn0KCm1vZGVsIFRfUGV0SXRlbV9JbmZvIHsKICBJdGVtU2VyaWFsIEludCAgQGlkKG1hcDogIlBLX1RfUGV0X0luZm8iKQogIFBldF9MZXZlbCAgSW50PyBAZGVmYXVsdCgwLCBtYXA6ICJERl9UX1BldF9JbmZvX1BldF9MZXZlbCIpIEBkYi5TbWFsbEludAogIFBldF9FeHAgICAgSW50PyBAZGVmYXVsdCgwLCBtYXA6ICJERl9UX1BldF9JbmZvX1BldF9FeHAiKQp9CgovLy8gVGhlIHVuZGVybHlpbmcgdGFibGUgZG9lcyBub3QgY29udGFpbiBhIHZhbGlkIHVuaXF1ZSBpZGVudGlmaWVyIGFuZCBjYW4gdGhlcmVmb3JlIGN1cnJlbnRseSBub3QgYmUgaGFuZGxlZCBieSBQcmlzbWEgQ2xpZW50Lgptb2RlbCBUX1dhaXRGcmllbmQgewogIEdVSUQgICAgICAgSW50CiAgRnJpZW5kR3VpZCBJbnQKICBGcmllbmROYW1lIFN0cmluZyBAZGIuVmFyQ2hhcigxMCkKCiAgQEBpbmRleChbR1VJRF0sIG1hcDogIklYX1RfV2FpdEZyaWVuZCIpCiAgQEBpZ25vcmUKfQoKLy8vIFRoZSB1bmRlcmx5aW5nIHRhYmxlIGRvZXMgbm90IGNvbnRhaW4gYSB2YWxpZCB1bmlxdWUgaWRlbnRpZmllciBhbmQgY2FuIHRoZXJlZm9yZSBjdXJyZW50bHkgbm90IGJlIGhhbmRsZWQgYnkgUHJpc21hIENsaWVudC4KbW9kZWwgV1pfQ1dfSU5GTyB7CiAgTUFQX1NWUl9HUk9VUCAgSW50PwogIENSWVdPTEZfT0NDVUZZIEludD8KICBDUllXT0xGX1NUQVRFICBJbnQ/CgogIEBAaWdub3JlCn0KCm1vZGVsIHdhcmVob3VzZSB7CiAgQWNjb3VudElEICAgU3RyaW5nICAgIEBpZChtYXA6ICJQS193YXJlaG91c2UiKSBAZGIuVmFyQ2hhcigxMCkKICBJdGVtcyAgICAgICBCeXRlcz8gICAgQGRiLlZhckJpbmFyeSgzODQwKQogIE1vbmV5ICAgICAgIEludD8gICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl93YXJlaG91c2VfTW9uZXkiKQogIEVuZFVzZURhdGUgIERhdGVUaW1lPyBAZGIuU21hbGxEYXRlVGltZQogIERiVmVyc2lvbiAgIEludD8gICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fd2FyZWhvdXNlX19EYlZlcl9fNjkwNzk3RTYiKSBAZGIuVGlueUludAogIHB3ICAgICAgICAgIEludD8gICAgICBAZGVmYXVsdCgwLCBtYXA6ICJERl9fd2FyZWhvdXNlX19wd19fNjlGQkJDMUYiKSBAZGIuU21hbGxJbnQKICBWYXVsdENvdW50cyBJbnQgICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfX3dhcmVob3VzZV9fVmF1bHRfXzc4NDlEQjc2IikKICBMYXN0VmF1bHRJRCBJbnQgICAgICAgQGRlZmF1bHQoMCwgbWFwOiAiREZfX3dhcmVob3VzZV9fTGFzdFZfXzc5M0RGRkFGIikKfQo=",
  "inlineSchemaHash": "0b782efba5ee1833631f75cc08bd7047c30f2b77120a463db5e9d452cab9b324"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/client",
    "client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MEMB_INFO\":{\"dbName\":null,\"fields\":[{\"name\":\"memb_guid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memb___id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memb__pwd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memb_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sno__numb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addr_info\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addr_deta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tel__numb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phon_numb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mail_addr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fpas_ques\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fpas_answ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"job__code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"appl_days\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modi_days\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"out__days\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"true_days\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mail_chek\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bloc_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ctl1_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AccountLevel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AccountExpireDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"0\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RewardPlayer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChaosPoints\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BlessPoints\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SoulPoints\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LifePoints\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreationPoints\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GuardianPoints\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GemstonePoints\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HarmonyPoints\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LRefiningPoints\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HRefiningPoints\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LockPassword\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AccountCharacter\":{\"dbName\":null,\"fields\":[{\"name\":\"Number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GameID1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GameID2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GameID3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GameID4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GameID5\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GameIDC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MoveCnt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExtClass\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExtWarehouse\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GameID6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GameID7\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GameID8\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GameID9\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GameID10\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MaxCharacter\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":10,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CashShopData\":{\"dbName\":null,\"fields\":[{\"name\":\"AccountID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WCoinC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WCoinP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GoblinPoint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CashShopInventory\":{\"dbName\":null,\"fields\":[{\"name\":\"BaseItemCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MainItemCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AccountID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InventoryType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PackageMainIndex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductBaseIndex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductMainIndex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CoinValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GiftName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GiftText\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CashShopPeriodicItem\":{\"dbName\":null,\"fields\":[{\"name\":\"ItemSerial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Character\":{\"dbName\":null,\"fields\":[{\"name\":\"AccountID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cLevel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LevelUpPoint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Class\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Experience\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Strength\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Dexterity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Vitality\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Energy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Leadership\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Inventory\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MagicList\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Life\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MaxLife\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Mana\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MaxMana\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MaxBP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Shield\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MaxShield\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MapNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MapPosX\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MapPosY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MapDir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PkCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PkLevel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":3,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PkTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CtlCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DbVersion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Quest\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Bytes\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"0\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChatLimitTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FruitPoint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EffectList\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FruitAddPoint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FruitSubPoint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ResetCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MasterResetCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExtInventory\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Resets\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ResetsDay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ResetsWeek\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ResetsMonth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MResets\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MResetsDay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MResetsWeek\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MResetsMonth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PKTotal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PKDay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PKWeek\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PKMonth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HeroTotal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HeroDay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HeroWeek\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HeroMonth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tradewins\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"matamata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duel_total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duel_semanal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duel_mensal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DefaultClassType\":{\"dbName\":null,\"fields\":[{\"name\":\"Class\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LevelUpPoint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Strength\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Dexterity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Vitality\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Energy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Leadership\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Inventory\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MagicList\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Life\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MaxLife\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Mana\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MaxMana\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MapNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MapPosX\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MapPosY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Quest\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DbVersion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EffectList\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EventLeoTheHelper\":{\"dbName\":null,\"fields\":[{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EventSantaClaus\":{\"dbName\":null,\"fields\":[{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GameServerInfo\":{\"dbName\":null,\"fields\":[{\"name\":\"Number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ItemCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ZenCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AceItemCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Gens_Rank\":{\"dbName\":null,\"fields\":[{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Family\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Contribution\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Gens_Reward\":{\"dbName\":null,\"fields\":[{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Rank\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Guild\":{\"dbName\":null,\"fields\":[{\"name\":\"G_Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"G_Mark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"G_Score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"G_Master\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"G_Count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"G_Notice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"G_Type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"G_Rival\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"G_Union\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MemberCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GuildMember\":{\"dbName\":null,\"fields\":[{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"G_Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"G_Level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"G_Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HelperData\":{\"dbName\":null,\"fields\":[{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LuckyCoin\":{\"dbName\":null,\"fields\":[{\"name\":\"AccountID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LuckyCoin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LuckyItem\":{\"dbName\":null,\"fields\":[{\"name\":\"ItemSerial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DurabilitySmall\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MEMB_STAT\":{\"dbName\":null,\"fields\":[{\"name\":\"memb___id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ConnectStat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ServerName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ConnectTM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DisConnectTM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OnlineHours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HWID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MasterSkillTree\":{\"dbName\":null,\"fields\":[{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MasterLevel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MasterPoint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MasterExperience\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MasterSkill\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MuCastle_DATA\":{\"dbName\":null,\"fields\":[{\"name\":\"MAP_SVR_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SIEGE_START_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SIEGE_END_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SIEGE_GUILDLIST_SETTED\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SIEGE_ENDED\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CASTLE_OCCUPY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OWNER_GUILD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MONEY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TAX_RATE_CHAOS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TAX_RATE_STORE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TAX_HUNT_ZONE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MuCastle_NPC\":{\"dbName\":null,\"fields\":[{\"name\":\"MAP_SVR_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NPC_NUMBER\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NPC_INDEX\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NPC_DF_LEVEL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NPC_RG_LEVEL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NPC_MAXHP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NPC_HP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NPC_X\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NPC_Y\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NPC_DIR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NPC_CREATEDATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"MAP_SVR_GROUP\",\"NPC_NUMBER\",\"NPC_INDEX\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"MAP_SVR_GROUP\",\"NPC_NUMBER\",\"NPC_INDEX\"]}],\"isGenerated\":false},\"MuCastle_REG_SIEGE\":{\"dbName\":null,\"fields\":[{\"name\":\"MAP_SVR_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REG_SIEGE_GUILD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REG_MARKS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IS_GIVEUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SEQ_NUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"MAP_SVR_GROUP\",\"REG_SIEGE_GUILD\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"MAP_SVR_GROUP\",\"REG_SIEGE_GUILD\"]}],\"isGenerated\":false},\"OptionData\":{\"dbName\":null,\"fields\":[{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SkillKey\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GameOption\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Qkey\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Wkey\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ekey\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChatWindow\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Rkey\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"QWERLevel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"QuestKillCount\":{\"dbName\":null,\"fields\":[{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"QuestIndex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MonsterClass1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"KillCount1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MonsterClass2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"KillCount2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MonsterClass3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"KillCount3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MonsterClass4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"KillCount4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MonsterClass5\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"KillCount5\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"QuestWorld\":{\"dbName\":null,\"fields\":[{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"QuestWorldList\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RankingBloodCastle\":{\"dbName\":null,\"fields\":[{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RankingChaosCastle\":{\"dbName\":null,\"fields\":[{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RankingDevilSquare\":{\"dbName\":null,\"fields\":[{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RankingDuel\":{\"dbName\":null,\"fields\":[{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WinScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LoseScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RankingIllusionTemple\":{\"dbName\":null,\"fields\":[{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"T_CGuid\":{\"dbName\":null,\"fields\":[{\"name\":\"GUID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"T_FriendMail\":{\"dbName\":null,\"fields\":[{\"name\":\"MemoIndex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":10,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GUID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FriendName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Subject\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bRead\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Memo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Photo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Dir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Act\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"GUID\",\"MemoIndex\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"T_FriendMain\":{\"dbName\":null,\"fields\":[{\"name\":\"GUID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FriendCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MemoCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":10,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MemoTotal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"T_PetItem_Info\":{\"dbName\":null,\"fields\":[{\"name\":\"ItemSerial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Pet_Level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Pet_Exp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"warehouse\":{\"dbName\":null,\"fields\":[{\"name\":\"AccountID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Items\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EndUseDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DbVersion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pw\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VaultCounts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastVaultID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)



const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/client/schema.prisma")

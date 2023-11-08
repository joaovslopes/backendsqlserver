BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[MEMB_INFO] (
    [memb_guid] INT NOT NULL IDENTITY(1,1),
    [memb___id] VARCHAR(10) NOT NULL,
    [memb__pwd] VARCHAR(10) NOT NULL,
    [memb_name] VARCHAR(10) NOT NULL,
    [sno__numb] CHAR(18) NOT NULL,
    [post_code] CHAR(6),
    [addr_info] VARCHAR(50),
    [addr_deta] VARCHAR(50),
    [tel__numb] VARCHAR(20),
    [phon_numb] VARCHAR(15),
    [mail_addr] VARCHAR(50),
    [fpas_ques] VARCHAR(50),
    [fpas_answ] VARCHAR(50),
    [job__code] CHAR(2),
    [appl_days] DATETIME,
    [modi_days] DATETIME,
    [out__days] DATETIME,
    [true_days] DATETIME,
    [mail_chek] CHAR(1) CONSTRAINT [DF_MEMB_INFO_mail_chek] DEFAULT '0',
    [bloc_code] CHAR(1) NOT NULL,
    [ctl1_code] CHAR(1) NOT NULL,
    [AccountLevel] INT NOT NULL CONSTRAINT [DF_MEMB_INFO_AccountLevel] DEFAULT 0,
    [AccountExpireDate] SMALLDATETIME NOT NULL CONSTRAINT [DF__MEMB_INFO__Accou__56E8E7AB] DEFAULT 0,
    [vip] INT NOT NULL CONSTRAINT [DF__MEMB_INFO__vip__57DD0BE4] DEFAULT 0,
    [cash] INT NOT NULL CONSTRAINT [DF__MEMB_INFO__cash__58D1301D] DEFAULT 0,
    [RewardPlayer] INT NOT NULL CONSTRAINT [DF__MEMB_INFO__Rewar__59C55456] DEFAULT 0,
    [ChaosPoints] INT NOT NULL CONSTRAINT [DF__MEMB_INFO__Chaos__5AB9788F] DEFAULT 0,
    [BlessPoints] INT NOT NULL CONSTRAINT [DF__MEMB_INFO__Bless__5BAD9CC8] DEFAULT 0,
    [SoulPoints] INT NOT NULL CONSTRAINT [DF__MEMB_INFO__SoulP__5CA1C101] DEFAULT 0,
    [LifePoints] INT NOT NULL CONSTRAINT [DF__MEMB_INFO__LifeP__5D95E53A] DEFAULT 0,
    [CreationPoints] INT NOT NULL CONSTRAINT [DF__MEMB_INFO__Creat__5E8A0973] DEFAULT 0,
    [GuardianPoints] INT NOT NULL CONSTRAINT [DF__MEMB_INFO__Guard__5F7E2DAC] DEFAULT 0,
    [GemstonePoints] INT NOT NULL CONSTRAINT [DF__MEMB_INFO__Gemst__607251E5] DEFAULT 0,
    [HarmonyPoints] INT NOT NULL CONSTRAINT [DF__MEMB_INFO__Harmo__6166761E] DEFAULT 0,
    [LRefiningPoints] INT NOT NULL CONSTRAINT [DF__MEMB_INFO__LRefi__625A9A57] DEFAULT 0,
    [HRefiningPoints] INT NOT NULL CONSTRAINT [DF__MEMB_INFO__HRefi__634EBE90] DEFAULT 0,
    [LockPassword] INT NOT NULL CONSTRAINT [DF__MEMB_INFO__LockP__0697FACD] DEFAULT 0,
    CONSTRAINT [PK_MEMB_INFO_1] PRIMARY KEY NONCLUSTERED ([memb_guid] DESC)
);

-- CreateTable
CREATE TABLE [dbo].[AccountCharacter] (
    [Number] INT NOT NULL IDENTITY(1,1),
    [Id] VARCHAR(10) NOT NULL,
    [GameID1] VARCHAR(10),
    [GameID2] VARCHAR(10),
    [GameID3] VARCHAR(10),
    [GameID4] VARCHAR(10),
    [GameID5] VARCHAR(10),
    [GameIDC] VARCHAR(10),
    [MoveCnt] TINYINT CONSTRAINT [DF__AccountCh__MoveC__7A3223E8] DEFAULT 0,
    [ExtClass] INT NOT NULL CONSTRAINT [df_AccountCharacter_ExtClass] DEFAULT 0,
    [ExtWarehouse] INT NOT NULL CONSTRAINT [DF__AccountCh__ExtWa__1CBC4616] DEFAULT 0,
    [GameID6] VARCHAR(10),
    [GameID7] VARCHAR(10),
    [GameID8] VARCHAR(10),
    [GameID9] VARCHAR(10),
    [GameID10] VARCHAR(10),
    [MaxCharacter] INT NOT NULL CONSTRAINT [DF__AccountCh__MaxCh__1DB06A4F] DEFAULT 10,
    CONSTRAINT [PK_AccountCharacter] PRIMARY KEY NONCLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[CHAOS_BOX_GENESIS] (
    [Account] NVARCHAR(10) NOT NULL,
    [Name] NVARCHAR(10) NOT NULL,
    [State] INT NOT NULL CONSTRAINT [DF_CHAOS_BOX_GENESIS_State] DEFAULT 0,
    [SelectedKey] INT NOT NULL CONSTRAINT [DF_CHAOS_BOX_GENESIS_SelectedKey] DEFAULT 0,
    [SelectedComb] INT NOT NULL CONSTRAINT [DF_CHAOS_BOX_GENESIS_SelectedComb] DEFAULT 0,
    [Items] VARBINARY(1920),
    [LastUse] DATETIME CONSTRAINT [DF_CHAOS_BOX_GENESIS_LastUse] DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE [dbo].[CashLog] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [UserID] VARCHAR(16),
    [Amount] MONEY,
    [SentDate] SMALLDATETIME CONSTRAINT [DF__CashLog__SentDat__1EA48E88] DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE [dbo].[CashShopData] (
    [AccountID] VARCHAR(10) NOT NULL,
    [WCoinC] INT,
    [WCoinP] INT,
    [GoblinPoint] INT,
    CONSTRAINT [PK_TempCashShop] PRIMARY KEY CLUSTERED ([AccountID])
);

-- CreateTable
CREATE TABLE [dbo].[CashShopInventory] (
    [BaseItemCode] INT NOT NULL IDENTITY(1,1),
    [MainItemCode] INT,
    [AccountID] VARCHAR(10),
    [InventoryType] INT,
    [PackageMainIndex] INT,
    [ProductBaseIndex] INT,
    [ProductMainIndex] INT,
    [CoinValue] FLOAT(53),
    [ProductType] INT,
    [GiftName] VARCHAR(10),
    [GiftText] VARCHAR(200),
    CONSTRAINT [PK_CashShopInventory] PRIMARY KEY CLUSTERED ([BaseItemCode])
);

-- CreateTable
CREATE TABLE [dbo].[CashShopPeriodicItem] (
    [ItemSerial] INT NOT NULL,
    [Time] INT,
    CONSTRAINT [PK_CashShopPeriodicItem] PRIMARY KEY CLUSTERED ([ItemSerial])
);

-- CreateTable
CREATE TABLE [dbo].[Character] (
    [AccountID] VARCHAR(10) NOT NULL,
    [Name] VARCHAR(10) NOT NULL,
    [cLevel] INT CONSTRAINT [DF_Character_cLevel] DEFAULT 1,
    [LevelUpPoint] INT CONSTRAINT [DF_Character_LevelUpPoint] DEFAULT 0,
    [Class] TINYINT,
    [Experience] INT CONSTRAINT [DF_Character_Experience] DEFAULT 0,
    [Strength] INT,
    [Dexterity] INT,
    [Vitality] INT,
    [Energy] INT,
    [Leadership] INT CONSTRAINT [DF__Character__Leade__7A672E12] DEFAULT 0,
    [Inventory] VARBINARY(3984),
    [MagicList] VARBINARY(180),
    [Money] INT CONSTRAINT [DF_Character_Money] DEFAULT 0,
    [Life] REAL,
    [MaxLife] REAL,
    [Mana] REAL,
    [MaxMana] REAL,
    [BP] REAL,
    [MaxBP] REAL,
    [Shield] REAL,
    [MaxShield] REAL,
    [MapNumber] SMALLINT,
    [MapPosX] SMALLINT,
    [MapPosY] SMALLINT,
    [MapDir] TINYINT CONSTRAINT [DF_Character_MapDir] DEFAULT 0,
    [PkCount] INT CONSTRAINT [DF_Character_PkCount] DEFAULT 0,
    [PkLevel] INT CONSTRAINT [DF_Character_PkLevel] DEFAULT 3,
    [PkTime] INT CONSTRAINT [DF_Character_PkTime] DEFAULT 0,
    [MDate] SMALLDATETIME,
    [LDate] SMALLDATETIME,
    [CtlCode] TINYINT CONSTRAINT [DF_Character_CtlCode] DEFAULT 0,
    [DbVersion] TINYINT CONSTRAINT [DF__Character__DbVer__787EE5A0] DEFAULT 0,
    [Quest] VARBINARY(50) CONSTRAINT [DF__Character__Quest__797309D9] DEFAULT 0,
    [ChatLimitTime] SMALLINT CONSTRAINT [DF__Character__ChatL__7B5B524B] DEFAULT 0,
    [FruitPoint] INT CONSTRAINT [DF_Character_FruitPoint] DEFAULT 0,
    [EffectList] VARBINARY(208),
    [FruitAddPoint] INT NOT NULL CONSTRAINT [DF__Character__Fruit__4F67C174] DEFAULT 0,
    [FruitSubPoint] INT NOT NULL CONSTRAINT [DF__Character__Fruit__505BE5AD] DEFAULT 0,
    [ResetCount] INT NOT NULL CONSTRAINT [DF__Character__Reset__515009E6] DEFAULT 0,
    [MasterResetCount] INT NOT NULL CONSTRAINT [DF__Character__Maste__7CF981FA] DEFAULT 0,
    [ExtInventory] INT NOT NULL CONSTRAINT [DF__Character__ExtIn__40E497F3] DEFAULT 0,
    [Resets] INT NOT NULL CONSTRAINT [DF__Character__Reset__3587F3E0] DEFAULT 0,
    [ResetsDay] INT NOT NULL CONSTRAINT [DF__Character__Reset__367C1819] DEFAULT 0,
    [ResetsWeek] INT NOT NULL CONSTRAINT [DF__Character__Reset__37703C52] DEFAULT 0,
    [ResetsMonth] INT NOT NULL CONSTRAINT [DF__Character__Reset__3864608B] DEFAULT 0,
    [MResets] INT NOT NULL CONSTRAINT [DF__Character__MRese__395884C4] DEFAULT 0,
    [MResetsDay] INT NOT NULL CONSTRAINT [DF__Character__MRese__3A4CA8FD] DEFAULT 0,
    [MResetsWeek] INT NOT NULL CONSTRAINT [DF__Character__MRese__3B40CD36] DEFAULT 0,
    [MResetsMonth] INT NOT NULL CONSTRAINT [DF__Character__MRese__3C34F16F] DEFAULT 0,
    [PKTotal] INT NOT NULL CONSTRAINT [DF__Character__PKTot__3D2915A8] DEFAULT 0,
    [PKDay] INT NOT NULL CONSTRAINT [DF__Character__PKDay__3E1D39E1] DEFAULT 0,
    [PKWeek] INT NOT NULL CONSTRAINT [DF__Character__PKWee__3F115E1A] DEFAULT 0,
    [PKMonth] INT NOT NULL CONSTRAINT [DF__Character__PKMon__40058253] DEFAULT 0,
    [HeroTotal] INT NOT NULL CONSTRAINT [DF__Character__HeroT__40F9A68C] DEFAULT 0,
    [HeroDay] INT NOT NULL CONSTRAINT [DF__Character__HeroD__41EDCAC5] DEFAULT 0,
    [HeroWeek] INT NOT NULL CONSTRAINT [DF__Character__HeroW__42E1EEFE] DEFAULT 0,
    [HeroMonth] INT NOT NULL CONSTRAINT [DF__Character__HeroM__43D61337] DEFAULT 0,
    [tradewins] INT NOT NULL CONSTRAINT [DF__Character__trade__44CA3770] DEFAULT 0,
    [matamata] INT NOT NULL CONSTRAINT [DF__Character__matam__45BE5BA9] DEFAULT 0,
    [duel_total] INT NOT NULL CONSTRAINT [DF__Character__duel___46B27FE2] DEFAULT 0,
    [duel_semanal] INT NOT NULL CONSTRAINT [DF__Character__duel___47A6A41B] DEFAULT 0,
    [duel_mensal] INT NOT NULL CONSTRAINT [DF__Character__duel___489AC854] DEFAULT 0,
    CONSTRAINT [PK_Character] PRIMARY KEY NONCLUSTERED ([Name])
);

-- CreateTable
CREATE TABLE [dbo].[DeathSystem] (
    [m_Serial] INT,
    [Deaths] INT
);

-- CreateTable
CREATE TABLE [dbo].[DefaultClassType] (
    [Class] TINYINT NOT NULL,
    [Level] SMALLINT CONSTRAINT [DF__DefaultCl__Level__72910220] DEFAULT 0,
    [LevelUpPoint] SMALLINT CONSTRAINT [DF__DefaultCl__Level__73852659] DEFAULT 0,
    [Strength] SMALLINT,
    [Dexterity] SMALLINT,
    [Vitality] SMALLINT,
    [Energy] SMALLINT,
    [Leadership] SMALLINT CONSTRAINT [DF__DefaultCl__Leade__719CDDE7] DEFAULT 0,
    [Inventory] VARBINARY(3776),
    [MagicList] VARBINARY(180),
    [Life] REAL,
    [MaxLife] REAL,
    [Mana] REAL,
    [MaxMana] REAL,
    [MapNumber] SMALLINT,
    [MapPosX] SMALLINT,
    [MapPosY] SMALLINT,
    [Quest] VARBINARY(50),
    [DbVersion] TINYINT,
    [EffectList] VARBINARY(208),
    CONSTRAINT [PK_DefaultClassType] PRIMARY KEY CLUSTERED ([Class])
);

-- CreateTable
CREATE TABLE [dbo].[EventLeoTheHelper] (
    [Name] VARCHAR(10) NOT NULL,
    [Status] INT,
    CONSTRAINT [PK_EventLeoTheHelper] PRIMARY KEY CLUSTERED ([Name])
);

-- CreateTable
CREATE TABLE [dbo].[EventSantaClaus] (
    [Name] VARCHAR(10) NOT NULL,
    [Status] INT,
    CONSTRAINT [PK_EventSantaClaus] PRIMARY KEY CLUSTERED ([Name])
);

-- CreateTable
CREATE TABLE [dbo].[ExtWarehouse] (
    [AccountID] VARCHAR(10) NOT NULL,
    [Items] VARBINARY(3840),
    [Money] INT,
    [Number] INT
);

-- CreateTable
CREATE TABLE [dbo].[GameServerInfo] (
    [Number] INT NOT NULL CONSTRAINT [DF_GameServerInfo_Number] DEFAULT 0,
    [ItemCount] INT NOT NULL,
    [ZenCount] INT CONSTRAINT [DF_GameServerInfo_ZenCount] DEFAULT 0,
    [AceItemCount] INT,
    CONSTRAINT [PK_GameServerInfo] PRIMARY KEY NONCLUSTERED ([Number])
);

-- CreateTable
CREATE TABLE [dbo].[Gens_Rank] (
    [Name] VARCHAR(10) NOT NULL,
    [Family] INT,
    [Contribution] INT,
    CONSTRAINT [PK_Gens_Rank] PRIMARY KEY CLUSTERED ([Name])
);

-- CreateTable
CREATE TABLE [dbo].[Gens_Reward] (
    [Name] VARCHAR(10) NOT NULL,
    [Rank] INT,
    [Status] INT,
    CONSTRAINT [PK_Gens_Reward] PRIMARY KEY CLUSTERED ([Name])
);

-- CreateTable
CREATE TABLE [dbo].[Guild] (
    [G_Name] VARCHAR(8) NOT NULL,
    [G_Mark] VARBINARY(32),
    [G_Score] INT CONSTRAINT [DF_Guild_G_Score] DEFAULT 0,
    [G_Master] VARCHAR(10),
    [G_Count] INT,
    [G_Notice] VARCHAR(60),
    [Number] INT NOT NULL IDENTITY(1,1),
    [G_Type] INT NOT NULL CONSTRAINT [DF__Guild__G_Type__0D7A0286] DEFAULT 0,
    [G_Rival] INT NOT NULL CONSTRAINT [DF__Guild__G_Rival__0E6E26BF] DEFAULT 0,
    [G_Union] INT NOT NULL CONSTRAINT [DF__Guild__G_Union__0F624AF8] DEFAULT 0,
    [MemberCount] INT CONSTRAINT [DF__Guild__MemberCou__10566F31] DEFAULT 0,
    CONSTRAINT [PK_Guild] PRIMARY KEY CLUSTERED ([G_Name])
);

-- CreateTable
CREATE TABLE [dbo].[GuildMember] (
    [Name] VARCHAR(10) NOT NULL,
    [G_Name] VARCHAR(8) NOT NULL,
    [G_Level] TINYINT,
    [G_Status] TINYINT NOT NULL CONSTRAINT [DF__GuildMemb__G_Sta__01D345B0] DEFAULT 0,
    CONSTRAINT [PK_GuildMember] PRIMARY KEY CLUSTERED ([Name])
);

-- CreateTable
CREATE TABLE [dbo].[HelperData] (
    [Name] VARCHAR(10) NOT NULL,
    [Data] BINARY(256),
    CONSTRAINT [PK_HelperData] PRIMARY KEY CLUSTERED ([Name])
);

-- CreateTable
CREATE TABLE [dbo].[ItemLog] (
    [SEQ] INT NOT NULL IDENTITY(1,1),
    [Acc] VARCHAR(10),
    [Name] VARCHAR(10),
    [ItemCode] VARBINARY(32),
    [SN] INT,
    [iName] VARCHAR(50),
    [iLvl] VARCHAR(50),
    [iSkill] SMALLINT,
    [iLuck] SMALLINT,
    [iExt] VARCHAR(500),
    [iSet] SMALLINT,
    [i380] SMALLINT,
    [iJh] SMALLINT,
    [SentDate] SMALLDATETIME CONSTRAINT [DF__ItemLog__SentDat__540C7B00] DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE [dbo].[LuckyCoin] (
    [AccountID] VARCHAR(10) NOT NULL,
    [LuckyCoin] INT,
    CONSTRAINT [PK_LuckyCoin] PRIMARY KEY CLUSTERED ([AccountID])
);

-- CreateTable
CREATE TABLE [dbo].[LuckyItem] (
    [ItemSerial] INT NOT NULL,
    [DurabilitySmall] INT,
    CONSTRAINT [PK_LuckyItem] PRIMARY KEY CLUSTERED ([ItemSerial])
);

-- CreateTable
CREATE TABLE [dbo].[MEMB_STAT] (
    [memb___id] VARCHAR(10) NOT NULL,
    [ConnectStat] TINYINT,
    [ServerName] VARCHAR(50),
    [IP] VARCHAR(15),
    [ConnectTM] SMALLDATETIME,
    [DisConnectTM] SMALLDATETIME,
    [OnlineHours] INT CONSTRAINT [DF__MEMB_STAT__Onlin__22751F6C] DEFAULT 0,
    [HWID] VARCHAR(50),
    CONSTRAINT [PK_MEMB_STAT] PRIMARY KEY CLUSTERED ([memb___id])
);

-- CreateTable
CREATE TABLE [dbo].[MasterSkillTree] (
    [Name] VARCHAR(50) NOT NULL,
    [MasterLevel] INT,
    [MasterPoint] INT,
    [MasterExperience] BIGINT,
    [MasterSkill] VARBINARY(180),
    CONSTRAINT [PK_MasterSkillTree] PRIMARY KEY CLUSTERED ([Name])
);

-- CreateTable
CREATE TABLE [dbo].[MuCastle_DATA] (
    [MAP_SVR_GROUP] INT NOT NULL,
    [SIEGE_START_DATE] DATETIME NOT NULL,
    [SIEGE_END_DATE] DATETIME NOT NULL,
    [SIEGE_GUILDLIST_SETTED] BIT NOT NULL,
    [SIEGE_ENDED] BIT NOT NULL CONSTRAINT [DF_MuCastle_Data_SEIGE_ENDED] DEFAULT 0,
    [CASTLE_OCCUPY] BIT NOT NULL CONSTRAINT [DF_MuCastle_Data_CASTLE_OCCUPY] DEFAULT 0,
    [OWNER_GUILD] VARCHAR(8) NOT NULL,
    [MONEY] MONEY NOT NULL CONSTRAINT [DF_MuCastle_Data_MONEY] DEFAULT 0,
    [TAX_RATE_CHAOS] INT NOT NULL CONSTRAINT [DF_MuCastle_Data_TAX_RATE] DEFAULT 0,
    [TAX_RATE_STORE] INT NOT NULL CONSTRAINT [DF_MuCastle_DATA_TAX_RATE_STORE] DEFAULT 0,
    [TAX_HUNT_ZONE] INT NOT NULL CONSTRAINT [DF_MuCastle_DATA_TAX_HUNT_ZONE] DEFAULT 0,
    CONSTRAINT [PK_MuCastle_DATA] PRIMARY KEY CLUSTERED ([MAP_SVR_GROUP])
);

-- CreateTable
CREATE TABLE [dbo].[MuCastle_MONEY_STATISTICS] (
    [MAP_SVR_GROUP] INT NOT NULL,
    [LOG_DATE] DATETIME NOT NULL,
    [MONEY_CHANGE] MONEY NOT NULL
);

-- CreateTable
CREATE TABLE [dbo].[MuCastle_NPC] (
    [MAP_SVR_GROUP] INT NOT NULL,
    [NPC_NUMBER] INT NOT NULL,
    [NPC_INDEX] INT NOT NULL,
    [NPC_DF_LEVEL] INT NOT NULL,
    [NPC_RG_LEVEL] INT NOT NULL,
    [NPC_MAXHP] INT NOT NULL,
    [NPC_HP] INT NOT NULL,
    [NPC_X] TINYINT NOT NULL,
    [NPC_Y] TINYINT NOT NULL,
    [NPC_DIR] TINYINT NOT NULL,
    [NPC_CREATEDATE] DATETIME NOT NULL,
    CONSTRAINT [IX_NPC_SUBKEY] UNIQUE NONCLUSTERED ([MAP_SVR_GROUP],[NPC_NUMBER],[NPC_INDEX])
);

-- CreateTable
CREATE TABLE [dbo].[MuCastle_REG_SIEGE] (
    [MAP_SVR_GROUP] INT NOT NULL,
    [REG_SIEGE_GUILD] VARCHAR(8) NOT NULL,
    [REG_MARKS] INT NOT NULL,
    [IS_GIVEUP] TINYINT NOT NULL,
    [SEQ_NUM] INT NOT NULL,
    CONSTRAINT [IX_ATTACK_GUILD_SUBKEY] UNIQUE NONCLUSTERED ([MAP_SVR_GROUP],[REG_SIEGE_GUILD])
);

-- CreateTable
CREATE TABLE [dbo].[MuCastle_SIEGE_GUILDLIST] (
    [MAP_SVR_GROUP] INT NOT NULL,
    [GUILD_NAME] VARCHAR(8) NOT NULL,
    [GUILD_ID] INT NOT NULL,
    [GUILD_INVOLVED] BIT NOT NULL,
    [GUILD_SCORE] INT NOT NULL
);

-- CreateTable
CREATE TABLE [dbo].[NPC_RESCUE_ITENS] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [Account] VARCHAR(10) NOT NULL,
    [ItemIndex] INT NOT NULL CONSTRAINT [DF_NPC_RESCUE_ITENS_ItemIndex] DEFAULT 0,
    [Level] INT NOT NULL CONSTRAINT [DF_NPC_RESCUE_ITENS_Level] DEFAULT 0,
    [Option1] INT NOT NULL CONSTRAINT [DF_NPC_RESCUE_ITENS_Option1] DEFAULT 0,
    [Option2] INT NOT NULL CONSTRAINT [DF_NPC_RESCUE_ITENS_Option2] DEFAULT 0,
    [Option3] INT NOT NULL CONSTRAINT [DF_NPC_RESCUE_ITENS_Option3] DEFAULT 0,
    [Exc] INT NOT NULL CONSTRAINT [DF_NPC_RESCUE_ITENS_Exc] DEFAULT 0,
    [Ancient] INT NOT NULL CONSTRAINT [DF_NPC_RESCUE_ITENS_Ancient] DEFAULT 0,
    [JoH] INT NOT NULL CONSTRAINT [DF_NPC_RESCUE_ITENS_JoH] DEFAULT 0,
    [SockBonus] INT NOT NULL CONSTRAINT [DF_NPC_RESCUE_ITENS_SockBonus] DEFAULT 0,
    [Sock1] INT NOT NULL CONSTRAINT [DF_NPC_RESCUE_ITENS_Sock1] DEFAULT 0,
    [Sock2] INT NOT NULL CONSTRAINT [DF_NPC_RESCUE_ITENS_Sock2] DEFAULT 0,
    [Sock3] INT NOT NULL CONSTRAINT [DF_NPC_RESCUE_ITENS_Sock3] DEFAULT 0,
    [Sock4] INT NOT NULL CONSTRAINT [DF_NPC_RESCUE_ITENS_Sock4] DEFAULT 0,
    [Sock5] INT NOT NULL CONSTRAINT [DF_NPC_RESCUE_ITENS_Sock5] DEFAULT 0,
    [Delivered] INT NOT NULL CONSTRAINT [DF_NPC_RESCUE_ITENS_Delivered] DEFAULT 0,
    [ItemTimeExpire] INT NOT NULL CONSTRAINT [DF_NPC_RESCUE_ITENS_ItemTimeExpire] DEFAULT 0,
    [TimeExpire] DATETIME NOT NULL,
    [TimeDelivered] DATETIME
);

-- CreateTable
CREATE TABLE [dbo].[OptionData] (
    [Name] VARCHAR(10) NOT NULL,
    [SkillKey] BINARY(20),
    [GameOption] TINYINT,
    [Qkey] TINYINT,
    [Wkey] TINYINT,
    [Ekey] TINYINT,
    [ChatWindow] TINYINT,
    [Rkey] TINYINT,
    [QWERLevel] INT,
    CONSTRAINT [PK_OptionData] PRIMARY KEY CLUSTERED ([Name])
);

-- CreateTable
CREATE TABLE [dbo].[QUEST_SYSTEM] (
    [AccountID] VARCHAR(10) NOT NULL,
    [Name] VARCHAR(10),
    [QuestIdentification] INT NOT NULL CONSTRAINT [DF_QUEST_SYSTEM_QuestIdentification] DEFAULT 0,
    [Kills] INT NOT NULL CONSTRAINT [DF_QUEST_SYSTEM_Register1] DEFAULT 0,
    [KillsMonster1] INT NOT NULL CONSTRAINT [DF_Table_1_Register11] DEFAULT 0,
    [KillsMonster2] INT NOT NULL CONSTRAINT [DF_Table_1_Register11_1] DEFAULT 0,
    [KillsMonster3] INT NOT NULL CONSTRAINT [DF_Table_1_Register11_2] DEFAULT 0,
    [KillsMonster4] INT NOT NULL CONSTRAINT [DF_Table_1_Register11_3] DEFAULT 0,
    [KillsMonster5] INT NOT NULL CONSTRAINT [DF_Table_1_Register11_4] DEFAULT 0,
    [KillsMonster6] INT NOT NULL CONSTRAINT [DF_Table_1_Register11_5] DEFAULT 0,
    [KillsMonster7] INT NOT NULL CONSTRAINT [DF_Table_1_Register11_6] DEFAULT 0,
    [KillsMonster8] INT NOT NULL CONSTRAINT [DF_Table_1_Register11_7] DEFAULT 0,
    [KillsMonster9] INT NOT NULL CONSTRAINT [DF_Table_1_Register11_8] DEFAULT 0,
    [Finished] INT NOT NULL CONSTRAINT [DF_QUEST_SYSTEM_Finished] DEFAULT 0
);

-- CreateTable
CREATE TABLE [dbo].[QUEST_SYSTEM_NPC] (
    [AccountID] VARCHAR(10) NOT NULL,
    [Name] VARCHAR(10),
    [QuestIdentification] INT NOT NULL CONSTRAINT [DF_QUEST_SYSTEM_NPC_QuestIdentification] DEFAULT 0,
    [Kills] INT NOT NULL CONSTRAINT [DF_QUEST_SYSTEM_NPC_Register1] DEFAULT 0,
    [KillsMonster1] INT NOT NULL CONSTRAINT [DF_QUEST_SYSTEM_NPC_KillsMonster1] DEFAULT 0,
    [KillsMonster2] INT NOT NULL CONSTRAINT [DF_QUEST_SYSTEM_NPC_KillsMonster2] DEFAULT 0,
    [KillsMonster3] INT NOT NULL CONSTRAINT [DF_QUEST_SYSTEM_NPC_KillsMonster3] DEFAULT 0,
    [KillsMonster4] INT NOT NULL CONSTRAINT [DF_QUEST_SYSTEM_NPC_KillsMonster4] DEFAULT 0,
    [KillsMonster5] INT NOT NULL CONSTRAINT [DF_QUEST_SYSTEM_NPC_KillsMonster5] DEFAULT 0,
    [KillsMonster6] INT NOT NULL CONSTRAINT [DF_QUEST_SYSTEM_NPC_KillsMonster6] DEFAULT 0,
    [KillsMonster7] INT NOT NULL CONSTRAINT [DF_QUEST_SYSTEM_NPC_KillsMonster7] DEFAULT 0,
    [KillsMonster8] INT NOT NULL CONSTRAINT [DF_QUEST_SYSTEM_NPC_KillsMonster8] DEFAULT 0,
    [KillsMonster9] INT NOT NULL CONSTRAINT [DF_QUEST_SYSTEM_NPC_KillsMonster9] DEFAULT 0,
    [Finished] INT NOT NULL CONSTRAINT [DF_QUEST_SYSTEM_NPC_Finished] DEFAULT 0
);

-- CreateTable
CREATE TABLE [dbo].[QuestKillCount] (
    [Name] VARCHAR(10) NOT NULL,
    [QuestIndex] INT,
    [MonsterClass1] INT,
    [KillCount1] INT,
    [MonsterClass2] INT,
    [KillCount2] INT,
    [MonsterClass3] INT,
    [KillCount3] INT,
    [MonsterClass4] INT,
    [KillCount4] INT,
    [MonsterClass5] INT,
    [KillCount5] INT,
    CONSTRAINT [PK_QuestKillCount] PRIMARY KEY CLUSTERED ([Name])
);

-- CreateTable
CREATE TABLE [dbo].[QuestWorld] (
    [Name] VARCHAR(10) NOT NULL,
    [QuestWorldList] VARBINARY(400),
    CONSTRAINT [PK_QuestWorld] PRIMARY KEY CLUSTERED ([Name])
);

-- CreateTable
CREATE TABLE [dbo].[RankingBloodCastle] (
    [Name] VARCHAR(10) NOT NULL,
    [Score] INT,
    CONSTRAINT [PK_RankingBloodCastle] PRIMARY KEY CLUSTERED ([Name])
);

-- CreateTable
CREATE TABLE [dbo].[RankingChaosCastle] (
    [Name] VARCHAR(10) NOT NULL,
    [Score] INT,
    CONSTRAINT [PK_RankingChaosCastle] PRIMARY KEY CLUSTERED ([Name])
);

-- CreateTable
CREATE TABLE [dbo].[RankingDevilSquare] (
    [Name] VARCHAR(10) NOT NULL,
    [Score] INT,
    CONSTRAINT [PK_RankingDevilSquare] PRIMARY KEY CLUSTERED ([Name])
);

-- CreateTable
CREATE TABLE [dbo].[RankingDuel] (
    [Name] VARCHAR(10) NOT NULL,
    [WinScore] INT,
    [LoseScore] INT,
    CONSTRAINT [PK_RankingDuel] PRIMARY KEY CLUSTERED ([Name])
);

-- CreateTable
CREATE TABLE [dbo].[RankingIllusionTemple] (
    [Name] VARCHAR(10) NOT NULL,
    [Score] INT,
    CONSTRAINT [PK_RankingIllusionTemple] PRIMARY KEY CLUSTERED ([Name])
);

-- CreateTable
CREATE TABLE [dbo].[TRADE_X] (
    [account] NVARCHAR(10) NOT NULL,
    [name] NVARCHAR(10) NOT NULL,
    [items] VARBINARY(1920),
    [targetname] NVARCHAR(10),
    [state] INT NOT NULL CONSTRAINT [DF_TRADE_X_state] DEFAULT 0,
    [date] DATETIME
);

-- CreateTable
CREATE TABLE [dbo].[T_CGuid] (
    [GUID] INT NOT NULL IDENTITY(1,1),
    [Name] VARCHAR(10) NOT NULL,
    CONSTRAINT [PK_T_CGuid] PRIMARY KEY CLUSTERED ([GUID])
);

-- CreateTable
CREATE TABLE [dbo].[T_FriendList] (
    [GUID] INT NOT NULL,
    [FriendGuid] INT,
    [FriendName] VARCHAR(10),
    [Del] TINYINT CONSTRAINT [DF_T_FriendList_Del] DEFAULT 0
);

-- CreateTable
CREATE TABLE [dbo].[T_FriendMail] (
    [MemoIndex] INT NOT NULL CONSTRAINT [DF_T_FriendMemo_MemoIndex] DEFAULT 10,
    [GUID] INT NOT NULL,
    [FriendName] VARCHAR(10),
    [wDate] SMALLDATETIME NOT NULL CONSTRAINT [DF_T_FriendMemo_wDate] DEFAULT CURRENT_TIMESTAMP,
    [Subject] VARCHAR(50),
    [bRead] BIT NOT NULL CONSTRAINT [DF_T_FriendMemo_MemoRead] DEFAULT 0,
    [Memo] VARBINARY(1000),
    [Photo] BINARY(18),
    [Dir] TINYINT CONSTRAINT [DF_T_FriendMemo_Dir] DEFAULT 0,
    [Act] TINYINT CONSTRAINT [DF_T_FriendMemo_Action] DEFAULT 0,
    CONSTRAINT [PK_T_FriendMemo] PRIMARY KEY CLUSTERED ([GUID],[MemoIndex])
);

-- CreateTable
CREATE TABLE [dbo].[T_FriendMain] (
    [GUID] INT NOT NULL,
    [Name] VARCHAR(10) NOT NULL,
    [FriendCount] TINYINT,
    [MemoCount] INT CONSTRAINT [DF_T_FriendMain_MemoCount] DEFAULT 10,
    [MemoTotal] INT CONSTRAINT [DF_T_FriendMain_MemoTotal] DEFAULT 0,
    CONSTRAINT [PK_T_FriendMain] PRIMARY KEY CLUSTERED ([GUID])
);

-- CreateTable
CREATE TABLE [dbo].[T_PetItem_Info] (
    [ItemSerial] INT NOT NULL,
    [Pet_Level] SMALLINT CONSTRAINT [DF_T_Pet_Info_Pet_Level] DEFAULT 0,
    [Pet_Exp] INT CONSTRAINT [DF_T_Pet_Info_Pet_Exp] DEFAULT 0,
    CONSTRAINT [PK_T_Pet_Info] PRIMARY KEY CLUSTERED ([ItemSerial])
);

-- CreateTable
CREATE TABLE [dbo].[T_WaitFriend] (
    [GUID] INT NOT NULL,
    [FriendGuid] INT NOT NULL,
    [FriendName] VARCHAR(10) NOT NULL
);

-- CreateTable
CREATE TABLE [dbo].[WZ_CW_INFO] (
    [MAP_SVR_GROUP] INT,
    [CRYWOLF_OCCUFY] INT,
    [CRYWOLF_STATE] INT
);

-- CreateTable
CREATE TABLE [dbo].[warehouse] (
    [AccountID] VARCHAR(10) NOT NULL,
    [Items] VARBINARY(3840),
    [Money] INT CONSTRAINT [DF_warehouse_Money] DEFAULT 0,
    [EndUseDate] SMALLDATETIME,
    [DbVersion] TINYINT CONSTRAINT [DF__warehouse__DbVer__690797E6] DEFAULT 0,
    [pw] SMALLINT CONSTRAINT [DF__warehouse__pw__69FBBC1F] DEFAULT 0,
    [VaultCounts] INT NOT NULL CONSTRAINT [DF__warehouse__Vault__7849DB76] DEFAULT 0,
    [LastVaultID] INT NOT NULL CONSTRAINT [DF__warehouse__LastV__793DFFAF] DEFAULT 0,
    CONSTRAINT [PK_warehouse] PRIMARY KEY CLUSTERED ([AccountID])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IX_MEMB_DETAIL] ON [dbo].[MEMB_INFO]([sno__numb] DESC, [memb_name] DESC);

-- CreateIndex
CREATE CLUSTERED INDEX [IX_MEMB_INFO_1] ON [dbo].[MEMB_INFO]([memb___id] DESC);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IDX_GUILD_G_RIVAL] ON [dbo].[Guild]([G_Rival]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IDX_GUILD_G_UNION] ON [dbo].[Guild]([G_Union]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IDX_GUILD_NUMBER] ON [dbo].[Guild]([Number]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IX_GuildMember] ON [dbo].[GuildMember]([G_Name]);

-- CreateIndex
CREATE CLUSTERED INDEX [IX_MuCastle_MONEY_STATISTICS] ON [dbo].[MuCastle_MONEY_STATISTICS]([MAP_SVR_GROUP]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IX_MuCastle_MONEY_STATISTICS_NC] ON [dbo].[MuCastle_MONEY_STATISTICS]([MAP_SVR_GROUP], [LOG_DATE]);

-- CreateIndex
CREATE CLUSTERED INDEX [IX_NPC_PK] ON [dbo].[MuCastle_NPC]([MAP_SVR_GROUP]);

-- CreateIndex
CREATE CLUSTERED INDEX [IX_ATTACK_GUILD_KEY] ON [dbo].[MuCastle_REG_SIEGE]([MAP_SVR_GROUP]);

-- CreateIndex
CREATE CLUSTERED INDEX [IX_MuCastle_SIEGE_GUILDLIST] ON [dbo].[MuCastle_SIEGE_GUILDLIST]([MAP_SVR_GROUP]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IX_T_CGuid_Name] ON [dbo].[T_CGuid]([Name]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IX_T_FriendList] ON [dbo].[T_FriendList]([GUID], [FriendGuid]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IX_T_FriendMain] ON [dbo].[T_FriendMain]([Name]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IX_T_WaitFriend] ON [dbo].[T_WaitFriend]([GUID]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

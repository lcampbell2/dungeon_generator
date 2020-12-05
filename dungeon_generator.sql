--
-- PostgreSQL database dump
--

-- Dumped from database version 10.15 (Ubuntu 10.15-1.pgdg18.04+1)
-- Dumped by pg_dump version 10.15 (Ubuntu 10.15-1.pgdg18.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: bosses; Type: TABLE; Schema: public; Owner: dungeonmaster
--

CREATE TABLE public.bosses (
    boss_id integer NOT NULL,
    name character varying(128),
    description character varying(512),
    strength_id integer,
    monster_id integer,
    treasure_id integer
);


ALTER TABLE public.bosses OWNER TO dungeonmaster;

--
-- Name: bosses_boss_id_seq; Type: SEQUENCE; Schema: public; Owner: dungeonmaster
--

CREATE SEQUENCE public.bosses_boss_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bosses_boss_id_seq OWNER TO dungeonmaster;

--
-- Name: bosses_boss_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dungeonmaster
--

ALTER SEQUENCE public.bosses_boss_id_seq OWNED BY public.bosses.boss_id;


--
-- Name: monsters; Type: TABLE; Schema: public; Owner: dungeonmaster
--

CREATE TABLE public.monsters (
    monster_id integer NOT NULL,
    name character varying(128),
    description character varying(512),
    strength_id integer,
    treasure_id integer
);


ALTER TABLE public.monsters OWNER TO dungeonmaster;

--
-- Name: monsters_monster_id_seq; Type: SEQUENCE; Schema: public; Owner: dungeonmaster
--

CREATE SEQUENCE public.monsters_monster_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.monsters_monster_id_seq OWNER TO dungeonmaster;

--
-- Name: monsters_monster_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dungeonmaster
--

ALTER SEQUENCE public.monsters_monster_id_seq OWNED BY public.monsters.monster_id;


--
-- Name: puzzles; Type: TABLE; Schema: public; Owner: dungeonmaster
--

CREATE TABLE public.puzzles (
    puzzle_id integer NOT NULL,
    name character varying(128),
    description character varying(1024),
    solution character varying(512),
    treasure_id integer,
    trap_id integer
);


ALTER TABLE public.puzzles OWNER TO dungeonmaster;

--
-- Name: puzzles_puzzle_id_seq; Type: SEQUENCE; Schema: public; Owner: dungeonmaster
--

CREATE SEQUENCE public.puzzles_puzzle_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.puzzles_puzzle_id_seq OWNER TO dungeonmaster;

--
-- Name: puzzles_puzzle_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dungeonmaster
--

ALTER SEQUENCE public.puzzles_puzzle_id_seq OWNED BY public.puzzles.puzzle_id;


--
-- Name: strengths; Type: TABLE; Schema: public; Owner: dungeonmaster
--

CREATE TABLE public.strengths (
    strength_id integer NOT NULL,
    name character varying(128),
    weakness_id integer
);


ALTER TABLE public.strengths OWNER TO dungeonmaster;

--
-- Name: strengths_strength_id_seq; Type: SEQUENCE; Schema: public; Owner: dungeonmaster
--

CREATE SEQUENCE public.strengths_strength_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.strengths_strength_id_seq OWNER TO dungeonmaster;

--
-- Name: strengths_strength_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dungeonmaster
--

ALTER SEQUENCE public.strengths_strength_id_seq OWNED BY public.strengths.strength_id;


--
-- Name: traps; Type: TABLE; Schema: public; Owner: dungeonmaster
--

CREATE TABLE public.traps (
    trap_id integer NOT NULL,
    name character varying(128),
    description character varying(512),
    treasure_id integer
);


ALTER TABLE public.traps OWNER TO dungeonmaster;

--
-- Name: traps_trap_id_seq; Type: SEQUENCE; Schema: public; Owner: dungeonmaster
--

CREATE SEQUENCE public.traps_trap_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.traps_trap_id_seq OWNER TO dungeonmaster;

--
-- Name: traps_trap_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dungeonmaster
--

ALTER SEQUENCE public.traps_trap_id_seq OWNED BY public.traps.trap_id;


--
-- Name: treasures; Type: TABLE; Schema: public; Owner: dungeonmaster
--

CREATE TABLE public.treasures (
    treasure_id integer NOT NULL,
    name character varying(128),
    description character varying(512),
    value integer,
    is_magic boolean
);


ALTER TABLE public.treasures OWNER TO dungeonmaster;

--
-- Name: treasures_treasure_id_seq; Type: SEQUENCE; Schema: public; Owner: dungeonmaster
--

CREATE SEQUENCE public.treasures_treasure_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.treasures_treasure_id_seq OWNER TO dungeonmaster;

--
-- Name: treasures_treasure_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dungeonmaster
--

ALTER SEQUENCE public.treasures_treasure_id_seq OWNED BY public.treasures.treasure_id;


--
-- Name: weaknesses; Type: TABLE; Schema: public; Owner: dungeonmaster
--

CREATE TABLE public.weaknesses (
    weakness_id integer NOT NULL,
    name character varying(128)
);


ALTER TABLE public.weaknesses OWNER TO dungeonmaster;

--
-- Name: weaknesses_weakness_id_seq; Type: SEQUENCE; Schema: public; Owner: dungeonmaster
--

CREATE SEQUENCE public.weaknesses_weakness_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.weaknesses_weakness_id_seq OWNER TO dungeonmaster;

--
-- Name: weaknesses_weakness_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dungeonmaster
--

ALTER SEQUENCE public.weaknesses_weakness_id_seq OWNED BY public.weaknesses.weakness_id;


--
-- Name: bosses boss_id; Type: DEFAULT; Schema: public; Owner: dungeonmaster
--

ALTER TABLE ONLY public.bosses ALTER COLUMN boss_id SET DEFAULT nextval('public.bosses_boss_id_seq'::regclass);


--
-- Name: monsters monster_id; Type: DEFAULT; Schema: public; Owner: dungeonmaster
--

ALTER TABLE ONLY public.monsters ALTER COLUMN monster_id SET DEFAULT nextval('public.monsters_monster_id_seq'::regclass);


--
-- Name: puzzles puzzle_id; Type: DEFAULT; Schema: public; Owner: dungeonmaster
--

ALTER TABLE ONLY public.puzzles ALTER COLUMN puzzle_id SET DEFAULT nextval('public.puzzles_puzzle_id_seq'::regclass);


--
-- Name: strengths strength_id; Type: DEFAULT; Schema: public; Owner: dungeonmaster
--

ALTER TABLE ONLY public.strengths ALTER COLUMN strength_id SET DEFAULT nextval('public.strengths_strength_id_seq'::regclass);


--
-- Name: traps trap_id; Type: DEFAULT; Schema: public; Owner: dungeonmaster
--

ALTER TABLE ONLY public.traps ALTER COLUMN trap_id SET DEFAULT nextval('public.traps_trap_id_seq'::regclass);


--
-- Name: treasures treasure_id; Type: DEFAULT; Schema: public; Owner: dungeonmaster
--

ALTER TABLE ONLY public.treasures ALTER COLUMN treasure_id SET DEFAULT nextval('public.treasures_treasure_id_seq'::regclass);


--
-- Name: weaknesses weakness_id; Type: DEFAULT; Schema: public; Owner: dungeonmaster
--

ALTER TABLE ONLY public.weaknesses ALTER COLUMN weakness_id SET DEFAULT nextval('public.weaknesses_weakness_id_seq'::regclass);


--
-- Data for Name: bosses; Type: TABLE DATA; Schema: public; Owner: dungeonmaster
--

COPY public.bosses (boss_id, name, description, strength_id, monster_id, treasure_id) FROM stdin;
1	Tiamat the Dragon Queen	A supremely strong and powerful 5-headed draconic goddess	7	4	6
2	K'varn the Beholder	A crafty being of repugnant evil. Aim for the eye!	3	9	5
3	Hekaton, King of Giants	The Storm King has come to stomp out the weak	9	5	4
4	Vecna, the Ascended	An ancient lich transcended to godhood	6	7	9
5	The Basilisk	Big ol' snakey boi that'll turn ya to stone	10	4	8
6	James McCree, Legend of the West	It's high noon	8	8	19
7	Xondreas the Lizard Queen	Now that you've arrived, it's finally snack time!	13	11	16
8	Veldrin Desprahel, Drow Archmage	Come to reap the light for their people	14	19	22
9	Yova the Silent, Hobgoblin Warlord	Only speaks to who they deem worthy, so not a lot of people	11	12	21
10	Garrosh Hellscream, Orc War Chief	Lok'tar Ogar!	2	9	18
11	Flogg Manbreaker, Bugbear Chief	Taking a bit too much pleasure from his work	15	6	7
12	Strahd von Zarovich	Vampire lord of Barovia	12	15	4
\.


--
-- Data for Name: monsters; Type: TABLE DATA; Schema: public; Owner: dungeonmaster
--

COPY public.monsters (monster_id, name, description, strength_id, treasure_id) FROM stdin;
1	Orc	Big, dumb, and looking to put meat back on the menu	2	7
2	Owlbear	Part owl, part bear, all mean	2	13
3	Gelatinous Cube	Cliché, but classic	5	20
4	Spooky Scary Skeletons	Send shivers down your spine, don't know why but you feel like dancing	4	1
5	Fire Giant	Really big, really hot (thermally)	1	3
6	Dire Wolf	The North Remembers	2	12
7	Shadow Demon	The stuff of nightmares	4	14
8	Awakened Shrub	Didn't get enough beauty photosynthesis	3	2
9	Giant Enemy Crab	They always pop up in the most realistic settings	8	16
10	Vampire	Dracula's 2nd cosuins	7	17
11	Kobold	They trashiest of the trash mobs	7	7
12	Goblin	Everyone's first level 1 encounter	11	21
13	Drow Elf	The Ones Who Went Below	13	14
14	Duergar	Dwarves that you wouldn't invite to a party	12	18
15	Werewolf	Mouth is alive, with juices like wine	16	15
16	Yuan-ti	It's like the gods made a slider that went from human to snake and closed their eyes	15	10
17	Druid	Dangerous hippies	14	13
18	Aarakocra	Bird people! Bird People!	13	11
19	Undead Kinght	Taking care of unfinished business from their first life	2	1
\.


--
-- Data for Name: puzzles; Type: TABLE DATA; Schema: public; Owner: dungeonmaster
--

COPY public.puzzles (puzzle_id, name, description, solution, treasure_id, trap_id) FROM stdin;
1	Elven Tic Tac Toe	Different enough from our version that there's a manual	Defeat the ancient elven ghost in this game you've never played before	14	2
2	Bobbing for Giant's Toes	Gross, but self descriptive	Better than dying in a dungeon	15	6
3	Giant Chess	Pieces are the size of you!	Same thing, but a total pain to push around	9	1
4	Musical Chairs	A ring of 12 chairs are in front of a door with sheet music etched into it. Each chairs echoes a different tone throughout the chamber.	Playing the piece of music with the chairs unlocks the way forward	19	8
5	Which Key?	There's a door with a large, unusual keyhole. The room is filled with keys and a handful of random objects. All the keys but the proper one are coated in poison	The correct key is a wine bottle strewn amongst the room	7	7
6	Electric Feel	Two electrified handles are attached to opposite sides of a 30-foot chamber.	The characters need to form a conductive link to power the door and get it to open.	12	4
7	Mirror Image	There is a mirror on the wall and anyone who looks in it sees a version of themselves, only with a sneaky, mischievous smile on their face. The mirror image is also holding a small statue of a triceratops. The mirror is keyed to a door, chest, or some other item that needs to be opened. Somewhere hidden in the room is an identical statue of the triceratops.	If someone finds the statue and stands in front of the mirror and holds the statue in the same position as their reflection in the mirror, the item the mirror is keyed to opens.	2	3
8	Root of the Problem	There is a tree grown and twisted that looks oddly like a warrior holding a spear. The spear tip is pointing to a certain point on the ground where archaeological tools, including several shovels, are stabbed into the ground. Buried six feet under the ground at that spot is a chest containing a golden statue of an octopus of great value. The octopus statue holds shovels in each tentacle. Carved into the tree are the words “hang in there.” (This hint is a red herring.) Further along in the adventure the party will encounter golden tentacles covering a door and blocking the way forward. In the middle of the tentacles is a depression in which the golden octopus statue fits.	Placing the statue there causes the tentacles to retract and open the way forward.	10	5
9	Long Distance Statues	In two different places in the Dungeon there should a room of statues, and another room with a door covered in symbols. The statues should correlate to the symbols, and they must be aligned in the statue room to match the design the door displays.	Move the statues in one room to the appropriate spots, and it will unlock the other room's door.	8	10
10	The Count Down	The players stand in a room, furnished with thematic objects of the DMs choice, the more well described the better. Symbols are spread across the head of the door in front of them, there are anywhere between 10-30 symbols. In the center of the room, there is a pedestal with some form of switch.	The players will activate the switch, and the room will begin to do something ominous as the symbols on the door begin to glow one per second. These symbols are like a countdown as they reach the end of the 10-30 symbols, the door will just open. Nothing happens, it just opens, the trick is to make the players believe something will happen.	7	9
\.


--
-- Data for Name: strengths; Type: TABLE DATA; Schema: public; Owner: dungeonmaster
--

COPY public.strengths (strength_id, name, weakness_id) FROM stdin;
1	Being literally on fire	3
2	Being super buff	5
3	Omniscience	6
4	Demonic powers	1
5	Being made of jello	4
6	Force Lightning	7
7	Always chewing 5 Gum	2
8	Super Confidence	9
9	Being able to play 'Wonderwall' really well	10
10	Garlic breath	8
11	Night Vision	11
12	Telekinesis	12
13	Lightning speed	13
14	A really active imagination	14
15	Killer sax solos	15
16	Pack tactics	16
\.


--
-- Data for Name: traps; Type: TABLE DATA; Schema: public; Owner: dungeonmaster
--

COPY public.traps (trap_id, name, description, treasure_id) FROM stdin;
1	Spike Pit	Watch your step, or you might poke your eye out	10
2	Poison Gas	Hope you've got your mask	8
3	Rolling Boulder	*Queue John Williams*	11
4	Bagpipe Music	And the room's big enough for the echo to go on and on and on...	18
5	Mimic Chest	Is this chest supposed to have teeth?	4
6	Giant Swinging Axes	You think they sharpen these often?	3
7	Sand-filled Room	No, you won't turn into Sandman	17
8	Walls Closing In	Nice going, Shortround	16
9	Growing Vines	Mother Nature taking it back	1
10	Lightning Runes	Someone should've been more careful when placing these!	13
\.


--
-- Data for Name: treasures; Type: TABLE DATA; Schema: public; Owner: dungeonmaster
--

COPY public.treasures (treasure_id, name, description, value, is_magic) FROM stdin;
1	Gloves of Warmth	Fluffy on the inside!	22	f
2	Javelin of Lightning	Zues' preferred olympic event	299	t
3	Potion of Fire Breath	Featured on Hot Ones	96	t
4	A big ol' pile of gold	Like, a LOT of gold	3629	f
5	The Arkenstone	I mean it's cool, but it isn't the Arken- HOLY COW	5000	f
6	Vorpal Sword	What the heck is a Vorpal?	5001	t
7	Rubbish	One person's trash CAN be another's treasure, but not in this case	1	f
8	Garlic Bread	Buttery, garlicy, deliciousness!	4	f
9	Canon Arm of the Mega Man	Pretty high tech! Best used for jumping and shooting	559	f
10	Cloak of the Bat	*Queue Danny Elfman*	265	t
11	Red Converse of Speed	Gotta go fast!	89	f
12	Animated Shield	Zany to the max, so just sit back and relax, you'll laugh till you collapse	578	t
13	Staff of Flowers	This will make you real popular at the next Burning Man	199	t
14	X-ray Specs	Straight from the back of a comic book!	16	f
15	Mask of the Plague	Topical!	8	f
16	Sword of Sharpness	Gonna need stitches just from looking at it!	366	t
17	Diamond Pickaxe	A Notch above the rest!	428	f
18	Dwarven Jewels	I mean they're cool, but they aren't the Arkenstone	788	f
19	Super Dope Hat	Hella fresh, ya feel me? Can be worn forwards, backwards, or sideways	12	t
20	Jello Snack Pack	4 different flavours!	4	t
21	Pouch of gold	Won't throw you off balance, but it's better than rubbish	68	f
22	Spell scrolls	Parchment weaving ancient magic runes into reality with a word	101	t
\.


--
-- Data for Name: weaknesses; Type: TABLE DATA; Schema: public; Owner: dungeonmaster
--

COPY public.weaknesses (weakness_id, name) FROM stdin;
1	Unfathomable kindness
2	A really big sword
3	IBS
4	Very tasty
5	Try not to laugh compilations
6	Doesn't get inside jokes
7	Gets stressed over the housing market
8	Losing their contact lenses
9	Just kinda lazy
10	Hates bagpipe music
11	Bright light
12	Headshots
13	Banana peels
14	Easily distracted
15	Sharp things
16	SIlver bullets (or like a fork or something)
\.


--
-- Name: bosses_boss_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dungeonmaster
--

SELECT pg_catalog.setval('public.bosses_boss_id_seq', 12, true);


--
-- Name: monsters_monster_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dungeonmaster
--

SELECT pg_catalog.setval('public.monsters_monster_id_seq', 19, true);


--
-- Name: puzzles_puzzle_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dungeonmaster
--

SELECT pg_catalog.setval('public.puzzles_puzzle_id_seq', 10, true);


--
-- Name: strengths_strength_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dungeonmaster
--

SELECT pg_catalog.setval('public.strengths_strength_id_seq', 16, true);


--
-- Name: traps_trap_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dungeonmaster
--

SELECT pg_catalog.setval('public.traps_trap_id_seq', 10, true);


--
-- Name: treasures_treasure_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dungeonmaster
--

SELECT pg_catalog.setval('public.treasures_treasure_id_seq', 22, true);


--
-- Name: weaknesses_weakness_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dungeonmaster
--

SELECT pg_catalog.setval('public.weaknesses_weakness_id_seq', 16, true);


--
-- Name: bosses bosses_pkey; Type: CONSTRAINT; Schema: public; Owner: dungeonmaster
--

ALTER TABLE ONLY public.bosses
    ADD CONSTRAINT bosses_pkey PRIMARY KEY (boss_id);


--
-- Name: monsters monsters_pkey; Type: CONSTRAINT; Schema: public; Owner: dungeonmaster
--

ALTER TABLE ONLY public.monsters
    ADD CONSTRAINT monsters_pkey PRIMARY KEY (monster_id);


--
-- Name: puzzles puzzles_pkey; Type: CONSTRAINT; Schema: public; Owner: dungeonmaster
--

ALTER TABLE ONLY public.puzzles
    ADD CONSTRAINT puzzles_pkey PRIMARY KEY (puzzle_id);


--
-- Name: strengths strengths_pkey; Type: CONSTRAINT; Schema: public; Owner: dungeonmaster
--

ALTER TABLE ONLY public.strengths
    ADD CONSTRAINT strengths_pkey PRIMARY KEY (strength_id);


--
-- Name: traps traps_pkey; Type: CONSTRAINT; Schema: public; Owner: dungeonmaster
--

ALTER TABLE ONLY public.traps
    ADD CONSTRAINT traps_pkey PRIMARY KEY (trap_id);


--
-- Name: treasures treasures_pkey; Type: CONSTRAINT; Schema: public; Owner: dungeonmaster
--

ALTER TABLE ONLY public.treasures
    ADD CONSTRAINT treasures_pkey PRIMARY KEY (treasure_id);


--
-- Name: weaknesses weaknesses_pkey; Type: CONSTRAINT; Schema: public; Owner: dungeonmaster
--

ALTER TABLE ONLY public.weaknesses
    ADD CONSTRAINT weaknesses_pkey PRIMARY KEY (weakness_id);


--
-- PostgreSQL database dump complete
--


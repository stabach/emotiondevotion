// --- Data for emotions (truncate/add as needed) ---
const emotionData = { // Declare a constant variable
"Anxious": [
  {
    verse: "Philippians 4:6-7",
    text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    devotional: "Prayer isn't your last resort — it's your first defense. God hears your worry and trades it for peace that makes no sense to the world."
  },
  {
    verse: "1 Peter 5:7",
    text: "Cast all your anxiety on Him because He cares for you.",
    devotional: "You're not carrying this alone. God doesn’t ignore your stress — He invites it. Drop it at His feet. He can handle what you can't."
  },
  {
    verse: "Matthew 6:34",
    text: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
    devotional: "Today is enough. Don’t borrow worry from a future that hasn’t happened. God’s got tomorrow covered — focus on what’s in front of you."
  },
  {
    verse: "Isaiah 41:10",
    text: "So do not fear, for I am with you; do not be dismayed, for I am your God...",
    devotional: "God doesn’t promise an easy path — He promises His presence. When anxiety creeps in, remind yourself who walks beside you."
  },
  {
    verse: "John 14:27",
    text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives...",
    devotional: "Jesus doesn’t offer fake calm. His peace holds steady even when your thoughts spiral. Take a breath — He’s with you in the chaos."
  },
  {
    verse: "Psalm 94:19",
    text: "When anxiety was great within me, your consolation brought me joy.",
    devotional: "You’re not the only one who’s felt overwhelmed. Even David had panic. But God comforted him — and He’ll do the same for you."
  },
  {
    verse: "Proverbs 12:25",
    text: "Anxiety weighs down the heart, but a kind word cheers it up.",
    devotional: "Worry is heavy, but God's Word lifts it. Let Him speak into your heart. Even one verse can shift your entire outlook."
  },
  {
    verse: "Matthew 11:28",
    text: "Come to me, all you who are weary and burdened, and I will give you rest.",
    devotional: "Jesus never said 'try harder.' He said 'come to Me.' Your anxious thoughts are a signal — not to panic, but to turn to Him."
  },
  {
    verse: "Psalm 23:4",
    text: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me...",
    devotional: "Anxiety feels like darkness, but you're not walking it alone. God is not far off — He’s walking through it *with* you."
  },
  {
    verse: "Romans 8:28",
    text: "And we know that in all things God works for the good of those who love him...",
    devotional: "You may not see it now, but God’s working something good even in your stress. Nothing is wasted — not even this."
  },
  {
    verse: "Joshua 1:9",
    text: "Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    devotional: "Wherever means *wherever* — even into your anxiety, your overthinking, your what-ifs. God goes with you into all of it."
  },
  {
    verse: "Psalm 55:22",
    text: "Cast your cares on the Lord and he will sustain you...",
    devotional: "God doesn’t say ignore your cares — He says *cast* them. Hand them over. He’s built to carry the weight you weren’t meant to hold."
  },
  {
    verse: "Colossians 3:15",
    text: "Let the peace of Christ rule in your hearts...",
    devotional: "Let peace take the wheel. Don’t let anxiety drive. Christ offers calm in chaos, but you’ve got to *let* it rule your heart." // Declare a variable that can change
  },
  {
    verse: "Psalm 46:1",
    text: "God is our refuge and strength, an ever-present help in trouble.",
    devotional: "Anxiety wants to isolate you. God wants to shelter you. Run to Him, not away. He’s your safe place in every storm."
  },
  {
    verse: "Isaiah 26:3",
    text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
    devotional: "Peace doesn’t come from a clear schedule — it comes from a clear focus. Fix your eyes on God, not your fears."
  },
  {
    verse: "Hebrews 13:6",
    text: "The Lord is my helper; I will not be afraid...",
    devotional: "You’ve got help. You’re not doing this solo. When anxious thoughts rise up, remind yourself who’s backing you."
  },
  {
    verse: "Psalm 56:3",
    text: "When I am afraid, I put my trust in you.",
    devotional: "You don’t need to *feel* brave to *be* brave. Faith isn’t the absence of fear — it’s trusting God in the middle of it."
  },
  {
    verse: "2 Thessalonians 3:16",
    text: "Now may the Lord of peace himself give you peace at all times and in every way...",
    devotional: "There’s no time or place where God’s peace can’t reach you. He shows up in your overthinking and says, 'Breathe. I’ve got this.'"
  },
  {
    verse: "Lamentations 3:22-23",
    text: "Because of the Lord’s great love we are not consumed...",
    devotional: "Anxiety tells you you’re drowning. But God’s love keeps you afloat — every single morning. His mercy resets daily."
  },
  {
    verse: "Mark 4:39",
    text: "He got up, rebuked the wind and said to the waves, 'Quiet! Be still!'",
    devotional: "Jesus still calms storms — even the ones in your mind. Don’t underestimate the power of His voice over your fear."
  },
  {
    verse: "James 1:5",
    text: "If any of you lacks wisdom, you should ask God...",
    devotional: "Feeling anxious because you don’t have the answers? Ask God for wisdom — He gives generously, without judging."
  },
  {
    verse: "Psalm 121:1-2",
    text: "I lift up my eyes to the mountains—where does my help come from? My help comes from the Lord...",
    devotional: "When anxiety makes you feel stuck, look up. Your help doesn’t come from within — it comes from the Maker of everything."
  },
  {
    verse: "Luke 12:25",
    text: "Who of you by worrying can add a single hour to your life?",
    devotional: "Worry gives you something to do — but changes nothing. God offers something better: trust that frees you to live."
  },
  {
    verse: "Psalm 37:5",
    text: "Commit your way to the Lord; trust in him and he will do this.",
    devotional: "Let go of the need to control every step. Hand your plans — and your panic — to God. He’s already mapped the way."
  },
  {
    verse: "Hebrews 4:16",
    text: "Let us then approach God’s throne of grace with confidence...",
    devotional: "God isn’t annoyed by your anxiety. He invites you — boldly — to bring it to Him again and again. He’s never tired of you."
  },
  {
    verse: "Psalm 3:3",
    text: "But you, Lord, are a shield around me, my glory, the One who lifts my head high.",
    devotional: "Anxiety bows heads down. God lifts them back up. When you're weighed down, He steps in and holds your chin."
  },
  {
    verse: "Jeremiah 29:11",
    text: "For I know the plans I have for you,” declares the Lord...",
    devotional: "Your future isn’t a question mark to God. It’s a promise. Trust that He’s already got it worked out — even when you don’t see it yet."
  },
  {
    verse: "Romans 8:38-39",
    text: "Nothing will be able to separate us from the love of God...",
    devotional: "Anxiety tries to build walls. God’s love breaks through all of them. Nothing can block His care — not even fear itself."
  },
  {
    verse: "Isaiah 43:2",
    text: "When you pass through the waters, I will be with you...",
    devotional: "God doesn’t say *if* you struggle — He says *when*. But He promises to walk with you, not leave you drowning."
  },
  {
    verse: "2 Corinthians 12:9",
    text: "My grace is sufficient for you, for my power is made perfect in weakness.",
    devotional: "You don’t need to be strong right now. Let your weakness show God’s strength. His grace fills the gaps where anxiety drains you."
  }
],
"Sad": [
  {
    verse: "Psalm 34:18",
    text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    devotional: "God doesn’t avoid broken hearts — He draws near to them. When you feel shattered, He moves in close and holds every piece."
  },
  {
    verse: "John 11:35",
    text: "Jesus wept.",
    devotional: "Jesus knew the ending. Still, He cried. Your sadness isn’t weakness — it’s part of being human. And it moves the heart of God."
  },
  {
    verse: "Revelation 21:4",
    text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain...",
    devotional: "Sadness won’t last forever. God’s promise? One day, every tear you’ve cried will be gone — for good."
  },
  {
    verse: "Isaiah 53:3",
    text: "He was despised and rejected by mankind, a man of suffering, and familiar with pain.",
    devotional: "Jesus gets it. Pain. Loss. Rejection. He felt all of it. So when you’re sad, you’re not alone — you’re understood."
  },
  {
    verse: "Psalm 30:5",
    text: "Weeping may stay for the night, but rejoicing comes in the morning.",
    devotional: "Sadness might crash over you like nightfall, but morning’s coming. God brings joy where you thought there was only darkness."
  },
  {
    verse: "Matthew 5:4",
    text: "Blessed are those who mourn, for they will be comforted.",
    devotional: "God doesn’t ignore your mourning — He blesses it. And He promises comfort, not eventually — but *right now*."
  },
  {
    verse: "Ecclesiastes 3:4",
    text: "A time to weep and a time to laugh, a time to mourn and a time to dance...",
    devotional: "It’s okay to feel sad. God created space for both tears and laughter. You’re not broken — you’re just in a season."
  },
  {
    verse: "2 Corinthians 1:3-4",
    text: "The God of all comfort... comforts us in all our troubles.",
    devotional: "God doesn’t just see your sadness — He steps into it with comfort strong enough to heal, strong enough to share."
  },
  {
    verse: "Psalm 42:11",
    text: "Why, my soul, are you downcast? Put your hope in God...",
    devotional: "Even when you don’t feel it, hope is still an option. Speak truth to your sadness — God’s still worth hoping in."
  },
  {
    verse: "Romans 12:15",
    text: "Rejoice with those who rejoice; mourn with those who mourn.",
    devotional: "Sadness shared is sadness softened. You don’t have to pretend you're fine. God’s people — and God Himself — meet you in the grief."
  },
  {
    verse: "Psalm 147:3",
    text: "He heals the brokenhearted and binds up their wounds.",
    devotional: "Your sadness isn’t too much for God. He doesn’t just soothe — He *heals*. And He never leaves wounds untreated."
  },
  {
    verse: "Isaiah 61:3",
    text: "...to bestow on them a crown of beauty instead of ashes...",
    devotional: "God trades grief for glory. Ashes for beauty. He’s in the business of turning your sorrow into something sacred."
  },
  {
    verse: "Psalm 6:6",
    text: "I am worn out from my groaning. All night long I flood my bed with weeping...",
    devotional: "Even the Bible’s authors cried themselves to sleep. Don’t hide your sadness. God can handle every tear you’ve got."
  },
  {
    verse: "Jeremiah 31:13",
    text: "I will turn their mourning into gladness...",
    devotional: "Sadness isn’t your final chapter. God’s already planning a comeback — one that swaps your tears for dancing."
  },
  {
    verse: "Lamentations 3:31-32",
    text: "Though he brings grief, he will show compassion...",
    devotional: "God doesn’t waste grief. If He allows it, He’ll meet it with compassion — always."
  },
  {
    verse: "Job 1:21",
    text: "The Lord gave and the Lord has taken away; blessed be the name of the Lord.",
    devotional: "Even in loss, Job worshiped. You don’t need to understand to trust. Sadness can still live beside faith."
  },
  {
    verse: "2 Samuel 22:29",
    text: "You, Lord, are my lamp; the Lord turns my darkness into light.",
    devotional: "Sadness dims everything. But God’s light still breaks through. You may not see it yet, but it’s already rising."
  },
  {
    verse: "Psalm 9:9",
    text: "The Lord is a refuge for the oppressed, a stronghold in times of trouble.",
    devotional: "You don’t have to tough it out. Run to the refuge. God is a safe place for every ache you carry."
  },
  {
    verse: "Psalm 13:1",
    text: "How long, Lord? Will you forget me forever?",
    devotional: "God can handle your honest sadness. He never asked you to sugar-coat your pain. Bring it raw — He listens fully."
  },
  {
    verse: "Romans 8:18",
    text: "I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.",
    devotional: "This sadness? Temporary. The joy ahead? Eternal. Hang on — what’s coming is worth it."
  },
  {
    verse: "Psalm 116:1-2",
    text: "I love the Lord, for he heard my voice; he heard my cry for mercy.",
    devotional: "When no one else gets it, God does. When no one listens, He hears. Your cries never hit the ground unnoticed."
  },
  {
    verse: "Nahum 1:7",
    text: "The Lord is good, a refuge in times of trouble...",
    devotional: "God isn’t just good when you’re happy. He’s good when it’s hard. And He’s got room for your sadness in His shelter."
  },
  {
    verse: "Psalm 143:7-8",
    text: "Answer me quickly, Lord; my spirit fails...",
    devotional: "When you’re running on empty, ask God to speak. His voice restores. His love reaches where sadness runs deep."
  },
  {
    verse: "Isaiah 49:13",
    text: "...for the Lord comforts his people and will have compassion on his afflicted ones.",
    devotional: "God’s not distant. He’s near the hurting. His compassion isn’t cold — it’s active. He moves toward sadness, not away."
  },
  {
    verse: "Luke 7:13",
    text: "When the Lord saw her, his heart went out to her and he said, 'Don’t cry.'",
    devotional: "Jesus noticed her tears — and moved. He notices yours too. Sadness isn’t weakness to Him — it’s sacred."
  },
  {
    verse: "Hebrews 4:15",
    text: "For we do not have a high priest who is unable to empathize with our weaknesses...",
    devotional: "Jesus doesn’t just *know* about sadness — He *feels* it with you. Your sorrow is never dismissed by heaven."
  },
  {
    verse: "Psalm 31:9",
    text: "Be merciful to me, Lord, for I am in distress...",
    devotional: "Prayers don’t need polish — just honesty. Sadness is allowed in God's presence, fully and without shame."
  },
  {
    verse: "1 Thessalonians 4:13",
    text: "...so that you do not grieve like the rest of mankind, who have no hope.",
    devotional: "Yes, we grieve. But not like those without hope. Sadness is real — but so is the promise of joy beyond it."
  },
  {
    verse: "Psalm 25:16-17",
    text: "Turn to me and be gracious to me, for I am lonely and afflicted...",
    devotional: "Sadness can feel isolating, but you're never unseen. God’s eyes are always on you — even in your lowest places."
  },
  {
    verse: "Zephaniah 3:17",
    text: "He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.",
    devotional: "Even in your sadness, God sings over you. He delights in you — not when you're fixed, but exactly as you are now."
  }
],
"Grateful": [
  {
    verse: "1 Thessalonians 5:18",
    text: "Give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
    devotional: "Gratitude isn’t about pretending things are perfect — it’s about trusting that God is good, even when things aren’t."
  },
  {
    verse: "Psalm 107:1",
    text: "Give thanks to the Lord, for he is good; his love endures forever.",
    devotional: "God’s love isn’t short-term. It sticks around forever. That alone is a reason to give thanks today."
  },
  {
    verse: "Colossians 3:15",
    text: "Let the peace of Christ rule in your hearts... And be thankful.",
    devotional: "Peace and gratitude go hand in hand. The more you thank God, the more room you make for His peace to settle in."
  },
  {
    verse: "James 1:17",
    text: "Every good and perfect gift is from above...",
    devotional: "That breath in your lungs? That friend you have? That sunrise? All gifts. Recognize them — and let thanks rise." // Declare a variable that can change
  },
  {
    verse: "Psalm 100:4",
    text: "Enter his gates with thanksgiving and his courts with praise...",
    devotional: "Gratitude is the key that opens God’s presence. Start with thanks — and see how your perspective shifts."
  },
  {
    verse: "Philippians 4:6",
    text: "...with thanksgiving, present your requests to God.",
    devotional: "Even when asking for help, start with thanks. It centers your heart on what God’s already done."
  },
  {
    verse: "Hebrews 12:28",
    text: "Let us be thankful, and so worship God acceptably with reverence and awe.",
    devotional: "Gratitude isn’t just a feeling — it’s worship. A way of showing God that you see Him at work."
  },
  {
    verse: "Psalm 9:1",
    text: "I will give thanks to you, Lord, with all my heart...",
    devotional: "Don’t hold back. Give God thanks with everything in you — even the parts that are still healing."
  },
  {
    verse: "Psalm 118:24",
    text: "This is the day that the Lord has made; let us rejoice and be glad in it.", // Declare a variable that can change
    devotional: "Today might be messy. But it’s still a gift. Don’t wait for perfect to be grateful — start now."
  },
  {
    verse: "Ephesians 5:20",
    text: "Always giving thanks to God the Father for everything...",
    devotional: "Even the small stuff deserves thanks. Gratitude isn’t just for big miracles — it’s for daily mercies too."
  },
  {
    verse: "Psalm 28:7",
    text: "The Lord is my strength and my shield... my heart leaps for joy, and with my song I praise him.",
    devotional: "When God carries you, gratitude naturally follows. Strength today? That’s something to praise Him for."
  },
  {
    verse: "Psalm 103:2",
    text: "Praise the Lord, my soul, and forget not all his benefits...",
    devotional: "Take inventory of God’s blessings. List them out. Gratitude grows when you don’t let the good go unnoticed." // Declare a variable that can change
  },
  {
    verse: "2 Corinthians 9:11",
    text: "You will be enriched in every way so that you can be generous on every occasion...",
    devotional: "God blesses you so you can bless others. Gratitude multiplies when you share it."
  },
  {
    verse: "Psalm 136:1",
    text: "Give thanks to the Lord, for he is good. His love endures forever.",
    devotional: "God’s love doesn’t run out — and that’s always worth thanking Him for. Every single day."
  },
  {
    verse: "Luke 17:15-16",
    text: "One of them, when he saw he was healed, came back, praising God in a loud voice...",
    devotional: "Don’t forget to circle back. When God moves, say thank you. Loudly, publicly, joyfully."
  },
  {
    verse: "Psalm 92:1",
    text: "It is good to give thanks to the Lord...",
    devotional: "Thankfulness isn’t just good manners — it’s good for your soul. Gratitude rewires your heart to see God more clearly."
  },
  {
    verse: "1 Chronicles 16:34",
    text: "Give thanks to the Lord, for he is good; his love endures forever.",
    devotional: "You’ll never run out of reasons to thank Him — His love never quits. That’s real security."
  },
  {
    verse: "Colossians 2:6-7",
    text: "...overflowing with thankfulness.",
    devotional: "Rooted in Christ? Then let your thankfulness spill out. Let it overflow onto everything and everyone around you." // Declare a variable that can change
  },
  {
    verse: "Psalm 30:12",
    text: "That my heart may sing your praises and not be silent. Lord my God, I will praise you forever.",
    devotional: "Gratitude speaks. It sings. Don’t let your thanks go silent — give it a voice today." // Declare a variable that can change
  },
  {
    verse: "Jonah 2:9",
    text: "But I, with shouts of grateful praise, will sacrifice to you...",
    devotional: "Even in the belly of a whale, Jonah gave thanks. Gratitude isn’t about location — it’s about perspective."
  },
  {
    verse: "Psalm 50:14",
    text: "Sacrifice thank offerings to God...",
    devotional: "Sometimes, thanks *is* a sacrifice. When life is hard, choosing to be grateful becomes a powerful act of faith."
  },
  {
    verse: "Daniel 2:23",
    text: "I thank and praise you, God of my ancestors...",
    devotional: "Gratitude stretches back generations. The same God your grandparents praised is worthy of your praise too."
  },
  {
    verse: "1 Corinthians 15:57",
    text: "But thanks be to God! He gives us the victory through our Lord Jesus Christ.",
    devotional: "You’re not fighting for victory — you’re fighting *from* victory. Thank God for already winning the battle."
  },
  {
    verse: "Psalm 95:2",
    text: "Let us come before him with thanksgiving...",
    devotional: "You don’t need the right words — just a grateful heart. Approach God today with simple, sincere thanks."
  },
  {
    verse: "Luke 1:46-47",
    text: "My soul glorifies the Lord and my spirit rejoices in God my Savior.",
    devotional: "Mary praised God from a place of humility and trust. Gratitude isn’t about having it all — it’s about knowing who holds it all."
  },
  {
    verse: "Isaiah 12:4",
    text: "Give praise to the Lord, proclaim his name...",
    devotional: "When you're grateful, don’t keep it quiet. Share what God’s done. Gratitude is contagious."
  },
  {
    verse: "2 Samuel 22:50",
    text: "Therefore I will praise you, Lord, among the nations...",
    devotional: "Let the world know what you’re thankful for. Your praise might be the reminder someone else needs."
  },
  {
    verse: "Psalm 138:1",
    text: "I will praise you, Lord, with all my heart...",
    devotional: "Don’t hold back your thanks. God’s been too good to get a halfway response."
  },
  {
    verse: "Psalm 145:7",
    text: "They celebrate your abundant goodness and joyfully sing of your righteousness.",
    devotional: "God’s goodness isn’t scarce — it’s abundant. Let your gratitude reflect that abundance."
  },
  {
    verse: "Romans 1:21",
    text: "For although they knew God, they neither glorified him as God nor gave thanks to him...",
    devotional: "Gratitude guards your heart from drifting. A thankful life is a focused life — one that honors God in everything."
  }
],
"Angry": [
  {
    verse: "James 1:19-20",
    text: "Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires.",
    devotional: "Anger isn't always wrong — but how you respond to it matters. Slow down. Listen. Let God lead before you react."
  },
  {
    verse: "Proverbs 15:1",
    text: "A gentle answer turns away wrath, but a harsh word stirs up anger.",
    devotional: "You don't have to match someone else's heat. Calm is power. A soft reply can stop a storm before it starts."
  },
  {
    verse: "Ephesians 4:26",
    text: "In your anger do not sin: Do not let the sun go down while you are still angry.", // Declare a variable that can change
    devotional: "Anger will visit — just don’t let it move in. Don’t go to bed bitter. Deal with it before it hardens." // Declare a variable that can change
  },
  {
    verse: "Proverbs 14:29",
    text: "Whoever is patient has great understanding, but one who is quick-tempered displays folly.",
    devotional: "Patience isn't weakness — it's wisdom. Reacting fast isn’t always smart. Slow strength beats quick rage."
  },
  {
    verse: "Colossians 3:8",
    text: "But now you must also rid yourselves of all such things as these: anger, rage, malice...",
    devotional: "Anger can rot your heart if you let it sit too long. Hand it over to God before it takes root." // Declare a variable that can change
  },
  {
    verse: "Proverbs 29:11",
    text: "Fools give full vent to their rage, but the wise bring calm in the end.",
    devotional: "It’s easy to explode. It takes real strength to stay composed. Let God help you be wise, not reactionary."
  },
  {
    verse: "Psalm 37:8",
    text: "Refrain from anger and turn from wrath; do not fret—it leads only to evil.",
    devotional: "Anger left unchecked always leads somewhere ugly. Pull the brake before it drives you off track."
  },
  {
    verse: "Ecclesiastes 7:9",
    text: "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.",
    devotional: "If anger’s your default, it’s time to reset. Don't let it live rent-free in your spirit." // Declare a variable that can change
  },
  {
    verse: "Matthew 5:22",
    text: "But I tell you that anyone who is angry with a brother or sister will be subject to judgment...",
    devotional: "Anger isn’t just about emotion — it’s about the heart behind it. Don’t carry grudges. Forgiveness frees *you*."
  },
  {
    verse: "Romans 12:17-19",
    text: "Do not repay anyone evil for evil... Do not take revenge...",
    devotional: "God’s the one who makes things right — not you. Lay down your need to retaliate and trust Him with the outcome."
  },
  {
    verse: "Galatians 5:22-23",
    text: "But the fruit of the Spirit is... self-control.",
    devotional: "When you're about to snap, pause. If the Spirit’s in you, then self-control is available. Tap into it."
  },
  {
    verse: "1 Corinthians 13:5",
    text: "Love... is not easily angered, it keeps no record of wrongs.",
    devotional: "Love has a long fuse. It doesn’t blow up or keep score. Let love rewrite how you handle frustration."
  },
  {
    verse: "Titus 1:7",
    text: "...not overbearing, not quick-tempered...",
    devotional: "Leadership starts with self-control. People watch how you handle heat. Show them strength under pressure."
  },
  {
    verse: "Proverbs 19:11",
    text: "A person’s wisdom yields patience; it is to one’s glory to overlook an offense.",
    devotional: "Not every insult deserves a response. Sometimes the most powerful thing you can say is... nothing."
  },
  {
    verse: "Luke 6:28",
    text: "Bless those who curse you, pray for those who mistreat you.",
    devotional: "Flip the script. When anger wants revenge, God calls you to bless instead. That’s real spiritual maturity."
  },
  {
    verse: "Proverbs 22:24-25",
    text: "Do not make friends with a hot-tempered person... or you may learn their ways.",
    devotional: "Anger spreads. Who you hang around affects how you respond. Stay close to peace-makers, not flame-throwers."
  },
  {
    verse: "Jonah 4:4",
    text: "But the Lord replied, 'Is it right for you to be angry?'",
    devotional: "Before you act on anger, ask yourself: *Is this justified?* Let God challenge what’s fueling your fire."
  },
  {
    verse: "Psalm 4:4",
    text: "Be angry, and do not sin; ponder in your own hearts on your beds, and be silent.",
    devotional: "Not all anger is sin — but it always needs examining. Sit with it in silence. Let God sift it before it spreads."
  },
  {
    verse: "Mark 11:25",
    text: "...if you hold anything against anyone, forgive them...",
    devotional: "Unforgiveness fuels anger. Want peace? Forgive. Even if they don’t deserve it — because *you* deserve peace."
  },
  {
    verse: "Ephesians 4:31-32",
    text: "Get rid of all bitterness, rage and anger... be kind and compassionate to one another...",
    devotional: "Bitterness doesn’t just poison the other person — it poisons *you*. Clear it out. Replace it with compassion."
  },
  {
    verse: "Matthew 5:9",
    text: "Blessed are the peacemakers, for they will be called children of God.",
    devotional: "You’re not called to be a rage machine — you’re called to be a peacemaker. Bring calm into chaos."
  },
  {
    verse: "Isaiah 58:9",
    text: "...if you do away with the yoke of oppression, with the pointing finger and malicious talk...",
    devotional: "Anger often shows up in words. Watch your tongue — it reveals your heart. Let healing replace the harshness."
  },
  {
    verse: "2 Timothy 2:24",
    text: "...the Lord’s servant must not be quarrelsome but must be kind to everyone...",
    devotional: "You don’t have to win every argument. Kindness has more power than shouting ever will."
  },
  {
    verse: "Colossians 3:13",
    text: "Bear with each other and forgive one another...",
    devotional: "People will let you down — often. Anger holds on. Grace lets go. Choose grace, every time." // Declare a variable that can change
  },
  {
    verse: "Proverbs 16:32",
    text: "Better a patient person than a warrior, one with self-control than one who takes a city.",
    devotional: "You think being strong means blowing up? Real strength is mastering yourself. That’s the real win."
  },
  {
    verse: "Zechariah 8:16-17",
    text: "...speak the truth to each other... do not plot evil against each other...",
    devotional: "When you’re angry, speak truth — not spite. Truth heals. Spite divides."
  },
  {
    verse: "Genesis 4:6-7",
    text: "Then the Lord said to Cain, 'Why are you angry? Why is your face downcast?'",
    devotional: "God called out Cain before things got worse. He’ll do the same for you — if you’re willing to listen."
  },
  {
    verse: "Micah 6:8",
    text: "To act justly and to love mercy and to walk humbly with your God.",
    devotional: "Anger rarely walks in humility. Let mercy and justice guide your response — not pride."
  },
  {
    verse: "1 Peter 3:9",
    text: "Do not repay evil with evil or insult with insult...",
    devotional: "God’s way isn’t to get even. It’s to rise above. Let Him handle justice. You handle grace."
  },
  {
    verse: "Galatians 6:1",
    text: "If someone is caught in a sin, you who live by the Spirit should restore that person gently...",
    devotional: "Anger tears down. Gentleness restores. Choose to be a builder, not a burner."
  }
],
"Lonely": [
  {
    verse: "Deuteronomy 31:6",
    text: "Be strong and courageous... for the Lord your God goes with you; he will never leave you nor forsake you.",
    devotional: "You may feel alone, but you are never abandoned. God sticks closer than anyone ever could — always present, always faithful."
  },
  {
    verse: "Psalm 25:16",
    text: "Turn to me and be gracious to me, for I am lonely and afflicted.",
    devotional: "Even King David felt alone. God isn’t intimidated by your loneliness — He invites you to turn to Him with it."
  },
  {
    verse: "Isaiah 41:10",
    text: "So do not fear, for I am with you...",
    devotional: "Your loneliness doesn’t mean God left. He’s still here. Still near. Still enough."
  },
  {
    verse: "Psalm 68:6",
    text: "God sets the lonely in families...",
    devotional: "God sees your isolation and moves to place you where you belong. You are never forgotten — you are positioned."
  },
  {
    verse: "Matthew 28:20",
    text: "...And surely I am with you always, to the very end of the age.",
    devotional: "Always means always. Jesus promised His presence — even in the silence, even when no one else is around."
  },
  {
    verse: "2 Timothy 4:17",
    text: "But the Lord stood at my side and gave me strength...",
    devotional: "When no one else showed up for Paul, God did. He’ll stand by you too — solid, unwavering, close."
  },
  {
    verse: "Psalm 147:3",
    text: "He heals the brokenhearted and binds up their wounds.",
    devotional: "Loneliness can break your heart — but God is a healer. He binds, He mends, He restores connection from the inside out."
  },
  {
    verse: "John 14:18",
    text: "I will not leave you as orphans; I will come to you.",
    devotional: "Jesus didn’t save you just to leave you. He’s coming near — again and again — to remind you that you’re His."
  },
  {
    verse: "Hebrews 13:5",
    text: "Never will I leave you; never will I forsake you.",
    devotional: "People may leave. God won’t. That promise holds — no matter how you feel today."
  },
  {
    verse: "Psalm 139:7-10",
    text: "Where can I go from your Spirit?... even there your hand will guide me.",
    devotional: "You can’t escape God’s presence. Not in your room. Not in the dark. Not in your lowest low."
  },
  {
    verse: "Genesis 28:15",
    text: "I am with you and will watch over you wherever you go...",
    devotional: "God doesn’t need a crowd to be with you. His presence alone is enough to carry you through isolation."
  },
  {
    verse: "Romans 8:38-39",
    text: "Nothing... will be able to separate us from the love of God...",
    devotional: "Nothing can pull you out of God’s embrace — not even loneliness. His love wraps around you where no one else can."
  },
  {
    verse: "Psalm 23:4",
    text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me...",
    devotional: "The valley may be empty — but it’s not silent. God walks there too, right beside you."
  },
  {
    verse: "Isaiah 43:2",
    text: "When you pass through the waters, I will be with you...",
    devotional: "Deep water can feel isolating, but you’re not swimming alone. God’s holding you up."
  },
  {
    verse: "1 Peter 5:7",
    text: "Cast all your anxiety on him because he cares for you.",
    devotional: "When you feel like no one cares — remember this: God does. Enough to carry your pain Himself."
  },
  {
    verse: "Zephaniah 3:17",
    text: "The Lord your God is with you... he will quiet you with his love...",
    devotional: "God isn’t just near — He’s tender. His presence doesn’t just show up, it *soothes*."
  },
  {
    verse: "Psalm 34:18",
    text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    devotional: "Loneliness can crush you. But God draws in closer — not away — when your spirit breaks."
  },
  {
    verse: "Job 23:8-10",
    text: "But he knows the way that I take; when he has tested me, I will come forth as gold.",
    devotional: "Even when you can’t see Him, God sees you. Loneliness is a test — not a sentence."
  },
  {
    verse: "Luke 5:16",
    text: "But Jesus often withdrew to lonely places and prayed.",
    devotional: "Jesus knew what lonely felt like — and He used it to connect deeper with the Father. You can too."
  },
  {
    verse: "Psalm 27:10",
    text: "Though my father and mother forsake me, the Lord will receive me.",
    devotional: "Even if the people you thought would stay walk out — God receives you with open arms. Always."
  },
  {
    verse: "Lamentations 3:22-23",
    text: "Because of the Lord’s great love we are not consumed...",
    devotional: "Loneliness might press in, but God’s mercy pushes back. His love shows up — new every morning."
  },
  {
    verse: "Galatians 6:2",
    text: "Carry each other’s burdens...",
    devotional: "You were never meant to walk alone. Ask for help. Let someone in. God works through people too."
  },
  {
    verse: "John 16:32-33",
    text: "...Yet I am not alone, for my Father is with me.",
    devotional: "Even when His friends bailed, Jesus wasn’t truly alone. Same goes for you — the Father is still right there."
  },
  {
    verse: "Philippians 4:9",
    text: "...And the God of peace will be with you.",
    devotional: "God doesn’t just bring peace — He *is* peace. And He never leaves."
  },
  {
    verse: "2 Corinthians 1:3-4",
    text: "The God of all comfort... comforts us in all our troubles.",
    devotional: "God isn’t distant from pain — He moves into it with comfort that goes deeper than words."
  },
  {
    verse: "Exodus 33:14",
    text: "My Presence will go with you, and I will give you rest.",
    devotional: "You don’t walk into another moment of loneliness without God beside you. And His presence brings rest."
  },
  {
    verse: "Psalm 16:11",
    text: "You make known to me the path of life; you will fill me with joy in your presence...",
    devotional: "Loneliness can make life feel aimless. God’s presence brings both direction and joy — even in solitude."
  },
  {
    verse: "Jeremiah 1:8",
    text: "Do not be afraid... for I am with you and will rescue you...",
    devotional: "You’re not forgotten, abandoned, or alone. God’s with you, protecting and rescuing — even when you feel unseen."
  },
  {
    verse: "Matthew 6:6",
    text: "...your Father... sees what is done in secret...",
    devotional: "God sees what no one else does — the silent tears, the quiet pain. He’s aware. And He’s moved by it."
  },
  {
    verse: "Romans 15:13",
    text: "May the God of hope fill you with all joy and peace as you trust in him...",
    devotional: "Loneliness drains hope. But God *is* hope — and He fills empty places with joy and peace when you let Him." // Declare a variable that can change
  }
],
"Tired": [
  {
    verse: "Matthew 11:28",
    text: "Come to me, all you who are weary and burdened, and I will give you rest.",
    devotional: "You don’t have to earn rest. Jesus invites the worn-out, the drained, and the done. That’s where peace starts."
  },
  {
    verse: "Isaiah 40:29",
    text: "He gives strength to the weary and increases the power of the weak.",
    devotional: "You might feel empty, but God’s supply isn’t. He gives power where you’ve got none left."
  },
  {
    verse: "Galatians 6:9",
    text: "Let us not become weary in doing good...",
    devotional: "Even the right thing gets exhausting. Don’t give up — breakthrough may be just one more step away."
  },
  {
    verse: "Psalm 23:2-3",
    text: "He makes me lie down in green pastures... he refreshes my soul.",
    devotional: "God doesn’t just want you to keep going — He wants to restore you. Your soul needs more than sleep."
  },
  {
    verse: "2 Corinthians 12:9",
    text: "My grace is sufficient for you, for my power is made perfect in weakness.",
    devotional: "Tired isn’t failure. It’s an opportunity for God’s strength to show up where you’ve hit your limit."
  },
  {
    verse: "Psalm 4:8",
    text: "In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.",
    devotional: "Rest isn’t weakness — it’s trust. Sleep becomes sacred when you hand your worries to God."
  },
  {
    verse: "Isaiah 40:31",
    text: "...those who hope in the Lord will renew their strength...",
    devotional: "Renewal doesn’t come from pushing harder — it comes from leaning into God’s hope when yours runs dry."
  },
  {
    verse: "Proverbs 3:24",
    text: "When you lie down, you will not be afraid; when you lie down, your sleep will be sweet.",
    devotional: "God offers rest that goes deeper than physical — the kind that reaches your soul and settles your spirit."
  },
  {
    verse: "Jeremiah 31:25",
    text: "I will refresh the weary and satisfy the faint.",
    devotional: "God doesn’t just sympathize with your fatigue — He steps in to restore and satisfy what’s been drained."
  },
  {
    verse: "Exodus 33:14",
    text: "My Presence will go with you, and I will give you rest.",
    devotional: "Sometimes rest isn’t a nap — it’s knowing God’s presence is still with you, carrying what you can’t."
  },
  {
    verse: "Psalm 127:2",
    text: "...he grants sleep to those he loves.",
    devotional: "You don’t have to earn peace. God gives rest freely — not based on performance, but love."
  },
  {
    verse: "Mark 6:31",
    text: "Come with me by yourselves to a quiet place and get some rest.",
    devotional: "Even Jesus told people to rest. Busyness isn’t always faithfulness. Sometimes stepping back *is* obedience."
  },
  {
    verse: "Psalm 46:10",
    text: "Be still, and know that I am God.",
    devotional: "Stillness isn’t laziness. It’s faith. God’s still God even when you stop striving."
  },
  {
    verse: "Job 11:18",
    text: "You will be secure, because there is hope; you will look about you and take your rest in safety.",
    devotional: "Real rest starts with real hope. And hope, when placed in God, brings the deepest peace."
  },
  {
    verse: "Deuteronomy 33:12",
    text: "Let the beloved of the Lord rest secure in him...",
    devotional: "You’re not just allowed to rest — you’re *designed* to. God doesn’t call you to burnout."
  },
  {
    verse: "Psalm 62:1",
    text: "Truly my soul finds rest in God; my salvation comes from him.",
    devotional: "Rest isn’t found in sleep alone. It’s found in surrender. Give your striving to the One who already saved you."
  },
  {
    verse: "Lamentations 3:22-23",
    text: "...his compassions never fail. They are new every morning...",
    devotional: "God's mercy resets daily. That means even if you're tired now, tomorrow starts fresh — with new strength."
  },
  {
    verse: "Romans 15:13",
    text: "May the God of hope fill you with all joy and peace as you trust in him...",
    devotional: "Tired? Start with trust. Peace and strength flow from trusting the One who holds it all."
  },
  {
    verse: "Psalm 91:1",
    text: "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty.",
    devotional: "Rest doesn’t mean running away — it means running *to* God. His shadow is the safest place you’ll find."
  },
  {
    verse: "Matthew 6:31-32",
    text: "So do not worry... your heavenly Father knows that you need them.",
    devotional: "God already knows what’s draining you. Rest in that. He’s not waiting for your hustle — just your heart."
  },
  {
    verse: "Psalm 55:22",
    text: "Cast your cares on the Lord and he will sustain you...",
    devotional: "You don’t have to carry it all. Throw it on God. He’s strong enough to hold what’s wearing you down."
  },
  {
    verse: "Hebrews 4:9-10",
    text: "There remains a Sabbath-rest for the people of God...",
    devotional: "God built rest into creation — and into your life. Don’t ignore what your body and soul are craving."
  },
  {
    verse: "Isaiah 30:15",
    text: "In repentance and rest is your salvation, in quietness and trust is your strength...",
    devotional: "Sometimes the strongest move is to stop. God works through quiet trust more than frantic effort."
  },
  {
    verse: "John 14:27",
    text: "Peace I leave with you; my peace I give you...",
    devotional: "Jesus offers a peace the world can’t give — one that soaks through your tired bones and into your spirit."
  },
  {
    verse: "Proverbs 24:10",
    text: "If you falter in a time of trouble, how small is your strength!",
    devotional: "It’s okay if you’re tired — just don’t quit. Your strength isn’t small — it’s just time to refuel."
  },
  {
    verse: "Nehemiah 8:10",
    text: "...the joy of the Lord is your strength.",
    devotional: "Joy isn’t a perk — it’s fuel. When you're tired, joy in God is what keeps you moving forward."
  },
  {
    verse: "Philippians 4:13",
    text: "I can do all this through him who gives me strength.",
    devotional: "Yes, even this — even today — even when you feel like you’ve got nothing left. His strength shows up right here."
  },
  {
    verse: "Isaiah 35:3-4",
    text: "Strengthen the feeble hands, steady the knees that give way...",
    devotional: "Tired doesn’t mean done. Let God steady you. You were made to endure more than this moment."
  },
  {
    verse: "Psalm 3:5",
    text: "I lie down and sleep; I wake again, because the Lord sustains me.",
    devotional: "God doesn’t just protect your sleep — He sustains your life. That’s why you woke up today. He’s not done yet."
  },
  {
    verse: "1 Kings 19:5-6",
    text: "...All at once an angel touched him and said, 'Get up and eat.'...",
    devotional: "Elijah was tired and depressed — so God gave him a nap and a snack. Sometimes, rest *is* spiritual."
  }
],
"Discouraged": [
  {
    verse: "Galatians 6:9",
    text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
    devotional: "You might not see the results yet, but don’t quit. God’s working under the surface — your harvest is coming."
  },
  {
    verse: "Joshua 1:9",
    text: "Have I not commanded you? Be strong and courageous... the Lord your God will be with you wherever you go.",
    devotional: "Discouragement whispers lies. God's presence shouts truth. You’re not alone in this fight — keep stepping forward."
  },
  {
    verse: "Psalm 42:11",
    text: "Why, my soul, are you downcast? Put your hope in God...",
    devotional: "Even David had to talk to his soul. Don’t let discouragement have the last word — speak hope louder." // Declare a variable that can change
  },
  {
    verse: "Isaiah 41:10",
    text: "Do not be dismayed, for I am your God. I will strengthen you and help you...",
    devotional: "Discouragement drains — but God restores. Let His strength carry you where yours runs out."
  },
  {
    verse: "Romans 8:31",
    text: "If God is for us, who can be against us?",
    devotional: "If God’s in your corner, discouragement doesn’t stand a chance. Remember who fights with you."
  },
  {
    verse: "2 Corinthians 4:16",
    text: "Though outwardly we are wasting away, yet inwardly we are being renewed day by day.",
    devotional: "Even if you feel like you're falling apart, God is building something inside that discouragement can’t touch."
  },
  {
    verse: "Psalm 34:17",
    text: "The righteous cry out, and the Lord hears them; he delivers them from all their troubles.",
    devotional: "You don’t need a fancy prayer — just a cry. God hears even the smallest call for help."
  },
  {
    verse: "John 16:33",
    text: "...In this world you will have trouble. But take heart! I have overcome the world.",
    devotional: "Jesus didn’t promise ease — He promised victory. Discouragement loses when you remember who already won."
  },
  {
    verse: "Philippians 1:6",
    text: "...he who began a good work in you will carry it on to completion...", // Declare a variable that can change
    devotional: "You’re not finished — God isn’t done writing your story. This chapter isn’t the whole book."
  },
  {
    verse: "Psalm 27:14",
    text: "Wait for the Lord; be strong and take heart and wait for the Lord.",
    devotional: "Waiting is hard. But God strengthens hearts that wait. Don’t rush the process — He’s in it with you."
  },
  {
    verse: "Micah 7:8",
    text: "Though I have fallen, I will rise...",
    devotional: "Discouragement might knock you down, but it can’t keep you there. God raises up those who trust Him."
  },
  {
    verse: "Isaiah 40:31",
    text: "...they will run and not grow weary, they will walk and not be faint.",
    devotional: "God renews strength — not just once, but *daily*. Keep walking. He’ll supply what you need."
  },
  {
    verse: "Proverbs 3:5-6",
    text: "Trust in the Lord with all your heart... he will make your paths straight.",
    devotional: "Discouragement comes from confusion. Trust clears the path — even when you don’t see every step."
  },
  {
    verse: "Romans 15:4",
    text: "...so that through the endurance taught in the Scriptures... we might have hope.",
    devotional: "You’re not the first to feel like quitting. The Bible’s full of people who kept going — and so will you."
  },
  {
    verse: "2 Thessalonians 3:3",
    text: "But the Lord is faithful, and he will strengthen you and protect you...",
    devotional: "People may let you down — but God never will. His faithfulness is your foundation." // Declare a variable that can change
  },
  {
    verse: "Hebrews 10:23",
    text: "Let us hold unswervingly to the hope we profess, for he who promised is faithful.",
    devotional: "When your grip on hope slips, remember — God’s grip on *you* never does."
  },
  {
    verse: "Psalm 145:14",
    text: "The Lord upholds all who fall and lifts up all who are bowed down.",
    devotional: "God doesn’t scold you for falling — He lifts you. Discouragement doesn’t define you. He does."
  },
  {
    verse: "Lamentations 3:22-23",
    text: "Because of the Lord’s great love we are not consumed... they are new every morning.",
    devotional: "Discouraged today? That’s okay. Tomorrow comes with fresh mercy. Don’t give up before the reset."
  },
  {
    verse: "1 Corinthians 15:58",
    text: "Stand firm... your labor in the Lord is not in vain.",
    devotional: "Even if no one sees your effort, God does. Nothing you do for Him is wasted."
  },
  {
    verse: "Psalm 55:22",
    text: "Cast your cares on the Lord and he will sustain you...",
    devotional: "Let God carry what’s too heavy. He sustains what you can’t hold anymore."
  },
  {
    verse: "Hebrews 12:2",
    text: "...fixing our eyes on Jesus, the pioneer and perfecter of faith...",
    devotional: "Discouragement makes you look down. Jesus lifts your eyes up. Focus on Him, not the weight."
  },
  {
    verse: "James 1:12",
    text: "Blessed is the one who perseveres under trial...",
    devotional: "Keep going. There’s blessing on the other side of pressure. God rewards endurance."
  },
  {
    verse: "Isaiah 26:3",
    text: "You will keep in perfect peace those whose minds are steadfast...",
    devotional: "Peace and discouragement can’t live in the same headspace. Keep your mind locked on Him."
  },
  {
    verse: "Psalm 18:32",
    text: "It is God who arms me with strength and keeps my way secure.",
    devotional: "You don’t have to muster up strength on your own. God is your source — and He doesn’t run dry."
  },
  {
    verse: "1 Peter 5:10",
    text: "...after you have suffered a little while, will himself restore you...",
    devotional: "Yes, this hurts. Yes, it’s temporary. And yes — restoration is on the way."
  },
  {
    verse: "Zephaniah 3:17",
    text: "He will take great delight in you... he will rejoice over you with singing.",
    devotional: "When you feel unseen or unworthy, remember — God sings over you. You’re still His joy."
  },
  {
    verse: "John 14:27",
    text: "Peace I leave with you; my peace I give you...",
    devotional: "God’s peace doesn’t depend on your circumstances. It’s deep, steady, and available right now."
  },
  {
    verse: "Psalm 40:2",
    text: "He lifted me out of the slimy pit... and gave me a firm place to stand.",
    devotional: "God doesn’t just comfort you in discouragement — He pulls you out and sets you on solid ground."
  },
  {
    verse: "Romans 5:3-4",
    text: "...suffering produces perseverance; perseverance, character; and character, hope.",
    devotional: "What feels pointless right now is shaping something eternal. Discouragement might be your growth season."
  },
  {
    verse: "Ephesians 3:20",
    text: "...to him who is able to do immeasurably more than all we ask or imagine...",
    devotional: "God’s not limited by your discouragement. What He’s planning exceeds even your best-case scenario."
  }
],
"Afraid": [
  {
    verse: "Isaiah 41:10",
    text: "So do not fear, for I am with you; do not be dismayed, for I am your God...",
    devotional: "Fear loses power when you realize who’s standing beside you. God’s presence changes everything."
  },
  {
    verse: "2 Timothy 1:7",
    text: "For God has not given us a spirit of fear, but of power and of love and of a sound mind.",
    devotional: "Fear isn’t from God — courage is. He’s put power in you, not panic."
  },
  {
    verse: "Psalm 56:3",
    text: "When I am afraid, I put my trust in you.",
    devotional: "Fear happens. But trust is a choice — even when your heart’s racing, you can lean into Him."
  },
  {
    verse: "Joshua 1:9",
    text: "Be strong and courageous. Do not be afraid; do not be discouraged...",
    devotional: "You’re not called to be fearless — you’re called to be courageous. And courage means showing up even when afraid."
  },
  {
    verse: "John 14:27",
    text: "Peace I leave with you; my peace I give you...",
    devotional: "God’s peace silences fear. It doesn’t mean there’s no danger — it means you’re anchored in something greater."
  },
  {
    verse: "Psalm 23:4",
    text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me...",
    devotional: "Dark valleys come. But you don’t go through them alone — God is right beside you, step by shaky step."
  },
  {
    verse: "Deuteronomy 31:6",
    text: "Be strong and courageous... he will never leave you nor forsake you.",
    devotional: "Fear loves to lie about abandonment. Truth is — God *never* walks away."
  },
  {
    verse: "Romans 8:15",
    text: "...the Spirit you received does not make you slaves to fear...",
    devotional: "Fear doesn’t get to chain you. You’ve been adopted into a new family — one built on love, not fear."
  },
  {
    verse: "Psalm 27:1",
    text: "The Lord is my light and my salvation—whom shall I fear?",
    devotional: "If God’s on your side, what could possibly stand against you that He can’t handle?"
  },
  {
    verse: "Isaiah 43:1",
    text: "Do not fear, for I have redeemed you; I have summoned you by name; you are mine.",
    devotional: "You belong to the Creator of the universe. Fear has no legal claim over you anymore."
  },
  {
    verse: "Proverbs 29:25",
    text: "Fear of man will prove to be a snare, but whoever trusts in the Lord is kept safe.",
    devotional: "Don’t let fear of others trap you. People aren’t your safety — God is." // Declare a variable that can change
  },
  {
    verse: "1 John 4:18",
    text: "There is no fear in love. But perfect love drives out fear...",
    devotional: "God’s love doesn’t just comfort you — it *evicts* fear. Let love fill the space where fear used to live."
  },
  {
    verse: "Psalm 91:4-5",
    text: "You will not fear the terror of night, nor the arrow that flies by day...",
    devotional: "Fear doesn’t get to rule your nights or your days. You’re covered — completely." // Declare a variable that can change
  },
  {
    verse: "Exodus 14:13",
    text: "Do not be afraid. Stand firm and you will see the deliverance the Lord will bring you today.",
    devotional: "Sometimes, the bravest thing you can do is *stand still* and trust God to move."
  },
  {
    verse: "Mark 5:36",
    text: "...Don’t be afraid; just believe.",
    devotional: "Fear fights belief — but you get to choose which one leads. Choose faith. Choose forward."
  },
  {
    verse: "Psalm 118:6",
    text: "The Lord is with me; I will not be afraid. What can mere mortals do to me?",
    devotional: "Fear loses power when you realize no one has control over you like God does. You’re in His hands."
  },
  {
    verse: "Luke 12:7",
    text: "Don’t be afraid; you are worth more than many sparrows.",
    devotional: "If God watches over sparrows, He definitely hasn’t forgotten about you. You are seen and secure."
  },
  {
    verse: "Psalm 46:1-2",
    text: "God is our refuge and strength... therefore we will not fear...",
    devotional: "Fear can’t survive where refuge and strength live. And both are found in God."
  },
  {
    verse: "Isaiah 12:2",
    text: "Surely God is my salvation; I will trust and not be afraid.",
    devotional: "Fear fades when trust grows. Shift your focus from what scares you to who saves you."
  },
  {
    verse: "Matthew 10:31",
    text: "So don’t be afraid; you are worth more than many sparrows.",
    devotional: "You’re not forgotten. God knows your name, your fears, and your future — and He’s holding all of it."
  },
  {
    verse: "Joel 2:21",
    text: "Do not be afraid, land of Judah; be glad and rejoice. Surely the Lord has done great things!",
    devotional: "Fear says panic. God says praise. Rejoice anyway — He’s still doing great things."
  },
  {
    verse: "Lamentations 3:57",
    text: "You came near when I called you, and you said, 'Do not fear.'",
    devotional: "God doesn’t just say 'don’t fear' — He *shows up* and stands close when you're scared."
  },
  {
    verse: "Hebrews 13:6",
    text: "The Lord is my helper; I will not be afraid...",
    devotional: "With God as your helper, fear doesn’t get the last word. He’s already working on your behalf."
  },
  {
    verse: "Psalm 34:4",
    text: "I sought the Lord, and he answered me; he delivered me from all my fears.",
    devotional: "Fear doesn't stand a chance when you bring it to God. He answers. He delivers. Every time."
  },
  {
    verse: "Deuteronomy 3:22",
    text: "Do not be afraid of them; the Lord your God himself will fight for you.",
    devotional: "You’re not fighting alone. When fear rises up, let God do the heavy lifting." // Declare a variable that can change
  },
  {
    verse: "Zephaniah 3:16-17",
    text: "Do not fear... The Lord your God is with you, the Mighty Warrior who saves.",
    devotional: "God doesn’t just comfort — He *fights*. And He never loses. Fear has no shot."
  },
  {
    verse: "Genesis 15:1",
    text: "Do not be afraid, Abram. I am your shield, your very great reward.",
    devotional: "Fear is loud. But God's voice is louder. He’s your protector and your prize — not fear."
  },
  {
    verse: "Isaiah 35:4",
    text: "Say to those with fearful hearts, 'Be strong, do not fear; your God will come...'",
    devotional: "Fear shrinks the future. But God says He’s *coming* — to strengthen, to save, and to stay."
  },
  {
    verse: "Matthew 6:34",
    text: "Therefore do not worry about tomorrow, for tomorrow will worry about itself.",
    devotional: "Fear loves the future. Faith lives in today. God’s already in tomorrow — so you don’t have to be."
  },
  {
    verse: "Revelation 1:17",
    text: "Do not be afraid. I am the First and the Last.",
    devotional: "God was here before your fear started — and He’ll still be standing after it ends. Alpha and Omega. Period."
  }
],
"Joyful": [
  {
    verse: "Psalm 118:24",
    text: "This is the day the Lord has made; let us rejoice and be glad in it.", // Declare a variable that can change
    devotional: "Joy isn’t about what’s happening — it’s about Who’s behind the day. If God made today, that’s reason enough to smile."
  },
  {
    verse: "Nehemiah 8:10",
    text: "...Do not grieve, for the joy of the Lord is your strength.",
    devotional: "God’s joy doesn’t just lift you up — it fuels you. Let His joy carry you farther than your own energy can."
  },
  {
    verse: "Philippians 4:4",
    text: "Rejoice in the Lord always. I will say it again: Rejoice!",
    devotional: "Joy is worth repeating. Say it, live it, let it overflow. God’s too good for silence." // Declare a variable that can change
  },
  {
    verse: "Romans 15:13",
    text: "May the God of hope fill you with all joy and peace as you trust in him...",
    devotional: "Joy and trust go together. The more you lean into Him, the more joy fills the gaps."
  },
  {
    verse: "Psalm 16:11",
    text: "You make known to me the path of life; you will fill me with joy in your presence...",
    devotional: "True joy doesn’t come from stuff — it comes from presence. God’s presence."
  },
  {
    verse: "1 Thessalonians 5:16",
    text: "Rejoice always,",
    devotional: "Joy isn’t just for the good days — it’s for every day. Make it your habit, not your reaction."
  },
  {
    verse: "John 15:11",
    text: "I have told you this so that my joy may be in you and that your joy may be complete.", // Declare a variable that can change
    devotional: "Jesus didn’t come to make you bored — He came to fill you with His joy. Deep, complete, real joy." // Declare a variable that can change
  },
  {
    verse: "Psalm 30:11",
    text: "You turned my wailing into dancing; you removed my sackcloth and clothed me with joy,",
    devotional: "God doesn’t just end pain — He replaces it. He clothes you in joy like a brand new fit."
  },
  {
    verse: "Proverbs 17:22",
    text: "A cheerful heart is good medicine...",
    devotional: "Joy heals. It lightens your spirit and lifts others, too. Spread it like medicine today."
  },
  {
    verse: "Zephaniah 3:17",
    text: "...He will take great delight in you;... he will rejoice over you with singing.",
    devotional: "God sings over you. His joy is loud. So why not join in the chorus?"
  },
  {
    verse: "Isaiah 61:10",
    text: "I delight greatly in the Lord; my soul rejoices in my God...",
    devotional: "Rejoicing doesn’t always start with feelings — it starts with choice. Choose delight. Let your soul follow."
  },
  {
    verse: "Luke 10:20",
    text: "...rejoice that your names are written in heaven.",
    devotional: "If God has your name written down, that’s better than anything this world can offer. That’s joy on lock."
  },
  {
    verse: "Psalm 126:3",
    text: "The Lord has done great things for us, and we are filled with joy.",
    devotional: "Look back. God’s been good. That alone is reason to be filled — not with fear, but with joy."
  },
  {
    verse: "Habakkuk 3:18",
    text: "...I will rejoice in the Lord, I will be joyful in God my Savior.",
    devotional: "Joy isn’t based on your situation — it’s based on your Savior. Circumstances change. God doesn’t."
  },
  {
    verse: "Isaiah 55:12",
    text: "You will go out in joy and be led forth in peace...",
    devotional: "God sends you forward with joy, not fear. Walk boldly. You're being led with peace and purpose."
  },
  {
    verse: "Galatians 5:22",
    text: "But the fruit of the Spirit is love, joy, peace...",
    devotional: "Joy isn’t manufactured — it’s grown. Let the Spirit produce it in you as you walk with Him."
  },
  {
    verse: "Psalm 5:11",
    text: "Let all who take refuge in you be glad... spread your protection over them, that those who love your name may rejoice in you.",
    devotional: "God’s protection produces peace — and peace leads to praise. Joy is your response to being covered."
  },
  {
    verse: "Psalm 94:19",
    text: "When anxiety was great within me, your consolation brought me joy.",
    devotional: "God doesn’t just ease anxiety — He *replaces* it with joy. He doesn't patch things — He transforms them."
  },
  {
    verse: "Isaiah 12:6",
    text: "Shout aloud and sing for joy, people of Zion...",
    devotional: "Sometimes you’ve just got to make noise. Let your joy be loud. God’s worth a shout."
  },
  {
    verse: "1 Peter 1:8",
    text: "...you believe in him and are filled with an inexpressible and glorious joy,",
    devotional: "Joy that doesn’t make sense? That’s what Jesus gives. It's not logical — it’s supernatural."
  },
  {
    verse: "Psalm 100:2",
    text: "Worship the Lord with gladness; come before him with joyful songs.",
    devotional: "Worship isn’t a chore. It’s a celebration. Show up smiling — He deserves it."
  },
  {
    verse: "Romans 12:12",
    text: "Be joyful in hope, patient in affliction, faithful in prayer.",
    devotional: "Hope and joy go hand-in-hand. Keep praying, keep hoping — joy is never far behind."
  },
  {
    verse: "Psalm 33:1",
    text: "Sing joyfully to the Lord, you righteous; it is fitting for the upright to praise him.",
    devotional: "Joy fits you. It looks good on you. Wear it well today."
  },
  {
    verse: "Isaiah 35:10",
    text: "...Gladness and joy will overtake them, and sorrow and sighing will flee away.",
    devotional: "God’s joy doesn’t chase sorrow — it *overtakes* it. Let Him flood you with that kind of gladness."
  },
  {
    verse: "Psalm 21:6",
    text: "Surely you have granted him unending blessings and made him glad with the joy of your presence.",
    devotional: "Joy isn’t about a perfect life — it’s about a present God. He’s with you. Rejoice in that."
  },
  {
    verse: "Psalm 28:7",
    text: "My heart leaps for joy, and with my song I praise him.",
    devotional: "Joy makes the heart leap. Don’t hold it back. Let your song rise with it."
  },
  {
    verse: "Psalm 51:12",
    text: "Restore to me the joy of your salvation...",
    devotional: "If your joy’s been low, ask God to refill it. He never runs out — He’s joy’s source."
  },
  {
    verse: "Jeremiah 15:16",
    text: "When your words came, I ate them... they were my joy and my heart’s delight...",
    devotional: "God’s Word isn’t just truth — it’s joy food. Feed on it and watch your spirit rise."
  },
  {
    verse: "Luke 1:14",
    text: "He will be a joy and delight to you, and many will rejoice because of his birth,",
    devotional: "Jesus is the source of joy — His arrival changed everything. Let that joy live in you every day."
  },
  {
    verse: "Psalm 144:15",
    text: "Blessed is the people of whom this is true; blessed is the people whose God is the Lord.",
    devotional: "You’re already blessed — not because life’s perfect, but because your God is the Lord. And that’s real joy."
  }
],
"Hopeful": [
  {
    verse: "Romans 15:13",
    text: "May the God of hope fill you with all joy and peace as you trust in him...",
    devotional: "God doesn’t just give hope — He *is* hope. Trust Him, and He’ll fill the space where doubt used to live."
  },
  {
    verse: "Jeremiah 29:11",
    text: "For I know the plans I have for you... plans to give you hope and a future.",
    devotional: "Your story’s not random. God’s got plans — good ones. Keep going. There’s more ahead."
  },
  {
    verse: "Lamentations 3:21-23",
    text: "...his compassions never fail. They are new every morning...",
    devotional: "When yesterday drained you, today is a reset. God's mercy is the proof that hope gets a fresh start daily."
  },
  {
    verse: "Hebrews 11:1",
    text: "Now faith is confidence in what we hope for...",
    devotional: "Hope is rooted in what’s not yet seen. Faith says, 'I don’t have to see it to believe it’s coming.'"
  },
  {
    verse: "Psalm 33:20-22",
    text: "We wait in hope for the Lord; he is our help and our shield.",
    devotional: "Hope waits — but not aimlessly. It waits knowing God is moving, even when you can’t see it yet."
  },
  {
    verse: "Romans 8:24-25",
    text: "...But if we hope for what we do not yet have, we wait for it patiently.",
    devotional: "Hope is future-focused. Patience may stretch you, but what God’s building is worth the wait."
  },
  {
    verse: "Psalm 71:14",
    text: "As for me, I will always have hope; I will praise you more and more.",
    devotional: "Hope doesn’t shrink when life gets loud. It lifts its voice and praises anyway."
  },
  {
    verse: "Isaiah 40:31",
    text: "...those who hope in the Lord will renew their strength.",
    devotional: "Hope fuels endurance. If you’re tired, refill your tank by placing your hope back in Him."
  },
  {
    verse: "Romans 5:5",
    text: "And hope does not put us to shame...",
    devotional: "Hope in God never leaves you empty-handed. You may wait, but you will *not* regret trusting Him."
  },
  {
    verse: "Psalm 130:5",
    text: "I wait for the Lord, my whole being waits, and in his word I put my hope.",
    devotional: "Hope isn't passive. It's anchored. Lock your heart into God's promises — they will not fail."
  },
  {
    verse: "1 Peter 1:3",
    text: "In his great mercy he has given us new birth into a living hope...",
    devotional: "Hope isn’t just a concept — it’s alive. Jesus proved that. You’re walking in a living, breathing promise."
  },
  {
    verse: "Hebrews 10:23",
    text: "Let us hold unswervingly to the hope we profess...",
    devotional: "Even if everything else shakes, hope holds. Grip it tighter. God is still faithful."
  },
  {
    verse: "Titus 1:2",
    text: "...the hope of eternal life, which God... promised before the beginning of time,",
    devotional: "God’s promises outlast this moment. He made you a forever promise before time even began."
  },
  {
    verse: "Zechariah 9:12",
    text: "...Return to your fortress, you prisoners of hope...",
    devotional: "You’re not trapped by fear — you’re anchored by hope. And God’s still your stronghold."
  },
  {
    verse: "Proverbs 23:18",
    text: "There is surely a future hope for you, and your hope will not be cut off.",
    devotional: "Don’t believe the lie that it’s too late. God says your hope has a future, and it’s still alive."
  },
  {
    verse: "Colossians 1:27",
    text: "...Christ in you, the hope of glory.",
    devotional: "Hope isn’t a theory — it’s a person. And He lives in you. Glory is on the way."
  },
  {
    verse: "Psalm 39:7",
    text: "But now, Lord, what do I look for? My hope is in you.",
    devotional: "Look past what you can see. Hope looks higher — and God never disappoints."
  },
  {
    verse: "Isaiah 49:23",
    text: "...those who hope in me will not be disappointed.",
    devotional: "God’s track record is spotless. Hope in Him is a guaranteed return."
  },
  {
    verse: "Job 11:18",
    text: "You will be secure, because there is hope...",
    devotional: "Hope brings stability. Even in chaos, it grounds you. It says: this isn’t over — not yet."
  },
  {
    verse: "Psalm 147:11",
    text: "The Lord delights in those who fear him, who put their hope in his unfailing love.",
    devotional: "Your hope moves God’s heart. He delights in your trust — and He’s faithful to respond."
  },
  {
    verse: "Romans 4:18",
    text: "Against all hope, Abraham in hope believed...",
    devotional: "When there’s no reason left to hope — *hope anyway*. God loves to make the impossible happen."
  },
  {
    verse: "Acts 2:26",
    text: "Therefore my heart is glad and my tongue rejoices; my body also will rest in hope,",
    devotional: "Hope even reaches your body. It brings rest to stress, calm to chaos. Let it settle in you."
  },
  {
    verse: "Jeremiah 17:7",
    text: "But blessed is the one who trusts in the Lord, whose confidence is in him.",
    devotional: "Hope isn’t naive. It’s bold confidence in a God who never fails and never forgets."
  },
  {
    verse: "Psalm 62:5",
    text: "Yes, my soul, find rest in God; my hope comes from him.",
    devotional: "Talk to your soul. Tell it where hope lives — not in outcomes, but in God Himself."
  },
  {
    verse: "Romans 8:28",
    text: "...in all things God works for the good of those who love him...",
    devotional: "Hope hangs on even in the mess, because God is always working — always weaving good out of the chaos."
  },
  {
    verse: "Psalm 31:24",
    text: "Be strong and take heart, all you who hope in the Lord.",
    devotional: "Hope makes you braver. Take heart — God sees you, and He’s acting even now."
  },
  {
    verse: "2 Corinthians 4:17-18",
    text: "...what is seen is temporary, but what is unseen is eternal.",
    devotional: "Hope doesn’t fixate on what you see — it’s anchored in eternity. And that makes everything worth it."
  },
  {
    verse: "Galatians 5:5",
    text: "...we eagerly await by faith the righteousness for which we hope.",
    devotional: "Hope gives you something to wait *for*. What’s coming is greater than what’s been."
  },
  {
    verse: "1 Timothy 4:10",
    text: "That is why we labor and strive, because we have put our hope in the living God...",
    devotional: "You can keep going, not because life’s easy — but because God is *alive*, and your hope is in Him."
  }
],
"Confused": [
  {
    verse: "Proverbs 3:5-6",
    text: "Trust in the Lord with all your heart and lean not on your own understanding...",
    devotional: "When life stops making sense, lean into the One who sees the full picture. God’s plan is bigger than your perspective."
  },
  {
    verse: "1 Corinthians 14:33",
    text: "For God is not a God of confusion but of peace...",
    devotional: "If you’re drowning in confusion, know this — that’s not from God. His voice brings clarity and calm."
  },
  {
    verse: "James 1:5",
    text: "If any of you lacks wisdom, you should ask God... and it will be given to you.",
    devotional: "God isn’t hiding answers from you — He’s inviting you to ask. He gives wisdom freely to those who seek it."
  },
  {
    verse: "Isaiah 55:8-9",
    text: "For my thoughts are not your thoughts, neither are your ways my ways...",
    devotional: "God’s plan may not match your logic — and that’s a good thing. His view is higher. Trust it."
  },
  {
    verse: "Psalm 119:105",
    text: "Your word is a lamp for my feet, a light on my path.",
    devotional: "God won’t always show you the whole map — but He *will* light the next step."
  },
  {
    verse: "Jeremiah 33:3",
    text: "Call to me and I will answer you and tell you great and unsearchable things you do not know.",
    devotional: "Feeling stuck? Start by calling out. God’s not ignoring you — He wants the convo."
  },
  {
    verse: "Isaiah 30:21",
    text: "Whether you turn to the right or to the left, your ears will hear a voice... 'This is the way; walk in it.'",
    devotional: "When you’re unsure which way to go, God’s voice will guide you — quiet but sure."
  },
  {
    verse: "Psalm 25:4-5",
    text: "Show me your ways, Lord... guide me in your truth and teach me...",
    devotional: "Ask God to be your GPS. He’s not afraid of your questions — He welcomes them."
  },
  {
    verse: "2 Timothy 1:7",
    text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
    devotional: "Confusion can make you freeze — but God gave you power and clarity. Breathe. Move forward."
  },
  {
    verse: "Psalm 32:8",
    text: "I will instruct you and teach you in the way you should go...",
    devotional: "You don’t have to figure it all out alone. God promises to *teach* you — just stay close."
  },
  {
    verse: "Colossians 3:15",
    text: "Let the peace of Christ rule in your hearts...",
    devotional: "Peace is your compass. When confusion reigns, go where God’s peace leads."
  },
  {
    verse: "Romans 8:28",
    text: "...in all things God works for the good of those who love him...",
    devotional: "Even when things don’t make sense, God’s still at work — weaving purpose from the pieces."
  },
  {
    verse: "John 13:7",
    text: "Jesus replied, 'You do not realize now what I am doing, but later you will understand.'",
    devotional: "God’s not asking you to get it — He’s asking you to trust that *you will.*"
  },
  {
    verse: "Psalm 37:23-24",
    text: "The Lord makes firm the steps of the one who delights in him...",
    devotional: "God’s not just watching your steps — He’s *ordering* them. Even when they feel messy."
  },
  {
    verse: "Ecclesiastes 11:5",
    text: "As you do not know the path of the wind... so you cannot understand the work of God...",
    devotional: "Some things you won’t figure out. That’s okay. Trust the One who’s already 10 steps ahead."
  },
  {
    verse: "1 Peter 5:7",
    text: "Cast all your anxiety on him because he cares for you.",
    devotional: "Confusion creates anxiety. Don’t carry it — cast it. God’s hands are better than your shoulders."
  },
  {
    verse: "John 16:13",
    text: "But when he, the Spirit of truth, comes, he will guide you into all the truth...",
    devotional: "The Holy Spirit doesn’t leave you in the dark. He leads. Gently. Clearly. Faithfully."
  },
  {
    verse: "Proverbs 16:3",
    text: "Commit to the Lord whatever you do, and he will establish your plans.",
    devotional: "Give your plans to God — even the broken ones. He knows how to build better from the rubble."
  },
  {
    verse: "Psalm 143:8",
    text: "...Show me the way I should go, for to you I entrust my life.",
    devotional: "God’s not confused — and He’s not late. Ask Him to show the way. Then trust the pace."
  },
  {
    verse: "Isaiah 26:3",
    text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
    devotional: "Peace clears confusion. Focus your mind on God, and clarity will follow."
  },
  {
    verse: "James 3:17",
    text: "But the wisdom that comes from heaven is first of all pure; then peace-loving...",
    devotional: "God’s wisdom won’t lead you into chaos. Look for what brings peace, not pressure."
  },
  {
    verse: "Psalm 86:11",
    text: "Teach me your way, Lord, that I may rely on your faithfulness...",
    devotional: "God isn’t hiding the path — He’s *teaching* it. Keep listening, keep walking."
  },
  {
    verse: "Isaiah 42:16",
    text: "I will lead the blind by ways they have not known...",
    devotional: "Even when you can’t see clearly, God’s hand is still guiding. Step into the unknown with faith."
  },
  {
    verse: "Matthew 6:33",
    text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
    devotional: "Confusion fades when priorities shift. Put God first — and the rest starts falling into place."
  },
  {
    verse: "1 Corinthians 2:12",
    text: "What we have received is... the Spirit who is from God, so that we may understand what God has freely given us.",
    devotional: "You’re not left guessing. The Spirit reveals. Ask Him to unpack what seems unclear."
  },
  {
    verse: "Habakkuk 2:3",
    text: "Though it linger, wait for it; it will certainly come and will not delay.",
    devotional: "Confusion often comes from delay. But God’s timing isn’t slow — it’s perfect. Wait in hope."
  },
  {
    verse: "Psalm 119:130",
    text: "The unfolding of your words gives light; it gives understanding to the simple.",
    devotional: "Open the Word. Let light in. God’s clarity often comes through Scripture, not circumstances."
  },
  {
    verse: "Proverbs 20:24",
    text: "A person’s steps are directed by the Lord. How then can anyone understand their own way?",
    devotional: "You’re not failing if you’re confused — you’re just not God. And that’s exactly why you need Him."
  },
  {
    verse: "2 Corinthians 5:7",
    text: "For we live by faith, not by sight.",
    devotional: "You won’t always have a blueprint. That’s okay. Faith walks forward even when sight is blurry."
  },
  {
    verse: "Psalm 73:26",
    text: "My flesh and my heart may fail, but God is the strength of my heart and my portion forever.",
    devotional: "Even when your mind is cloudy and your heart is tired — God stays solid. He never wavers."
  }
],
"Left Out": [
  {
    verse: "Psalm 27:10",
    text: "Though my father and mother forsake me, the Lord will receive me.",
    devotional: "Even when people walk away, God stays. He sees you, chooses you, and welcomes you in."
  },
  {
    verse: "Isaiah 49:15-16",
    text: "I will not forget you! See, I have engraved you on the palms of my hands;",
    devotional: "You’re not invisible. God’s got your name etched into His hands — permanent, personal, priceless."
  },
  {
    verse: "Romans 8:38-39",
    text: "Nothing... will be able to separate us from the love of God...",
    devotional: "You may feel left out, but you are never unloved. God's love clings tighter than any crowd ever could."
  },
  {
    verse: "Deuteronomy 31:6",
    text: "...he will never leave you nor forsake you.",
    devotional: "When others leave, God stays. Always. That’s His promise — not just for someone else, but for *you*."
  },
  {
    verse: "John 14:18",
    text: "I will not leave you as orphans; I will come to you.",
    devotional: "Jesus doesn’t leave you on read. He shows up. Especially when everyone else disappears."
  },
  {
    verse: "Psalm 34:18",
    text: "The Lord is close to the brokenhearted...",
    devotional: "When you feel pushed out, God leans in closer. Rejection hurts — but His presence heals."
  },
  {
    verse: "1 Peter 2:9",
    text: "...you are a chosen people, a royal priesthood...",
    devotional: "You weren’t forgotten — you were *chosen.* God picked you for a purpose bigger than any popularity contest."
  },
  {
    verse: "Matthew 28:20",
    text: "Surely I am with you always, to the very end of the age.",
    devotional: "Always means always. Jesus never checks out, even when it feels like you’re the last one picked."
  },
  {
    verse: "Ephesians 1:4-5",
    text: "...he chose us... in love he predestined us...",
    devotional: "God chose you before anyone else had an opinion. That’s identity you can anchor your soul to."
  },
  {
    verse: "Psalm 139:13-14",
    text: "...you knit me together in my mother’s womb. I praise you because I am fearfully and wonderfully made...",
    devotional: "You weren’t a mistake. You’re handcrafted by God — seen, known, and intentionally designed."
  },
  {
    verse: "Galatians 1:10",
    text: "...If I were still trying to please people, I would not be a servant of Christ.",
    devotional: "You don’t need to chase approval. You’re already accepted — by the only One whose opinion really matters."
  },
  {
    verse: "Zephaniah 3:17",
    text: "He will take great delight in you... he will rejoice over you with singing.",
    devotional: "God throws a celebration over you — yes, *you*. When you feel left out, remember: heaven sings your name."
  },
  {
    verse: "Hebrews 13:5",
    text: "Never will I leave you; never will I forsake you.",
    devotional: "Double negatives from God mean double security: *never* alone. *Never* left out."
  },
  {
    verse: "Psalm 145:18",
    text: "The Lord is near to all who call on him...",
    devotional: "You don’t need a group to get God’s attention. Just call. He’s already near."
  },
  {
    verse: "Colossians 3:12",
    text: "Therefore, as God’s chosen people, holy and dearly loved...",
    devotional: "You’re not overlooked — you’re handpicked. Holy. Loved. Included."
  },
  {
    verse: "Isaiah 56:8",
    text: "The Sovereign Lord declares... 'I will gather still others...'",
    devotional: "God’s table has space for more — and you’re already invited. His circle never closes off."
  },
  {
    verse: "Luke 15:4",
    text: "...doesn’t he leave the ninety-nine in the open country and go after the lost sheep...",
    devotional: "Jesus doesn’t forget the one. If you feel left behind — know this: He’s coming *for you.*"
  },
  {
    verse: "James 4:8",
    text: "Come near to God and he will come near to you.",
    devotional: "God doesn’t play favorites — He draws close to anyone who comes. No rejection. No distance. Just love."
  },
  {
    verse: "John 10:3",
    text: "...He calls his own sheep by name and leads them out.",
    devotional: "You’re not just one in the crowd. God knows your *name*, and He leads you personally."
  },
  {
    verse: "Romans 10:11",
    text: "Anyone who believes in him will never be put to shame.",
    devotional: "Faith in Jesus doesn’t leave you hanging. Trust Him — He’ll never embarrass or exclude you."
  },
  {
    verse: "Ephesians 2:19",
    text: "...you are no longer foreigners and strangers, but fellow citizens with God’s people...",
    devotional: "You belong. You’re part of God’s house now — no exclusion, no outsider label."
  },
  {
    verse: "John 6:37",
    text: "...whoever comes to me I will never drive away.",
    devotional: "Jesus doesn’t slam doors. He opens them wide and says, 'Come in. There’s room for you here.'"
  },
  {
    verse: "Matthew 5:10-12",
    text: "Blessed are you when people insult you, persecute you... Rejoice and be glad...",
    devotional: "Being left out for doing right isn’t failure — it’s blessing. You’re in good company with Jesus."
  },
  {
    verse: "Isaiah 43:1",
    text: "Do not fear, for I have redeemed you; I have summoned you by name; you are mine.",
    devotional: "God doesn’t just tolerate you — He claims you. You belong to Him. That’s the highest inclusion possible."
  },
  {
    verse: "Psalm 31:7",
    text: "I will be glad and rejoice in your love, for you saw my affliction and knew the anguish of my soul.",
    devotional: "God sees the hidden hurt of being left out. And He cares — deeply."
  },
  {
    verse: "John 1:12",
    text: "Yet to all who did receive him... he gave the right to become children of God.",
    devotional: "When you’re in God’s family, you’re never on the outside. You’re His child — period."
  },
  {
    verse: "1 John 3:1",
    text: "See what great love the Father has lavished on us, that we should be called children of God!",
    devotional: "You’re not barely in. God *lavishes* His love on you. You’re His kid — loved loud and proud."
  },
  {
    verse: "Luke 6:22-23",
    text: "Blessed are you when people hate you, exclude you... because of the Son of Man.",
    devotional: "Even exclusion has a purpose. If you’re left out because of your faith, heaven calls you blessed."
  },
  {
    verse: "Mark 10:31",
    text: "But many who are first will be last, and the last first.",
    devotional: "God’s ranking flips the world’s. If you’re last in line now — don’t worry. Heaven moves you up front."
  },
  {
    verse: "Isaiah 41:9",
    text: "I have chosen you and have not rejected you.",
    devotional: "Let those words land: *not rejected.* You are chosen by name. That’s God's final word over your life."
  }
]

};

// --- UI SELECTION LOGIC ---
let selectedEmotion = "";

document.querySelectorAll('.emotion-btn').forEach(button => {
  button.addEventListener('click', () => {
    selectedEmotion = button.getAttribute('data-emotion');
    document.querySelectorAll('.emotion-btn').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    verseDisplay.innerText = "";
    devotionalDisplay.innerText = "";
    getVerseBtn.style.display = "inline-block";
    randomizeBtn.style.display = "none";
  });
});

// --- DOM ELEMENTS ---
const getVerseBtn = document.getElementById("getVerseBtn");
const randomizeBtn = document.getElementById("randomizeBtn");
const verseDisplay = document.getElementById("verseDisplay");
const devotionalDisplay = document.getElementById("devotionalDisplay");

const goToHomeBtn = document.getElementById("goToHomeBtn");
const goToJournalBtn = document.getElementById("goToJournalBtn");
const goToSongsBtn = document.getElementById("goToSongsBtn");
const journalSection = document.querySelector(".journal-section");
const mainContainer = document.querySelector(".container");
const songsSection = document.querySelector(".songs-section");
const backToMainBtn = document.getElementById("backToMainBtn");
const backToMainFromSongsBtn = document.getElementById("backToMainFromSongsBtn");

// --- SCRIPTURE DISPLAY LOGIC ---
function showRandomVerse(emotion) {
  const data = emotionData[emotion];
  if (!data || data.length === 0) {
    verseDisplay.innerText = "No scripture found for this emotion.";
    devotionalDisplay.innerText = "";
    return;
  }
  const { verse, text, devotional } = data[Math.floor(Math.random() * data.length)];
  verseDisplay.innerHTML = `
    <div style="text-align:left;">
      <strong style="display:block;">${verse}</strong>
      <span style="display:block; margin-top:2px; font-weight:normal;">${text || ''}</span>
    </div>
  `;
  devotionalDisplay.innerText = devotional;
}

// --- BUTTON EVENTS ---
getVerseBtn.addEventListener("click", () => {
  if (!selectedEmotion) {
    alert("Please select an emotion first!");
    return;
  }
  showRandomVerse(selectedEmotion);
  getVerseBtn.style.display = "none";
  randomizeBtn.style.display = "inline-block";
});

randomizeBtn.addEventListener("click", () => {
  if (selectedEmotion) showRandomVerse(selectedEmotion);
});

// --- Initial State ---
getVerseBtn.style.display = "inline-block";
randomizeBtn.style.display = "none";
verseDisplay.innerText = "";
devotionalDisplay.innerText = "";

// --- JOURNAL FEATURE ---

// Show/Hide sections
function showSection(section) {
  // Hide all
  mainContainer.style.display = "none";
  journalSection.style.display = "none";
  songsSection.style.display = "none";
  // Show chosen section
  if (section === "home") mainContainer.style.display = "block";
  if (section === "journal") journalSection.style.display = "block";
  if (section === "songs") songsSection.style.display = "block";
}

function setActiveSidebar(btnId) {
  ["goToHomeBtn", "goToJournalBtn", "goToSongsBtn"].forEach(id => {
    document.getElementById(id).classList.remove("active");
  });
  document.getElementById(btnId).classList.add("active");
}

// --- Sidebar navigation ---
goToHomeBtn.addEventListener("click", () => {
  showSection("home");
  setActiveSidebar("goToHomeBtn");
});
goToJournalBtn.addEventListener("click", () => {
  showSection("journal");
  loadJournalEntries();
  setActiveSidebar("goToJournalBtn");
});
goToSongsBtn.addEventListener("click", () => {
  showSection("songs");
  setActiveSidebar("goToSongsBtn");
});
backToMainBtn.addEventListener("click", () => {
  showSection("home");
  setActiveSidebar("goToHomeBtn");
});
backToMainFromSongsBtn.addEventListener("click", () => {
  showSection("home");
  setActiveSidebar("goToHomeBtn");
});

// --- Badge Logic (unchanged) ---
function showBadgePopup(message) {
  const popup = document.getElementById("badgePopup");
  const msg = document.getElementById("badgeMessage");
  msg.textContent = message;
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 3500);
}

// --- Journal Logic (unchanged except nav above) ---
document.getElementById("saveJournalBtn").addEventListener("click", () => {
  const entry = document.getElementById("journalEntry").value.trim();
  if (!entry) return alert("Write something first!");
  const date = new Date().toLocaleString();
  const newEntry = { entry, date };
  let journal = JSON.parse(localStorage.getItem("journalEntries") || "[]");
  journal.unshift(newEntry);
  localStorage.setItem("journalEntries", JSON.stringify(journal));
  document.getElementById("journalEntry").value = "";
  loadJournalEntries();

  const milestones = [3, 5, 10, 20, 30];
  const badgeMessages = {
    3:  "3 entries! You're off to a great start! 🌟",
    5:  "5 journals! Keep expressing yourself! 📝",
    10: "10 entries! Superstar writer! 🦸",
    20: "20 journals! Wow, you're on a roll! 🚀",
    30: "30+ entries! You're an inspiration! 🏅"
  };
  const entryCount = journal.length;
  if (milestones.includes(entryCount)) {
    showBadgePopup(badgeMessages[entryCount]);
  }
});

let currentJournalPage = 1;
const journalsPerPage = 5;

function loadJournalEntries(page = 1) {
  const journal = JSON.parse(localStorage.getItem("journalEntries") || "[]");
  const journalList = document.getElementById("journalList");
  const journalPagination = document.getElementById("journalPagination");
  const journalPrevBtn = document.getElementById("journalPrevBtn");
  const journalNextBtn = document.getElementById("journalNextBtn");
  const journalPageInfo = document.getElementById("journalPageInfo");

  if (journal.length === 0) {
    journalList.innerHTML = "<div style='color:#aaa'>No entries yet. Start your journal!</div>";
    journalPagination.style.display = "none";
    return;
  }

  const totalPages = Math.ceil(journal.length / journalsPerPage);
  currentJournalPage = Math.min(Math.max(page, 1), totalPages);

  const startIdx = (currentJournalPage - 1) * journalsPerPage;
  const endIdx = Math.min(startIdx + journalsPerPage, journal.length);

  journalList.innerHTML = journal
    .slice(startIdx, endIdx)
    .map(
      (e) => `<div class="journal-entry">
        <div class="journal-date">${e.date}</div>
        <div>${e.entry.replace(/\n/g, "<br>")}</div>
      </div>`
    )
    .join("");

  journalPagination.style.display = "flex";
  journalPrevBtn.style.visibility = currentJournalPage > 1 ? "visible" : "hidden";
  journalNextBtn.style.visibility = currentJournalPage < totalPages ? "visible" : "hidden";
  journalPrevBtn.style.display = "inline-block";
  journalNextBtn.style.display = "inline-block";
  journalPageInfo.textContent = `Page ${currentJournalPage} of ${totalPages}`;
}

document.getElementById("journalPrevBtn").addEventListener("click", () => {
  loadJournalEntries(currentJournalPage - 1);
});
document.getElementById("journalNextBtn").addEventListener("click", () => {
  loadJournalEntries(currentJournalPage + 1);
});

// --- Set initial UI state ---
showSection("home");
setActiveSidebar("goToHomeBtn");
if (journalSection.style.display !== "none") {
  loadJournalEntries();
}

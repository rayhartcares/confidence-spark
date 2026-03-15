/* =============================================
   CONFIDENCE SPARK — Brave Feelings Lab
   script.js
   ============================================= */

'use strict';

// =============================================
// STATE
// =============================================
const state = {
  childName: '',
  currentPage: 0,
  braveAction: '',
  selectedChoice: null,
  p10Selection: null,
  p20Selection: null,
  p22Selection: null,
};

// =============================================
// IMAGE PATHS
// =============================================
const pageImages = [
  'assets/images/CS_P01_unsure-at-desk.png',
  'assets/images/CS_P02_teacher-encourages.png',
  'assets/images/CS_P03_thinking-about-trying.png',
  'assets/images/CS_P04_others-answering.png',
  'assets/images/CS_P05_mentor-encourages.png',
  'assets/images/CS_P06_deep-breath-ready.png',
  'assets/images/CS_P07_raises-hand.png',
  'assets/images/CS_P08_shares-idea.png',
  'assets/images/CS_P09_trying-new-activity.png',
  'assets/images/CS_P10_meeting-new-friend.png',
  'assets/images/CS_P11_team-encouragement.png',
  'assets/images/CS_P12_project-finished-proud.png',
  'assets/images/CS_P13_brave-thoughts.png',
  'assets/images/CS_P14_small-brave-steps.png',
  'assets/images/CS_P15_remembering-past-wins.png',
  'assets/images/CS_P16_asking-for-help-girl.png',
  'assets/images/CS_P17_practice-and-improve.png',
  'assets/images/CS_P18_proud-after-trying.png',
  'assets/images/CS_P19_thinking-about-goal.png',
  'assets/images/CS_P20_writing-brave-goal.png',
  'assets/images/CS_P21_imagining-success-black-boy.png',
  'assets/images/CS_P22_ready-to-try-white-girl.png',
  'assets/images/CS_P23_first-brave-step-asian-boy.png',
  'assets/images/CS_P24_standing-taller-black-girl.png',
  'assets/images/CS_P25_confidence-spark-asian-boy.png',
  'assets/images/CS_P26_confidence-spark-black-and-white-girls.png',
  'assets/images/CS_P27_mentor-celebrates-black-and-white-boys.png',
  'assets/images/CS_P28_confident-child-encourages-unsure-child.png',
  'assets/images/CS_P29_celebrating-success.png',
  'assets/images/CS_P30_confident-group-finale.png',
];

// =============================================
// PAGE DATA
// =============================================
const PAGES = [
  // ——— PAGE 1 ———
  {
    phase: 1,
    phaseLabel: 'Phase 1: Understanding Confidence',
    title: 'Welcome to Confidence Spark!',
    emoji: '✨',
    image: pageImages[0],
    imageFallback: '😊',
    text: `Hello! I'm Benne Hart, and I am so glad you are here. This program is all about something really important — <strong>confidence</strong>. Confidence is what grows inside you every time you choose to try.`,
    benne: `Hey there, friend! Let's start by getting to know each other. Tell me your name below — because this whole adventure is just for YOU!`,
    interactive: {
      type: 'nameInput',
      label: 'What is your name?',
      placeholder: 'Type your name here...',
    },
  },
  {
    phase: 1,
    phaseLabel: 'Introduction',
    title: 'Parent & Teacher Guide',
    emoji: '📘',
    image: 'assets/images/benne-hart.png',
    imageFallback: '📘',
    text: `This program helps children understand that confidence grows through practice. It is designed to guide children step-by-step through recognizing nervous feelings, replacing doubt thoughts, and practicing brave actions.`,
    content: `
      <p><strong>Ways to use this program:</strong></p>
      <ul>
        <li>Let the child explore the program independently.</li>
        <li>Pause on reflection pages and ask the child what they think.</li>
        <li>Discuss the examples of courage and how they apply in real life.</li>
      </ul>

      <p><strong>Helpful discussion questions:</strong></p>
      <ul>
        <li>When was the last time you felt nervous to try something?</li>
        <li>What small brave step could you take today?</li>
        <li>What courage thought could help you next time?</li>
      </ul>

      <p><strong>Reminder:</strong> Confidence grows through trying, learning, and trying again.</p>
    `,
    benne: `Parents and teachers can use this page as a quick guide before the child continues through the program.`,
  },
  // ——— PAGE 2 ———
  {
    phase: 1,
    phaseLabel: 'Phase 1: Understanding Confidence',
    title: 'What Is Confidence?',
    emoji: '💡',
    image: pageImages[1],
    imageFallback: '🌟',
    text: `Confidence is not about being perfect. It is not about always getting things right. Confidence is about <strong>believing you can try</strong> — and that even if it is hard, you can learn and get better.`,
    benne: `Think about learning to ride a bike. The first time, you might fall. But you try again — and each time you try, you get a little bit better. That is confidence growing!`,
    highlights: [
      'Confidence = believing you can try and learn',
      'Confidence grows when you practice',
      'Everyone can build confidence — including you!',
    ],
  },
  // ——— PAGE 3 ———
  {
    phase: 1,
    phaseLabel: 'Phase 1: Understanding Confidence',
    title: 'Everyone Feels Unsure Sometimes',
    emoji: '🌈',
    image: pageImages[2],
    imageFallback: '🤔',
    text: `Have you ever felt nervous before doing something new? Maybe before speaking in class, trying a new sport, or meeting someone you don't know? That feeling is completely <strong>normal</strong>. Everyone — even very brave people — feels unsure sometimes.`,
    benne: `Feeling nervous doesn't mean something is wrong with you. It means you care! Even grown-ups feel nervous. The brave thing is to try anyway.`,
    interactive: {
      type: 'choices',
      question: 'When do you sometimes feel a little nervous?',
      choices: [
        { icon: '🎤', text: 'Speaking in front of the class' },
        { icon: '🤝', text: 'Meeting new people' },
        { icon: '🎯', text: 'Trying something new' },
        { icon: '🙋', text: 'Asking a question' },
      ],
      feedback: "It's totally okay to feel that way! All those feelings are normal — and courage means trying even when you feel nervous.",
      multiSelect: true,
    },
  },
  // ——— PAGE 4 ———
  {
    phase: 1,
    phaseLabel: 'Phase 1: Understanding Confidence',
    title: 'Courage Begins With Trying',
    emoji: '🦁',
    image: pageImages[3],
    imageFallback: '💪',
    text: `Here is something really important: <strong>courage is not the same as not being scared</strong>. Courage is what happens when you feel nervous — and you try anyway. Every single time you try something brave, your courage grows a little bigger.`,
    benne: `Courage is like a muscle. The more you use it, the stronger it gets. You don't have to do something huge. Even small brave actions count!`,
    highlights: [
      'Courage = trying even when you feel nervous',
      'Brave actions start small',
      'Every try makes you stronger',
    ],
  },
  // ——— PAGE 5 ———
  {
    phase: 1,
    phaseLabel: 'Phase 1: Understanding Confidence',
    title: 'Mistakes Help Your Brain Grow',
    emoji: '🧠',
    image: pageImages[4],
    imageFallback: '🌱',
    text: `Scientists have discovered something amazing: when you <strong>make a mistake and keep trying</strong>, your brain actually grows stronger. That is called a <strong>growth mindset</strong> — the belief that your brain is always learning and improving.`,
    benne: `Making mistakes doesn't mean you're not smart. It means you're learning! Every mistake is just your brain getting a workout. Keep trying — your brain is getting stronger!`,
    interactive: {
      type: 'choices',
      question: 'When you make a mistake, what is the BEST thing to do?',
      choices: [
        { icon: '🚫', text: 'Give up and never try again' },
        { icon: '🔄', text: 'Take a breath and try again' },
        { icon: '😤', text: 'Pretend it didn\'t happen' },
        { icon: '😢', text: 'Feel bad about yourself' },
      ],
      correct: 1,
      feedback: "Yes! Taking a breath and trying again is exactly what brave learners do. Your brain grows every time you try again!",
    },
  },
  // ——— PAGE 6 ———
  {
    phase: 2,
    phaseLabel: 'Phase 2: Understanding Doubt',
    title: 'A Story Begins',
    emoji: '📖',
    image: pageImages[5],
    imageFallback: '👧',
    text: `Meet Maya. Maya is 9 years old and she loves to draw. One day in class, the teacher asks a question. Maya thinks she knows the answer — but her heart starts to beat fast. Her hands feel a little sweaty. She wants to raise her hand, but something stops her.`,
    benne: `That feeling Maya has? It happens to almost every child. Let's find out what is going on inside Maya's body — and how she finds her courage.`,
  },
  // ——— PAGE 7 ———
  {
    phase: 2,
    phaseLabel: 'Phase 2: Understanding Doubt',
    title: 'Recognizing Nervous Feelings',
    emoji: '💓',
    image: pageImages[6],
    imageFallback: '🫀',
    text: `When we feel nervous, our body sends us <strong>signals</strong>. These feelings are not dangerous — they are just your body getting ready to do something important. Learning to recognize these signals helps you understand what you are feeling.`,
    benne: `Your body is very smart. Those nervous feelings are just your body saying, "Hey! This matters to me!" Once you notice them, you can take a breath and decide what to do next.`,
    steps: [
      'Heart beats faster',
      'Hands feel sweaty or shaky',
      'Tummy feels funny or full of butterflies',
      'Throat feels tight',
      'Face might feel warm',
    ],
    stepsTitle: 'Body signals of nervousness:',
  },
  // ——— PAGE 8 ———
  {
    phase: 2,
    phaseLabel: 'Phase 2: Understanding Doubt',
    title: 'What Are Doubt Thoughts?',
    emoji: '💭',
    image: pageImages[7],
    imageFallback: '😟',
    text: `Sometimes when we feel nervous, our mind starts to fill up with <strong>doubt thoughts</strong>. These are thoughts that tell us we can't do something — even when we actually can! Doubt thoughts try to stop us from trying.`,
    benne: `Doubt thoughts can feel very loud and very real. But here's the secret: they are just thoughts, not facts. You have the power to notice them — and then choose a better thought!`,
    thoughtCards: {
      doubt: [
        '"I can\'t do this."',
        '"What if I get it wrong?"',
        '"Everyone will laugh at me."',
        '"I\'m not smart enough."',
      ],
    },
  },
  // ——— PAGE 9 ———
  {
    phase: 2,
    phaseLabel: 'Phase 2: Understanding Doubt',
    title: 'Courage Thoughts',
    emoji: '⚡',
    image: pageImages[8],
    imageFallback: '💛',
    text: `For every doubt thought, there is a <strong>courage thought</strong> — a stronger, truer thought that helps you move forward. Courage thoughts don't pretend everything is easy. They just remind you that you CAN try.`,
    benne: `Courage thoughts are like a flashlight in a dark room. They help you see what is really possible. Let's look at some courage thoughts you can use anytime!`,
    thoughtCards: {
      courage: [
        '"I will give it a try."',
        '"Mistakes help me learn."',
        '"I can do hard things."',
        '"I am brave enough to try."',
      ],
    },
  },
  // ——— PAGE 10 ———
  {
    phase: 2,
    phaseLabel: 'Phase 2: Understanding Doubt',
    title: 'Choose the Stronger Thought',
    emoji: '🏆',
    image: pageImages[9],
    imageFallback: '🤜',
    text: `Maya's doubt thought says: <em>"What if I get the answer wrong? Everyone will laugh at me."</em><br><br>Now it is time for her — and for you — to choose a courage thought instead. Which thought should Maya choose?`,
    benne: `You get to choose your thoughts! It takes practice, but every time you swap a doubt thought for a courage thought, you are training your brain to be braver.`,
    interactive: {
      type: 'choices',
      question: 'Which is the COURAGE thought?',
      choices: [
        { icon: '🌧️', text: '"I\'m probably going to get it wrong anyway."' },
        { icon: '☀️', text: '"I\'ll try my best — that\'s what matters."' },
        { icon: '😔', text: '"Everyone is better at this than me."' },
        { icon: '😶', text: '"Maybe I should just stay quiet forever."' },
      ],
      correct: 1,
      feedback: "That's the courage thought! 'I'll try my best' is always stronger than giving up. Great job, brave thinker!",
    },
  },
  // ——— PAGE 11 ———
  {
    phase: 3,
    phaseLabel: 'Phase 3: Building Courage',
    title: 'Small Brave Actions',
    emoji: '🪜',
    image: pageImages[10],
    imageFallback: '🧗',
    text: `Big confidence comes from lots of <strong>small brave actions</strong>. You don't have to do something huge to be brave. In fact, courage almost always starts small — one tiny step at a time.`,
    benne: `Think of courage like climbing stairs. You don't jump to the top — you go one step at a time. Every small brave action is one step up the staircase!`,
    steps: [
      'Saying hello to someone new',
      'Raising your hand to answer a question',
      'Trying a new food, game, or activity',
      'Asking for help when you need it',
      'Sharing your idea in a group',
    ],
    stepsTitle: 'Small brave actions look like:',
  },
  // ——— PAGE 12 ———
  {
    phase: 3,
    phaseLabel: 'Phase 3: Building Courage',
    title: 'Confidence Body Language',
    emoji: '🧍',
    image: pageImages[11],
    imageFallback: '💃',
    text: `Did you know that the way you <strong>hold your body</strong> can actually help you feel more confident? When you stand tall and breathe slowly, your brain gets a message: "I can handle this." Your body and your mind work together!`,
    benne: `Try this right now, wherever you are: stand or sit up tall, look forward, and take one slow deep breath. Notice how it feels. That is your confidence body!`,
    steps: [
      'Stand tall — head up, shoulders back',
      'Look forward with calm, steady eyes',
      'Take a slow, deep breath in through your nose',
      'Breathe out slowly through your mouth',
      'Repeat until you feel a little calmer',
    ],
    stepsTitle: 'Your confidence body:',
  },
  // ——— PAGE 13 ———
  {
    phase: 3,
    phaseLabel: 'Phase 3: Building Courage',
    title: 'Try Again Power',
    emoji: '🔄',
    image: pageImages[12],
    imageFallback: '🌻',
    text: `One of the most powerful things you can do is <strong>try again</strong> after something doesn't go the way you hoped. Trying again shows that you are a learner — not a giver-upper. Every time you try again, your skill grows a little more.`,
    benne: `Did you know that almost every great inventor, athlete, and artist tried — and failed — many times before they succeeded? Thomas Edison tried over 1,000 ways to make a lightbulb before it worked. He didn't give up. Neither will you!`,
    highlights: [
      'Trying again is braver than giving up',
      'Each try teaches you something new',
      'Progress is more important than being perfect',
    ],
  },
  // ——— PAGE 14 ———
  {
    phase: 3,
    phaseLabel: 'Phase 3: Building Courage',
    title: 'Effort Is What Matters',
    emoji: '🌟',
    image: pageImages[13],
    imageFallback: '🏅',
    text: `Here is something really important: <strong>effort matters more than being perfect</strong>. When you work hard, when you keep trying, when you give your best — that is something to be proud of, no matter what the result is.`,
    benne: `I'm proud of you for every effort you make — not just when things go perfectly. Your trying is what matters most. Effort is how confidence grows!`,
    interactive: {
      type: 'choices',
      question: 'What should you be most proud of?',
      choices: [
        { icon: '🏆', text: 'Only getting perfect scores' },
        { icon: '💪', text: 'Working hard and giving your best effort' },
        { icon: '🎯', text: 'Being better than everyone else' },
        { icon: '😴', text: 'Not trying so you can\'t fail' },
      ],
      correct: 1,
      feedback: "Exactly right! Your effort is your superpower. It's not about being perfect — it's about giving your best!",
    },
  },
  // ——— PAGE 15 ———
  {
    phase: 3,
    phaseLabel: 'Phase 3: Building Courage',
    title: 'My Confidence Reflection',
    emoji: '💬',
    image: pageImages[14],
    imageFallback: '🪞',
    text: `Let's think about YOU for a moment. You have already shown courage just by doing this program! Now it's time to think about a time when you felt brave — or a time when you wish you had tried something.`,
    benne: `Remembering your brave moments helps your brain believe you can be brave again. Every time you look back at a win — even a small one — you charge up your confidence!`,
    interactive: {
      type: 'reflection',
      prompt: 'Tell me about a time when you tried something even though it felt hard. What happened?',
      placeholder: 'Write your thoughts here...',
    },
  },
  // ——— PAGE 16 ———
  {
    phase: 4,
    phaseLabel: 'Phase 4: Action Builds Confidence',
    title: 'Practice Makes Progress',
    emoji: '🎯',
    image: pageImages[15],
    imageFallback: '🔭',
    text: `Confidence doesn't come from watching. It comes from <strong>doing</strong>. When you practice something — even something that feels hard — you are building real skill. And skill leads to real confidence. Scientists call this a <strong>mastery experience</strong>.`,
    benne: `Every time you do something that felt hard before, your brain says, "Hey, I can do that!" That feeling of "I can do it" is real confidence — and it only comes from trying!`,
    highlights: [
      'Practice = confidence growing',
      'Even small successes count',
      'Doing something brave teaches your brain: "I can do this!"',
    ],
  },
  // ——— PAGE 17 ———
  {
    phase: 4,
    phaseLabel: 'Phase 4: Action Builds Confidence',
    title: 'Maya Decides to Try',
    emoji: '✋',
    image: pageImages[16],
    imageFallback: '🙋',
    text: `Remember Maya? She is still sitting in class, heart beating fast. The teacher asks the question again. Maya takes a deep breath. She uses her confidence body. She swaps her doubt thought for a courage thought: <em>"I'll try my best — that's what matters."</em><br><br>And then... Maya raises her hand.`,
    benne: `That took SO much courage! It doesn't matter if Maya's answer was perfect or not. What matters is that she TRIED. That is a huge brave action. And her brain will remember it!`,
  },
  // ——— PAGE 18 ———
  {
    phase: 4,
    phaseLabel: 'Phase 4: Action Builds Confidence',
    title: 'A Positive Response',
    emoji: '👏',
    image: pageImages[17],
    imageFallback: '🎉',
    text: `Maya shares her answer. Her teacher smiles and says, <em>"That was a great thought, Maya! I love how you tried."</em> Maya feels a warm glow inside. It's not just about getting the answer right — it's about hearing: <strong>"You tried, and that matters."</strong>`,
    benne: `Effort always deserves encouragement — from others AND from yourself. Next time you try something brave, say to yourself: "I'm proud of me for trying." Because you should be!`,
    highlights: [
      'Trying earns praise — even when it\'s not perfect',
      'Kind encouragement helps confidence grow',
      'You can encourage yourself too!',
    ],
  },
  // ——— PAGE 19 ———
  {
    phase: 4,
    phaseLabel: 'Phase 4: Action Builds Confidence',
    title: 'Learning From Every Try',
    emoji: '📚',
    image: pageImages[18],
    imageFallback: '🔍',
    text: `Even when things don't go perfectly, there is always something to learn. Every time you try — whether you succeed or not — your brain collects information. That information helps you do better next time. There is no such thing as a wasted try.`,
    benne: `Every try is a step forward, even when it doesn't feel that way. Think of trying like planting seeds. Some days you don't see anything. But underground, roots are growing. Your confidence is growing too!`,
    interactive: {
      type: 'reflection',
      prompt: 'What is one thing you\'d like to learn or get better at? What is one small step you could take?',
      placeholder: 'Think about it and write it here...',
    },
  },
  // ——— PAGE 20 ———
  {
    phase: 4,
    phaseLabel: 'Phase 4: Action Builds Confidence',
    title: 'Choose a Brave Action',
    emoji: '🎲',
    image: pageImages[19],
    imageFallback: '✍️',
    text: `Now it's YOUR turn! Every great confident person started by picking one small brave action and trying it. It doesn't have to be big. The most important thing is that it feels a little challenging — and you do it anyway.`,
    benne: `Pick one brave action you'd like to try this week. It can be something small. Something that makes you feel a tiny bit nervous. That nervous feeling means it matters — and that makes it perfect!`,
    interactive: {
      type: 'choices',
      question: 'Which brave action will you try this week?',
      choices: [
        { icon: '🙋', text: 'Raise my hand in class at least once' },
        { icon: '🤝', text: 'Say hello to someone new' },
        { icon: '🎭', text: 'Try a new activity or club' },
        { icon: '🗣️', text: 'Share my idea in a group' },
      ],
      multiSelect: false,
      saveAs: 'p20Selection',
      feedback: "Great choice! That is a perfect brave action. Remember: small and brave is all it takes to start building confidence!",
    },
  },
  // ——— PAGE 21 ———
  {
    phase: 5,
    phaseLabel: 'Phase 5: Practicing Confidence',
    title: 'Brave Action Examples',
    emoji: '🌍',
    image: pageImages[20],
    imageFallback: '🧒',
    text: `Brave actions come in all shapes and sizes. They are different for everyone — because everyone's fears are a little different. What feels brave for one person might feel easy for another. And that is perfectly okay. Your brave action is <strong>YOUR</strong> brave action.`,
    benne: `Look at these examples. Any one of these — if it feels a little scary — counts as a real brave action. You don't need to do them all. Just one step forward is enough!`,
    steps: [
      'Answer a question in class even if you\'re not 100% sure',
      'Sign up for something new at school',
      'Tell a friend or adult something you\'ve been afraid to say',
      'Try a food, game, or activity for the first time',
      'Ask for help instead of giving up',
      'Practice something you\'re not good at yet — on purpose',
    ],
    stepsTitle: 'Brave actions kids just like you have tried:',
  },
  // ——— PAGE 22 ———
  {
    phase: 5,
    phaseLabel: 'Phase 5: Practicing Confidence',
    title: 'Choose Your Challenge',
    emoji: '🎯',
    image: pageImages[21],
    imageFallback: '🏋️',
    text: `Now let's make it more personal. Think about your own life — your class, your home, your friendships. Where is one place that courage could open a door for you? Where could one small brave action make a difference?`,
    benne: `This is your challenge. It belongs to you. Nobody else has to know about it — it's just between you and your growing confidence. Pick the one that makes your heart beat just a little faster!`,
    interactive: {
      type: 'choices',
      question: 'Where do YOU want to grow more confident?',
      choices: [
        { icon: '🏫', text: 'At school — speaking up or trying harder' },
        { icon: '🏠', text: 'At home — trying something new' },
        { icon: '👥', text: 'With friends — being more myself' },
        { icon: '🎨', text: 'In a hobby or activity' },
      ],
      multiSelect: false,
      saveAs: 'p22Selection',
      feedback: "Amazing! That's a perfect place to grow. Confidence blooms where you decide to plant it.",
    },
  },
  // ——— PAGE 23 ———
  {
    phase: 5,
    phaseLabel: 'Phase 5: Practicing Confidence',
    title: 'Benne Hart Celebrates You',
    emoji: '🎊',
    image: pageImages[22],
    imageFallback: '🥳',
    text: `You have done so much in this program! You learned what confidence really means. You discovered that nervousness is normal. You practiced choosing courage thoughts. You picked a brave action. You are already becoming braver — I can see it!`,
    benne: `I am so proud of you. You didn't give up. You kept going through every page, every question, every reflection. THAT is courage. And you showed it just by being here!`,
  },
  // ——— PAGE 24 ———
  {
    phase: 5,
    phaseLabel: 'Phase 5: Practicing Confidence',
    title: 'A Word of Courage',
    emoji: '📜',
    image: pageImages[23],
    imageFallback: '✨',
    text: `Throughout history, brave people have drawn strength from words of encouragement — from friends, from family, and from faith. Here is a verse that has helped many people find courage when they needed it most:`,
    benne: `These words are for you. Whenever you feel doubt creeping in, remember: you are not alone. Courage is something you can ask for, practice, and grow — one day, one try at a time.`,
    scripture: {
      verse: 'Be strong and of good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.',
      ref: 'Joshua 1:9 — ASV',
    },
  },
  // ——— PAGE 25 ———
  {
    phase: 5,
    phaseLabel: 'Phase 5: Practicing Confidence',
    title: 'The Confidence Habit',
    emoji: '🌿',
    image: pageImages[24],
    imageFallback: '🌳',
    text: `Confidence is not something you find one day and keep forever. It is a <strong>habit</strong> — something that grows stronger every time you choose to try. Like any habit, the more you practice, the more natural it becomes.`,
    benne: `Here's the secret to building a confidence habit: after every brave action — no matter how small — notice it. Say to yourself: "I did that. I was brave." That noticing is what makes it stick!`,
    highlights: [
      'Confidence is built one try at a time',
      'Notice your brave moments — they matter!',
      'The more you try, the easier trying becomes',
    ],
  },
  // ——— PAGE 26 ———
  {
    phase: 6,
    phaseLabel: 'Phase 6: Reinforcement & Celebration',
    title: 'Your Confidence Spark',
    emoji: '⚡',
    image: pageImages[25],
    imageFallback: '💥',
    text: `Inside every child — including you — there is a <strong>confidence spark</strong>. It is the part of you that believes you can try. That wonders what might happen if you go for it. That feels proud when you do something brave. That spark was there all along. This program just helped you see it.`,
    benne: `Your confidence spark is yours. Nobody can take it away. Even when you feel doubt, the spark is still there — waiting for you to remember it and try again. I've seen it. It's real. And it's powerful!`,
  },
  // ——— PAGE 27 ———
  {
    phase: 6,
    phaseLabel: 'Phase 6: Reinforcement & Celebration',
    title: 'What Will You Try?',
    emoji: '🔭',
    image: pageImages[26],
    imageFallback: '🌠',
    text: `You have come so far! Now it's time for the most important question of this whole program. Not "Are you confident?" but rather: <strong>"What is ONE thing you will try?"</strong>`,
    benne: `This is the moment where confidence begins to become real. You've learned the tools. You've practiced the thoughts. Now — write it down. One thing. One try. That is all it takes to start.`,
    interactive: {
      type: 'reflection',
      prompt: 'What is ONE brave thing you will try — today, this week, or soon?',
      placeholder: 'I will try...',
    },
  },
  // ——— PAGE 28 ———
  {
    phase: 6,
    phaseLabel: 'Phase 6: Reinforcement & Celebration',
    title: 'A Growth Reminder',
    emoji: '🌱',
    image: pageImages[27],
    imageFallback: '🌻',
    text: `Before you go, let's make sure you remember something important: <strong>mistakes are not the end of the road — they are part of the journey</strong>. Every mistake is your brain learning. Every fall is practice for getting back up. Every "no" might lead to a "yes" later.`,
    benne: `You will make mistakes. Things won't always go the way you hope. But that's okay! The goal is not to be perfect. The goal is to keep going. And I know you can do that!`,
    highlights: [
      'Mistakes help you learn and grow',
      'Getting back up is always brave',
      'Progress > Perfection — always',
    ],
  },
  // ——— PAGE 29 ———
  {
    phase: 6,
    phaseLabel: 'Phase 6: Reinforcement & Celebration',
    title: 'Your Confidence Journey',
    emoji: '🗺️',
    image: pageImages[28],
    imageFallback: '🚀',
    text: `Look at everything you have learned and practiced in this program! You now have a full set of confidence tools that you can use anytime, anywhere. Whenever doubt shows up — you will know exactly what to do.`,
    benne: `Remember the path: Try → Learn → Grow → Confidence. Each step leads to the next. And it all starts with one brave choice: to try.`,
    steps: [
      'TRY — Take a brave action, even a small one',
      'LEARN — Notice what happened. What did you discover?',
      'GROW — Your skill, your brain, and your confidence all grow',
      'CONFIDENCE — You believe in yourself a little more each time',
    ],
    stepsTitle: 'The Confidence Cycle:',
  },
  // ——— PAGE 30 ———
  {
    phase: 6,
    phaseLabel: 'Phase 6: Reinforcement & Celebration',
    title: 'You Did It!',
    emoji: '🏆',
    image: pageImages[29],
    imageFallback: '🎉',
    completion: true,
  },
];

// =============================================
// DOM HELPERS
// =============================================
const $ = (id) => document.getElementById(id);

// =============================================
// MENU HELPERS
// =============================================
function openMenu() {
  $('program-menu')?.classList.add('open');
  $('program-menu-overlay')?.classList.add('show');
  $('menu-toggle')?.setAttribute('aria-expanded', 'true');
  $('program-menu')?.setAttribute('aria-hidden', 'false');
  // Rebuild roadmap every time menu opens so status is always fresh
  buildJourneyRoadmap();
}

function closeMenu() {
  $('program-menu')?.classList.remove('open');
  $('program-menu-overlay')?.classList.remove('show');
  $('menu-toggle')?.setAttribute('aria-expanded', 'false');
  $('program-menu')?.setAttribute('aria-hidden', 'true');
}

function populatePageJumpSelect() {
  const select = $('page-jump-select');
  if (!select) return;
  select.innerHTML = '<option value="">Select a page...</option>';
  PAGES.forEach((page, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `Page ${index + 1} — ${page.title}`;
    select.appendChild(option);
  });
}

function jumpToSelectedPage() {
  const select = $('page-jump-select');
  if (!select || select.value === '') return;
  const pageIndex = Number(select.value);
  closeMenu();
  renderPage(pageIndex);
}

function showSparkSuccess() {
  const el = document.getElementById('spark-success');
  if (!el) return;
  el.classList.remove('show');
  // small tick so CSS transition re-triggers if called back-to-back
  requestAnimationFrame(() => {
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 1200);
  });
}

function exitProgram() {
  // Exit = confirm + full state reset + return to password screen
  const confirmed = window.confirm('Exit the program? This will clear all your progress.');
  if (!confirmed) return;
  // Full state reset
  state.childName = '';
  state.currentPage = 0;
  state.braveAction = '';
  state.selectedChoice = null;
  state.p10Selection = null;
  state.p20Selection = null;
  state.p22Selection = null;
  closeMenu();
  $('app')?.classList.remove('active');
  $('password-screen').style.display = 'flex';
  $('password-input').value = '';
  $('password-input').focus();
}

function logOff() {
  // Log Off = return to password screen only — progress is preserved
  closeMenu();
  $('app')?.classList.remove('active');
  $('password-screen').style.display = 'flex';
  $('password-input').value = '';
  $('password-input').focus();
}

// =============================================
// JOURNEY ROADMAP
// =============================================
function buildJourneyRoadmap() {
  const container = $('journey-roadmap');
  if (!container) return;
  container.innerHTML = '';

  // Group by phase NUMBER, not raw phaseLabel string.
  // This keeps pages like "Introduction" (phase 1) inside Phase 1
  // rather than splitting them into a separate header block.
  const phaseMap = new Map(); // phase number → { label, pages[] }

  PAGES.forEach((page, index) => {
    const phaseNum = Number.isInteger(page.phase) ? page.phase : 0;
    if (!phaseMap.has(phaseNum)) {
      // Use the first proper phaseLabel that is NOT 'Introduction'
      // as the display label for this phase group.
      phaseMap.set(phaseNum, { label: '', pages: [] });
    }
    const group = phaseMap.get(phaseNum);
    // Adopt this page's phaseLabel as the group label only if we
    // haven't set one yet, or if the current label looks generic.
    if (!group.label || group.label === 'Introduction' || group.label === 'General') {
      group.label = page.phaseLabel || `Phase ${phaseNum}`;
    }
    group.pages.push({ page, index });
  });

  // Convert map to sorted array so phases render in order
  const phases = Array.from(phaseMap.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([, group]) => group);

  phases.forEach(phase => {
    // Calculate phase-level status from page indices
    const indices = phase.pages.map(p => p.index);
    const total = indices.length;
    const completedCount = indices.filter(i => i < state.currentPage).length;
    const containsCurrent = indices.includes(state.currentPage);

    let phaseStatus, phaseStatusClass;
    if (completedCount === total) {
      phaseStatus = 'Completed';
      phaseStatusClass = 'phase-badge--completed';
    } else if (completedCount > 0 || containsCurrent) {
      phaseStatus = 'In Progress';
      phaseStatusClass = 'phase-badge--inprogress';
    } else {
      phaseStatus = 'Not Started';
      phaseStatusClass = 'phase-badge--notstarted';
    }

    // Phase header row
    const phaseHeader = document.createElement('div');
    phaseHeader.className = 'roadmap-phase-header';

    const phaseLabel = document.createElement('span');
    phaseLabel.className = 'roadmap-phase-label';
    phaseLabel.textContent = phase.label;

    const phaseBadge = document.createElement('span');
    phaseBadge.className = `roadmap-phase-badge ${phaseStatusClass}`;
    phaseBadge.textContent = phaseStatus;

    phaseHeader.appendChild(phaseLabel);
    phaseHeader.appendChild(phaseBadge);
    container.appendChild(phaseHeader);

    // Pages in this phase
    phase.pages.forEach(({ page, index }) => {
      const item = document.createElement('button');
      item.className = 'roadmap-item';

      const status = index < state.currentPage ? 'completed'
                   : index === state.currentPage ? 'current'
                   : 'upcoming';
      item.classList.add(`roadmap-item--${status}`);

      const dot = document.createElement('span');
      dot.className = 'roadmap-dot';
      if (status === 'completed') dot.textContent = '✓';
      else if (status === 'current') dot.textContent = '⭐';
      else dot.textContent = '○';

      const title = document.createElement('span');
      title.className = 'roadmap-title';
      title.textContent = page.title || `Page ${index + 1}`;

      item.appendChild(dot);
      item.appendChild(title);

      item.addEventListener('click', () => {
        closeMenu();
        renderPage(index);
      });

      container.appendChild(item);
    });
  });
}

function bindMenuControls() {
  $('menu-toggle')?.addEventListener('click', openMenu);
  $('menu-close')?.addEventListener('click', closeMenu);
  $('program-menu-overlay')?.addEventListener('click', closeMenu);
  $('page-jump-btn')?.addEventListener('click', jumpToSelectedPage);
  $('page-jump-select')?.addEventListener('change', jumpToSelectedPage);
  $('restart-btn')?.addEventListener('click', () => {
    closeMenu();
    restartProgram();
  });
  $('logoff-btn')?.addEventListener('click', logOff);
  $('exit-btn')?.addEventListener('click', exitProgram);
}

// =============================================
// PASSWORD
// =============================================
function initPassword() {
  const CORRECT = 'Psalm34Verse7$';

  $('password-submit').addEventListener('click', tryPassword);
  $('password-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') tryPassword();
  });

  function tryPassword() {
    const val = $('password-input').value.trim();
    const errorEl = $('password-error');
    if (val === CORRECT) {
      $('password-screen').style.display = 'none';
      const app = $('app');
      app.classList.add('active');
      populatePageJumpSelect();
      closeMenu();
      renderPage(0);
    } else {
      errorEl.textContent = 'Please enter the correct program password.';
      errorEl.classList.add('show');
      $('password-input').value = '';
      $('password-input').focus();
      setTimeout(() => errorEl.classList.remove('show'), 3000);
    }
  }
}

// =============================================
// RENDER ENGINE
// =============================================
function renderPage(index, direction) {
  // direction: 'next' | 'back' | undefined (no animation, e.g. jump/restart)
  state.currentPage = index;
  const page = PAGES[index];

  // Update progress bar
  const pct = ((index + 1) / PAGES.length) * 100;
  document.querySelector('.progress-bar-inner').style.width = pct + '%';
  document.querySelector('.progress-label').textContent = `Page ${index + 1} of ${PAGES.length}`;
  if ($('page-jump-select')) $('page-jump-select').value = String(index);

  const container = $('page-container');

  // Exit animation on existing card
  const existingCard = container.querySelector('.page-card');
  if (existingCard && direction) {
    const exitClass = direction === 'next' ? 'exit-to-left' : 'exit-to-right';
    existingCard.classList.add(exitClass);
  }

  function buildAndInsert() {
    container.innerHTML = '';

  if (page.completion) {
    container.appendChild(buildCompletionScreen());
    return;
  }

  const card = document.createElement('div');
  card.className = 'page-card';

  // Image section
  const imageWrap = document.createElement('div');
  imageWrap.className = 'page-image-wrap';
  const img = document.createElement('img');
  img.src = page.image;
  img.alt = page.title;
  img.onerror = function () {
    this.style.display = 'none';
    const placeholder = document.createElement('div');
    placeholder.className = 'page-image-placeholder';
    placeholder.textContent = page.imageFallback || '✨';
    imageWrap.appendChild(placeholder);
  };
  imageWrap.appendChild(img);
  card.appendChild(imageWrap);

  // Body
  const body = document.createElement('div');
  body.className = 'page-body';

  // Phase badge
  if (page.phaseLabel || page.emoji) {
    const badge = document.createElement('div');
    const phaseClass = Number.isInteger(page.phase) ? ` phase-${page.phase}` : '';
    badge.className = `phase-badge${phaseClass}`;
    badge.innerHTML = `<span>${page.emoji || '📘'}</span><span>${page.phaseLabel || ''}</span>`;
    body.appendChild(badge);
  }

  // Page number
  const num = document.createElement('div');
  num.className = 'page-number';
  num.textContent = `Page ${index + 1}`;
  body.appendChild(num);

  // Title
  const title = document.createElement('h1');
  title.className = 'page-title';
  title.textContent = page.title;
  body.appendChild(title);

  // Main text
  if (page.text) {
    const text = document.createElement('p');
    text.className = 'page-text';
    text.innerHTML = page.text;
    body.appendChild(text);
  }

  // Rich content block
  if (page.content) {
    const content = document.createElement('div');
    content.className = 'page-content';
    content.innerHTML = page.content;
    body.appendChild(content);
  }

  // Steps
  if (page.steps) {
    if (page.stepsTitle) {
      const stepsLabel = document.createElement('p');
      stepsLabel.className = 'steps-title';
      stepsLabel.textContent = page.stepsTitle;
      body.appendChild(stepsLabel);
    }
    const list = document.createElement('ul');
    list.className = 'steps-list';
    page.steps.forEach((step, i) => {
      const li = document.createElement('li');
      const num = document.createElement('div');
      num.className = 'step-num';
      num.textContent = i + 1;
      const span = document.createElement('span');
      span.textContent = step;
      li.appendChild(num);
      li.appendChild(span);
      list.appendChild(li);
    });
    body.appendChild(list);
  }

  // Highlights
  if (page.highlights) {
    const hBox = document.createElement('div');
    hBox.className = 'highlight-box';
    page.highlights.forEach(h => {
      const p = document.createElement('p');
      p.innerHTML = `✓ ${h}`;
      hBox.appendChild(p);
    });
    body.appendChild(hBox);
  }

  // Thought Cards
  if (page.thoughtCards) {
    const grid = document.createElement('div');
    grid.className = 'thought-cards';
    if (page.thoughtCards.doubt) {
      const card = buildThoughtCard('doubt', '😟', 'Doubt Thoughts', page.thoughtCards.doubt);
      grid.appendChild(card);
      // Add empty courage card placeholder
      const empty = document.createElement('div');
      empty.className = 'thought-card courage';
      empty.innerHTML = `<div class="thought-card-emoji">💪</div><div class="thought-card-label">Courage Thought</div><p class="thought-card-text" style="color:var(--text-light);font-style:italic;">Coming up next...</p>`;
      grid.appendChild(empty);
    }
    if (page.thoughtCards.courage) {
      const cCard = buildThoughtCard('courage', '⚡', 'Courage Thoughts', page.thoughtCards.courage);
      grid.appendChild(cCard);
      const empty = document.createElement('div');
      empty.className = 'thought-card doubt';
      empty.innerHTML = `<div class="thought-card-emoji">😟</div><div class="thought-card-label">Doubt Thought</div><p class="thought-card-text" style="color:var(--text-light);font-style:italic;">We already swapped it!</p>`;
      grid.appendChild(empty);
    }
    body.appendChild(grid);
  }

  // Benne box
  if (page.benne) {
    const benneBox = document.createElement('div');
    benneBox.className = 'benne-box';

    const avatarImg = document.createElement('img');
    avatarImg.src = 'assets/images/benne-hart.png';
    avatarImg.alt = 'Benne Hart';
    avatarImg.className = 'benne-avatar';
    avatarImg.onerror = function () {
      this.style.display = 'none';
      const placeholder = document.createElement('div');
      placeholder.className = 'benne-avatar-placeholder';
      placeholder.textContent = 'BH';
      benneBox.insertBefore(placeholder, this.nextSibling);
    };
    benneBox.appendChild(avatarImg);

    const textWrap = document.createElement('div');
    textWrap.className = 'benne-text-wrap';
    textWrap.innerHTML = `<div class="benne-name">Benne Hart Says:</div><div class="benne-says">${page.benne}</div>`;
    benneBox.appendChild(textWrap);
    body.appendChild(benneBox);
  }

  // Scripture
  if (page.scripture) {
    const sBox = document.createElement('div');
    sBox.className = 'scripture-box';
    sBox.innerHTML = `<p class="scripture-verse">"${page.scripture.verse}"</p><div class="scripture-ref">— ${page.scripture.ref}</div>`;
    body.appendChild(sBox);
  }

  // Interactive
  if (page.interactive) {
    body.appendChild(buildInteractive(page.interactive, index));
  }

  // Navigation
  body.appendChild(buildNav(index));

  card.appendChild(body);
  container.appendChild(card);

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Animate card entrance
  if (direction) {
    const enterClass = direction === 'next' ? 'enter-from-right' : 'enter-from-left';
    card.classList.add(enterClass);
    // Force reflow so transition fires
    card.getBoundingClientRect();
    card.classList.add('enter-active');
    // Clean up helper classes after transition completes
    card.addEventListener('transitionend', () => {
      card.classList.remove(enterClass, 'enter-active');
    }, { once: true });
  }
  } // end buildAndInsert

  if (existingCard && direction) {
    // Wait for exit to finish, then swap
    setTimeout(buildAndInsert, 200);
  } else {
    buildAndInsert();
  }
}

// =============================================
// THOUGHT CARD BUILDER
// =============================================
function buildThoughtCard(type, emoji, label, items) {
  const card = document.createElement('div');
  card.className = `thought-card ${type}`;
  card.innerHTML = `<div class="thought-card-emoji">${emoji}</div><div class="thought-card-label">${label}</div>`;
  items.forEach(item => {
    const p = document.createElement('p');
    p.className = 'thought-card-text';
    p.style.marginBottom = '6px';
    p.textContent = item;
    card.appendChild(p);
  });
  return card;
}

// =============================================
// INTERACTIVE BUILDER
// =============================================
function buildInteractive(config, pageIndex) {
  const wrap = document.createElement('div');

  if (config.type === 'nameInput') {
    const div = document.createElement('div');
    div.className = 'name-input-wrap';
    const label = document.createElement('label');
    label.textContent = config.label;
    label.setAttribute('for', 'child-name-input');
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'child-name-input';
    input.className = 'name-input';
    input.placeholder = config.placeholder;
    input.value = state.childName;
    input.addEventListener('input', (e) => {
      state.childName = e.target.value.trim();
    });
    div.appendChild(label);
    div.appendChild(input);
    wrap.appendChild(div);
  }

  if (config.type === 'choices') {
    const q = document.createElement('p');
    q.className = 'choices-question';
    q.textContent = config.question || '';
    wrap.appendChild(q);

    const choicesWrap = document.createElement('div');
    choicesWrap.className = 'choices-wrap';

    config.choices.forEach((choice, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.innerHTML = `<div class="choice-icon">${choice.icon}</div><span>${choice.text}</span>`;

      btn.addEventListener('click', () => {
        if (config.multiSelect) {
          btn.classList.toggle('selected');
          showFeedback(feedbackEl, config.feedback, 'positive');
        } else {
          // Single select
          choicesWrap.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('selected', 'correct', 'wrong'));
          if (config.correct !== undefined) {
            if (i === config.correct) {
              btn.classList.add('correct');
              showFeedback(feedbackEl, config.feedback, 'positive');
            } else {
              btn.classList.add('wrong');
              choicesWrap.querySelectorAll('.choice-btn')[config.correct].classList.add('correct');
              showFeedback(feedbackEl, config.feedback, 'neutral');
            }
          } else {
            btn.classList.add('selected');
            if (config.saveAs) state[config.saveAs] = choice.text;
            showFeedback(feedbackEl, config.feedback, 'positive');
          }
        }
      });

      choicesWrap.appendChild(btn);
    });

    wrap.appendChild(choicesWrap);

    const feedbackEl = document.createElement('div');
    feedbackEl.className = 'feedback-msg';
    wrap.appendChild(feedbackEl);
  }

  if (config.type === 'reflection') {
    const div = document.createElement('div');
    div.className = 'reflection-wrap';
    const label = document.createElement('label');
    label.className = 'reflection-label';
    label.textContent = config.prompt;
    const textarea = document.createElement('textarea');
    textarea.className = 'reflection-textarea';
    textarea.placeholder = config.placeholder;
    div.appendChild(label);
    div.appendChild(textarea);
    wrap.appendChild(div);
  }

  return wrap;
}

function showFeedback(el, text, type) {
  el.textContent = text;
  el.className = `feedback-msg ${type} show`;
}

// =============================================
// NAVIGATION
// =============================================
function buildNav(index) {
  const nav = document.createElement('div');
  nav.className = 'page-nav';

  if (index > 0) {
    const back = document.createElement('button');
    back.className = 'btn-back';
    back.innerHTML = '← Back';
    back.addEventListener('click', () => renderPage(index - 1, 'back'));
    nav.appendChild(back);
  }

  const next = document.createElement('button');
  next.className = 'btn-next';

  if (index === PAGES.length - 2) {
    next.innerHTML = 'See My Results! 🏆';
  } else {
    next.innerHTML = 'Next →';
  }

  next.addEventListener('click', () => {
    // Capture name if on page 1 before moving forward
    if (index === 0) {
      const nameInput = document.getElementById('child-name-input');
      if (nameInput) state.childName = nameInput.value.trim();
    }
    // Only show toast when not going to the completion page
    if (index < PAGES.length - 2) showSparkSuccess();
    renderPage(index + 1, 'next');
  });

  nav.appendChild(next);
  return nav;
}

// =============================================
// COMPLETION SCREEN
// =============================================
function buildCompletionScreen() {
  const wrap = document.createElement('div');
  wrap.className = 'page-card';

  // Image
  const imageWrap = document.createElement('div');
  imageWrap.className = 'page-image-wrap';
  const img = document.createElement('img');
  img.src = pageImages[29];
  img.alt = 'Congratulations!';
  img.onerror = function () { this.style.display = 'none'; };
  imageWrap.appendChild(img);
  wrap.appendChild(imageWrap);

  const screen = document.createElement('div');
  screen.className = 'completion-screen';

  const nameDisplay = state.childName ? `<span class="completion-name">${state.childName}</span>` : 'Champion';

  // Base HTML (no avatar or event listeners via innerHTML)
  screen.innerHTML = `
    <div class="completion-stars">&#x2B50;&#x1F31F;&#x2B50;</div>
    <div class="completion-title">Congratulations, ${nameDisplay}!</div>
    <p class="completion-text">
      You have completed <strong>Confidence Spark</strong>! You learned what confidence really means, practiced choosing courage thoughts, and found your brave action. Your confidence spark is real &mdash; and it is growing stronger every day.
    </p>
    <div class="completion-badge">
      &#x1F3C6; Confidence Spark Graduate &nbsp;|&nbsp; Brave Feelings Lab
    </div>
  `;

  // Benne box — built via DOM so onerror works reliably cross-browser
  const cBenneBox = document.createElement('div');
  cBenneBox.className = 'benne-box';
  const cAvatar = document.createElement('img');
  cAvatar.src = 'assets/images/benne-hart.png';
  cAvatar.alt = 'Benne Hart';
  cAvatar.className = 'benne-avatar';
  cAvatar.onerror = function () {
    this.style.display = 'none';
    const ph = document.createElement('div');
    ph.className = 'benne-avatar-placeholder';
    ph.textContent = 'BH';
    cBenneBox.insertBefore(ph, cBenneBox.firstChild);
  };
  cBenneBox.appendChild(cAvatar);
  const cBenneText = document.createElement('div');
  cBenneText.className = 'benne-text-wrap';
  cBenneText.innerHTML = '<div class="benne-name">Benne Hart Says:</div><div class="benne-says">I am so proud of you! You showed up, you tried, and you didn\'t give up. That is exactly what confidence looks like. Now go out there and let your spark shine. I\'ll be cheering for you!</div>';
  cBenneBox.appendChild(cBenneText);
  screen.appendChild(cBenneBox);

  // Scripture
  const cScripture = document.createElement('div');
  cScripture.className = 'scripture-box';
  cScripture.innerHTML = '<p class="scripture-verse">&ldquo;I can do all things through him that strengtheneth me.&rdquo;</p><div class="scripture-ref">&mdash; Philippians 4:13, ASV</div>';
  screen.appendChild(cScripture);

  // Certificate
  screen.appendChild(buildCertificate(state.childName));

  // Restart button — addEventListener not onclick
  const cRestartBtn = document.createElement('button');
  cRestartBtn.className = 'btn-restart';
  cRestartBtn.textContent = 'Start Again \u21BA';
  cRestartBtn.addEventListener('click', restartProgram);
  screen.appendChild(cRestartBtn);

  wrap.appendChild(screen);
  return wrap;
}

// =============================================
// CERTIFICATE
// =============================================
function buildCertificate(childName) {
  const name = childName && childName.trim() ? childName.trim() : 'Champion';

  const wrapper = document.createElement('div');
  wrapper.className = 'certificate-wrapper';

  // The visible certificate card
  const cert = document.createElement('div');
  cert.className = 'certificate';
  cert.id = 'confidence-certificate';

  cert.innerHTML = `
    <div class="cert-border-outer">
      <div class="cert-border-inner">
        <div class="cert-top-emblem">⚡</div>
        <div class="cert-brand">Brave Feelings Lab</div>
        <div class="cert-title">Certificate of Completion</div>
        <div class="cert-subtitle">This certifies that</div>
        <div class="cert-name">${name}</div>
        <div class="cert-program">has successfully completed</div>
        <div class="cert-program-name">Confidence Spark</div>
        <div class="cert-description">Courage &amp; Confidence Builder Program</div>
        <div class="cert-divider"></div>
        <div class="cert-footer">
          <div class="cert-sig-block">
            <div class="cert-sig-name">Benne Hart</div>
            <div class="cert-sig-line"></div>
            <div class="cert-sig-label">Program Guide</div>
          </div>
          <div class="cert-seal">
            <div class="cert-seal-inner">
              <div class="cert-seal-star">⭐</div>
              <div class="cert-seal-text">GRADUATE</div>
            </div>
          </div>
          <div class="cert-sig-block">
            <div class="cert-sig-name">Brave Feelings Lab</div>
            <div class="cert-sig-line"></div>
            <div class="cert-sig-label">Issued by</div>
          </div>
        </div>
        <div class="cert-verse">&ldquo;I can do all things through him that strengtheneth me.&rdquo; &mdash; Philippians 4:13, ASV</div>
      </div>
    </div>
  `;

  wrapper.appendChild(cert);

  // Download button
  const dlBtn = document.createElement('button');
  dlBtn.className = 'btn-download-cert';
  dlBtn.innerHTML = '&#x2B07; Download Certificate';
  dlBtn.addEventListener('click', () => downloadCertificate(name));
  wrapper.appendChild(dlBtn);

  return wrapper;
}

function downloadCertificate(name) {
  const canvas = document.createElement('canvas');
  const W = 1200, H = 850;
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#fffdf7';
  ctx.fillRect(0, 0, W, H);

  // Outer border
  ctx.strokeStyle = '#2DBFBF';
  ctx.lineWidth = 10;
  ctx.strokeRect(18, 18, W - 36, H - 36);

  // Inner border
  ctx.strokeStyle = '#F5C842';
  ctx.lineWidth = 3;
  ctx.strokeRect(32, 32, W - 64, H - 64);

  // Corner accents
  const corners = [[42,42],[W-42,42],[42,H-42],[W-42,H-42]];
  corners.forEach(([x,y]) => {
    ctx.fillStyle = '#2DBFBF';
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, Math.PI * 2);
    ctx.fill();
  });

  // Brand
  ctx.fillStyle = '#2DBFBF';
  ctx.font = 'bold 26px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Brave Feelings Lab', W/2, 105);

  // Title
  ctx.fillStyle = '#2c3e50';
  ctx.font = 'bold 52px sans-serif';
  ctx.fillText('Certificate of Completion', W/2, 175);

  // Divider line
  ctx.strokeStyle = '#F5C842';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(200, 195); ctx.lineTo(W-200, 195);
  ctx.stroke();

  // "This certifies that"
  ctx.fillStyle = '#5a6a7a';
  ctx.font = '26px sans-serif';
  ctx.fillText('This certifies that', W/2, 255);

  // Child name
  ctx.fillStyle = '#2DBFBF';
  ctx.font = 'bold 68px sans-serif';
  ctx.fillText(name, W/2, 350);

  // Underline name
  const nw = ctx.measureText(name).width;
  ctx.strokeStyle = '#F5C842';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(W/2 - nw/2, 365); ctx.lineTo(W/2 + nw/2, 365);
  ctx.stroke();

  // "has successfully completed"
  ctx.fillStyle = '#5a6a7a';
  ctx.font = '26px sans-serif';
  ctx.fillText('has successfully completed', W/2, 420);

  // Program name
  ctx.fillStyle = '#2c3e50';
  ctx.font = 'bold 42px sans-serif';
  ctx.fillText('Confidence Spark', W/2, 478);

  // Program description
  ctx.fillStyle = '#5a6a7a';
  ctx.font = '24px sans-serif';
  ctx.fillText('Courage & Confidence Builder Program', W/2, 520);

  // Horizontal rule
  ctx.strokeStyle = '#e0e8ee';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(120, 560); ctx.lineTo(W-120, 560);
  ctx.stroke();

  // Left sig — Benne Hart
  ctx.fillStyle = '#2c3e50';
  ctx.font = 'bold 24px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Benne Hart', 280, 630);
  ctx.strokeStyle = '#2c3e50';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(160, 645); ctx.lineTo(400, 645);
  ctx.stroke();
  ctx.fillStyle = '#8a9aaa';
  ctx.font = '20px sans-serif';
  ctx.fillText('Program Guide', 280, 672);

  // Center seal
  ctx.fillStyle = '#2DBFBF';
  ctx.beginPath();
  ctx.arc(W/2, 630, 52, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 28px sans-serif';
  ctx.fillText('⭐', W/2, 620);
  ctx.font = 'bold 14px sans-serif';
  ctx.fillText('GRADUATE', W/2, 648);

  // Right sig — Brave Feelings Lab
  ctx.fillStyle = '#2c3e50';
  ctx.font = 'bold 24px sans-serif';
  ctx.fillText('Brave Feelings Lab', W-280, 630);
  ctx.strokeStyle = '#2c3e50';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(W-400, 645); ctx.lineTo(W-160, 645);
  ctx.stroke();
  ctx.fillStyle = '#8a9aaa';
  ctx.font = '20px sans-serif';
  ctx.fillText('Issued by', W-280, 672);

  // Scripture
  ctx.fillStyle = '#8a7010';
  ctx.font = 'italic 18px sans-serif';
  ctx.fillText('“I can do all things through him that strengtheneth me.” — Philippians 4:13, ASV', W/2, 760);

  // Download
  const link = document.createElement('a');
  link.download = `Confidence_Spark_Certificate_${name.replace(/\s+/g,'_')}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

function restartProgram() {
  const confirmed = window.confirm('Start the program again from Page 1?');
  if (!confirmed) return;
  state.childName = '';
  state.currentPage = 0;
  state.braveAction = '';
  state.selectedChoice = null;
  state.p10Selection = null;
  state.p20Selection = null;
  state.p22Selection = null;
  if ($('child-name-input')) $('child-name-input').value = '';
  renderPage(0);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  populatePageJumpSelect();
  bindMenuControls();
  initPassword();
});

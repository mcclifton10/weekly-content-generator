// Answer button selection
document.querySelectorAll('.correct-answer button').forEach(button => {
    button.addEventListener('click', function() {
        const container = this.parentElement;
        container.querySelectorAll('button').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
    });
});

// Form submission
document.getElementById('contentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate correct answers are selected
    const fridaySelected = document.querySelector('#fridayAnswer button.selected');
    const saturdaySelected = document.querySelector('#saturdayAnswer button.selected');
    
    if (!fridaySelected || !saturdaySelected) {
        alert('Please select the correct answers for both Friday and Saturday!');
        return;
    }
    
    // Get all form data
    const data = {
        weekNumber: document.getElementById('weekNumber').value,
        topic: document.getElementById('topic').value,
        controversy: document.getElementById('controversy').value,
        friday: {
            question: document.getElementById('fridayQuestion').value,
            options: [
                document.getElementById('fridayA').value,
                document.getElementById('fridayB').value,
                document.getElementById('fridayC').value,
                document.getElementById('fridayD').value
            ],
            answer: fridaySelected.dataset.answer,
            explanation: document.getElementById('fridayExplanation').value
        },
        saturday: {
            question: document.getElementById('saturdayQuestion').value,
            options: [
                document.getElementById('saturdayA').value,
                document.getElementById('saturdayB').value,
                document.getElementById('saturdayC').value,
                document.getElementById('saturdayD').value
            ],
            answer: saturdaySelected.dataset.answer,
            explanation: document.getElementById('saturdayExplanation').value
        }
    };
    
    // Generate content
    generateContent(data);
});

function generateContent(data) {
    const topicClean = data.topic.replace(/\s+/g, '');
    
    // Generate Friday Script
    const fridayScript = `FRIDAY QUIZ - VIDEO SCRIPT
Duration: 45-50 seconds

===================================

Friday Quiz Time!

${data.friday.question}

Let me show you the options:

A) ${data.friday.options[0]}
B) ${data.friday.options[1]}
C) ${data.friday.options[2]}
D) ${data.friday.options[3]}

Drop your answer in the comments below!

I'll reveal the correct answer this Sunday, along with a CONTROVERSIAL topic about ${data.topic.toLowerCase()} that might surprise you!

See you Saturday for some interesting trivia!

===================================

NOTES FOR HEYGEN:
- Keep energy high and friendly
- Emphasize "CONTROVERSIAL" 
- Smile when saying "See you Saturday"`;

    // Generate Friday Caption
    const fridayCaption = `🎯 FRIDAY QUIZ TIME! 🎯

${data.friday.question}

A) ${data.friday.options[0]}
B) ${data.friday.options[1]}
C) ${data.friday.options[2]}
D) ${data.friday.options[3]}

Drop your answer in the comments! 👇

I'll reveal the correct answer this SUNDAY along with a CONTROVERSIAL topic about ${data.topic.toLowerCase()} that might shock you! ☀️

#FridayQuiz #${topicClean}Quiz #PestQuiz #AskProfessorKeagan #MacArbor #${topicClean} #PestControl #IPM #PestManagement #PestEducation #HomeOwner #PropertyOwner #HomeProtection`;

    // Generate Friday Pinned Comment
    const fridayPinned = `💡 HINT: Think about what makes ${data.topic.toLowerCase()} control effective!

Drop your guess and tell me WHY you chose that answer! 🤔

I'm reading every comment! 👀

Answer revealed Sunday along with something CONTROVERSIAL! ☀️`;

    // Generate Saturday Script
    const saturdayScript = `SATURDAY TRIVIA - VIDEO SCRIPT
Duration: 1:30-2:00 minutes

===================================

Saturday Trivia Time!

Today we're diving into ${data.topic.toLowerCase()}, and I've got a question that most people get WRONG!

Here it is: ${data.saturday.question}

Let me show you the options:

A) ${data.saturday.options[0]}
B) ${data.saturday.options[1]}
C) ${data.saturday.options[2]}
D) ${data.saturday.options[3]}

Go ahead and drop your answer in the comments RIGHT NOW before I give away any hints!

Most people guess wrong on this one... the real answer might shock you.

This is why professional knowledge matters with ${data.topic.toLowerCase()}. Understanding the science helps you make better decisions.

Tomorrow, we're tackling something controversial: ${data.controversy}

You won't want to miss it!

Drop your answer below! 👇

===================================

NOTES FOR HEYGEN:
- Build suspense around the answer
- Sound educational but friendly
- Emphasize "WRONG" and "shock you"
- Tease tomorrow's controversy at the end`;

    // Generate Saturday Caption
    const saturdayCaption = `🧠 SATURDAY TRIVIA 🧠

${data.saturday.question}

A) ${data.saturday.options[0]}
B) ${data.saturday.options[1]}
C) ${data.saturday.options[2]}
D) ${data.saturday.options[3]}

Most people get this WRONG! 😱

Drop your answer! 👇

Answer tomorrow + controversial topic: ${data.controversy}! ☀️

#SaturdayTrivia #${topicClean}Trivia #PestEducation #PestFacts #PestScience #AskProfessorKeagan #MacArbor #${topicClean} #PestControl #IPM #DidYouKnow #PestManagement`;

    // Generate Saturday Pinned Comment
    const saturdayPinned = `💡 HINT: The answer might SHOCK you!

Most people guess wrong on this one! 😳

Tomorrow's controversial topic: "${data.controversy}" 🔥

This one's going to make you think! See you Sunday! ☀️`;

    // Generate Sunday Script Template
    const answerLetter = data.friday.answer;
    const answerIndex = answerLetter.charCodeAt(0) - 65;
    const satAnswerLetter = data.saturday.answer;
    const satAnswerIndex = satAnswerLetter.charCodeAt(0) - 65;
    
    const sundayScript = `SUNDAY CONTROVERSY - SCRIPT TEMPLATE
"${data.controversy}"
Duration: 3:00-3:30 minutes (customize with your full script)

===================================

[SEGMENT 1: HOOK - 0:00-0:20]

What's a Sunday without a little controversy?

Today we're tackling: ${data.controversy}

Drop your emoji RIGHT NOW - [EMOJI 1] for [POSITION A], [EMOJI 2] for [POSITION B]. Then stick around because we're breaking down BOTH sides with actual facts and science!

[SEGMENT 2: THE CONCERN - 0:20-0:45]
Acknowledge the controversial side fairly. Validate the fear/concern. Show you understand both perspectives.

[SEGMENT 3: THE COUNTERPOINT - 0:45-1:15]
Present the other side. Use facts and data. Show the bigger picture.

[SEGMENT 4: THE RISK - 1:15-1:45]
What happens if wrong choice made. Use specific examples. Cost or health impact.

[SEGMENT 5: THE NUMBERS - 1:45-2:10]
Present actual statistics. Compare risks. Make the math clear.

[SEGMENT 6: THE SCIENCE - 2:10-2:35]
Expert backing, studies, proven track record.

[SEGMENT 7: YOUR VERDICT - 2:35-2:55]
State your position clearly as BCE. Acknowledge nuance. Ask for THEIR take.

[SEGMENT 8: FRIDAY QUIZ ANSWER - 2:55-3:05]
"Speaking of [connection to controversy], Friday's quiz asked: '${data.friday.question}'"

"The answer is ${answerLetter}: ${data.friday.options[answerIndex]}"

"${data.friday.explanation}"

[SEGMENT 9: SATURDAY TRIVIA ANSWER - 3:05-3:15]
"And Saturday's trivia: '${data.saturday.question}'"

"The answer is ${satAnswerLetter}: ${data.saturday.options[satAnswerIndex]}"

"${data.saturday.explanation}"

[SEGMENT 10: FINAL CTA - 3:15-3:30]
Ask for emoji votes again. "Tell me WHY you feel that way". "I'm reading every comment". "See you Friday!"

===================================

TARGET: 450-500 words = 3:00-3:30 minutes

NOTES FOR HEYGEN:
- Start with high energy on controversy
- Sound educational but conversational
- Be empathetic on both sides
- Professional but not preachy
- Enthusiastic on quiz answers
- Warm and inviting on final CTA`;

    // Generate Sunday Caption Template
    const sundayCaption = `☀️ WHAT'S A SUNDAY WITHOUT A LITTLE CONTROVERSY? ☀️

${data.controversy}

🚨 DROP YOUR EMOJI RIGHT NOW:
[EMOJI 1] = [Position A]
[EMOJI 2] = [Position B]
[EMOJI 3] = Still deciding

Then watch as I break down BOTH sides with actual facts and science!

PLUS: Answers to Friday's Quiz & Saturday's Trivia! ✓

Let's have a REAL conversation - drop your emoji and tell me WHY! 👇

⚠️ Hot take alert: This might challenge your assumptions. You might disagree - that's okay! Let's discuss!

#SundayControversy #${topicClean} #PestDebate #PestControl #AskProfessorKeagan #MacArbor #PestManagement #IPM #PestEducation #HomeOwner ${data.topic.includes('Organic') || data.controversy.includes('Organic') ? '#OrganicLiving #ChemicalFree' : ''}`;

    // Generate Sunday Pinned Comment
    const sundayPinned = `⚡ QUICK VOTERS: Just drop your emoji NOW! [EMOJI 1] [EMOJI 2] or [EMOJI 3]

📚 WANT THE FULL BREAKDOWN? Keep watching!

💬 I'm here ALL DAY reading and responding to EVERY comment!

No judgment zone - just science and conversation! 🤝

---

📚 FRIDAY QUIZ ANSWER: "${data.friday.question}"

Answer: ${answerLetter}) ${data.friday.options[answerIndex]}

${data.friday.explanation}

---

🧠 SATURDAY TRIVIA ANSWER: "${data.saturday.question}"

Answer: ${satAnswerLetter}) ${data.saturday.options[satAnswerIndex]}

${data.saturday.explanation}`;

    // Generate Canva Image Instructions
    const canvaInstructions = `📸 QUICK IMAGE CREATION WITH CANVA
(Way faster than AI generation!)

===================================

Instead of fighting with AI, use Canva templates:

STEP 1: Go to Canva.com (free account works)

STEP 2: Search for these templates:

FRIDAY IMAGE:
Search: "YouTube Thumbnail" or "Social Media Post"
Style: Bold, attention-grabbing, problem-focused
Text to add: "${data.topic.toUpperCase()}!"
Colors: Yellows, oranges, reds (urgency)
Add: Worried cartoon character emoji or stock photo

SATURDAY IMAGE:
Search: "Educational Infographic" or "Fact Post"
Style: Clean, professional, trustworthy
Text to add: "DID YOU KNOW?"
Colors: Blues, greens, teal (knowledge)
Add: Numbers/statistics from your trivia

SUNDAY IMAGE:
Search: "Debate" or "VS Template"
Style: Split-screen controversy
Text to add: Your controversy title split across two sides
Colors: Left side darker (concern), Right side brighter (solution)
Add: Emoji representing each position

STEP 3: Customize in 2 minutes each
- Change background colors
- Update text
- Add your #AskProfessorKeagan branding
- Download as PNG

TOTAL TIME: 5-10 minutes for all 3 images!

===================================

ALTERNATIVE: Use stock photos + text overlay
- Unsplash.com (free stock photos)
- Add text in Canva
- Even faster than templates!`;

    // Generate Posting Schedule
    const postingSchedule = `POSTING SCHEDULE - WEEK ${data.weekNumber}: ${data.topic.toUpperCase()}
"${data.controversy}"

===================================

📅 FRIDAY
Recommended: 12:00 PM - 2:00 PM (lunch scroll)
Video: 45-50 seconds
Action: Post + Pin comment + Engage first hour
Target: 30-50 comments, 400-600 views

📅 SATURDAY
Recommended: 9:00 AM - 11:00 AM (coffee scroll)
Video: 1:30-2:00 minutes
Action: Post + Pin comment + Tease Sunday
Target: 20-30 comments, 200-400 views (lower is OK!)

📅 SUNDAY
Recommended: 9:00 AM - 11:00 AM (peak weekend)
Video: 3:00-3:30 minutes
Action: Post + PIN IMMEDIATELY + Engage 2 hours
Target: 60-100+ comments, 500-800+ views

===================================

💡 REMEMBER:
- Friday predicts Sunday performance
- Saturday underperforms (normal!)
- Sunday = viral day (clear your schedule!)
- Engage heavily Sunday first 2 hours
- Track all metrics`;

    // Display output
    displayOutput({
        fridayScript,
        fridayCaption,
        fridayPinned,
        saturdayScript,
        saturdayCaption,
        saturdayPinned,
        sundayScript,
        sundayCaption,
        sundayPinned,
        canvaInstructions,
        postingSchedule
    });
}

function displayOutput(content) {
    const outputHTML = `
        <h2 style="text-align: center; color: #2d3748; margin-bottom: 30px;">✅ Your Content is Ready!</h2>
        
        <div class="output-section">
            <h3>📝 Friday Script <button class="copy-btn" onclick="copyToClipboard('friday-script')">Copy</button></h3>
            <div class="output-text" id="friday-script">${content.fridayScript}</div>
        </div>
        
        <div class="output-section">
            <h3>📱 Friday Caption <button class="copy-btn" onclick="copyToClipboard('friday-caption')">Copy</button></h3>
            <div class="output-text" id="friday-caption">${content.fridayCaption}</div>
        </div>
        
        <div class="output-section">
            <h3>📌 Friday Pinned Comment <button class="copy-btn" onclick="copyToClipboard('friday-pinned')">Copy</button></h3>
            <div class="output-text" id="friday-pinned">${content.fridayPinned}</div>
        </div>
        
        <div class="output-section">
            <h3>📝 Saturday Script <button class="copy-btn" onclick="copyToClipboard('saturday-script')">Copy</button></h3>
            <div class="output-text" id="saturday-script">${content.saturdayScript}</div>
        </div>
        
        <div class="output-section">
            <h3>📱 Saturday Caption <button class="copy-btn" onclick="copyToClipboard('saturday-caption')">Copy</button></h3>
            <div class="output-text" id="saturday-caption">${content.saturdayCaption}</div>
        </div>
        
        <div class="output-section">
            <h3>📌 Saturday Pinned Comment <button class="copy-btn" onclick="copyToClipboard('saturday-pinned')">Copy</button></h3>
            <div class="output-text" id="saturday-pinned">${content.saturdayPinned}</div>
        </div>
        
        <div class="output-section">
            <h3>📝 Sunday Script Template <button class="copy-btn" onclick="copyToClipboard('sunday-script')">Copy</button></h3>
            <div class="output-text" id="sunday-script">${content.sundayScript}</div>
        </div>
        
        <div class="output-section">
            <h3>📱 Sunday Caption <button class="copy-btn" onclick="copyToClipboard('sunday-caption')">Copy</button></h3>
            <div class="output-text" id="sunday-caption">${content.sundayCaption}</div>
        </div>
        
        <div class="output-section">
            <h3>📌 Sunday Pinned Comment <button class="copy-btn" onclick="copyToClipboard('sunday-pinned')">Copy</button></h3>
            <div class="output-text" id="sunday-pinned">${content.sundayPinned}</div>
        </div>
        
        <div class="output-section">
            <h3>📸 Image Creation (Canva) <button class="copy-btn" onclick="copyToClipboard('canva-instructions')">Copy</button></h3>
            <div class="output-text" id="canva-instructions">${content.canvaInstructions}</div>
        </div>
        
        <div class="output-section">
            <h3>📅 Posting Schedule <button class="copy-btn" onclick="copyToClipboard('posting-schedule')">Copy</button></h3>
            <div class="output-text" id="posting-schedule">${content.postingSchedule}</div>
        </div>
        
        <button class="back-btn" onclick="goBack()">← Create Another Week</button>
    `;
    
    document.getElementById('outputContainer').innerHTML = outputHTML;
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('outputContainer').style.display = 'block';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        // Show feedback
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '✓ Copied!';
        btn.style.background = '#38a169';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '#48bb78';
        }, 2000);
    }).catch(err => {
        alert('Failed to copy. Please select and copy manually.');
    });
}

function goBack() {
    document.getElementById('formContainer').style.display = 'block';
    document.getElementById('outputContainer').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

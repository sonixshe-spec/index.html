<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Birthday Quest</title>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            background: url('https://i.postimg.cc/1tc4Sh3v/In-Shot-20251106-204637839.jpg') no-repeat center center fixed;
            background-size: cover;
            filter: blur(2px);
            color: white;
            overflow-x: hidden;
            position: relative;
        }
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            z-index: -1;
        }
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Birthday Quest</title>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            background: url('https://i.postimg.cc/1tc4Sh3v/In-Shot-20251106-204637839.jpg') no-repeat center center fixed;
            background-size: cover;
            filter: blur(2px);
            color: white;
            overflow-x: hidden;
            position: relative;
        }
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            z-index: -1;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 20px;
            text-align: center;
        }
        .main-heading {
            font-family: 'Dancing Script', cursive;
            font-size: 3rem;
            text-shadow: 0 0 10px #ff69b4, 0 0 20px #ff69b4, 0 0 30px #ff69b4;
            animation: glow 2s ease-in-out infinite alternate;
            margin-bottom: 20px;
        }
        @keyframes glow {
            from { text-shadow: 0 0 10px #ff69b4; }
            to { text-shadow: 0 0 20px #ff69b4, 0 0 30px #ff69b4; }
        }
        .quiz-title {
            font-size: 2rem;
            font-weight: 600;
            animation: fadeIn 2s;
            margin-bottom: 20px;
        }
        .question {
            font-size: 1.5rem;
            margin-bottom: 20px;
        }
        .buttons {
            display: flex;
            gap: 20px;
        }
        button {
            padding: 10px 20px;
            font-size: 1.2rem;
            background: linear-gradient(45deg, #ff69b4, #ffb6c1);
            border: none;
            border-radius: 10px;
            color: white;
            cursor: pointer;
            transition: transform 0.3s;
        }
        button:hover {
            transform: scale(1.1);
        }
        .wrong-button {
            animation: floatAway 2s infinite;
        }
        @keyframes floatAway {
            0% { transform: translate(0, 0); }
            25% { transform: translate(100px, -50px); }
            50% { transform: translate(-100px, 50px); }
            75% { transform: translate(50px, 100px); }
            100% { transform: translate(0, 0); }
        }
        .response {
            font-size: 1.2rem;
            margin-top: 20px;
            opacity: 0;
            animation: reveal 1s forwards;
        }
        @keyframes reveal {
            to { opacity: 1; }
        }
        .video-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            display: none;
        }
        iframe {
            width: 100%;
            height: 100%;
        }
        .message {
            font-family: 'Dancing Script', cursive;
            font-size: 1.5rem;
            text-shadow: 0 0 10px #fff;
            margin-top: 20px;
            opacity: 0;
            animation: fadeIn 2s forwards;
        }
        .surprise-title {
            font-size: 2rem;
            text-shadow: 0 0 10px #ff69b4;
            margin-bottom: 20px;
        }
        .check-button {
            padding: 10px 20px;
            font-size: 1.2rem;
            background: linear-gradient(45deg, #ff69b4, #ffb6c1);
            border: none;
            border-radius: 10px;
            color: white;
            cursor: pointer;
        }
        .slideshow {
            display: none;
            flex-direction: column;
            align-items: center;
        }
        .slide {
            width: 300px;
            height: 200px;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid #ff69b4;
            margin: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            opacity: 0;
            animation: slideIn 1s forwards;
        }
        @keyframes slideIn {
            to { opacity: 1; }
        }
        .final-box {
            width: 300px;
            height: 200px;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid #ff69b4;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            margin-top: 20px;
        }
        .final-title {
            font-family: 'Dancing Script', cursive;
            font-size: 1.5rem;
            text-shadow: 0 0 10px #fff;
            margin-top: 10px;
        }
        .hidden { display: none; }
        .fade-in { animation: fadeIn 2s; }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    </style>
</head>
<body>
    <div id="music-container">
        <iframe src="https://open.spotify.com/embed/track/3W4UJM65swZgLifMu7DxPf?si=LF067iDyR36Uri3q53oxew" width="0" height="0" frameborder="0" allowtransparency="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div class="container" id="main-container">
        <h1 class="main-heading">HAPPIEEE BIRTHDAY BABYGIRL🎀</h1>
        <div id="quiz-section">
            <div class="quiz-title fade-in">LETS MAKE UR BDY WISH A LIL DRAMATIC JUST AS U😽</div>
            <div id="question-1" class="question hidden">
                <p>Q1: Who is the BBG? 🎀</p>
                <div class="buttons">
                    <button onclick="checkAnswer(1, 'Me')">ME</button>
                    <button onclick="checkAnswer(1, 'Bauna bbg🎀')">Bauna bbg🎀</button>
                </div>
                <div id="response-1" class="response"></div>
            </div>
            <div id="question-2" class="question hidden">
                <p>Q2: Who is the SMARTER ONE? 😼</p>
                <div class="buttons">
                    <button onclick="checkAnswer(2, 'Me')">ME</button>
                    <button onclick="checkAnswer(2, 'Bauna bbg🎀')">Bauna bbg🎀</button>
                </div>
                <div id="response-2" class="response"></div>
            </div>
            <div id="question-3" class="question hidden">
                <p>Q3: Who's more dramatic? 😼</p>
                <div class="buttons">
                    <button onclick="checkAnswer(3, 'Me')">ME</button>
                    <button onclick="checkAnswer(3, 'Bauna bbg🎀')">Bauna bbg🎀</button>
                </div>
                <div id="response-3" class="response"></div>
            </div>
            <div id="question-4" class="question hidden">
                <p>Q4: Who's more stubborn? 😽</p>
                <div class="buttons">
                    <button onclick="checkAnswer(4, 'Me')">ME</button>
                    <button onclick="checkAnswer(4, 'Bauna bbg🎀')">Bauna bbg🎀</button>
                </div>
                <div id="response-4" class="response"></div>
            </div>
            <div id="question-5" class="question hidden">
                <p>Answer carefully it can lead to a new kalesh☺️<br>Q5: Who did the most tagda wala kalesh!!?? 😼</p>
                <div class="buttons">
                    <button onclick="checkAnswer(5, 'Me')">ME</button>
                    <button onclick="checkAnswer(5, 'Bauna bbg🎀')">Bauna bbg🎀</button>
                </div>
                <div id="response-5" class="response"></div>
            </div>
        </div>
        <div id="video-section" class="video-container">
            <iframe src="https://www.veed.io/view/9d00d516-6ffe-464f-95ec-0a8c32f05760?panel=share" allowfullscreen></iframe>
        </div>
        <div id="message-section" class="hidden">
            <div class="message" id="birthday-message"></div>
        </div>
        <div id="surprise-section" class="hidden">
            <div class="surprise-title">Things why u should be afraid of me😼</div>
            <button class="check-button" onclick="showSlideshow()">Check ✅</button>
            <div id="slideshow" class="slideshow">
                <div class="slide">Because I had made u the bbg🎀</div>
                <div class="slide">Because this proves you’re just a kiddo 🤏</div>
                <div class="slide">Because I can expose this pic anytime 😏</div>
                <div class="slide">certified drama man👀</div>
                <div class="slide">Caught in 4k</div>
                <div class="slide">The bauna pose</div>
                <div class="slide">Because attitude bhi cute hota h😳</div>
                <div class="slide">Who gave u the right to look this cute 🥹</div>
            </div>
            <div class="final-box">Placeholder for photo</div>
            <div class="final-title">Every chaos paused for a moment here</div>
        </div>
    </div>
    <script>
        let currentQuestion = 1;
        const questions = {
            1: { correct: 'Bauna bbg🎀', response: "That's like my bbg🎀", wrong: "THINKKK AGAINN" },
            2: { correct: 'Me', response: "Good realisation", wrong: "come on be honest mr manocha🤷🏻‍♀️" },
            3: { correct: 'Me', response: "It's ur problem to handle this🤷🏻‍♀️", wrong: "Good realisation" },
            4: { correct: 'Bauna bbg🎀', response: "HAPPIEEE HAPPIEEE happieeee🐶", wrong: "wWHATTTT HOWWWW!!!??🫥" },
            5: { correct: 'Bauna bbg🎀', response: "🥹Koii baat nhii🫂", wrong: "😾" }
        };

        function checkAnswer(q, answer) {
            const responseDiv = document.getElementById(`response-${q}`);
            if (answer === questions[q].correct) {
                responseDiv.textContent = questions[q].response;
                responseDiv.classList.add('response');
                setTimeout(() => {
                    nextQuestion();
                }, 2000);
            } else {
                const button = event.target;
                button.classList.add('wrong-button');
                responseDiv.textContent = questions[q].wrong;
                responseDiv.classList.add('response');
                setTimeout(() => {
                    button.classList.remove('wrong-button');
                }, 2000);
            }
        }

        function nextQuestion() {
            document.getElementById(`question-${currentQuestion}`).classList.add('hidden');
            currentQuestion++;
            if (currentQuestion <= 5) {
                document.getElementById(`question-${currentQuestion}`).classList.remove('hidden');
            } else {
                showVideo();
            }
        }

        function showVideo() {
            document.getElementById('quiz-section').classList.add('hidden');
            document.getElementById('video-section').style.display = 'block';
            setTimeout(() => {
                document.getElementById('video-section').style.display = 'none';
                showMessage();
            }, 10000); // Adjust time based on video length
        }

        function showMessage() {
            document.getElementById('message-section').classList.remove('hidden');
            const message = "Happy Birthday Mr. Manocha 🎂❤️ From our nok-jhok sarcasm & me calling u bbg to those calm supportive moments when you were by my side, it’s been nothing less than a rollercoaster with u. Even in the silences, the breaks, the ghosting phases, somehow I always managed to pick up from where we left. You’ve teased me, made me laugh, irritated me, and at the same time stood as a quiet support when I needed it. Our journey may not be perfect, but it’s ours — unique, unpredictable, and unforgettable in its own way. Today I just wish u happiness that stays, dreams that come true, and moments that bring u peace. Keep being the bbg Mr. Manocha. Always stay the one who can make the world lighter with just your random words. ✨";
            const words = message.split(' ');
            let i = 0;
            const interval = setInterval(() => {
                document.getElementById('birthday-message').textContent += words[i] + ' ';
                i++;
                if (i >= words.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        showSurprise();
                    }, 3000);
                }
            }, 200);
        }

        function showSurprise() {
            document.getElementById('message-section').classList.add('hidden');
            document.getElementById('surprise-section').classList.remove('hidden');
        }

        function showSlideshow() {
            document.querySelector('.check-button').style.display = 'none';
            const slides = document.querySelectorAll('.slide');
            let i = 0;
            const interval = setInterval(() => {
                slides[i].style.display = 'flex';
                i++;
                if (i >= slides.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        document.getElementById('slideshow').style.display = 'flex';
                    }, 1000);
                }
            }, 1000);
        }

        // Initialize first question
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('question-1').classList.remove('hidden');
        });
    </script>
</body>
</html>
￼Enter        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 20px;
            text-align: center;
        }
        .main-heading {
            font-family: 'Dancing Script', cursive;
            font-size: 3rem;
            text-shadow: 0 0 10px #ff69b4, 0 0 20px #ff69b4, 0 0 30px #ff69b4;
            animation: glow 2s ease-in-out infinite alternate;
            margin-bottom: 20px;
        }
        @keyframes glow {
            from { text-shadow: 0 0 10px #ff69b4; }
            to { text-shadow: 0 0 20px #ff69b4, 0 0 30px #ff69b4; }
        }
        .quiz-title {
            font-size: 2rem;
            font-weight: 600;
            animation: fadeIn 2s;
            margin-bottom: 20px;
        }
        .question {
            font-size: 1.5rem;
            margin-bottom: 20px;
        }
        .buttons {
            display: flex;
            gap: 20px;
        }
        button {
            padding: 10px 20px;
            font-size: 1.2rem;
            background: linear-gradient(45deg, #ff69b4, #ffb6c1);
            border: none;
            border-radius: 10px;
            color: white;
            cursor: pointer;
            transition: transform 0.3s;
        }
        button:hover {
            transform: scale(1.1);
        }
        .wrong-button {
            animation: floatAway 2s infinite;
        }
        @keyframes floatAway {
            0% { transform: translate(0, 0); }
            25% { transform: translate(100px, -50px); }
            50% { transform: translate(-100px, 50px); }
            75% { transform: translate(50px, 100px); }
            100% { transform: translate(0, 0); }
        }
        .response {
            font-size: 1.2rem;
            margin-top: 20px;
            opacity: 0;
            animation: reveal 1s forwards;
        }
        @keyframes reveal {
            to { opacity: 1; }
        }
        .video-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            display: none;
        }
        iframe {
            width: 100%;
            height: 100%;
        }
        .message {
            font-family: 'Dancing Script', cursive;
            font-size: 1.5rem;
            text-shadow: 0 0 10px #fff;
            margin-top: 20px;
            opacity: 0;
            animation: fadeIn 2s forwards;
        }
        .surprise-title {
            font-size: 2rem;
            text-shadow: 0 0 10px #ff69b4;
            margin-bottom: 20px;
        }
        .check-button {
            padding: 10px 20px;
            font-size: 1.2rem;
            background: linear-gradient(45deg, #ff69b4, #ffb6c1);
            border: none;
            border-radius: 10px;
            color: white;
            cursor: pointer;
        }
        .slideshow {
            display: none;
            flex-direction: column;
      align-items: center;
        }
        .slide {
            width: 300px;
            height: 200px;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid #ff69b4;
            margin: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            opacity: 0;
            animation: slideIn 1s forwards;
        }
        @keyframes slideIn {
            to { opacity: 1; }
        }
        .final-box {
            width: 300px;
            height: 200px;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid #ff69b4;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            margin-top: 20px;
        }
        .final-title {
            font-family: 'Dancing Script', cursive;
            font-size: 1.5rem;
            text-shadow: 0 0 10px #fff;
            margin-top: 10px;
        }
        .hidden { display: none; }
        .fade-in { animation: fadeIn 2s; }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    </style>
</head>
<body>
    <div id="music-container">
        <iframe src="https://open.spotify.com/embed/track/3W4UJM65swZgLifMu7DxPf?si=LF067iDyR36Uri3q53oxew" width="0" height="0" frameborder="0" allowtransparency="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div class="container" id="main-container">
        <h1 class="main-heading">HAPPIEEE BIRTHDAY BABYGIRL🎀</h1>
        <div id="quiz-section">
            <div class="quiz-title fade-in">LETS MAKE UR BDY WISH A LIL DRAMATIC JUST AS U😽</div>
            <div id="question-1" class="question hidden">
                <p>Q1: Who is the BBG? 🎀</p>
                <div class="buttons">
                    <button onclick="checkAnswer(1, 'Me')">ME</button>
                    <button onclick="checkAnswer(1, 'Bauna bbg🎀')">Bauna bbg🎀</button>
                </div>
                <div id="response-1" class="response"></div>
            </div>
            <div id="question-2" class="question hidden">
                <p>Q2: Who is the SMARTER ONE? 😼</p>
                <div class="buttons">
                    <button onclick="checkAnswer(2, 'Me')">ME</button>
                    <button onclick="checkAnswer(2, 'Bauna bbg🎀')">Bauna bbg🎀</button>
                </div>
                <div id="response-2" class="response"></div>
            </div>
            <div id="question-3" class="question hidden">
                <p>Q3: Who's more dramatic? 😼</p>
                <div class="buttons">
                    <button onclick="checkAnswer(3, 'Me')">ME</button>
                    <button onclick="checkAnswer(3, 'Bauna bbg🎀')">Bauna bbg🎀</button>
                </div>
                <div id="response-3" class="response"></div>
            </div>
            <div id="question-4" class="question hidden">
                <p>Q4: Who's more stubborn? 😽</p>
                <div class="buttons">
                    <button onclick="checkAnswer(4, 'Me')">ME</button>
                    <button onclick="checkAnswer(4, 'Bauna bbg🎀')">Bauna bbg🎀</button>
                </div>
                <div id="response-4" class="response"></div>
            </div>
            <div id="question-5" class="question hidden">
                <p>Answer carefully it can lead to a new kalesh☺️<br>Q5: Who did the most tagda wala kalesh!!?? 😼</p>
                <div class="buttons">
                    <button onclick="checkAnswer(5, 'Me')">ME</button>
                    <button onclick="checkAnswer(5, 'Bauna bbg🎀')">Bauna bbg🎀</button>
                </div>
                <div id="response-5" class="response"></div>
            </div>
        </div>
        <div id="video-section" class="video-container">
            <iframe src="https://www.veed.io/view/9d00d516-6ffe-464f-95ec-0a8c32f05760?panel=share" allowfullscreen></iframe>
        </div>
        <div id="message-section" class="hidden">
            <div class="message" id="birthday-message"></div>
        </div>
        <div id="surprise-section" class="hidden">
            <div class="surprise-title">Things why u should be afraid of me😼</div>
            <button class="check-button" onclick="showSlideshow()">Check ✅</button>
            <div id="slideshow" class="slideshow">
                <div class="slide">Because I had made u the bbg🎀</div>
                <div class="slide">Because this proves you’re just a kiddo 🤏</div>

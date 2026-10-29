# TechQuiz Pro using HTML, CSS and JavaScript

TechQuiz Pro is a browser-based online quiz application for technology topics. Users enter a name, choose a category, answer timed multiple-choice questions and see an instant result with answer review and a leaderboard. It is an MCA mini-project built with plain HTML, CSS and JavaScript, so no server or database setup is needed.

## Project Details

| Item | Details |
|---|---|
| Project Name | TechQuiz Pro |
| Student | Samarth Pratap Singh |
| UID | 26MCA20183 |
| Programme | MCA, Semester 1 |
| University | Chandigarh University, University Institute of Computing |
| Subject | [Subject Name] |
| Faculty | [Faculty Name] |
| Academic Session | 2026–2027 |

## Features

- Start a quiz by entering a name and selecting a category
- Input validation: the quiz cannot start without a name and a category
- One multiple-choice question at a time with a progress indicator
- Countdown timer for each question; unanswered questions are marked skipped
- Automatic scoring with score, percentage, correct, incorrect and skipped counts
- Answer review showing the chosen and the correct option for every question
- Leaderboard saved in the browser using localStorage
- Responsive layout for desktop, tablet and mobile screens

## Technologies Used

| Technology | Use in project |
|---|---|
| HTML5 | Page structure and quiz screens |
| CSS3 | Styling and responsive layout |
| JavaScript (ES6) | Quiz logic, timer, scoring and DOM updates |
| Web Storage (localStorage) | Saving leaderboard entries |
| Git and GitHub | Version control and repository hosting |

## Project Structure

```
TechQuiz-Pro/
├── index.html     # Start, quiz, result and leaderboard screens
├── style.css      # Styling and responsive layout
├── script.js      # Question bank, quiz engine, timer, scoring, leaderboard
└── README.md
```

> Update the file names above if they differ in your project.

## How to Run

1. Download or clone the repository:
   ```
   git clone [your-repository-link]
   ```
2. Open the project folder.
3. Open `index.html` in a modern web browser (Chrome, Edge or Firefox).
4. Enter your name, select a category and click **Start**.

## How It Works

1. The user enters a name and selects a category.
2. The quiz engine loads the questions of that category.
3. Each question is shown with a countdown timer.
4. The selected answer is recorded; if time ends, the question is skipped.
5. After the last question, the score and percentage are calculated.
6. The result and answer review are displayed.
7. The attempt is saved to the leaderboard in localStorage.

## Scoring Rules

- Each question has exactly one correct option and carries 1 mark.
- No negative marking is applied.
- Percentage = (score ÷ total questions) × 100.
- The leaderboard lists the highest scores first.

## Sample Result

For a 10-question quiz with 7 correct, 2 incorrect and 1 skipped answer:

| Metric | Value |
|---|---|
| Score | 7 / 10 |
| Percentage | 70% |
| Skipped | 1 |

## Screenshots

[Add screenshots of the start screen, quiz screen, result screen and leaderboard here]

## Limitations

- Front-end prototype with no server-side backend
- Leaderboard data is stored per browser and is not shared across devices
- Questions are part of the source code and cannot be edited from the interface
- No user authentication

## Future Enhancements

- Backend and database for questions, users and scores
- User accounts and progress history
- Admin panel to add and edit questions
- Difficulty levels, negative marking and randomised question order
- Charts for performance across categories

## Academic Note

This project was prepared for academic purposes as part of the Master of Computer Applications programme at Chandigarh University.

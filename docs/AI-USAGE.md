## Detailed AI Help Specifics:

This is the first project that I have used AI tools extensively in development. Mainly I use AI as a teacher or mentor who is available 24/7 to review my code, give guidance when stuck, and explain concepts I have questions about. I also use it to complete repetitive tasks in a fraction of the time it would take me to do manually. Specifically:

- [ChatGPT](https://chatgpt.com/) - Component: [Search.jsx](/src/Search.jsx)
  - Planning stage. Used AI to confirm two-step data flow approach (Geocoding API → Forecast API) was the most efficient (and only) choice.
  - Asked for advice about Best Practices / methods for Separation of Concerns (SoC).
- [Codex-OpenAI coding agent](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt) and [GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/overview) Combo - Component: [HourlyForecast.jsx](/src/HourlyForecast.jsx)
  - I really struggled with this component; specifically, the dropdown feature that allows the user to pick a specific day of the week but also needs to display only future hourly forecast if the current day is selected. In the end,I used Codex to generate the code from my TODO prompt and then used GitHub Copilot to explain the resulting code to ensure I understood everything correctly.
- [GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/overview) - Component: All
  - Code completion. I used to think this was cheating, but now I think of it as an essential timesaver. I use it to ensure all tags are closed correctly, generate large repetitive code based on a pattern I initiate (like the Weather Icon Object), and as a source for alternative code suggestions.
- [Codex-OpenAI coding agent](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt) - Component: [Index.css](/src/index.css)
  - Organizing CSS Style Sheet - I used Codex to finish organizing the Style Sheet based on the pattern I had already establish of category (Typography, Design Tokens, etc) and specific Component styling.
- [Codex-OpenAI coding agent](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt) - Component: All
  - Refactoring. Once the app was up and running without any errors or noticeable slow performance issues, I used Codex to review all code and suggest ideas for refactoring. In particular, the refactoring suggestions for these two components taught me concepts I will use going forward:
    - [Search.jsx](/src/Search.jsx) - While working on this component, it was helpful for me to have all the functions it performed in one place, even though I knew it would eventually have to be broken up into more manageable parts. Still, it became very complex, very quickly and I could not have refactored it as effectively without assistance from Codex, especially with employing UseMemo and UseEffect.
    - [CurrentDate.jsx](/src/CurrentDate.jsx) - getIcon function - I originally had written this function as a Switch Statement, which worked fine without any noticeable performance speed issues. But the AI suggestion to make the icon list an object improves both readability and performance.

## Decisions I Made Differently from AI Suggestions

This is the part where I would love to regale you, potential future employer, with examples of all the times I was smarter than AI and boldly blazed my own path; AI suggestions be damned! However, while I review all AI suggestions and assume responsibility for all final code decisions, the brutal truth is that, as a beginner-level developer, most of the time AI knows more than I do.

**Closest anecdote I have to illustrate that I am capable of independent thought and critical analysis of AI recommendations:**

- When React 19 was still fairly new, GitHub Copilot in VS Code kept insisting that passing a function to the action prop of a form was incorrect, even when I explicitly clarified that I was using version 19 of React and posted the text of the React documentation supporting my decision. I was fairly certain that I understood the React documentation correctly, but just to be certain, I double checked with ChatGPT which confirmed I was correct and that as of React 19, this was perfectly acceptable; simultaneously stroking my frail ego and securing its position as my Favorite. Best. AI. EVER !
  - (As a testament to the lightning fast pace at which AI is learning, this story is already outdated as GitHub Copilot was quickly updated and no longer flags this as an error. Once again, AI steals my thunder.)

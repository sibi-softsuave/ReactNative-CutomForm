This project allows you to dynamically render form fields based on question types using a reusable component called SwitchComponent. It supports multiple input types including:

📻 Radio buttons

⬇️ Dropdown (Picker)

🔤 Text Input

✅ Selectable List (FlatList)

🚀 Features
Dynamic form rendering based on question type

Clean, customizable layout

Reusable and modular component (SwitchComponent)

Easily extensible for additional input types

<SwitchComponent
  index={index}
  key={index}
  Data={item}
  Type={item.QuestionType}
/>

--- Data must need to contain the Options if it needed
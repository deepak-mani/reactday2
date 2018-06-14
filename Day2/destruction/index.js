import React from "react";
import ReactDOM from "react-dom";
function App() {
  const fixture = {
    title: "Test",
    translations: "Translate"
  };
  const { title, translations } = fixture;
  console.log("---", title, translations);
  const titleText = fixture.title;
  const translationsText = fixture.translations;

  console.log("---", titleText, translationsText);
  const { title: newTitle, translations: newTranslation } = fixture;
  console.log("---", newTitle, newTranslation);
  const {
    title: newsecondTitle = "eh",
    translations: newsecondTranslation
  } = fixture;
  console.log("---", newsecondTitle, newsecondTranslation);

  return (
    <div>
      <h1>
        One {title} {translations}
      </h1>
      <h2>
        Two! {titleText} {translationsText}
      </h2>
      <h3>
        Three {newTitle} {newTranslation}
      </h3>
      <h4>
        Four {newsecondTitle} {newsecondTranslation}
      </h4>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
